const username = document.getElementById("username")
const mail = document.getElementById("mail")
const password = document.getElementById("password")
const btnR = document.getElementById("btnR")

let usersList = []
btnR.addEventListener("click", function () {

        let user = {
            username:username.value,
            mail:mail.value,
            password:password.value
        }
        usersList.push(user)
        console.log(usersList)   
        localStorage.setItem("userInfo", JSON.stringify(usersList))
        
})