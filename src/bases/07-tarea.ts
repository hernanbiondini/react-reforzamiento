/**
 * useState function - Learning exercise
 * Returns a tuple with an initial value and a setter function
 */
export const useState = (initialValue: string): [string, (value: string) => void] => {
  return [initialValue, (value: string) => console.log(value)] as const;
};

// Example usage
const [name, setName] = useState("Goku");
console.log(name); // Goku
setName("Vegeta"); // Imprime "Vegeta"

console.log("----- Suma Function -----");

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
  ] as const;
};

const [valores, sumarValores] = suma(20, 30);
console.log(valores);
sumarValores(20, 30);