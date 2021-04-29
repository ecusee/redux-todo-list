import React from 'react';
import { useDispatch } from "react-redux";
import { REMOVE_TODO_ITEM } from '../redux/actions/actionTypes'

const TodoItem = ({todo,index}) => {
    const dispatch = useDispatch();

    const handleRemoveTodoItem = () => {
        dispatch({ type: REMOVE_TODO_ITEM, payload: index })
    }

    if(todo) {
        return (
            <div className="todo-item-container">
                <div className="todo-item">
                    <div className="todo">
                        <p>{todo}</p>
                    </div>
                    <button onClick={handleRemoveTodoItem}>X</button>
                </div>
            </div>
        )
    }else {
        return null
    }
}

export default TodoItem
