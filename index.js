import fs from 'node:fs';
import path from 'node:path';

// 1. Datos del runtime y manejo de argumentos
const estudianteInput = process.argv[2]; // opción si tu programa solo necesita recibir el nombre de un estudiante. Es más directa:
const estudiante = estudianteInput || 'Estudiante Anónimo';

/*const args = process.argv.slice(2); // conviene si más adelante vas a recibir varios argumentos, por ejemplo nombre, edad y curso:
const estudiante = args[0] || 'Estudiante Anónimo';
*/

const nodeVersion = process.version;
const sistemaOperativo = process.platform;

// 2. Objeto con los datos del videojuego
const videojuego = {
  titulo: 'The Legend of Zelda: Tears of the Kingdom',
  estudio: 'Nintendo EPD',
  anio: 2023,
  plataformas: ['Nintendo Switch', 'PC (Emulador)'],
  multijugador: false
};

// 3. Procesamiento y formateo de datos
const plataformasTexto = videojuego.plataformas.join(', ');
const esMultijugadorTexto = videojuego.multijugador ? 'Sí' : 'No';

// 4. Construcción de la ficha mediante Template Literal
const ficha = `FICHA DE VIDEOJUEGO
===================
Estudiante: ${estudiante}
Node.js: ${nodeVersion}
Plataforma del sistema: ${sistemaOperativo}
Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasTexto}
¿Es multijugador?: ${esMultijugadorTexto}`;

// 5. Creación de rutas y archivo de salida
const carpetaSalida = path.join(process.cwd(), 'salida');
const rutaArchivo = path.join(carpetaSalida, 'ficha-videojuego.txt');

// Asegurar que la carpeta 'salida' exista
fs.mkdirSync(carpetaSalida, { recursive: true });

// Guardar el archivo en disco
fs.writeFileSync(rutaArchivo, ficha, 'utf8');

// 6. Impresión en consola
console.log(ficha);
console.log('\n----------------------------------------');
console.log(`Archivo generado con éxito en: ${rutaArchivo}`);