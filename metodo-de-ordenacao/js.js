function principal(){
    let opcao 
    let vetor = []
    do{
        opcao = Number(prompt(`1-Digite 1 para escolher o Vetor Crescente \n2-Digite 2 para escolher o Vetor Decrescente \n3-Digite 3 para escolher o Vetor Embaralhado \n0-Digite 0 para sair`))
        switch(opcao){
            case 1: 
                vetor = []
                for(let i=0; i<1000; i++){
                    vetor.push(i)
                }
                alert(`O vetor original é: \n ${vetor}`)
                ordenacao(vetor)
                break
            case 2: 
                vetor = []
                for(let i=1000; i>0; i--){
                    vetor.push(i)
                }
                alert(`O vetor original é: \n ${vetor}`)
                ordenacao(vetor)
                break
            case 3:
                teste(vetor)
                alert(`O vetor original é: \n ${vetor}`)
                ordenacao(vetor)
                break
            case 0: alert(`Programa será encerrado`)
        }
    }while(opcao != 0)
}
function teste(vetor){
    for (let i = 0 ; i < 1000 ; i++){
       vetor.push(getRandom(0,1000));
    } 
}  
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ordenacao(vetor){
    let vetor1 = Array.from(vetor)
    let vetor2 = Array.from(vetor)

    let tIni1 = performance.now()
    resultado1 = Bubblesort(vetor)
    let tFim1 = performance.now()
    let tempo1 = tFim1 - tIni1
    alert(`O tempo de execução foi: ${tempo1} \n\nO vetor ordenado pelo método Bubblesort é: ${resultado1}`)

    let tIni2 = performance.now()
    resultado2 = Selecao(vetor1)
    let tFim2 = performance.now()
    let tempo2 = tFim2 - tIni2
    alert(`O tempo de execução foi: ${tempo2} \n\nO vetor ordenado pelo método Seleção Direta é: ${resultado2}`)

    let tIni3 = performance.now()
    resultado3 = Insercao(vetor2)
    let tFim3 = performance.now()
    let tempo3 = tFim3 - tIni3
    alert(`O tempo de execução foi: ${tempo3} \n\nO vetor ordenado pelo método Inserção Direta é: ${resultado3}`)
}
//Bubblesort
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
function Selecao(vetor){
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

/*Fazer um programa que execute três métodos de ordenação: bubblesort, seleção direta e inserção direta. 
Os testes devem ser realizados em 3 diferentes vetores de 1000 elementos de números inteiros: aleatório, ordenado e invertido. 
Verificar o tempo de execução de cada caso e analisar os resultados obtidos. */
