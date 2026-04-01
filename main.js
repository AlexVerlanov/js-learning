const todolistId_1 = crypto.randomUUID();
const todolistId_2 = crypto.randomUUID();

let todolists = [
    {
        id: todolistId_1,
        title: "What to learn",
        filter: "all",
        tasks: [
            { id: crypto.randomUUID(), title: "HTML", isDone: false },
            { id: crypto.randomUUID(), title: "CSS", isDone: true },
            { id: crypto.randomUUID(), title: "JS/TS", isDone: true },
        ],
    },
    {
        id: todolistId_2,
        title: "What to buy",
        filter: "all",
        tasks: [
            { id: crypto.randomUUID(), title: "Milk", isDone: false },
            { id: crypto.randomUUID(), title: "Bread", isDone: true },
        ],
    },
];

function createTodolist(title) {
    const newTodolist = {
        id: crypto.randomUUID(),
        title: title,
        filter: "all",
        tasks: [],
    };

    todolists = [...todolists, newTodolist];
}

createTodolist("New JS lesson");

function renderTodolists() {
    const app = document.getElementById("app");

    if (!app) return;

    app.innerHTML = "";

    todolists.forEach((todolist) => {
        const todolistBlock = document.createElement("div");
        todolistBlock.style.marginBottom = "20px";
        todolistBlock.style.padding = "10px";
        todolistBlock.style.border = "1px solid #ccc";
        todolistBlock.style.borderRadius = "8px";

        const title = document.createElement("h2");
        title.textContent = todolist.title;

        todolistBlock.appendChild(title);

        if (todolist.tasks.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.textContent = "No tasks yet";
            todolistBlock.appendChild(emptyMessage);
        } else {
            const list = document.createElement("ul");

            todolist.tasks.forEach((task) => {
                const item = document.createElement("li");
                item.textContent = `${task.title} — ${task.isDone ? "done" : "not done"}`;
                list.appendChild(item);
            });

            todolistBlock.appendChild(list);
        }

        app.appendChild(todolistBlock);
    });
}

renderTodolists();

console.log("Todolists:", todolists);