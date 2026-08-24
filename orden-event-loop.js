// 1. Mensaje de inicio del programa (código síncrono)
console.log('Comienza el programa');

// 2. setTimeout con 0ms (código asíncrono)
setTimeout(() => {
  console.log('Se ejecuta la tarea programada');
}, 0);

// 3. Mensaje de fin del código principal (código síncrono)
console.log('Termina el código principal');