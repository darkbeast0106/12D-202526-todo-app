export const todoItems = [];

export function addTodo(item) {
    todoItems.push(item);
    storeData();
}

function storeData() {
    localStorage.setItem("todo-list.v1", JSON.stringify(todoItems));
}

export function reloadData() {
    const valueInStorage = localStorage.getItem("todo-list.v1");
    if (valueInStorage) {
        todoItems.push(...JSON.parse(valueInStorage));
    }
}