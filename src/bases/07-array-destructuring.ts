


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