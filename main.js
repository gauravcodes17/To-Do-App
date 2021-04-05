showtask();
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function(){
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim()!=0){
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObj = [];
        }else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(addtaskinputval);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        showtask();
        addtaskinput.value = '';
        alert("Task Added Successfully");
    }
    else{
        alert("Please Enter Your Task");
    }
})

function showtask(){
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {
        html += `<tr>
        <th scope="row">${index+1}.</th>
        <td>${item}</td>
        <td><button type="button" onclick="edittask(${index})" class="edit"><i class="fa fa-edit"></i></buton></td>
        <td><button type="button" onclick="deletetask(${index})" class="delete"><i class="fas fa-trash"></i></buton></td>
        </tr>`;
    });
    addtasklist.innerHTML = html;
}

function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let addsavebtn = document.getElementById("addsavebtn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    addtaskinput.value = taskObj[index];
    addtaskbtn.style.display = "none";
    addsavebtn.style.display = "inline-block";
}

let addsavebtn = document.getElementById("addsavebtn");
addsavebtn.addEventListener("click", function(){
    let webtask = localStorage.getItem("localtask");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let taskObj = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex] = addtaskinput.value;
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
    addtaskinput.value = '';
    addtaskbtn.style.display = "inline-block";
    addsavebtn.style.display = "none";
    alert("Saved Successfully");
})

function deletetask(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}

let deleteall = document.getElementById("deleteallbtn");
deleteall.addEventListener("click", function(){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    if(webtask == null){
        taskObj = [];
    }else{
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
    addtaskinput.value = '';
    addsavebtn.style.display = "none";
    addtaskbtn.style.display = "inline-block";
    alert("All Task Deleted Successfully");
})
