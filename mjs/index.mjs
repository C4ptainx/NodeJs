//Nota: es recomendable utulizar este metodo para hacer import y export 
/* 
.js -> por defecto utiliza CommonJS
.mjs -> para utilizar ES Modules
.cjs -> para utilizar CommonJS
*/

import { sum /*podemos agregar mas funciones*/ } from './sum.mjs'

console.log(sum(2, 5))