function quicksort(vetor, esquerda, direita){
    let i = esquerda
    let j = direita
    let pivopos = (esquerda + direita)/2
    let pivovalor = parseInt(vetor[pivopos.toFixed()])

    //Partição
    while(i<=j){
        while(parseInt(vetor[i])<pivovalor){
            i++
        }   
        while(parseInt(vetor[j])>pivovalor){
            j--
        }   
        if(i<=j){
            let aux = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = aux
            i++
            j--
        }
    }

    //Recursão
    if(esquerda<j){
        quicksort(vetor, esquerda, j )
    }
    if(i<direita){
        quicksort(vetor,i, direita)
    }
    return vetor
}

let num = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
let num2 = [99, 88, 77, 66, 55, 44, 33, 22, 11, 0]
let num3 = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

console.time()
quicksort(num, 0, num.length-1)
console.timeEnd()

console.time()
quicksort(num2, 0, num2.length-1)
console.timeEnd()

console.time()
quicksort(num3, 0, num3.length-1)
console.timeEnd()

console.log(quicksort(num))
console.log(quicksort(num2))
console.log(quicksort(num3))
