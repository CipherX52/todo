view = document.getElementById("view");
view.addEventListener("click", show);

function show(){
    alert("called");
    document.getElementById("head").style.visibility="visible";
    let content = document.getElementById("content");
    content.style.visibility = "visible";

    // let tasks = "";
//    let tasks =  `<ul class="list-group">
//    <li class="list-group-item">
//      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." onchange="check();">
//      First checkbox
//    </li>
//     <li class="list-group-item">
//     <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
//     Second checkbox
//   </li>
//   <li class="list-group-item">
//     <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
//     Third checkbox
//   </li></ul>`;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);

            var ul = document.createElement("ul");
            ul.className = "list-group";

            for(let i=0;i<response.length;i++){
                var task = response[i];
                var li = document.createElement("li");
                
                if(task.completed == false){
                li.innerHTML =   `<label class="list-group-item">
                                <input class="form-check-input" type="checkbox" value="">
                                ${task.title}</label>`
                }
                else{
                    li.innerHTML =  `<label class="list-group-item">
                    <input class="form-check-input" type="checkbox" value="" checked disabled>
                    ${task.title}</label>`
                }
                ul.appendChild(li);
                console.log(li);
            }
            // console.log(ul);
            content.appendChild(ul);
        }
    }

    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

let completed = 0;

function check(){
    completed += 1;
    if(completed==5){
        alert("Congrats. 5 Tasks have been Successfully Completed!");
    }
}