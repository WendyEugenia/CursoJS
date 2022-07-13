let num = [4, 8, 2, 9, 3]
num.push(1) // ele acrecenta o que esta no parametro
num.sort() // coloca em ordem alfabetica ou seguencia
console.log(num)
console.log(` O vetor tem ${num.length} posições`) // quantas posições possuem
console.log(`O primeiro valor do vetor é ${num[0]}`) // mostra o inicio o 0 que e o 4
let pos = num.indexOf(8) // para localixar a possição
if (pos == -1) { // se não achou ira informar o erro
    console.log(' O valor não foi encontrado!')// caso de erro
} else {
    console.log(` O valor está na posição ${pos}`)
}