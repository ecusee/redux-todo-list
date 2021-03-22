import React from 'react'

const TodoItem = ({todo,index,removeToDoItem}) => {
    
    if(todo) {
        return (
            <div className="todo-item-container">
                <div className="todo-item">
                    <div className="todo">
                        <p>{todo}</p>
                    </div>
                    <button onClick={() => removeToDoItem(index)}>X</button>
                </div>
            </div>
        )
    }else {
        return null
    }
}

export default TodoItem
