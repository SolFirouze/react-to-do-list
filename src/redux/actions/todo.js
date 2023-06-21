import {createAction} from "@reduxjs/toolkit";

export const addNewToDo = createAction('Add');
export const removeToDo = createAction('Remove');
export const updateToDo = createAction('Update');
export const setListToDo = createAction('setListToDo');

