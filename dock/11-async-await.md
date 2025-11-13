# 11 - Async/Await

## Temas cubiertos

### Conceptos Fundamentales de Async/Await

#### 1. ¿Qué es Async/Await?
- **Async/Await** es una sintaxis moderna de JavaScript que simplifica el trabajo con Promises
- Hace que el código asíncrono se vea y se comporte más como código síncrono
- Es "azúcar sintáctico" sobre las Promises, pero más legible y fácil de mantener
- Introducido en ES2017 (ES8)

#### 2. Sintaxis básica

**Palabra clave `async`:**
```typescript
async function miFuncion() {
  // Esta función siempre retorna una Promise
}
```

**Palabra clave `await`:**
```typescript
async function miFuncion() {
  const resultado = await algunaPromise();
  // await pausa la ejecución hasta que la Promise se resuelva
}
```

**Características clave:**
- `async` se coloca antes de la declaración de la función
- `await` solo puede usarse dentro de funciones `async`
- `await` pausa la ejecución hasta que la Promise se resuelva
- El código después de `await` se ejecuta solo cuando la Promise se complete

### Ejemplo Práctico: Fetch con Async/Await

#### 1. Función con async/await
```typescript
const getRandomGifUrl = async() => {
  const response = await fetch(URL);
  const {data} : GiphyRandomResponse = await response.json();
  return data.images.original.url;
}
```

**Desglose del código:**

1. **Declaración de función asíncrona:**
   ```typescript
   const getRandomGifUrl = async() => { ... }
   ```
   - Arrow function con `async`
   - Automáticamente retorna una Promise

2. **Primera operación asíncrona:**
   ```typescript
   const response = await fetch(URL);
   ```
   - `fetch()` retorna una Promise con la respuesta HTTP
   - `await` pausa hasta que la petición se complete
   - `response` contiene el objeto Response

3. **Segunda operación asíncrona:**
   ```typescript
   const {data} : GiphyRandomResponse = await response.json();
   ```
   - `.json()` retorna una Promise que parsea el JSON
   - `await` pausa hasta que el parsing se complete
   - Destructuring para extraer `data` del objeto
   - TypeScript tipado con `GiphyRandomResponse`

4. **Retorno del valor:**
   ```typescript
   return data.images.original.url;
   ```
   - Accede a propiedades anidadas del objeto
   - Retorna el URL de la imagen GIF
   - Se envuelve automáticamente en una Promise

### Consumo de Funciones Async

#### 1. Usando .then() (mezcla de estilos)
```typescript
getRandomGifUrl().then((URL) => createImageInsideDOM(URL));
```

**Explicación:**
- La función `async` retorna una Promise
- Se puede consumir con `.then()` como cualquier Promise
- El valor retornado se pasa al callback de `.then()`

#### 2. Sintaxis simplificada con referencia
```typescript
getRandomGifUrl().then(createImageInsideDOM);
```

**Explicación:**
- Cuando el callback solo pasa el argumento a otra función, se puede simplificar
- `createImageInsideDOM` recibe directamente el URL
- Es equivalente a la versión anterior pero más concisa

### Manejo de Errores con Async/Await

#### 1. Usando try/catch (recomendado)
```typescript
async function obtenerDatos() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Re-lanzar si es necesario
  }
}
```

**Ventajas:**
- Manejo de errores similar a código síncrono
- Captura errores de cualquier `await` en el bloque
- Código más legible y familiar

#### 2. Usando .catch() al consumir
```typescript
getRandomGifUrl()
  .then(url => createImageInsideDOM(url))
  .catch(error => console.error("Error:", error));
```

**Ventajas:**
- Compatible con código que ya usa Promises
- Útil cuando no se quiere modificar la función original

### Integración con TypeScript

#### 1. Tipos de interfaces
```typescript
import type { GiphyRandomResponse, Gif } from "../data/giphy.response";
```

**Características:**
- `type` import para tipos TypeScript
- Interfaces definen la estructura de la respuesta API
- Proporciona autocompletado y type checking

#### 2. Tipado en destructuring
```typescript
const {data} : GiphyRandomResponse = await response.json();
```

**Beneficios:**
- TypeScript conoce la estructura de `data`
- Previene errores al acceder a propiedades
- Mejora la experiencia de desarrollo con autocompletado

### Manipulación del DOM

#### 1. Creación dinámica de elementos
```typescript
const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.appendChild(imgElement);
};
```

**Proceso:**
1. Crear elemento `<img>` con `createElement()`
2. Asignar URL al atributo `src`
3. Agregar elemento al DOM con `appendChild()`

**Parámetro tipado:**
- `url: string` asegura que se pase un string
- TypeScript previene errores de tipo

### Configuración de API

#### 1. Variables de configuración
```typescript
const API_KEY = "K0JUcAfkbkEOdwkzoJJGvhgbEx7iQcKB";
const API_URL = `https://api.giphy.com/v1/gifs/random?`;
const URL = `${API_URL}&api_key=${API_KEY}`;
```

**Buenas prácticas:**
- Separar configuración del código
- Usar template literals para construir URLs
- **Nota:** En producción, las API keys deberían estar en variables de entorno

## Comparación: Promises vs Async/Await

### Con Promises (tradicional)
```typescript
function getRandomGifUrl() {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.images.original.url);
}
```

### Con Async/Await (moderno)
```typescript
async function getRandomGifUrl() {
  const response = await fetch(URL);
  const {data} = await response.json();
  return data.images.original.url;
}
```

### Diferencias clave

| Aspecto | Promises | Async/Await |
|---------|----------|-------------|
| **Legibilidad** | Encadenamiento con `.then()` | Código secuencial, más legible |
| **Manejo de errores** | `.catch()` al final | `try/catch` tradicional |
| **Variables intermedias** | Difícil de acceder en diferentes `.then()` | Variables accesibles en todo el scope |
| **Debugging** | Más difícil, stack traces complejos | Más fácil, similar a código síncrono |
| **Sintaxis** | Callbacks anidados | Código lineal |

## Buenas prácticas

### 1. Siempre usar try/catch en funciones async
```typescript
// ✅ Bueno - con manejo de errores
async function getData() {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// ❌ Malo - sin manejo de errores
async function getData() {
  const response = await fetch(URL);
  return await response.json();
}
```

### 2. No olvidar await
```typescript
// ❌ Malo - olvida await, retorna una Promise sin resolver
async function getData() {
  return fetch(URL); // Retorna Promise<Response>
}

// ✅ Bueno - usa await correctamente
async function getData() {
  return await fetch(URL); // Retorna Response
}
```

### 3. Usar await con operaciones asíncronas en secuencia
```typescript
// ✅ Operaciones secuenciales (cuando una depende de otra)
async function processData() {
  const response = await fetch(URL);
  const data = await response.json();
  const processed = await processJson(data);
  return processed;
}
```

### 4. Ejecutar operaciones en paralelo cuando sea posible
```typescript
// ❌ Malo - espera innecesariamente
async function fetchMultiple() {
  const user = await fetchUser();      // Espera
  const posts = await fetchPosts();    // Espera otra vez
  return { user, posts };
}

// ✅ Bueno - ejecuta en paralelo
async function fetchMultiple() {
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);
  return { user, posts };
}
```

### 5. Tipar correctamente con TypeScript
```typescript
// ✅ Especificar tipos de retorno
async function getGifUrl(): Promise<string> {
  const response = await fetch(URL);
  const {data}: GiphyRandomResponse = await response.json();
  return data.images.original.url;
}
```

## Conceptos importantes

### Async/Await es "azúcar sintáctico"
- Internamente, sigue usando Promises
- `async function` siempre retorna una Promise
- `await` es equivalente a `.then()`
- Es solo una forma más limpia de escribir el mismo código

### Event Loop y asincronía
- `await` no bloquea el hilo principal de JavaScript
- Mientras espera, el navegador puede ejecutar otro código
- El código después de `await` se ejecuta cuando la Promise se resuelve

### Compatibilidad con Promises
```typescript
// Ambos son válidos y equivalentes:

// Opción 1: async/await puro
async function example() {
  try {
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    handleError(error);
  }
}

// Opción 2: mezclar con .then()/.catch()
async function example() {
  const result = await someAsyncOperation()
    .catch(error => handleError(error));
  return result;
}
```

## Casos de uso comunes

### 1. Llamadas a APIs REST
```typescript
async function fetchUserData(userId: number) {
  const response = await fetch(`/api/users/${userId}`);
  const user = await response.json();
  return user;
}
```

### 2. Múltiples llamadas dependientes
```typescript
async function getUserWithPosts(userId: number) {
  const user = await fetchUser(userId);
  const posts = await fetchUserPosts(user.id);
  return { ...user, posts };
}
```

### 3. Operaciones con bases de datos
```typescript
async function saveUser(userData: User) {
  const validatedData = await validateUser(userData);
  const savedUser = await db.users.create(validatedData);
  await sendWelcomeEmail(savedUser.email);
  return savedUser;
}
```

### 4. Carga de recursos
```typescript
async function loadResources() {
  const [config, translations, userData] = await Promise.all([
    fetchConfig(),
    fetchTranslations(),
    fetchUserData()
  ]);

  return { config, translations, userData };
}
```

## Ventajas de Async/Await

1. **Código más legible**: Se lee como código síncrono
2. **Debugging más fácil**: Stack traces más claros
3. **Manejo de errores intuitivo**: `try/catch` familiar
4. **Variables intermedias**: Fácil acceso a valores de pasos anteriores
5. **Menos anidamiento**: Evita el "callback hell"
6. **Mejor para lógica compleja**: Condicionales y loops más naturales
7. **TypeScript friendly**: Mejor inferencia de tipos

## Errores comunes

### 1. Olvidar async
```typescript
// ❌ Error: await solo funciona en funciones async
function getData() {
  const response = await fetch(URL); // ❌ SyntaxError
}

// ✅ Correcto
async function getData() {
  const response = await fetch(URL);
}
```

### 2. No manejar errores
```typescript
// ❌ Promesas no capturadas pueden causar problemas
async function riskyOperation() {
  const data = await mightFail(); // Puede fallar
}

// ✅ Siempre manejar errores
async function riskyOperation() {
  try {
    const data = await mightFail();
  } catch (error) {
    console.error(error);
  }
}
```

### 3. Usar await innecesariamente al final
```typescript
// ⚠️ Funcional pero innecesario
async function getData() {
  return await fetch(URL); // await innecesario aquí
}

// ✅ Mejor (a menos que necesites try/catch)
async function getData() {
  return fetch(URL);
}
```

## Relación con React

### Por qué es importante para React:
- **useEffect hooks**: Operaciones asíncronas dentro de efectos
- **Fetch de datos**: Cargar datos de APIs al montar componentes
- **Event handlers**: Manejar acciones asíncronas del usuario
- **Custom hooks**: Crear hooks reutilizables para lógica asíncrona

### Ejemplo en React:
```typescript
function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // No se puede hacer el useEffect async directamente
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    };

    fetchUser();
  }, [userId]);

  return <div>{user?.name}</div>;
}
```

## Archivo de referencia
`src/bases/11-async-await.ts`
