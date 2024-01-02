// globalthis es una variable global en toda nuestra aplicacion
//console.log(globalThis)

/* 
patron de diseño modulo es separar nuestro codigo en diferentes ficheros,
en los que vamos a importar y exportar, para que el codigo se reutilice
function sum (a, b){
    return a + b
}
*/

/*----Metodos de importar una funcion desde otro fichero js----*/
const sum = require('./sum')
/*CommonJS require module*/
const {sum} = require('./sum')


console.log(sum(1, 2))


