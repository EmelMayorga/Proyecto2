const textM =document.getElementById("taskCreator");
const btnS = document.getElementById("btnS");
const container = document.getElementById("containerT");
const taskList = document.getElementById("taskList");
const eventList =document.getElementById("eventList");
const selector = document.getElementById("selector");
const taskPriority = document.getElementById("taskPriority");

let textListTask =  JSON.parse(localStorage.getItem("taskText"))||[]
let textListEvent = JSON.parse(localStorage.getItem("eventText"))||[]

btnS.addEventListener("click", function () {
    const selection = selector.value
    localStorage.clear();

    if (selection === 'Task') {
            const containerN =document.createElement("div")
            const pTag = document.createElement("p");
            pTag.id ="TextoP"
            const btnD = document.createElement("button");
            const btnE = document.createElement("button");
            containerN.appendChild(pTag);
            containerN.appendChild(btnD);
            containerN.appendChild(btnE);
            let taskConca = textM.value +" "+ taskPriority.value;
            pTag.innerHTML= taskConca
            btnD.innerHTML = "Delete Tasks"; 
            btnE.innerHTML = "Edit";
            taskList.appendChild(containerN);
            textListTask.push(taskConca);
            localStorage.setItem("taskText", JSON.stringify(textListTask));
        
        if (btnE.addEventListener("click", function () {
            const btnA = document.createElement("button");
            containerN.appendChild(btnA); 
            btnA.innerHTML = "Apply";
            pTag.contentEditable = true;
            pTag.style.backgroundColor = "#666";
            pTag.style.color = "white";
            let = pastValueT =pTag.textContent
        
        if (btnA.addEventListener("click", function () {
            pTag.contentEditable = false;
            let taskListEdited = JSON.parse(localStorage.getItem("taskText"))||[];
            console.log(pastValueT);
            for (let index = 0; index < taskListEdited.length; index++) {
                if (taskListEdited[index]===pastValueT) {
                    console.log(taskListEdited);
                    console.log(pTag.textContent);
                    taskListEdited[index]=pTag.textContent;
                    localStorage.setItem("taskText", JSON.stringify(taskListEdited));
                }
            }
            pTag.style.backgroundColor = "#e7e7e7";
            pTag.style.color = "Black";
            this.after(btnA.remove())
        })){}
        })){}
        if (btnD.addEventListener("click", function () {
            let taskListDeleted =JSON.parse(localStorage.getItem("taskText"))||[];
            const taskListupdated = taskListDeleted.filter(eventTask => eventTask != pTag.textContent);
            localStorage.setItem("taskText", JSON.stringify(taskListupdated));
            btnD.remove()
            pTag.remove()
            btnE.remove()
            alert("Deleted Succesfully");
        })) {}
         
    } else { if (selection === 'Event') {
        const containerN =document.createElement("div")
        const pTag = document.createElement("p");
        pTag.id ="TextoP"
        const btnD = document.createElement("button");
        const btnE = document.createElement("button");
        containerN.appendChild(pTag);
        containerN.appendChild(btnD);
        containerN.appendChild(btnE);
        let eventConca = textM.value +" "+ taskPriority.value;
        pTag.innerHTML = eventConca
        btnD.innerHTML = "Delete Tasks";
        btnE.innerHTML = "Edit";
        eventList.appendChild(containerN);
        textListEvent.push(eventConca);
        localStorage.setItem("eventText", JSON.stringify(textListEvent));

        if (btnE.addEventListener("click", function () {
            const btnA = document.createElement("button");
            containerN.appendChild(btnA);
            btnA.innerHTML = "Apply";
            pTag.contentEditable = true;
            pTag.style.backgroundColor = "#666";
            pTag.style.color = "white";
            let pastValue = pTag.textContent
            console.log(pastValue);
   
                if (btnA.addEventListener("click", function () {
                    pTag.contentEditable = false; 
                    let eventListEdited = JSON.parse(localStorage.getItem("eventText"))||[];
                    console.log(pastValue);
                   for (let index = 0; index < eventListEdited.length; index++) {
                        if (eventListEdited[index] === pastValue) {
                            console.log(eventListEdited);
                            console.log(pTag.textContent);
                             eventListEdited[index] = pTag.textContent;
                             localStorage.setItem("eventText", JSON.stringify(eventListEdited));
                        } 
                    }   
                    console.log(eventListEdited);
                    pTag.style.backgroundColor="#e7e7e7"
                    pTag.style.color = "Black";
                    this.after(btnA.remove());
                })){}
        })){}

        if (btnD.addEventListener("click", function () {
            let eventListDeleted = JSON.parse(localStorage.getItem("eventText"))||[];
            const eventListUpdated = eventListDeleted.filter(taskEvent => taskEvent != pTag.textContent)
            localStorage.setItem("eventText", JSON.stringify(eventListUpdated))
           
            btnD.remove()
            pTag.remove()
            btnE.remove()

            console.log("eventText");
        })) {}
          
        
    } }})
