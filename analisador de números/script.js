var numadd = document.getElementById(`txtn`)
var pgra = document.getElementById(`selgra`)
let res = document.getElementById(`res`)
let valores = []

function vNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inGrava(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(vNumero(numadd.value) && !inGrava(numadd.value, valores)){
        valores.push(Number(numadd.value))
        let item = document.createElement(`option`)
        item.innerHTML = `valor ${numadd.value} adicionado`
        pgra.appendChild(item)
        res.innerHTML = ``
    }else{
        window.alert(`Valor invalido ou já se encontra na lista`)
    }
    numadd.value = ''
    numadd.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert(`Adicione valores antes de finalizar`)
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            media += valores[pos]/tot
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos] }
        
        res.innerHTML = ``
        res.innerHTML += `Foram analizados ${tot} números diferentes<br>`
        res.innerHTML += `O menor valor adicionado foi ${menor}<br>`
        res.innerHTML += `O maior valor adicionado foi ${maior}<br>`
        res.innerHTML += `A soma de todos os números é de ${soma}<br>`
        res.innerHTML += `A média de todos os números é de ${media}<br>`
    }
}