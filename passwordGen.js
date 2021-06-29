const fetch = require('node-fetch'); 
let simplePassword = " "; 
async function getSimplePassword(x) { 
    let res = await fetch('https://www.passwordrandom.com/query?command=password&format=json'); 
    let data = await res.json();  
    x += data.char[0];  


    console.log(x); 

}  


async function getRandomWord() { 

    let res = await fetch('https://random-words-api.vercel.app/word'); 
    let data = await res.json();  
    getSimplePassword(data[0].word);
 

} 

//getRandomWord().then(data => (simplePassword = data.word));  

getRandomWord();

//console.log(simplePassword);