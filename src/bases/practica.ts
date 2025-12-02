// Paso 1: Se ejecuta inmediatamente (código síncrono)
console.log("0")

// Paso 2: Se crea la promesa y se ejecuta su función constructora inmediatamente
const myPromise = new Promise<number>((resolve, reject) => {
  // Paso 3: Este console.log se ejecuta de inmediato (código síncrono dentro del constructor)
  console.log("1")

  // Paso 4: Se programa el setTimeout para ejecutarse después de 2 segundos (código asíncrono)
  // El setTimeout NO bloquea la ejecución, el código continúa
  setTimeout(() => {
    // Paso 7: Después de 2 segundos, se ejecuta este callback
    console.log("2")
    // Paso 8: Se resuelve la promesa con el valor 100
    resolve(100)
    //reject('No tengo dinero')
  }, 2000);
})

// Paso 5: Continúa la ejecución síncrona (no espera al setTimeout)
console.log("a")

// Paso 6: Se encadenan los handlers de la promesa, pero NO se ejecutan aún
// Estos handlers esperan a que la promesa se resuelva (después de los 2 segundos)
myPromise
  .then((myMoney) => {
    // Paso 9: Se ejecuta cuando la promesa se resuelve exitosamente
    console.log(`Tengo mi dinero ${myMoney}`);
  }).catch((reason) => {
    // Solo se ejecutaría si la promesa fuera rechazada (reject)
    console.warn(reason);
  })
  .finally(() => {
    // Paso 10: Se ejecuta siempre al final, sin importar si hubo resolve o reject
    console.log("A seguir con mi vida");
  });

// Orden de ejecución en consola:
// "0" → "1" → "a" → (espera 2 segundos) → "2" → "Tengo mi dinero 100" → "A seguir con mi vida"