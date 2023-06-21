import {createReducer} from "@reduxjs/toolkit";
import {setListToDo, removeToDo, updateToDo, addNewToDo} from "../actions/todo";

export const todo = createReducer([], builder => {
    builder
        .addCase(addNewToDo, (state, action) => addTodo(state, action))
        .addCase(removeToDo, (state, action) => deleteTodo(state, action))
        .addCase(updateToDo, (state, action) => editTodo(state, action))
        .addCase(setListToDo, (state, action) => listToDo(state, action))
})


function listToDo(state, action) {
    return action.payload
}

function addTodo(state, action) {
    return [{
        "userId": Math.random(),
        "id": state.length,
        "title": action.payload.title,
        "completed": false
    }, ...state];
}

function deleteTodo(state, action) {
    const id = action.payload;
    return state.filter((item) => item.id !== id);
}

function editTodo(state, action) {
    const {id , title} = action.payload;
    let firstFindElement = state.filter((item) => item.id === id);
    firstFindElement.title = title
    return state;
}
