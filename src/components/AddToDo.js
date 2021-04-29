import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import TodoItem from './TodoItem';
import {ADD_TODO_ITEM} from "../redux/actions/actionTypes";

const AddToDo = () => {
    const dispatch = useDispatch();
    const [todoList, setToDoList] = useState([]);
    const [todo, setToDo] = useState();

    const handleAddToDo = () => {
        dispatch({ type: ADD_TODO_ITEM, payload: todo })
        setToDo('')
    }

    const todoListState = useSelector(state => state.todoReducer);

    useEffect(() => {
        setToDoList(todoListState);
    },[todoListState])
    

    return (
        <>
            <div className="add-todo">
                <input className="add-todo-input" value={todo} onChange={e => setToDo(e.target.value)} />
                <button className="add-todo-btn" onClick={handleAddToDo}>Add</button>
            </div>
            <div className="todos">
                {todoList.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index} />
                ))}
            </div>
        </>
    )
}

export default AddToDo;
