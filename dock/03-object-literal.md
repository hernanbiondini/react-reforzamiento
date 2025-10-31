# 03 - Objetos Literales

## Temas cubiertos

### Objetos en JavaScript/TypeScript

#### 1. Objetos literales
- Sintaxis de pares clave-valor
- Ejemplo:
```typescript
const ironMan = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45
};
```

#### 2. Objetos anidados
- Los objetos pueden contener otros objetos como propiedades
- Ejemplo:
```typescript
direccion: {
  ciudad: 'New York',
  pais: 'USA'
}
```

#### 3. `structuredClone()`
- Método moderno para crear copias profundas (deep copy) de objetos
- Copia todos los niveles de anidación
- Evita la referencia al objeto original
- Sintaxis: `const newObj = structuredClone(originalObj)`

## Concepto importante: Copias por referencia vs valor
- Sin `structuredClone`, las asignaciones de objetos crean referencias
- Modificar un objeto copiado sin clone afecta al original
- `structuredClone` crea una copia completamente independiente

## Archivo de referencia
`src/bases/03-object-literal.ts`
