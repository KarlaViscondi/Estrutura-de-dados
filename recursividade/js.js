function principal(){
    let num = Number(prompt(`Entre com um valor:`))
    alert(`Valor fatorado: ${fatorial(num)}`)
}
function fatorial(num){
    if(num<0){
        return-1
    }else if(num==0){
        return 1
    }else{
        return (num * fatorial(num -1))
    }
}

/*Escrever uma função recursiva Fibonacci(N) que receba o inteiro N e 
devolva o N-ésimo termo da sequência de Fibonacci, definida recursivammente por:
Fib(1) = 1
Fib(2) = 1
Fib(N) = Fib(N-1) Fib(N-2), para N = 3,4...*/

function fibonacci(num){
    if(num<0){
        return -1
    }else if(num==1){
        return 1
    }else if(num==2){
        return 1
    }else{
        return(fibonacci(num-1)+fibonacci(num-2))
    }
}
function principal1(){
    let num = Number(prompt(`Entre com um valor:`))
    alert(`O valor de Fibonacci é: ${fibonacci(num)}`)
}

/*Escrever uma função recursiva Potência, que receba uma base real e um expoente
inteiro e retorna o valor da base elevada ao expoente. Escrever também um programa
para testar essa função*/

function potencia(base,expoente){
    if(expoente==0){
        return 1
    }else {
        return(base*potencia(base,expoente-1))
    }
}
function principal2(){
    let num = Number(prompt(`Entre com o valor da Base:`))
    let num1 = Number(prompt(`Entre com o valor do expoente`))
    alert(`O valor da potência é: ${potencia(num,num1)}`)
}

/*Escrever uma função recursiva que impremente a Busca Binária, em um vetor ordenado.
Escrever também um programa para testar essa função*/

function buscabinaria(vet, inicio, fim, x){
    if(inicio>fim){
        return -1
    }else{
        let meio = Math.floor((inicio+fim)/2)
        if(vet[meio]==x){
            return meio
        }else if(x<vet[meio]){
            return buscabinaria(vet, inicio, meio-1, x)
        }else{
            return buscabinaria(vet, meio+1, fim, x)
        }
    }
}

function principal3(){
    let vet = [1,2,3,4,5,6,7,8,9]
    let x = 8
    let inicio = 0
    let fim = vet.length
    resultado = buscabinaria(vet, inicio, fim, x)
    alert(resultado)
}

//Torre de hanoi
function hanoi(n, origem, destino, aux){
    if(n==1){
        console.log("Mova o disco do pino " + origem + " para o pino " + destino)
    }else{
        hanoi(n-1, origem, aux, destino)
        console.log("Mova o disco do pino " + origem + " para o pino " + destino)
        hanoi(n-1, aux, destino, origem)
    }
}
hanoi(4, 'A', 'B', 'C')