# 09 - Promises (Promesas)

## Temas cubiertos

### Conceptos Fundamentales de Promises

#### 1. ¿Qué es una Promise?
- Una **Promise** es un objeto que representa el resultado eventual de una operación asíncrona
- Permite manejar código que tarda en ejecutarse sin bloquear el programa
- Es la base de la programación asíncrona moderna en JavaScript

#### 2. Estados de una Promise
Una promesa puede estar en uno de tres estados:

| Estado | Descripción |
|--------|-------------|
| **Pending** (Pendiente) | Estado inicial, la operación aún no se completó |
| **Fulfilled** (Cumplida) | La operación se completó exitosamente |
| **Rejected** (Rechazada) | La operación falló con un error |

### Creación de Promises

#### 1. Sintaxis básica
```typescript
const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 2000);
});
```

**Componentes:**
- `new Promise()`: Constructor de la promesa
- `resolve`: Función que se llama cuando la operación es exitosa
- `reject`: Función que se llama cuando ocurre un error
- `<number>`: Tipo genérico de TypeScript que indica el tipo del valor resuelto

#### 2. Promise con lógica condicional
```typescript
const promesa = new Promise((resolve, reject) => {
  const exito = false;

  if (exito) {
    resolve("Operación completada con éxito!");
  } else {
    reject("Ocurrió un error 😞");
  }
});
```

**Características:**
- Se puede decidir dinámicamente si resolver o rechazar
- Útil para operaciones que pueden fallar (llamadas a API, lectura de archivos, etc.)

#### 3. Promises con probabilidad aleatoria
```typescript
function cargarDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = Math.random() > 0.5;
      if (ok) resolve("Datos cargados correctamente");
      else reject("Error al cargar los datos");
    }, 2000);
  });
}
```

**Caso de uso:**
- Simula escenarios del mundo real donde las operaciones pueden tener éxito o fallar
- Útil para testing y desarrollo

### Consumo de Promises

#### 1. Método .then()
- Se ejecuta cuando la promesa se resuelve exitosamente
- Recibe el valor pasado a `resolve()`

```typescript
myPromise.then((myMoney) => {
  console.log(`Tengo mi dinero ${myMoney}`);
});
```

#### 2. Método .catch()
- Se ejecuta cuando la promesa es rechazada
- Recibe el valor pasado a `reject()`
- Maneja errores de la promesa

```typescript
promesa.catch((error) => {
  console.error(error);
});
```

#### 3. Método .finally()
- Se ejecuta siempre, sin importar si la promesa fue resuelta o rechazada
- No recibe ningún argumento
- Útil para limpiar recursos o mostrar mensajes finales

```typescript
myPromise.finally(() => {
  console.log("A seguir con mi vida");
});
```

#### 4. Encadenamiento completo
```typescript
myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log("A seguir con mi vida");
  });
```

**Flujo:**
1. Si la promesa se resuelve → ejecuta `.then()`
2. Si la promesa se rechaza → ejecuta `.catch()`
3. En cualquier caso → ejecuta `.finally()`

### Asincronía y Orden de Ejecución

#### 1. Código asíncrono vs síncrono
```typescript
console.log("Inicio del programa");

const pro = new Promise((resolve, reject) => {
  console.log("Dentro de la promesa...");

  setTimeout(() => {
    console.log("Ejecutando dentro de setTimeout...");
    resolve("Datos recibidos ✅");
  }, 10000);
});

pro.then(resultado => console.log("Resultado:", resultado));

console.log("Fin del programa");
```

**Orden de ejecución:**
1. "Inicio del programa" (síncrono)
2. "Dentro de la promesa..." (síncrono, dentro del constructor)
3. "Fin del programa" (síncrono)
4. [Espera 10 segundos]
5. "Ejecutando dentro de setTimeout..." (asíncrono)
6. "Resultado: Datos recibidos ✅" (asíncrono)

**Concepto clave:**
- El código dentro del constructor de la Promise se ejecuta inmediatamente
- El código dentro de `setTimeout` se ejecuta después
- Los callbacks de `.then()` se ejecutan cuando la promesa se resuelve
- El programa no se bloquea esperando la promesa

### Casos de Uso Reales

#### 1. Simulación de llamada a servidor
```typescript
function obtenerDatosDelServidor() {
  return new Promise((resolve, reject) => {
    console.log("Consultando servidor...");

    setTimeout(() => {
      const exito = Math.random() > 0.5;

      if (exito) {
        resolve({
          usuario: "hernan",
          edad: 42,
          pais: "Argentina"
        });
      } else {
        reject("Error: no se pudo conectar con el servidor 😞");
      }
    }, 2000);
  });
}

obtenerDatosDelServidor()
  .then(datos => {
    console.log("✅ Datos recibidos:", datos);
  })
  .catch(error => {
    console.error("❌ Ocurrió un error:", error);
  })
  .finally(() => {
    console.log("🔚 Operación finalizada");
  });
```

**Características:**
- Simula latencia de red con `setTimeout`
- Retorna un objeto complejo en caso de éxito
- Maneja ambos escenarios: éxito y error
- Proporciona feedback al usuario en cada etapa

## Buenas prácticas

### 1. Siempre manejar errores
```typescript
// ❌ Malo - sin catch
myPromise.then(data => console.log(data));

// ✅ Bueno - con catch
myPromise
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### 2. Usar tipado en TypeScript
```typescript
// ✅ Especificar el tipo de retorno
const myPromise = new Promise<number>((resolve, reject) => {
  resolve(100);
});
```

### 3. Usar finally para limpieza
```typescript
// ✅ Útil para ocultar loaders, cerrar conexiones, etc.
fetchData()
  .then(data => processData(data))
  .catch(error => handleError(error))
  .finally(() => hideLoadingSpinner());
```

### 4. Retornar Promises desde funciones
```typescript
// ✅ Mejor encapsulación y reutilización
function cargarDatos() {
  return new Promise((resolve, reject) => {
    // lógica
  });
}
```

## Conceptos importantes

### Diferencia entre then y catch

| Método | Cuándo se ejecuta | Qué recibe |
|--------|------------------|------------|
| `.then()` | Cuando se llama a `resolve()` | El valor pasado a `resolve()` |
| `.catch()` | Cuando se llama a `reject()` | El valor pasado a `reject()` |
| `.finally()` | Siempre (éxito o error) | Nada (sin argumentos) |

### Promise vs Callback Hell

**Antes (Callback Hell):**
```javascript
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      // ...
    });
  });
});
```

**Con Promises:**
```javascript
getData()
  .then(a => getMoreData(a))
  .then(b => getMoreData(b))
  .then(c => {
    // ...
  })
  .catch(error => handleError(error));
```

### Ejecución síncrona vs asíncrona

- **Síncrono**: El código se ejecuta línea por línea, bloqueando la ejecución
- **Asíncrono**: El código puede ejecutarse "en segundo plano", sin bloquear
- Las Promises permiten que operaciones lentas no bloqueen el programa
- JavaScript sigue ejecutando mientras espera que la promesa se resuelva

## Ventajas de las Promises

1. **Código más legible**: Evita el "callback hell"
2. **Manejo de errores centralizado**: Un solo `.catch()` puede manejar múltiples errores
3. **Encadenamiento**: Se pueden encadenar múltiples operaciones asíncronas
4. **Estandarización**: API moderna y ampliamente soportada
5. **Base para async/await**: Las Promises son la base de la sintaxis async/await

## Casos de uso comunes

- Llamadas a APIs (fetch, axios)
- Lectura/escritura de archivos
- Consultas a bases de datos
- Operaciones que tardan tiempo (procesamiento de imágenes, cálculos complejos)
- Timeouts y delays
- Cualquier operación asíncrona que pueda fallar

## Archivo de referencia
`src/bases/09-promises.ts`
