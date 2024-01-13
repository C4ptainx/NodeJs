const fs = require("node:fs/promises");

/*
con el modulo promises podemos usar promesas en ves callbacks osea que este callback lo cambiaremos por promesas
fs.readFile('./archivo.txt', 'utf8', (err, text) => {
console.log('primer texto:', text)
})
*/
console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto:", text);
});

console.log("-> hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf8").then((text) => {
  console.log("segundo archivo:", text);
});
