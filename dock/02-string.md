# 02 - Strings

## Temas cubiertos

### Manejo de Strings en JavaScript/TypeScript

#### 1. Comillas simples y dobles
- Se pueden usar comillas simples: `'Hernan'`
- Se pueden usar comillas dobles: `"Biondini's"`
- Las comillas dobles son útiles cuando el string contiene apóstrofes

#### 2. Template Literals (Template Strings)
- Utilizan backticks (`) para definir strings
- Permiten strings multilínea sin concatenación
- Permiten interpolación de variables

#### 3. Interpolación de variables
- Sintaxis: `${variable}`
- Permite insertar variables y expresiones dentro de un string
- Ejemplo:
```typescript
const fullName = `Mi nombre es
${firstName}
${lastName}`;
```

## Ventajas de Template Literals
- Código más legible
- No requiere concatenación con `+`
- Mantiene el formato y los saltos de línea

## Archivo de referencia
`src/bases/02-string.ts`
