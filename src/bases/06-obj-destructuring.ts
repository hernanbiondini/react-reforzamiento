


console.log("----- Destructuring de Objetos -----");   

const person = {
  name: 'Bruce',
  age: 45,
  clave: 'Batman'
};
console.log(person);    

console.log("----- Función con Destructuring de Objetos -----");
// Destructuring de objetos
const { name, age, clave } = person;
console.log(name, age, clave);

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const getHeroDetails = (hero: Hero) => {
  // Al desestructurar, podemos dar un valor por defecto si la propiedad opcional no viene.
  const { name, age, key, rank = 'Sin rango' } = hero;
  console.log(`Nombre: ${name}, Edad: ${age}, Clave: ${key}, Rango: ${rank}`);
};

// Este objeto es válido porque 'rank' es opcional y no se incluye.
const captainAmerica: Hero = {
  name: 'Steve',
  age: 102,
  key: 'Capitán América',
};

// Este objeto también es válido porque incluye la propiedad opcional 'rank'.
const blackWidow: Hero = {
  name: 'Natasha',
  age: 35,
  key: 'Black Widow',
  rank: 'Espía Maestra',
};

getHeroDetails(captainAmerica);
getHeroDetails(blackWidow);


console.log("----- Función con Destructuring de Objetos 2 -----");

  const useContext = ({ name, age, key, rank }: Hero) => {
    return{
      name,
      age,
      key,
      rank
    }
  };
  
console.log(useContext(captainAmerica));

const hero = useContext(blackWidow); 
console.log(hero.rank);  

const { rank: rankWidow } = useContext(blackWidow);
console.log(rankWidow);

const { rank: rankCap } = useContext(captainAmerica);
console.log(rankCap);

