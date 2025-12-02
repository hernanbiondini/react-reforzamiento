/**
 * useState function - Learning exercise
 * Returns a tuple with an initial value and a setter function
 *
 * @param initialValue - El valor inicial del estado (string)
 * @returns Una tupla con [valor, función setter]
 */
export const useState = (initialValue: string): [string, (value: string) => void] => {
  // Retornamos una tupla inmutable (as const) con:
  // [0] = el valor inicial
  // [1] = función que recibe un string y lo imprime en consola
  return [initialValue, (value: string) => console.log(value)] as const;
};

// Example usage - Desestructuración de la tupla retornada
const [name, setName] = useState("Goku");
// name: contiene el valor "Goku"
// setName: contiene la función para "actualizar" el estado

console.log(name); // Goku - Imprimimos el valor
setName("Vegeta"); // Imprime "Vegeta" - Ejecutamos la función setter

console.log("----- Suma Function -----");

/**
 * Función suma - Ejercicio de tuplas
 * Retorna una tupla con un string concatenado y una función sumadora
 *
 * @param primerValor - Primer número
 * @param segundoValor - Segundo número
 * @returns Una tupla con [string concatenado, función que suma dos números]
 */
export const suma = (
  primerValor: number,
  segundoValor: number
): [string, (value1: number, value2: number) => void] => {
  return [
    // Primer elemento: concatenación de los dos valores como string
    primerValor + " " + segundoValor,

    // Segundo elemento: función que suma dos números y muestra el resultado
    (value1: number, value2: number) => {
      let sumador = value1 + value2; // Calculamos la suma
      console.log("la suma es: " + sumador); // Mostramos el resultado en consola
    },
  ] as const;
};

// Desestructuración de la tupla retornada por suma()
const [valores, sumarValores] = suma(20, 30);
// valores: contiene "20 30" (string concatenado)
// sumarValores: contiene la función para sumar dos números

console.log(valores); // "20 30" - Imprimimos el string concatenado
sumarValores(20, 30); // "la suma es: 50" - Ejecutamos la función sumadora