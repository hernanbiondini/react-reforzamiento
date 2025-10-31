# 07 - Destructuring de Arrays

## Temas cubiertos

### Destructuring (Desestructuración) de Arrays

#### 1. Destructuring básico de arrays
- Extrae elementos de un array en variables individuales
- Usa corchetes `[]` en lugar de llaves `{}`
- Sintaxis: `const [p1, p2] = caracterNames`
- El orden importa (a diferencia del destructuring de objetos)

#### 2. Omitir elementos en el destructuring
- Se pueden saltar elementos dejando espacios vacíos
- Ejemplo:
```typescript
const [, , Trunks] = caracterNames;
// Solo extrae el tercer elemento
```

#### 3. Destructuring del retorno de funciones
- Muy común en React (useState, useReducer)
- Ejemplo:
```typescript
const returnsArrayFn = () => {
  return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();
```

#### 4. `as const` (const assertions)
- Indica a TypeScript que el array no cambiará
- Crea tipos literales más específicos
- Ejemplo: `return ['ABC', 123] as const`
- TypeScript infiere tipos exactos en lugar de genéricos

## Diferencias con destructuring de objetos
| Aspecto | Objetos | Arrays |
|---------|---------|--------|
| Sintaxis | `{ }` | `[ ]` |
| Orden | No importa (usa nombres) | Sí importa (usa posiciones) |
| Omitir valores | No aplicable | Comas vacías |

## Casos de uso comunes en React
- `const [state, setState] = useState()`
- `const [value, dispatch] = useReducer()`

## Archivo de referencia
`src/bases/07-array-destructuring.ts`
