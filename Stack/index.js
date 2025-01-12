class Stack{
    constructor(){
        this.stack = []
    }

    push(data){
        this.stack.push(data)
    }

    pop(){
        this.stack.pop()
    }

    peek(){
       return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0
    }
}
