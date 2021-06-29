const fetch = require('node-fetch'); 
let simplePassword = " ";  

const generator = require('generate-password');
async function getSimplePassword(x) { 
    let res = await fetch('https://www.passwordrandom.com/query?command=password&format=json'); 
    let data = await res.json();  
    x += data.char[0];  


    console.log(x); 

}  


async function getRandomWord() { 

    let res = await fetch('https://random-words-api.vercel.app/word'); 
    let data = await res.json();  
    console.log(data[0].word);
 

} 

//getRandomWord().then(data => (simplePassword = data.word));  

getRandomWord();

//console.log(simplePassword); 


var password = generator.generate({
	length: 30,
	numbers: true, 
    symbols: true
});

// 'uEyMTw32v9'
//console.log(password);