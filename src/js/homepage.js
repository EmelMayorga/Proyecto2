const username = document.getElementById("username")
const mail = document.getElementById("mail")
const password = document.getElementById("password")
const btnR = document.getElementById("btnR")
const wText = document.getElementById("wText")

let usersList = [];
let userName =username;
let userMail = mail;
let userPass =password;



btnR.addEventListener("click", function () {
    let usernameRegistred = username.value.trim();
    let mailRegistred = mail.value.trim();
    let passwordRegistred = password.value.trim();
        if (usernameRegistred.length == 0 || mailRegistred.length == 0 || passwordRegistred.lenght == 0) {
           wText.innerHTML="Something went wrong, please make sure to fill the spaces required" 
        } else {
            
        let user = {
            username:userName.value,
            mail:userMail.value,
            password:userPass.value
        }
        usersList.push(user)
        console.log(usersList)   
        localStorage.setItem("userInfo", JSON.stringify(usersList))
        wText.innerHTML="Congrats, you are register in the system. We will move you to the Sign In automaticly"
        setTimeout(() => {
            location.href="signin.html"
         }, 5000);
        }
})


