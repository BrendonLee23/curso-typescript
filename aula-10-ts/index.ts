/* A função identity() abaixo funciona somente com números.
function identity (value: Number) : Number {
    return value;
}

console.log(identity(1)) // 1
Utilizando Generics, generalize para que funcione como a imagem abaixo:
console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // Hello
console.log(identity<number[]>([1,2,3])); // [1, 2, 3]
 */



// Resolução:

function identity<T> (value: T) : T {
    return value;
}

console.log(identity(1)) // 1
console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // Hello
console.log(identity<number[]>([1, 2, 3])); // [1, 2, 3]