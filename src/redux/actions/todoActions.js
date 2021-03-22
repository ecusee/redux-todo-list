import * as actionTypes from './actionTypes';

export function addTodoItem(todoitem) {
    return { type: actionTypes.ADD_TODO_ITEM, payload: todoitem}
}

export function removeTodoItem(todoIndex) {
    return { type: actionTypes.REMOVE_TODO_ITEM, payload: todoIndex }
}