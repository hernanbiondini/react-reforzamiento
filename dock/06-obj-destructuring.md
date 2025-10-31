# 06 - Destructuring de Objetos

## Temas cubiertos

### Destructuring (Desestructuración) de Objetos

#### 1. Destructuring básico
- Extrae propiedades de un objeto en variables individuales
- Sintaxis: `const { name, age, clave } = person`
- Más limpio que `person.name`, `person.age`, etc.

#### 2. Propiedades opcionales en interfaces
- Se definen con `?` después del nombre de la propiedad
- Ejemplo:
```typescript
interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;  // Propiedad opcional
}
```

#### 3. Valores por defecto en destructuring
- Se asignan cuando la propiedad no existe o es `undefined`
- Sintaxis: `const { name, rank = 'Sin rango' } = hero`
- Muy útil con propiedades opcionales

#### 4. Destructuring en parámetros de función
- Se puede desestructurar directamente en los parámetros
- Ejemplo:
```typescript
const useContext = ({ name, age, key, rank }: Hero) => {
  // Usa directamente name, age, key, rank
}
```

#### 5. Renombrar variables en destructuring
- Sintaxis: `const { rank: rankWidow } = hero`
- Extrae la propiedad `rank` y la asigna a la variable `rankWidow`
- Útil para evitar conflictos de nombres

## Ventajas del Destructuring
- Código más limpio y legible
- Menos repetición
- Facilita el trabajo con objetos complejos
- Ideal para React (props, state)

## Archivo de referencia
`src/bases/06-obj-destructuring.ts`
