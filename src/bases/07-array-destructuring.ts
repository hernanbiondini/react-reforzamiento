


const caracterNames: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log(caracterNames);

// Destructuring de arrays, usa corchetes []
const [p1, p2] = caracterNames;
console.log({p1, p2});

console.log("---------");

const[, , Trunks] = caracterNames;
console.log({Trunks});

console.log("---------");

const returnsArrayFn = () => { 
  return [ 'ABC', 123 ] as const;
}

const [ letters, numbers ] = returnsArrayFn();
console.log({ letters, numbers });

// Funcion que retorna dos funciones en un array, una para sumar y otra para restar
const sumaresta = () => {
  return [
    (a: number, b: number) => {
    console.log("Suma:", a + b);
  },
  (a: number, b: number) => {
    console.log("Resta:", a -b);
  }] as const;     
}   
// Desestructuración de la tupla retornada por sumaresta()
// sumar: contiene la función para sumar dos números
// restar: contiene la función para restar dos números
const [sumar, restar] = sumaresta();
// Uso de las funciones sumar y restar
console.log(sumar(10, 5)); 
console.log(restar(10, 5));