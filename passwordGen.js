let simplePassword = " ";  
const generator = require('generate-password');
const randomWords = require('random-words');
let length; 
let  password;
function genPass(x) {
    password = generator.generate({
        length: x,
        numbers: true, 
        symbols: true
    }); 
}

for(let y= 0; y < 5;y++) {  

    let rWord =  randomWords();
    length = 32 -rWord.length; 
    genPass(length); 
    let combPasswrod = rWord + password;
    console.log(combPasswrod + " " + combPasswrod.length); 
}
//passLength(x);
// 'uEyMTw32v9'
//console.log(password);