const request = new XMLHttpRequest();  
request.open("GET","https://www.passwordrandom.com/query?command=password"); 
request.send(); 
request.onload = () => { 

    if(request.status === 200) { 

        console.log(JSON.parse(request.response));
    } 
    else { 
        console.log("ERROR");
    }



}