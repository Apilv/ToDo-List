"use strict";

function renderList(list) {
    const listPlace = document.querySelector('.container');
    let HTML = '';
    for (let i = 0; i < list.length; i++) {
        const todoItem = list[i];
        HTML += `
           <div class="item">
                <div class="status ${todoItem.status}"></div>
                <p class="description">${todoItem.description}</p>
                <div class="deadline">${todoItem.deadline}</div>
                <div class="actions">
                    <div class="action remove">Remove</div>
                </div>
            </div>`;
    }
    return listPlace.innerHTML += HTML;
}

//-----Bendras turinys------------

renderList(todo_list); 


//----- Vieno ToDo pasalinimas---------

const removeActions = document.querySelectorAll('.item .action.remove');

for (let i = 0; i < removeActions.length; i++) {
    const removeElement = removeActions[i];
    removeElement.addEventListener('click', actionRemoveTodoItem);
}

function actionRemoveTodoItem(event) {
    const parentItem = event.target.closest('.item');
    parentItem.remove();
}


//-------Viso saraso pasalinimas---------

const BTNremoveAll = document.querySelector('.global-actions > .action.remove');

BTNremoveAll.addEventListener('click', actionRemoveAllTodoItems);

function actionRemoveAllTodoItems(event) {
    const allTodoItems = event.target
        .closest('.container')
        .querySelectorAll('.item');

    for (let i = 0; i < allTodoItems.length; i++) {
        allTodoItems[i].remove();
    }
}