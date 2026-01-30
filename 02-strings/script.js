// 1. Dichiarazione di variabili
// Crea una variabile chiamata name e assegnale il tuo nome.
let my_name = 'Angelo';

// Stampa il valore di nome nella console.
console.log(my_name); //ho dovuto usare my_name, perchè 'name' è deprecato

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
// un numero, una stringa e un valore booleano.
// Stampa tutti i valori nella console.
let number = 3.14;
console.log(number);
console.log(typeof number);

let text = 'Ciao';
console.log(text);
console.log(typeof text);

let bool = 3;
let x = 2;
console.log(bool == x);
console.log(bool != x);
console.log(bool > x);
console.log(bool < x);

// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA

const fullName = firstName + ' ' + lastName;
console.log(fullName); // Output: "Jane Smith"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = alphabet.length;
console.log(numberOfLettersInAlphabet); // Output: 26