let ListHandler = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  list: document.getElementById("list-holder"),
  addLS() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
  getLS() {
    return JSON.parse(localStorage.getItem("tasks"));
  },
  clearLS() {
    localStorage.clear();
  },
  addDefaultValues() {
    this.tasks = [
      { title: "Learn JS", id: 1, done: false },
      { title: "Learn React", id: 2, done: false },
      { title: "Learn Angular", id: 3, done: false }
    ];
    this.addLS();
    this.showTasks();
  },
  clearList(){
    if (this.list) this.list.innerHTML=" ";
  },
  clearListAndLS() {
    this.clearList();
    this.clearLS();
  },
  showTasks() {
    this.clearList();
    let listFragment = document.createDocumentFragment();
    let self = this;
    this.getLS().forEach(function(task) {
      const { title, id, done } = task;
      let li = document.createElement("li");
      let text = document.createTextNode(title);
      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = "&nbsp;&#10007;&nbsp;";
      deleteButton.id = "deleteButton";
      deleteButton.addEventListener("click", function(e) {
        const { target } = e;
        const task = target.parentNode;
        let id = task.dataset.id;
        let values = self.getLS();
        self.tasks = values.filter(i => i.id != id);
        self.addLS();
        task.remove();
      });
      if (done) li.classList.add("crossed");
      li.dataset.id = id;
      li.appendChild(text);
      li.appendChild(deleteButton);
      li.addEventListener("click", function(e) {
        const { target } = e;
        if (target && target.matches("li")) {
          target.classList.toggle("crossed");
          let id = target.dataset.id;
          let values = self.getLS();
          self.tasks = values.map(function(value) {
            if (value.id == id) value.done = !value.done;
            return value;
          });
        }
        self.addLS();
      });
      listFragment.appendChild(li);
    });
    this.list.appendChild(listFragment);
    document.getElementById("list").appendChild(this.list);
  },
  addNewTask() {
    let inputData = document.getElementById("new-task").value;
    if (this.checkInputText(inputData, "Please enter a task")) return;
    let newTask = {};
    let values = this.getLS();
    newTask.title = inputData;
    newTask.id = values.length + 1;
    newTask.done = false;
    values.push(newTask);
    this.tasks = values;
    this.addLS();
    document.getElementById("new-task").value = "";
    this.clearList();
    this.showTasks();
  },

  checkInputText(value, msg) {
    if (value == null || value == "") {
      alert(msg);
      return true;
    }
    return false;
  }
};


