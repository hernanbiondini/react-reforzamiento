# 07 - Ejercicio de useState y Tuplas

## Temas cubiertos

### Tuplas en TypeScript

#### 1. Definición de tuplas
- Una tupla es un array con un número fijo de elementos donde cada elemento puede tener un tipo diferente
- En TypeScript se definen especificando el tipo de cada posición: `[tipo1, tipo2, ...]`
- Son útiles cuando necesitas retornar múltiples valores de tipos diferentes desde una función

```typescript
// Sintaxis de tupla como tipo de retorno
const useState = (initialValue: string): [string, (value: string) => void] => {
  return [initialValue, (value: string) => console.log(value)];
};
```

#### 2. Desestructuración de tuplas
- Las tuplas se pueden desestructurar como arrays regulares
- Los nombres de las variables son arbitrarios y no afectan el orden

```typescript
const [name, setName] = useState("Goku");
// name: string
// setName: (value: string) => void
```

### Sintaxis paso a paso de las funciones

#### Desglose de useState

```typescript
export const useState = (initialValue: string): [string, (value: string) => void] => {
  return [initialValue, (value: string) => console.log(value)];
};
```

**Paso 1: Exportación y declaración**
```typescript
export const useState
```
- `export`: Hace la función disponible para importar en otros archivos
- `const`: Declara una constante (la función no puede ser reasignada)
- `useState`: Nombre de la función

**Paso 2: Parámetros**
```typescript
= (initialValue: string)
```
- `initialValue`: Nombre del parámetro de entrada
- `: string`: Tipo del parámetro (debe ser un string)

**Paso 3: Tipo de retorno (Tupla)**
```typescript
: [string, (value: string) => void]
```
- `: [...]`: Especifica que retorna una tupla
- `string`: El primer elemento de la tupla es un string
- `(value: string) => void`: El segundo elemento es una función que:
  - Recibe un parámetro `value` de tipo `string`
  - No retorna nada (`void`)

**Paso 4: Cuerpo de la función**
```typescript
=> {
  return [initialValue, (value: string) => console.log(value)];
}
```
- `=>`: Arrow function
- `return [...]`: Retorna un array (tupla) con dos elementos
- `initialValue`: El primer elemento es el valor recibido como parámetro
- `(value: string) => console.log(value)`: El segundo elemento es una arrow function anónima

#### Desglose de suma

```typescript
export const suma = (
  primerValor: number,
  segundoValor: number
): [string, (value1: number, value2: number) => void] => {
  return [
    primerValor + " " + segundoValor,
    (value1: number, value2: number) => {
      let sumador = value1 + value2;
      console.log("la suma es: " + sumador);
    },
  ];
};
```

**Paso 1: Exportación y declaración**
```typescript
export const suma
```
- Similar a `useState`

**Paso 2: Parámetros (múltiples)**
```typescript
= (
  primerValor: number,
  segundoValor: number
)
```
- `primerValor: number`: Primer parámetro de tipo número
- `segundoValor: number`: Segundo parámetro de tipo número
- Los parámetros están en líneas separadas para mejor legibilidad

**Paso 3: Tipo de retorno (Tupla compleja)**
```typescript
: [string, (value1: number, value2: number) => void]
```
- `string`: Primer elemento de la tupla
- `(value1: number, value2: number) => void`: Segundo elemento es una función que:
  - Recibe **dos** parámetros numéricos
  - No retorna nada (`void`)

**Paso 4: Cuerpo de la función**
```typescript
=> {
  return [
    primerValor + " " + segundoValor,        // Elemento 1: concatenación
    (value1: number, value2: number) => {    // Elemento 2: función
      let sumador = value1 + value2;
      console.log("la suma es: " + sumador);
    },
  ];
}
```
- **Primer elemento**: Concatena los dos números recibidos como string
- **Segundo elemento**: Arrow function que suma dos números y muestra el resultado

### Simulación de React useState

#### 1. Patrón de estado simple
- La función `useState` retorna un par: **[valor, función setter]**
- El primer elemento es el valor inicial del estado
- El segundo elemento es una función que permite modificar ese valor

```typescript
export const useState = (initialValue: string): [string, (value: string) => void] => {
  return [initialValue, (value: string) => console.log(value)];
};

// Uso
const [name, setName] = useState("Goku");
console.log(name);     // "Goku"
setName("Vegeta");     // Imprime "Vegeta"
```

#### 2. Características del patrón
- **Encapsulación**: El valor y su setter están empaquetados juntos
- **Inmutabilidad implícita**: La función setter no modifica el valor original (en esta versión simplificada)
- **Tipado fuerte**: TypeScript garantiza que el setter reciba el tipo correcto

### Función suma con tupla personalizada

#### 1. Tupla con string y función
- Ejemplo de tupla que combina un string con una función de suma
- Demuestra flexibilidad en los tipos que puede contener una tupla

```typescript
export const suma = (
  primerValor: number,
  segundoValor: number
): [string, (value1: number, value2: number) => void] => {
  return [
    primerValor + " " + segundoValor,
    (value1: number, value2: number) => {
      let sumador = value1 + value2;
      console.log("la suma es: " + sumador);
    },
  ];
};

// Uso
const [valores, sumarValores] = suma(20, 30);
console.log(valores);        // "20 30"
sumarValores(20, 30);        // "la suma es: 50"
```

#### 2. Análisis del diseño
- **Primera posición**: Concatenación de los valores originales como string
- **Segunda posición**: Función que realiza la suma de dos números y muestra el resultado
- La función interna captura la lógica de suma pero recibe parámetros independientes

## Comparación de patrones

| Aspecto | useState | suma |
|---------|----------|------|
| **Primer elemento** | Valor inicial (string) | String concatenado |
| **Segundo elemento** | Setter de un parámetro | Función de dos parámetros |
| **Propósito** | Simular gestión de estado | Operación matemática con callback |
| **Parámetros de entrada** | 1 valor inicial | 2 números |

## Conceptos importantes

### 1. Tipado de funciones en tuplas
```typescript
// Sintaxis completa
(value: string) => void
// Indica:
// - Parámetro 'value' de tipo string
// - Retorna void (no retorna nada)
```

### 2. Export de funciones
- Ambas funciones están exportadas con `export const`
- Pueden ser importadas en otros módulos
- Útil para organizar código reutilizable

### 3. Closures y funciones internas
- Las funciones que se retornan en las tuplas son closures
- Pueden acceder al scope donde fueron definidas
- En el ejemplo de `suma`, la función interna tiene acceso a sus propios parámetros pero no necesita acceder a las variables externas

## Buenas prácticas demostradas

1. **Tipado explícito de tuplas**: Especificar exactamente qué tipo de elementos contiene la tupla
2. **Nomenclatura descriptiva**: Usar nombres claros al desestructurar (`name`, `setName`, `valores`, `sumarValores`)
3. **Funciones puras**: Las funciones retornadas no tienen efectos secundarios más allá del console.log
4. **Documentación JSDoc**: Comentario al inicio explicando el propósito de la función

## Mejoras potenciales

```typescript
// Usar template literals en lugar de concatenación
primerValor + " " + segundoValor  // Actual
`${primerValor} ${segundoValor}`  // Mejor

// Usar const en lugar de let en la función suma
let sumador = value1 + value2;    // Actual
const sumador = value1 + value2;  // Mejor

// Template literal en el console.log
console.log("la suma es: " + sumador);    // Actual
console.log(`la suma es: ${sumador}`);    // Mejor
```

## Relación con React

Este ejercicio prepara para entender el hook `useState` de React:

```typescript
// React useState real
import { useState } from 'react';

function Component() {
  const [count, setCount] = useState(0);
  // count: número actual
  // setCount: función para actualizar el estado
}
```

La diferencia principal es que el `useState` real de React:
- Mantiene el estado entre renders
- Causa re-renderizado del componente cuando cambia
- El setter puede recibir un valor o una función

## Archivo de referencia
`src/bases/07-tarea.ts`
