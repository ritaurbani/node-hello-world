const word = process.argv[2]
console.log(word)

const vowelArray = ["a", "e", "i", "o", "u"]
let newWord =""
for(let i=0; i<word.length; i++){
 const curLet = word[i]
 if (vowelArray.includes(curLet)) {
    newWord += curLet
}
} console.log(newWord.length)

