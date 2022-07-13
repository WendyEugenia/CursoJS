function tabuada() {
    let num = document.getElementById
    ('txtn')
    let tab = document.getElementById ('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digirte um número!')
      
    } else{
        let n = Number(num.value)
        let c = 1 // criar uma nova variavel para ser o contador
        tab.innerHTML = '' //ele limpa o campo para a proxima tabuada
        while (c <= 10){
            let  item = document.createElement
            ('option') // ele faz o item das opções
            item.text = `${n} x ${c} =${n*c}`
            item.value = ` tab${c}`
            
            tab.appendChild(item)  // ele cria um filllho para ser inserida de 1 a 10
            c++
        }

    }
}