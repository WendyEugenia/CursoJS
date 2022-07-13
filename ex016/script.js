function contar() {
    let ini = document.getElementById ('txt1')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados! ')
     
    } else {
        res.innerHTML = 'Contando: <br>' //br pular linha
        let i = Number(ini.value)
        let f = Number (fim.value)
        let p = Number(passo.value)
        if (p <= 0){ // cao coloquem 0 no inicio
            window.alert('Passo inválido! ')
            p = 1 //seja conciderado 01 o passo
        }
        if(i < f) {
         // contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` // para colocar emoji iniciar com \u minusculo e colchetes e usar sempre crases
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= fim; c-= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}

