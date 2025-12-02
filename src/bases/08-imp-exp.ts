

import { heroes } from '../data/heroes.data';
import type { Hero } from '../data/heroes.data';
import { Owner } from '../data/heroes.data';

const getHeroById = (id: number): Hero | undefined=> {
   const hero = heroes.find((hero) => hero.id === id);
   return hero;

};


console.log(getHeroById(3));

const getheroByname = (name: string) => {
  return heroes.find(coincideCon(name));
}


function coincideCon(nombre: string) {
  return (hero:Hero) => hero.name.toLowerCase() === nombre.toLowerCase();
}

console.log(getheroByname('Flash'));



const getherosByOwner = (owner: Owner): Hero[] => {
  return heroes.filter((hero) => hero.owner === owner);
};

console.log(getherosByOwner(Owner.DC));
console.log(getherosByOwner(Owner.Marvel));

const getHerosByname = (name:string): Hero[] => {
  return heroes.filter(heroes => heroes.name.toLowerCase().includes(name.toLowerCase()));
} 

console.log(getHerosByname('batman'));