const textM =document.getElementById("taskCreator");
const btnS = document.getElementById("btnS");
const container = document.getElementById("containerT");
const taskList = document.getElementById("taskList");
const eventList =document.getElementById("eventList");
const selector = document.getElementById("selector");
const taskPriority = document.getElementById("taskPriority");

let textListTask =  [];
let textListEvent = [];

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

        if (btnD.addEventListener("click", function () {
            textListTask.filter(textListTask);
            taskList.removeChild(containerN);
            localStorage.setItem("taskText", JSON.stringify(textListTask));
            alert("Deleted Succesfully");
        })) {}
        
        if (btnE.addEventListener("click", function () {
            const btnA = document.createElement("button");
            containerN.appendChild(btnA); 
            btnA.innerHTML = "Apply";
            pTag.contentEditable = true;
            pTag.style.backgroundColor = "#666";
            pTag.style.color = "white";
        
        if (btnA.addEventListener("click", function () {
            pTag.contentEditable = false;
            pTag.style.backgroundColor = "White";
            pTag.style.color = "Black";
            this.after(btnA.remove())
        })){}
        })){}
         
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
        

        if (btnD.addEventListener("click", function () {
            let evenListDeleted = textListEvent.JSON.parse(getItem)
            eventList.removeChild(containerN);
            alert("Deleted Succesfully");
        })) {}
        
        if (btnE.addEventListener("click", function () {
            const btnA = document.createElement("button");
            containerN.appendChild(btnA);
            btnA.innerHTML = "Apply";
            pTag.contentEditable = true;
            pTag.style.backgroundColor = "#666";
            pTag.style.color = "white";


                if (btnA.addEventListener("click", function () {
                    pTag.contentEditable = false;
                    pTag.style.backgroundColor = "White";
                    pTag.style.color = "Black";
                    this.after(btnA.remove());
                })){}
             


        })){}
    } }})
