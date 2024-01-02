const fs = require('node:fs')

/* ------ asincrono ------*/
const stats = fs.statSync('./archivo.txt') 
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)

//Path: 3.http.js