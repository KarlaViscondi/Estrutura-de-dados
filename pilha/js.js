function Pilha() {
    let vet = ['{','[', '(', ')',']','}']
    let pilha = []

    for(let i = 0; i < vet.length; i++){
        var x = vet[i]
        if((x == '[') || (x == '{') || (x == '(')){
            pilha.push(x)
        }else if((x == ']') || (x == '}') || (x == ')')){
            if (pilha.length != 0) {
                y = pilha.pop()
                if(((x == ']') && (y == '[')) || ((x == '}') && (y == '{')) || ((x == ')') && (y == '('))){
                    
                }else{
                    return -1
                }
            }else{
                return -1
            }
        }
    }
    console.log(pilha)
    if(pilha.length == 0){
        return 1
    }else{
        return -1
    }
}
console.log(Pilha())