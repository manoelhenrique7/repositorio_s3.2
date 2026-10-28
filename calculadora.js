function calculadora (op, a, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? "Divisão por 0" : a / b;
        default: return "Operação inválida";  
    }
}

console.log(calculadora('+', 77, 69));
console.log(calculadora('-', 22, 13));
console.log(calculadora('*', 11, 19));
console.log(calculadora('/', 14, 2));
console.log(calculadora('/', 70, 0));

