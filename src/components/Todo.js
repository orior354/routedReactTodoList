import React from "react";
import PropTypes from 'prop-types'

class Todo extends React.Component {
    render () {
        const {todo, deleteTodo, checkToggle} = this.props;
        return (
            <div>
                <input type='checkbox' 
                checked={todo.completed} 
                onChange={checkToggle.bind(this, todo.id)} 
                /> 
                
                <span>{todo.title}</span>
                
                <button 
                onClick={deleteTodo.bind(this, todo.id)}>
                Delete
                </button>
            </div>
        )
    }
}


Todo.propType = {
    todo: PropTypes.obj,
    deleteTodo: PropTypes.func,
    checkToggle: PropTypes.func,
}


export default Todo;