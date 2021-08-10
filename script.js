function contar(){
    var inicio = document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var passo = document.querySelector('#txtp')
    var res = document.querySelector('.resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('[Erro] Tente novamente!')
        res.innerHTML = 'Impossivel contar!'
    }
    else{
        res.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c}, `
            }
        }
        else {
            //contagem regressiva
            for(var c = i; c >= f; c -= p)
            res.innerHTML += `${c}, `
        }
    }
    
}