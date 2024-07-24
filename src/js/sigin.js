const btnS = document.getElementById("btnS")
const usernameI = document.getElementById("usernameI")
const passwordI = document.getElementById("passwordI")
let usersList = []
//usersList.push(JSON.parse("userInfo"))
btnS.addEventListener("click", function () {
    for (let index = 0; index < usersList.length; index++) {
        if (usersList[index].username === usernameI.value && usersList[index].password1 === passwordI.value) {
            alert ("You have join the system")
        } else {
           alert ("Username or Password wrong")
        }
    }
})
console.log(usersList);
console.log(JSON.parse(localStorage.getItem("userInfo")));
