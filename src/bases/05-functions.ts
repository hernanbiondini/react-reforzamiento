

function greet(nombre: string): string {
  return `Hola, ${nombre}`;
}

//const greet2 = (nombre: string):string => {
//  return `Hola, ${nombre}`;
//};

const greet2 = (nombre: string):string => `Hola, ${nombre}`;

const message:string = 'Tony';
console.log(greet(message));

const message2:string = 'Peter';
console.log(greet2(message2));

interface User {
  uid: string;
  username: string;
}

// Función con objeto como retorno
function getUser():User {    
  return { 
    uid: '123', 
    username: 'Tony' ,
};
}

const user = getUser();
console.log(user);

//const getUser2 = ()=> {    
//  return { 
//   uid: '789', 
//   username: 'Peter' 
//};
//}

const getUser2 = ()=> ({   
    uid: '789', 
    username: 'Peter'
});


const user2 = getUser2();
console.log(user2);

const myNumbers: number[]= [1,2,3,4,5];

// Función con argumento tipo función
myNumbers.forEach(function(value){
  console.log({value});
});

// Función con argumento tipo función (flecha)
myNumbers.forEach( (value) => console.log({value}) );

// Función con argumento tipo función (flecha) simplificada
myNumbers.forEach(console.log);