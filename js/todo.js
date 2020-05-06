"use strict";

/*
TODO darba aprasancio objekto savybes:
- description
- created_on
- deadline
- status: todo, in-progress, done
*/

let todo_list =[
    {
        description: 'Pasigaminti arbatos',
        created_on: '2020-05-06 11:01',
        deadline: '2020-05-06 12:50',
        status: 'todo'
    },
    {
        description: 'Paklausyt paskaita',
        created_on: '2020-05-06 11:02',
        deadline: '2020-05-06 13:00',
        status: 'todo'
    },
    {
        description: 'Spresti CodeWars',
        created_on: '2020-05-05 09:00',
        deadline: '2040-07-07 17:00',
        status: 'todo'
    }
];

for (let i = 0; i < todo_list.length; i++){
    const todo = todo_list[i];
    const sentence = `Darbas kuri reikia padaryti yra "${todo.description}" ir ji reikia atlikti iki ${todo.deadline} siuo metu yra busenoje "${todo.status}".`;
    console.log(sentence);
}