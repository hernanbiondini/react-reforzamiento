const myArray: number[] = [1, 2, 3, 4, 5];

myArray.push(6);
myArray.push(7);

console.log(myArray);

const myArray2: number[]= structuredClone(myArray);

myArray2.push(99);
console.log(myArray2);

for(const myNumber of myArray) {
  console.log(myNumber);
}