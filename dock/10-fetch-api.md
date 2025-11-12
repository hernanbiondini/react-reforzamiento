# 10 - Fetch API

## Temas cubiertos

### Fetch API

#### 1. ¿Qué es Fetch?
- **Fetch** es una API moderna del navegador para hacer peticiones HTTP
- Retorna una **Promise** que se resuelve con la respuesta del servidor
- Reemplaza a XMLHttpRequest (la forma antigua de hacer peticiones)
- Es la forma estándar de comunicarse con APIs externas

```typescript
const myRequest = fetch(URL);
```

#### 2. Características principales
- Basado en Promises (permite usar `.then()`, `.catch()`, async/await)
- API limpia y moderna
- Soporta todos los métodos HTTP (GET, POST, PUT, DELETE, etc.)
- Integrado nativamente en los navegadores modernos

### Construcción de URLs con Template Strings

#### 1. Composición de URL de API
```typescript
const API_KEY = "K0JUcAfkbkEOdwkzoJJGvhgbEx7iQcKB";
const API_URL = `https://api.giphy.com/v1/gifs/random?`;
const URL = `${API_URL}&api_key=${API_KEY}`;
```

**Buenas prácticas:**
- Separar la API key en una constante (facilita cambios y seguridad)
- Usar template strings para construir URLs dinámicas
- Mantener la base URL separada de los parámetros

**Resultado:**
```
https://api.giphy.com/v1/gifs/random?&api_key=K0JUcAfkbkEOdwkzoJJGvhgbEx7iQcKB
```

### Procesamiento de Respuestas con Promises

#### 1. Encadenamiento de .then()
```typescript
myRequest
  .then((response) => response.json())
  .then((data) => {
    // procesar datos
  })
  .catch((error) => {
    console.error("Error en la petición:", error);
  });
```

**Flujo:**
1. **Primer `.then()`**: Recibe la respuesta HTTP
2. **`.json()`**: Convierte el body de la respuesta a JSON (retorna otra Promise)
3. **Segundo `.then()`**: Recibe los datos parseados como objeto JavaScript
4. **`.catch()`**: Captura cualquier error en la cadena

#### 2. El método response.json()
- Método de la interfaz `Response`
- Lee el cuerpo de la respuesta y lo parsea como JSON
- Retorna una **Promise** que se resuelve con el objeto JavaScript
- Es asíncrono porque leer el body puede tomar tiempo

```typescript
.then((response) => response.json())  // Promise<any>
```

**Alternativas:**
- `response.text()`: Para respuestas de texto plano
- `response.blob()`: Para archivos binarios (imágenes, PDFs)
- `response.formData()`: Para datos de formularios

### Navegación de Objetos JSON

#### 1. Acceso a propiedades anidadas
```typescript
const imageUrl = data.data.images.original.url;
```

**Estructura del objeto de respuesta de Giphy:**
```javascript
{
  data: {
    images: {
      original: {
        url: "https://..."
      }
    }
  }
}
```

**Concepto:**
- Las APIs suelen retornar datos con múltiples niveles de anidamiento
- Se accede usando notación de punto: `objeto.propiedad.subpropiedad`
- Es importante conocer la estructura de la respuesta (consultar documentación de la API)

### Manipulación del DOM

#### 1. Creación dinámica de elementos
```typescript
const img = document.createElement("img");
img.src = imageUrl;
document.body.appendChild(img);
```

**Pasos:**
1. **`document.createElement("img")`**: Crea un elemento `<img>` en memoria
2. **`img.src = imageUrl`**: Establece el atributo `src` con la URL de la imagen
3. **`document.body.appendChild(img)`**: Agrega el elemento al DOM

#### 2. Flujo completo: API → DOM
```typescript
myRequest
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.data.images.original.url;  // Extraer dato
    console.log(imageUrl);                            // Mostrar en consola

    const img = document.createElement("img");        // Crear elemento
    img.src = imageUrl;                               // Configurar atributo
    document.body.appendChild(img);                   // Agregar al DOM
  })
  .catch((error) => {
    console.error("Error en la petición:", error);
  });
```

**Resultado:**
- Se hace una petición a la API de Giphy
- Se obtiene una imagen aleatoria
- La imagen se muestra dinámicamente en la página

### Manejo de Errores

#### 1. Captura con .catch()
```typescript
.catch((error) => {
  console.error("Error en la petición:", error);
});
```

**Errores que captura:**
- Problemas de red (sin conexión, timeout)
- URL inválida
- Errores al parsear JSON
- Errores en cualquier `.then()` de la cadena

#### 2. Tipos de errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Network error | Sin conexión a internet | Verificar conexión |
| 404 Not Found | URL incorrecta | Verificar endpoint |
| 401 Unauthorized | API key inválida | Verificar credenciales |
| JSON parse error | Respuesta no es JSON válido | Verificar tipo de respuesta |
| CORS error | Problema de permisos del servidor | Configurar CORS o usar proxy |

**Nota importante:**
- `fetch()` **NO rechaza** la promesa en errores HTTP (404, 500, etc.)
- Solo rechaza en errores de red
- Para manejar códigos de error, verificar `response.ok` o `response.status`

```typescript
.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
```

## Buenas prácticas

### 1. Separar configuración y lógica
```typescript
// ✅ Bueno - configuración separada
const API_KEY = "K0JUcAfkbkEOdwkzoJJGvhgbEx7iQcKB";
const API_URL = `https://api.giphy.com/v1/gifs/random?`;
const URL = `${API_URL}&api_key=${API_KEY}`;

// ❌ Malo - URL hardcodeada
fetch("https://api.giphy.com/v1/gifs/random?&api_key=K0JUcAfkbkEOdwkzoJJGvhgbEx7iQcKB")
```

### 2. Siempre manejar errores
```typescript
// ✅ Siempre incluir .catch()
myRequest
  .then(...)
  .catch((error) => {
    console.error("Error:", error);
  });
```

### 3. Verificar el estado de la respuesta
```typescript
// ✅ Verificar response.ok
.then((response) => {
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
})
```

### 4. No exponer API keys en el frontend
```typescript
// ⚠️ ADVERTENCIA: Este código expone la API key
// En producción, las API keys deben estar en el backend
// El frontend debe llamar a tu propio servidor
```

**Solución segura:**
```
Frontend → Tu Backend → API Externa
```

### 5. Usar async/await para mejor legibilidad
```typescript
// Alternativa con async/await
async function obtenerGif() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const imageUrl = data.data.images.original.url;

    const img = document.createElement("img");
    img.src = imageUrl;
    document.body.appendChild(img);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

## Conceptos importantes

### Fetch retorna dos Promises

1. **Primera Promise**: Se resuelve cuando se recibe la respuesta HTTP
   ```typescript
   fetch(URL)  // Promise<Response>
   ```

2. **Segunda Promise**: Se resuelve cuando se parsea el body
   ```typescript
   response.json()  // Promise<any>
   ```

Por eso necesitamos dos `.then()`:
```typescript
fetch(URL)
  .then(response => response.json())  // 1ra Promise → 2da Promise
  .then(data => console.log(data))    // 2da Promise → data
```

### fetch() vs axios vs XMLHttpRequest

| Característica | fetch() | axios | XMLHttpRequest |
|---------------|---------|-------|----------------|
| Basado en Promises | ✅ Sí | ✅ Sí | ❌ No (callbacks) |
| Incluido en navegador | ✅ Sí | ❌ No (librería) | ✅ Sí |
| Conversión automática a JSON | ❌ No | ✅ Sí | ❌ No |
| Manejo de errores HTTP | ⚠️ Manual | ✅ Automático | ⚠️ Manual |
| Sintaxis moderna | ✅ Sí | ✅ Sí | ❌ No |

### Flujo de una petición fetch()

```
1. fetch(URL)
   ↓
2. Espera respuesta del servidor
   ↓
3. Retorna Response object
   ↓
4. response.json() - parsea el body
   ↓
5. Retorna datos como objeto JavaScript
   ↓
6. Procesar datos
```

## Casos de uso comunes

- Obtener datos de APIs REST
- Enviar datos a un servidor (POST, PUT)
- Consumir servicios externos (clima, imágenes, noticias)
- Cargar contenido dinámico sin recargar la página
- Implementar búsqueda en tiempo real
- Actualizar datos en tiempo real

## Ejemplo completo comentado

```typescript
// Configuración
const API_KEY = "K0JUcAfkbkEOdwkzoJJGvhgbEx7iQcKB";
const API_URL = `https://api.giphy.com/v1/gifs/random?`;
const URL = `${API_URL}&api_key=${API_KEY}`;

// Realizar petición
const myRequest = fetch(URL);

// Procesar respuesta
myRequest
  .then((response) => response.json())         // Convertir a JSON
  .then((data) => {                            // Recibir datos
    const imageUrl = data.data.images.original.url;  // Extraer URL
    console.log(imageUrl);                     // Log para debug

    const img = document.createElement("img"); // Crear elemento
    img.src = imageUrl;                        // Asignar fuente
    document.body.appendChild(img);            // Mostrar en página
  })
  .catch((error) => {                          // Manejar errores
    console.error("Error en la petición:", error);
  });
```

## Mejoras posibles

1. **Agregar loading state**
   ```typescript
   showLoader();
   fetch(URL)
     .then(...)
     .finally(() => hideLoader());
   ```

2. **Validar datos antes de usarlos**
   ```typescript
   if (data?.data?.images?.original?.url) {
     // procesar
   }
   ```

3. **Reutilizar en una función**
   ```typescript
   function obtenerGifAleatorio() {
     return fetch(URL)
       .then(res => res.json())
       .then(data => data.data.images.original.url);
   }
   ```

## Archivo de referencia
`src/bases/10-fetch-api.ts`
