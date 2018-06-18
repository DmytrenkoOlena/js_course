class Task {
    constructor () {
    this.input = document.getElementById("input");   
    this.list = document.getElementById("list");  
    
    this.doneChek = false;
    this.enterTask();
}
    
    enterTask() {
        if (this.input.value) {
        this.li = document.createElement("li");
        this.li.appendChild(document.createTextNode(this.input.value));

        this.delBtn = document.createElement("button");
        this.delBtn.setAttribute("class", "delete");
        this.delBtn.onclick = this.deleteTask.bind(this);
        this.delBtn.innerHTML = "Delete";

        this.doneBtn = document.createElement("button");
        this.doneBtn.setAttribute("class", "done");
        this.doneBtn.onclick = this.doneTask.bind(this);
        this.doneBtn.innerHTML = "Done";

        this.li.appendChild(this.doneBtn);
        this.li.appendChild(this.delBtn);
        this.list.appendChild(this.li);

        this.input.value = "";
        }
    }
    deleteTask() {
        this.li.remove();
    }
    doneTask() {
        if (this.doneChek === false) {
        this.li.style.textDecoration = "line-through";
        this.doneBtn.style.background = "lightgreen";
        this.doneBtn.style.color = "blue";
        this.doneChek = true;
    } else  {
        this.li.style.textDecoration = "none";
        this.doneBtn.style.background ="blue";
        this.doneBtn.style.color = "green";
        this.doneChek = false;
     }
    } 
}
  const btn = document.getElementById("btn");
    btn.addEventListener('click', function() {
        new Task();

})
