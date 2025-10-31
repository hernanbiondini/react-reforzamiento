# 04 - Arrays

## Temas cubiertos

### Arrays en JavaScript/TypeScript

#### 1. Declaración de arrays tipados
- TypeScript permite especificar el tipo de elementos en un array
- Sintaxis: `const myArray: number[] = [1, 2, 3, 4, 5]`
- Asegura que solo se agreguen elementos del tipo especificado

#### 2. Método `push()`
- Agrega elementos al final del array
- Modifica el array original
- Ejemplo: `myArray.push(6)`

#### 3. `structuredClone()` con arrays
- Crea una copia independiente del array
- Similar a su uso con objetos
- Sintaxis: `const myArray2 = structuredClone(myArray)`

#### 4. Bucle `for...of`
- Sintaxis moderna para iterar sobre arrays
- Más legible que `for` tradicional
- Ejemplo:
```typescript
for(const myNumber of myArray) {
  console.log(myNumber);
}
```

## Ventajas del tipado en arrays
- Previene errores en tiempo de desarrollo
- Autocompletado en el editor
- Mayor seguridad de tipos

## Archivo de referencia
`src/bases/04-arrays.ts`
