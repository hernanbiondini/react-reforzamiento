# 01 - const y let

## Temas cubiertos

### Variables en JavaScript/TypeScript

#### 1. Declaración de variables con `let`
- Variables que pueden cambiar su valor
- Ejemplo: `let nombre = 'hernan'`

#### 2. Declaración de constantes con `const`
- Variables que no pueden cambiar su valor después de ser asignadas
- Ejemplo: `const perro = 'lola'`

### Profundizando en `const`

#### 1. ¿Qué es `const`?
- `const` es una palabra clave para declarar **constantes**
- Una vez asignado un valor, **no se puede reasignar** la variable
- El valor debe ser asignado en el momento de la declaración

**Ejemplo:**
```typescript
const PI = 3.14159;
const nombre = 'hernan';

// ❌ Esto causará un error:
// PI = 3.14; // Error: Assignment to constant variable
```

#### 2. Características importantes de `const`

**a) Scope de bloque (Block Scope):**
```typescript
if (true) {
  const mensaje = 'Hola';
  console.log(mensaje); // ✅ Funciona
}
// console.log(mensaje); // ❌ Error: mensaje no está definido aquí
```

**b) Los objetos y arrays `const` son mutables:**
```typescript
// ✅ Puedes modificar propiedades de un objeto const
const persona = { nombre: 'hernan', edad: 30 };
persona.edad = 31; // ✅ Funciona
persona.ciudad = 'Buenos Aires'; // ✅ Funciona

// ❌ Pero NO puedes reasignar el objeto completo
// persona = { nombre: 'otro' }; // Error

// ✅ Similar con arrays
const numeros = [1, 2, 3];
numeros.push(4); // ✅ Funciona
// numeros = [5, 6, 7]; // ❌ Error
```

**c) Debe inicializarse al declararse:**
```typescript
// ❌ Error: falta inicialización
// const valor;

// ✅ Correcto
const valor = 10;
```

#### 3. ¿Cuándo usar `const`?
- **Siempre que sea posible** (regla general)
- Valores que no cambiarán (configuraciones, constantes matemáticas)
- Referencias a funciones
- Objetos y arrays que no serán reasignados
- Mejora la legibilidad del código (intención clara)

### Export en JavaScript/TypeScript

#### 1. ¿Qué es `export`?
- `export` es una palabra clave para **exportar** funciones, objetos, variables o clases desde un módulo
- Permite que otros archivos **importen** y usen ese código
- Es fundamental para organizar código en proyectos grandes

#### 2. Tipos de Export

**a) Named Export (Exportación nombrada):**
```typescript
// archivo: utils.ts
export const PI = 3.14159;
export const saludar = (nombre: string) => `Hola ${nombre}`;

export function sumar(a: number, b: number) {
  return a + b;
}

// Múltiples exports en una línea:
const URL = 'https://api.example.com';
const API_KEY = 'abc123';
export { URL, API_KEY };
```

**Importar named exports:**
```typescript
// archivo: main.ts
import { PI, saludar, sumar } from './utils';

console.log(PI); // 3.14159
console.log(saludar('hernan')); // "Hola hernan"
```

**b) Default Export (Exportación por defecto):**
```typescript
// archivo: User.ts
export default class User {
  constructor(public name: string) {}
}

// o con funciones:
const calcular = (x: number) => x * 2;
export default calcular;
```

**Importar default export:**
```typescript
// archivo: main.ts
import User from './User';
import calcular from './calcular';

const usuario = new User('hernan');
```

**c) Combinación de ambos:**
```typescript
// archivo: config.ts
const API_KEY = 'secret123';
export const BASE_URL = 'https://api.example.com';
export const TIMEOUT = 5000;

export default API_KEY;
```

**Importar combinados:**
```typescript
import API_KEY, { BASE_URL, TIMEOUT } from './config';
```

#### 3. Diferencias entre Named y Default Export

| Característica | Named Export | Default Export |
|---------------|--------------|----------------|
| **Cantidad por archivo** | Múltiples | Solo uno |
| **Nombre al importar** | Debe coincidir (o usar alias) | Puede ser cualquiera |
| **Sintaxis import** | `import { nombre } from '...'` | `import nombre from '...'` |
| **Uso recomendado** | Múltiples funciones/constantes | Clase principal o función principal |

#### 4. Re-exportar (Re-export)
```typescript
// archivo: index.ts (barrel file)
export { PI, saludar } from './utils';
export { default as User } from './User';
export * from './helpers'; // Re-exporta todo
```

#### 5. Ejemplo práctico combinando `const` y `export`

**Archivo: constants.ts**
```typescript
export const API_KEY = 'K0JUcAfkbkEOdwkzoJJGvhgbEx7iQcKB';
export const API_URL = 'https://api.giphy.com/v1/gifs/random';

// Configuración que no debe cambiar
export const CONFIG = {
  timeout: 5000,
  retries: 3,
  baseURL: API_URL
} as const; // 'as const' hace el objeto completamente inmutable
```

**Archivo: main.ts**
```typescript
import { API_KEY, API_URL, CONFIG } from './constants';

console.log(API_KEY); // Usar la constante importada
```

#### 6. Ventajas de usar `export`
- **Modularidad**: Divide el código en archivos pequeños y manejables
- **Reutilización**: El mismo código puede usarse en múltiples lugares
- **Mantenibilidad**: Cambios en un módulo no afectan otros archivos
- **Organización**: Estructura clara del proyecto
- **Encapsulación**: Solo exportas lo que quieres que sea público

#### 3. Métodos de String
- `includes()`: Verifica si un string contiene un substring específico
- Retorna un booleano (true/false)
- Ejemplo: `nombre.includes('h')` retorna `true` si 'h' está en el string

## Buenas prácticas
- Usar `const` por defecto
- Solo usar `let` cuando se necesite reasignar la variable
- Evitar `var` en código moderno

## Archivo de referencia
`src/bases/01-const-let.ts`
