let x = true;
document.getElementById("submit").onclick = submit; 


function submit() {  

    console.log("YESSS");
    let simple = document.getElementById('simpleInput').value; 
    let medium = document.getElementById('medInput').value; 
    let hard = document.getElementById('hardInput').value; 

    console.log(simple);
    
    /*
    req.open("POST", "http://localhost:3000/submit");
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({"simple": simple,  
                        "medium": medium, 
                        "hard": hard
                                    }));
    */

}
