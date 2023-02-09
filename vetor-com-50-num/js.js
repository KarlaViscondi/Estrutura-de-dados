function exer4(){

    let vetor = []
    let cont = 0 // quantidade de núm que o usuario que inserir por vezes no vetor
    let vetpar = []
    let vetimpar = []
    let somapar = 0
    let somaimpar = 0
    let somatotal = 0
    let ind1 = 0
    let ind2 = 0
    let aux = 0
    let remove = 0
    let vet = []
    let opcao 

    do{
        opcao = Number(prompt(`1-Digite 1 para informar a quantidade de numeros que deseja inserir no vetor \n 2-Digite 2 para remover um elemento \n 3-Digite 3 para somar pares e ímpares \n 4-Digite 4 para somar todos os elementos \n 0-Digite 0 para sair`))
        switch(opcao){
            case 1: quant(vetor, cont)
                    break
            case 2: remover(vetor, remove, vet)
                    break
            case 3: somar(vetor, vetimpar, vetpar, somapar, somaimpar)
                    break
            case 4: total(vetor, ind1, ind2, somatotal, aux)
                    break
            case 0: alert(`Programa será encerrado`)
        }
    }while(opcao != 0)

}
//A)
function quant(vetor, cont){
    cont = Number(prompt(`Digite a quantidade de números desejada:`))
    if(vetor.length<50){
        for(let i=0; i<cont; i++){
            vetor.push(Number(prompt(`Digite o ${i+1}º número dos ${cont} do vetor:`)))
        }
    }else{
        alert(`O número digitado é maior que 50!`)
    }
    alert(`Você digitou ${vetor.length} números \n Restam ${5-vetor.length} números para serem inseridos`)
    
}
//B)
function remover(vetor, remove, vet){
    remove = Number(prompt(`1-Para remover um elemento pelo seu valor digite 1 \n2-Para remover um elemento pelo índice digite 2`))
    if(remove == 1){
        valor = Number(prompt(`Qual o valor do número que deve ser removido?`))
        vetor = vetor.filter(item => item != valor);
        alert(`O número foi removido \nNovo vetor: ${vetor}`)
    }else if(remove == 2){
        valor = Number(prompt(`Qual o índice do número que deve ser removido?`))
        vet = vetor.splice(vetor.indexOf(valor-1), 1);
        alert(`O número removido foi ${vet}`)
    }else{
        alert(`O número não corresponde com nenhuma opção`)
    }
}
//C) 
function somar(vetor, vetimpar, vetpar, somapar, somaimpar){
    for(let i=0; i<vetor.length; i++){
        if(vetor[i]%2 == 0){
            vetpar.push(vetor[i])
        }else{
            vetimpar.push(vetor[i])
        }
    }
    somapar = vetpar.reduce(function(somapar, vetpar){
        return somapar + vetpar
    }, 0)
    somaimpar = vetimpar.reduce(function(somaimpar, vetimpar){
        return somaimpar + vetimpar
    }, 0)
    alert(`A soma dos números pares é: ${somapar} \nA soma dos números ímpares é: ${somaimpar}`)
}
//D)
function total(vetor, ind1, ind2, somatotal, aux){
    ind1 = Number(prompt(`Digite o primeiro índice`))
    ind2 = Number(prompt(`Digite o último índice:`))
    if(ind1>=0 && ind2<vetor.length){
        aux = vetor.slice(ind1,ind2)
    }else {
        alert(`Os números dos índices não condiz com o vetor`)
    }
    somatotal = aux.reduce(function(somatotal, aux){
        return somatotal + aux
    })
    
    alert(`A soma do ${ind1}º até o ${ind2}º é: ${somatotal}`)

}