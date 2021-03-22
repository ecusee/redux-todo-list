import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function todoReducer(state = initialState.todoList, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO_ITEM:
            return [...state, action.payload];
        case actionTypes.REMOVE_TODO_ITEM:
            let updatedList = [...state];
            updatedList.splice(action.payload,1);
            return updatedList;
        default:
            return state;
    }
}