const username = document.getElementById("username")
const mail = document.getElementById("mail")
const password = document.getElementById("password")
const btnR = document.getElementById("btnR")

btnR.addEventListener("click", function () {
        let user = {
            username:username.value,
            mail:mail.value,
            password1:password.value
        }
        localStorage.setItem("userInfo", JSON.stringify(user));
})

console.log(JSON.parse(localStorage.getItem("userInfo")));

