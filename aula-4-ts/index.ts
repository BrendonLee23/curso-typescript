//Enunciado
//Tipar é divertido (há controvérsias) e torna o código mais seguro, no entanto, nem sempre é tão fácil de fazer.
//A função prompt() do navegador pode retornar string | null.
//Tipe o código a seguir e faça as validações e conversões necessárias para que o código seja executado somente se números forem usados.
//Faça quaisquer conversões e alterações necessárias para garantir que o resultado final seja um número. Se não for o caso, exiba uma mensagem dizendo que não é possível executar com tal entrada.



/* function multiply(num1, num2) {
    return num1 * num2;
}

function sum(num1, num2) {
    return num1 * num2;
}

function isEven(num) {
    return num % 2 === 0;
}

function showResult(result) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");
    
    let result = sum(num1,num2);
    result += multiply(1,2);
    showResult(result);
})(); */

// Resolução:

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number): void {
    if (isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1Str: string | null = prompt("First Number");
    const num2Str: string | null = prompt("Second Number");

    // Converte as strings em números e verifica se são do tipo number usando typeof
    const num1: number | null = typeof num1Str === 'string' ? parseFloat(num1Str) : null;
    const num2: number | null = typeof num2Str === 'string' ? parseFloat(num2Str) : null;

    if (num1 !== null && num2 !== null) {
        // Realiza a soma e a multiplicação apenas se ambos os números forem do tipo number
        let result: number = sum(num1, num2);
        result += multiply(1, 2);
        showResult(result);
    } else {
        console.log("Entrada inválida. Por favor, insira números válidos.");
    }
})();