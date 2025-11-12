# 08 - Importaciones y Exportaciones

## Temas cubiertos

### Importaciones y Exportaciones de Módulos

#### 1. Named Imports (Importaciones con nombre)
- Permite importar elementos específicos exportados desde otros módulos
- Se utiliza la sintaxis de desestructuración con llaves `{}`
- Los elementos deben coincidir con el nombre exportado

```typescript
import { heroes } from '../data/heroes.data';
```

#### 2. Type-only Imports (Importaciones de solo tipo)
- Introducidas para TypeScript cuando se usa `verbatimModuleSyntax`
- Se utiliza `import type` para importar únicamente definiciones de tipos
- No genera código JavaScript en tiempo de ejecución
- Obligatorio cuando el compilador tiene habilitado `erasableSyntaxOnly` o `verbatimModuleSyntax`

```typescript
import type { Hero } from '../data/heroes.data';
```

### Métodos de Arrays

#### 1. Array.find()
- Busca el primer elemento que cumpla con una condición
- Retorna el elemento encontrado o `undefined` si no hay coincidencia
- Acepta una función callback que se ejecuta para cada elemento

```typescript
const hero = heroes.find((hero) => hero.id === id);
```

**Características:**
- Detiene la búsqueda al encontrar la primera coincidencia
- Útil para buscar un elemento único
- El callback recibe: elemento, índice y array completo

#### 2. Uso con funciones de predicado personalizadas
- Se puede pasar una función que retorna otra función (Higher-Order Function)
- Permite crear filtros reutilizables y más legibles

```typescript
function coincideCon(nombre: string) {
  return (hero: Hero) => hero.name.toLowerCase() === nombre.toLowerCase();
}

const hero = heroes.find(coincideCon(name));
```

### Funciones de Orden Superior (Higher-Order Functions)

#### 1. Funciones que retornan funciones
- Una función puede retornar otra función como resultado
- Útil para crear funciones configurables o parcialmente aplicadas
- Permite encapsular lógica reutilizable

```typescript
function coincideCon(nombre: string) {
  return (hero: Hero) => hero.name.toLowerCase() === nombre.toLowerCase();
}
```

**Ventajas:**
- Reutilización de código
- Creación de funciones especializadas
- Mejor legibilidad del código
- Separación de responsabilidades

### Tipado en TypeScript

#### 1. Tipos de retorno opcionales
- Se usa `Type | undefined` para indicar que una función puede no retornar un valor
- Importante para funciones de búsqueda que pueden no encontrar resultados

```typescript
const getHeroById = (id: number): Hero | undefined => {
  // ...
};
```

#### 2. Tipado de parámetros en funciones anidadas
- Las funciones que retornan otras funciones requieren tipos explícitos en ambos niveles
- El tipo importado (`Hero`) se puede usar en cualquier función

```typescript
function coincideCon(nombre: string) {
  return (hero: Hero) => hero.name.toLowerCase() === nombre.toLowerCase();
}
```

### Comparación de Strings

#### 1. Método toLowerCase()
- Convierte una cadena a minúsculas
- Útil para comparaciones sin distinción de mayúsculas/minúsculas (case-insensitive)

```typescript
hero.name.toLowerCase() === nombre.toLowerCase()
```

**Caso de uso:**
- Búsquedas más flexibles que ignoran diferencias de capitalización
- "Flash", "flash", "FLASH" se considerarán iguales

## Buenas prácticas demostradas

1. **Separación de imports por tipo**: Separar las importaciones de valores y tipos mejora la claridad y es requerido por configuraciones estrictas de TypeScript

2. **Funciones puras y reutilizables**: La función `coincideCon` es reutilizable y no tiene efectos secundarios

3. **Tipado explícito**: Todos los parámetros y retornos están tipados, evitando el tipo `any` implícito

4. **Búsquedas case-insensitive**: Usar `toLowerCase()` hace las búsquedas más robustas

5. **Retornos opcionales**: Usar `Type | undefined` indica explícitamente que la búsqueda puede fallar

## Conceptos importantes

### Diferencia entre import e import type

- **import**: Importa valores que existen en tiempo de ejecución (variables, funciones, clases)
- **import type**: Importa solo información de tipos que TypeScript elimina durante la compilación

### Cuándo usar find vs filter

- **find()**: Cuando necesitas un solo elemento (el primero que coincida)
- **filter()**: Cuando necesitas todos los elementos que coincidan

### Higher-Order Functions vs Callbacks directos

```typescript
// Callback directo (simple)
heroes.find((hero) => hero.id === id)

// Higher-Order Function (más reutilizable)
heroes.find(coincideCon(name))
```

## Archivo de referencia
`src/bases/08-imp-exp.ts`
