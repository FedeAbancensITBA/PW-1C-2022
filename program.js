let hola = ["a", "b", "c", "d", "e"];
let variable = "d"

let i = hola.indexOf(variable);
let hola2 = hola.slice(i + 1);
let hola3 = hola.slice(0, i);
let final = hola3.concat(hola2);
console.log(final);