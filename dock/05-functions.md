# 05 - Funciones

## Temas cubiertos

### Funciones en JavaScript/TypeScript

#### 1. Funciones tradicionales tipadas
- Sintaxis: `function nombre(param: tipo): tipoRetorno { ... }`
- Ejemplo:
```typescript
function greet(nombre: string): string {
  return `Hola, ${nombre}`;
}
```

#### 2. Arrow Functions (Funciones flecha)
- Sintaxis más concisa
- Forma larga: `const greet = (nombre: string): string => { return '...' }`
- Forma corta (retorno implícito): `const greet = (nombre: string): string => '...'`

#### 3. Interfaces en TypeScript
- Definen la estructura de un objeto
- Se usan como tipos para parámetros y retornos
- Ejemplo:
```typescript
interface User {
  uid: string;
  username: string;
}
```

#### 4. Funciones que retornan objetos
- Con arrow function, usar paréntesis para retorno implícito de objeto
- Sintaxis: `const getUser = () => ({ uid: '123', username: 'Tony' })`

#### 5. Funciones de orden superior (Higher-Order Functions)
- Funciones que reciben otras funciones como argumentos
- Ejemplo con `forEach`:
```typescript
myNumbers.forEach(function(value) {
  console.log({value});
});
```

#### 6. Callbacks con arrow functions
- Sintaxis simplificada: `myNumbers.forEach((value) => console.log({value}))`
- Forma más corta: `myNumbers.forEach(console.log)`

## Ventajas de Arrow Functions
- Sintaxis más concisa
- Retorno implícito para funciones de una línea
- Código más legible

## Archivo de referencia
`src/bases/05-functions.ts`
