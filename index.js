const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
 "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
 "}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("display-box1")
let password2 = document.getElementById("display-box2")


// main password generating function
function passwordGenerator() {
    //get a random number and store it in a variable for use later
    let randomPass = ""
    let randomPass2 = ""
    //console.log(randomChar)
    for(let i = 0; i <= 15; i++){
        let randomChar = Math.floor(Math.random() * characters.length)
        randomPass += characters[randomChar]
        randomChar = Math.floor(Math.random() * characters.length)
        randomPass2 += characters[randomChar]
        
    }
    console.log(randomPass)
    console.log(randomPass2)
    password1.innerHTML = randomPass
    password2.innerHTML = randomPass2
}



