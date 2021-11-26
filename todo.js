view = document.getElementById("view");
view.addEventListener("click", show);

function show(){
    document.getElementById("head").style.visibility="visible";
    
    let content = document.getElementById("content");
    content.style.visibility = "visible";

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
                                <input class="form-check-input" type="checkbox" value="" onclick="check(this);">
                                ${task.title}</label>`
                }

                else{
                li.innerHTML =  `<label class="list-group-item" style="text-decoration:line-through;color:green">
                                <input class="form-check-input" type="checkbox" value="" checked disabled>
                                ${task.title}</label>`
                }

                ul.appendChild(li);
            }
            content.appendChild(ul);
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

let completed = 0;

function check(x){
    var item = x.parentElement;
    if(x.checked){
        completed += 1;
        item.style.color = "darkgreen";
        item.style.textDecoration = "line-through";
    }
    else{
        completed -= 1;
        item.style.color = "black";
        item.style.textDecoration = "none";
    }
    console.log(completed);
    
    if(completed == 5){
        alert("Congrats! 5 Tasks have been Successfully Completed.");
    }    

}