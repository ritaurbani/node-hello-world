const num = parseInt(process.argv[2]);
console.log(num);
console.log(`print the number ${num}`)


// let result = "dispari";
// if (num % 2 === 0) {
//     result = "pari";
// }

// console.log (result)

let message;

if (num % 2 === 0) {
    message = "Pari"
} else {
    message = "Dispari"
}

console.log(message)

