class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  contains(element) {
    return this.stack.includes(element);
  }

  reverse() {
    this.stack.reverse();
  }

  printStack() {
    let st  r = "";

    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
      return str;
    }
  }
}

//usage Examples
let myStack = new Stack();
myStack.push(4);
myStack.push(3);
myStack.push(2);
myStack.pop();

console.log(myStack.printStack());
