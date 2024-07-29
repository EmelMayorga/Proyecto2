const btnS = document.getElementById("btnS")
const usernameI = document.getElementById("usernameI")
const passwordI = document.getElementById("passwordI")

const valores = JSON.parse(localStorage.getItem("userInfo")||[])

btnS.addEventListener("click", function () {
    for (let index = 0; index < valores.length; index++) {
        if (valores[index].username === usernameI.value && valores[index].password === passwordI.value) {
            window.location.href="http://127.0.0.1:5500/Proyecto2/src/html/taskpage.html"
        } else {
         window.location.href="http://127.0.0.1:5500/Proyecto2/src/html/homepage.html"
        }
    }
})


