const ironMan = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    pais: 'USA'
  }
};

const spiderMan = structuredClone(ironMan);
spiderMan.nombre = 'Peter';
spiderMan.apellido = 'Parker';

console.log(ironMan, spiderMan);
