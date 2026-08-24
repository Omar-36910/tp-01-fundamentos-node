# Trabajo práctico 01

## Descripción
Este proyecto consta de dos scripts desarrollados en Node.js para practicar los fundamentos de su runtime, el manejo de archivos y la asincronía mediante el Event Loop:

1. **`index.js`**: Lee argumentos de la línea de comandos (o asigna valores por defecto), procesa la información de un videojuego mediante manipulación de tipos de datos (arreglos, booleanos y cadenas) y construye una ficha descriptiva. Posteriormente, muestra la ficha en la consola y la guarda físicamente en un archivo de texto utilizando módulos nativos de Node.js.
2. **`orden-event-loop.js`**: Un script demostrativo que demuestra conceptualmente cómo funciona el Event Loop de Node.js al programar una tarea asíncrona mediante un temporizador `setTimeout` de cero milisegundos.

---

## Cómo ejecutar

Para ejecutar los scripts, abre tu terminal en la carpeta raíz del proyecto y corre los siguientes comandos:

### 1. Ejecutar la ficha de videojuego (`index.js`)

* **Sin argumentos** (usará el nombre por defecto *Estudiante Anónimo*):
  ```bash
  node index.js