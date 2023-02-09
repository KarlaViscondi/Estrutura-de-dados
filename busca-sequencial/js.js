function exer(){
    let vetor = [1,2,3,4,5,6,7]
    let num = 8
    let resultado = buscar(vetor, num)
    
    if(resultado!=-1){
        alert(`O número ${num} foi encontrado na posição ${resultado+1}`)
    }else {
        alert(`O número não foi encontrado no vetor`)
    }

}

function buscar(vetor, num){
    for(let i=0; i<vetor.length; i++){
        if(vetor[i] == num){
            return i
        }
    }
    return -1
}

function exer1(){
    let vetor = [1,5,10,15,20]
    let num = 11
    let resultado = pesquisar(vetor, num)

    if(resultado!=-1){
        alert(`O número ${num} foi encontrado na posição ${resultado+1}`)
    }else {
        alert(`O número não foi encontrado no vetor`)
    }
}

function pesquisar(vetor, num){
    for(let i=0; i<vetor.length; i++){
        if(vetor[i] == num){
            return i
        }else if(vetor[i] > num){
            return -1
        }
    }
    return -1 //para não passar o limite do vetor
}
function exer2(){
    let vetor = [7,9,12,20,31]
    let num = 11
    let resultado = binaria(vetor, num)

    if(resultado!=-1){
        alert(`O número ${num} foi encontrado na posição ${resultado+1}`)
    }else {
        alert(`O número não foi encontrado no vetor`)
    }
}

function binaria(vetor, valorBusca){
    let ini = 0
    let fim = vetor.length - 1
    
    while(fim>=ini){
        let meio = Math.floor((ini + fim)/2) // para converter para num inteiro
        if(valorBusca == vetor[meio]){
            return meio
        }else if(valorBusca> vetor[meio]){
            ini = meio + 1
        }else {
            fim = meio - 1
        }
    }
    return -1
}

// 06/09/2022

function vetor1000(){
    let vetor = []
    let num = 1998
    for(i=0; i<2000; i+=2){
        vetor.push(i)
    }
    let tIni = performance.now()
    resultado = pesquisar(vetor,num) //sequencial
    let tFim = performance.now()
    let tempo = tFim - tIni

    if(resultado!=-1){
        alert(`O número ${num} foi encontrado na posição ${resultado+1}`)
        alert(`O tempo de busca foi: ${tempo}`)
    }else {
        alert(`O número não foi encontrado no vetor`)
    }

    let tIni2 = performance.now()
    resultado1 = binaria(vetor, num) //binaria
    let tFim2 = performance.now()
    let tempo2 = tFim2 - tIni2
    if(resultado1!=-1){
        alert(`O número ${num} foi encontrado na posição ${resultado1+1}`)
        alert(`O tempo de busca foi: ${tempo2}`)
    }else {
        alert(`O número não foi encontrado no vetor`)
    }
}

//Tempo de busca
function tempo(){

}

//Ordenação
//Bubblesort

function BubblePrin(){
    let vetor = [4,3,2,1]
    let resultado = Bubblesort(vetor)
    alert(resultado)
}

function Bubblesort(vetor){
    for(i=0; i<vetor.length-1; i++){
        let aux
        for(j=0; j<vetor.length-i-1; j++){
            if(vetor[j]>vetor[j+1]){
                aux = vetor[j]
                vetor[j] = vetor[j+1]
                vetor[j+1] = aux
            }
        }
    } return vetor
}

//Seleção direta
function Selecao(){
    let vetor = [4,6,2,7,1]
    resultado = HeapPrin(vetor)
    alert(resultado)
}

function HeapPrin(vetor){
    for(let i=0; i<vetor.length; i++){
        let menor = vetor[i]
        let pos = i
        for(let j=i+1; j<vetor.length; j++){
            if(vetor[j]<menor){
                menor = vetor[j]
                pos = j
            }
        }
        let aux = vetor[i]
        vetor[i] = vetor [pos]
        vetor[pos] = aux
    }
    return vetor
}

//Inserção direta
function InsercaoPrin(){
    let vetor = [4,6,2,7,1]
    resultado = Insercao(vetor)
    alert(resultado)
}

function Insercao(vetor){
    for(let i=1; i<vetor.length; i++){
        for(let j=0; j<i; j++){
            if(vetor[i]<vetor[j]){
                let aux = vetor[i]
                for(let k=i; k>j; k--){
                    vetor[k] = vetor[k-1]
                }
                vetor[j] = aux
            }
        }
    } return vetor
}
