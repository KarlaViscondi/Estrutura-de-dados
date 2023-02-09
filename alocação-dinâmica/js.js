function linkedlist(){
    //a)
    let Node = function(element){
        this.element = element
        this.next = null
    }
    let length = 0
    let head = null

    this.append = function(element){
        let node = new Node(element),
            current
        if(head == null){
            head = node
        }else{
            current = head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        length++
    }
    this.size = function(){
        return length
    }
    this.toString=function(){
        let current = head
        let string = ''
        while(current){
            string += current.element + (current.next ? '->' : '')
            current = current.next
        }
        return string
    }
    this.empty = function(){
        return length == 0
    }
    //b)
    this.removerprimeiro = function(){
        let current = head

        if(this.empty()){
            return -1
        }else{
            head = current.next
            length--
            return current.element
        }
    }
    //c)
    this.AddFirst = function(element) {
        //Cria um novo nó
        let node = {
            element: element,
            next: head
        };
        head = node
        length++
    }
    //d)
    this.Indice = function(element){
        let current = head
        let indice = 0
        while(current){
            if(current.element == element){
                return indice
            }
            indice++
            current = current.next
        }
        return -1
    }
    //e)
    this.Remover = function(element){
        if (element === 0) {
            return this.removerprimeiro();
        } 
        else if ( element > -1 && element < length){
            let current = head
            let previous;
            let i = 0;
            while (i++ < element){
                previous = current
                current = current.next
            }
            previous.next = current.next
            this.length--;
            return current.element
        } else {
            return -1
        }    
    }
}
//a) Mostrar todos os elementos da lista
console.log('a)')
lista = new linkedlist()
lista.append(10)
lista.append(12)
lista.append(13)
console.log(lista.size())
console.log(lista.toString())
lista.append(5)
console.log(lista.size())
console.log(lista.toString())
//b) Remover o primeiro elemento da lista
console.log('\nb)')
console.log(lista.removerprimeiro())
console.log(lista.size())
console.log(lista.toString())
//c) Inserir um elemento no inicio da lista
console.log('\nc)')
lista.AddFirst(8)
console.log(lista.size())
console.log(lista.toString())
//d) Retornar a posição do elemento na lista. Se o elemento não existir retornar -1
console.log('\nd)')
lista.Indice()
console.log(lista.size())
console.log(lista.toString())
console.log(lista.Indice(12))
//e) Remover um elemento de uma posição especifica da lista --- Erro
console.log('\ne)')
lista.Remover()
console.log(lista.size())
console.log(lista.toString())
console.log(lista.Remover(0))
console.log(lista.size())
console.log(lista.toString())
