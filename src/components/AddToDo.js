import React, { useState,useEffect } from 'react'
import { bindActionCreators } from 'redux';
import TodoItem from './TodoItem';
import * as todoActions from '../redux/actions/todoActions';
import { connect } from 'react-redux';

const AddToDo = ({ actions, todoListState }) => {
    const [todoList, setToDoList] = useState([]);
    const [todo, setToDo] = useState();

    const handleAddToDo = () => {
        actions.addTodoItem(todo);
        setToDo('')
    }

    useEffect(() => {
        setToDoList(todoListState)
    },[todoListState])
    

    return (
        <>
            <div className="add-todo">
                <input className="add-todo-input" value={todo} onChange={e => setToDo(e.target.value)} />
                <button className="add-todo-btn" onClick={() => handleAddToDo()}>Add</button>
            </div>
            <div className="todos">
                {todoList.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index} removeToDoItem={actions.removeTodoItem} />
                ))}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        todoListState: state.todoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            addTodoItem: bindActionCreators(todoActions.addTodoItem, dispatch),
            removeTodoItem: bindActionCreators(todoActions.removeTodoItem, dispatch)
        }
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(AddToDo)
