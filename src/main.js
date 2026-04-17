document.addEventListener("DOMContentLoaded", main);
const todoItems = [];

function main() {
  const app = document.getElementById("app");
  app.appendChild(todoForm());
  app.appendChild(todoListComponent());
  renderTodoList();
}

function renderTodoList() {
  const list = document.getElementById("todo-list");
  list.textContent = "";
  todoItems.forEach(item => {
    list.appendChild(todoListItem(item));
  });
}

function todoListItem(title) {
  const listItem = document.createElement("li");
  listItem.innerText = title;
  return listItem;
}

function todoForm() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.type = "text"  
  const button = document.createElement("button");
  button.type = "submit"
  button.innerText = "Hozzáad"
  form.addEventListener("submit", event => {
    event.preventDefault();
    const content = input.value.trim();
    if (content.length > 0 && !todoItems.includes(content)) {
      todoItems.push(content);
      input.value = "";
      renderTodoList();
    }
  })
  form.append(input, button);
  return form;
}

function todoListComponent() {
  const list = document.createElement("ul");
  list.id = "todo-list";
  return list;
}