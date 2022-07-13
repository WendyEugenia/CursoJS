let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // em ordem

//console.log(valores)

/*
console.log(valores [0])
console.log(valores [1])
console.log(valores [2])
console.log(valores [3])
console.log(valores [4])
console.log(valores [5])
console.log(valores [0]) //maneira errada

for ( let pos = 0; pos < valores.length; pos++){ // essa variavel eu crio
    console.log(` Aposição ${pos} tem o valor ${valores[pos]}`)

} // e simples mais e possivel deixar mais simples ainda

*/

for (let pos in valores){
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}