// Paso 1: Se ejecuta inmediatamente (código síncrono)
console.log("Inicio del programa");

// Paso 2: Se crea la promesa y se ejecuta su función constructora inmediatamente
const myProm = new Promise<number>((resolve, reject) => {
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
  }, 10000);
})

// Paso 5: Continúa la ejecución síncrona (no espera al setTimeout)
console.log("a")

// Paso 6: Se encadenan los handlers de la promesa, pero NO se ejecutan aún
// Estos handlers esperan a que la promesa se resuelva (después de los 2 segundos)
myProm
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
// ""Inicio del programa"" → "1" → "a" → "Fin del programa" →(espera 10 segundos) → "2" → "Tengo mi dinero 100" → "A seguir con mi vida"

console.log('Fin del programa');

//------------------



const myPromise = new Promise
<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 2000);
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {    
    console.log("A seguior con mi vida");
  });

           
//------------------

const promesa = new Promise((resolve, reject) => {
  const exito = false;

  if (exito) {
    resolve("Operación completada con éxito!");
  } else {
    reject("Ocurrió un error 😞");
  }
});

promesa
  .then(resultado => console.log(resultado)) // se ejecuta si se cumple
  .catch(error => console.error(error))     // se ejecuta si hay error
  .finally(() => console.log("Promesa finalizada."));

  // ---

  function cargarDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = Math.random() > 0.5;
      if (ok) resolve("Datos cargados correctamente");
      else reject("Error al cargar los datos");
    }, 2000);
  });
}

cargarDatos()
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error))
  .finally(() => console.log("Fin de la operación"));

// ---

console.log("Inicio");

const pro = new Promise((resolve, reject) => {
  console.log("Dentro de la promesa...");
  
  setTimeout(() => {
    console.log("Ejecutando dentro de setTimeout...");
    resolve("Datos recibidos ✅");
  }, 10000); // 10 segundos
});

pro.then(resultado => console.log("Resultado:", resultado));

console.log("Fin");

// ---

console.log("Inicio del programa");

function obtenerDatosDelServidor() {
  return new Promise((resolve, reject) => {
    console.log("Consultando servidor...");

    setTimeout(() => {
      const exito = Math.random() > 0.5; // 50% de probabilidad de éxito

      if (exito) {
        resolve({
          usuario: "hernan",
          edad: 42,
          pais: "Argentina"
        });
      } else {
        reject("Error: no se pudo conectar con el servidor 😞");
      }
    }, 2000);
  });
}

obtenerDatosDelServidor()
  .then(datos => {
    console.log("✅ Datos recibidos:", datos);
  })
  .catch(error => {
    console.error("❌ Ocurrió un error:", error);
  })
  .finally(() => {
    console.log("🔚 Operación finalizada");
  });

console.log("Fin del programa");