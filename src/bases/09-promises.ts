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