let simplePassword = " ";  
const generator = require('generate-password');
const randomWords = require('random-words');
let x; 
let  password 
function genPass(x) {
    password = generator.generate({
        length: x,
        numbers: true, 
        symbols: true
    }); 
}

let rWord =  randomWords();
x = 64 -rWord.length; 
genPass(x); 
let combPasswrod = rWord + password;

console.log(combPasswrod + " " + combPasswrod.length); 
//passLength(x);
// 'uEyMTw32v9'
//console.log(password);