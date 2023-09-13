//Podemos aplicar a tipagem em vários locais diferentes da aplicação.
//Mas nem sempre a tipagem explícita é necessária por conta da inferência de tipos do TS.
//Refatore o código TS a seguir colocando os tipos onde julgar necessário.

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
} */

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