window.onload = function() {
	function get_todos() {
		let todos = new Array();
		let todos_str = localStorage.getItem("todo");
		if (todos_str !== null) {
			todos = JSON.parse(todos_str);
		}
		return todos;
	}

	function add() {
		let task = document.getElementById("task").value;
		let element = {
			title: task,
			done: false
		};
		let todos = get_todos();
		todos.push(element);
		localStorage.setItem("todo", JSON.stringify(todos));
		document.getElementById("task").value = "";
		show();

		return false;
	}

	randoms.onclick = function randoms() {
		let x = get_todos();
		let itemsHelper = [
			{
				title: "React",
				done: false
			},
			{
				title: "Angular",
				done: false
			},
			{
				title: "JavaScript",
				done: false
			}
		];
		x.push(...itemsHelper);
		localStorage.setItem("todo", JSON.stringify(x));
		show();
	};

	clearAll.onclick = function clearAll() {
		let a = [];
		localStorage.setItem("todo", JSON.stringify(a));
		show();
	};

	function remove() {
		let id = this.getAttribute("id");
		let todos = get_todos();
		todos.splice(id, 1);
		localStorage.setItem("todo", JSON.stringify(todos));

		show();

		return false;
	}
	function checkeded() {
		let itemsHelper = get_todos();
		let id = this.getAttribute("id");
		itemsHelper[id[1]].done = !itemsHelper[id[1]].done;
		localStorage.setItem("todo", JSON.stringify(itemsHelper));
		show();
	}

	function show() {
		let todos = get_todos();

		let html = "<ul>";
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].done) {
				html +=
					"<li>" +
					"<strike>" +
					todos[i].title +
					"</strike>" +
					'<button class="chec" id="' +
					"0" +
					i +
					'">done</button>' +
					'<button class="remove" id="' +
					i +
					'">x</button></li>';
			} else {
				html +=
					"<li>" +
					todos[i].title +
					'<button class="chec" id="' +
					"0" +
					i +
					'">done</button>' +
					'<button class="remove" id="' +
					i +
					'">x</button></li>';
			}
		}
		html += "</ul>";

		document.getElementById("todos").innerHTML = html;

		let but = document.getElementsByClassName("remove");
		for (let i = 0; i < but.length; i++) {
			but[i].addEventListener("click", remove);
		}
		let checke = document.getElementsByClassName("chec");
		for (let i = 0; i < checke.length; i++) {
			checke[i].addEventListener("click", checkeded);
		}
	}

	document.getElementById("add").addEventListener("click", add);
	show();
};
