const fetch = require('node-fetch'); 

async function getURLS() { 
    let res = await fetch('https://www.passwordrandom.com/query?command=password&format=json'); 
    let data = await res.json(); 
    return data; 
}  

getURLS().then(data => console.log(data.char));

getURLS();