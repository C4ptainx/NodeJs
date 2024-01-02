function sum (a, b){
    return a + b
}

/*Estas son las 2 maneras de exportar un modulo*/
//CommonJs Module Export
module.exports = sum
//Se crea un objeto del module a exportar
module.exports = {
    sum
}