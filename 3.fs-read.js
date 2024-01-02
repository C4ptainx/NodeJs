const fs = require('node:fs')

/* 
esto es asincrono, ya que cuando se ejecute no sabremos en que orden lo mostrara
#-----callbacks------#
son funciones que se ejecutan cuando una tarea ah terminado
*/
fs.readFile('./archivo.txt', 'utf-8', (err, stats) => { // <--- ejecuta callback
    console.log('Primer archivo:',stats)
})

console.log('Hacer cosas mientras lee el archivo')

fs.readFile('./archivo2.txt', 'utf-8', (err, stats) =>{
    console.log('Segundo archivo:', stats)
})
