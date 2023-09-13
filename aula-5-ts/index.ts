//O funcionamento da tipagem para arrays é muito semelhante ao que já havíamos visto para variáveis, parâmetros e afins.
//Tipe os arrays a seguir.

/* const numbers = [1,2,3,4,5];
const anwsers = [true, false, false, true, false];
const strings = ["one", "two", "three", "four", "five"];
const mix = [1,"two",3,"four",5];
const floatNumbers = [1.0,2.5,3.0,4.1,5.5]; */

// Resolução:

const numbers: number[] = [1,2,3,4,5];
const anwsers: boolean[] = [true, false, false, true, false];
const strings: string[] = ["one", "two", "three", "four", "five"];
const mix: ( number | string )[] = [1,"two",3,"four",5];
const floatNumbers:  number[] = [1.0,2.5,3.0,4.1,5.5];