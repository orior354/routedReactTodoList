import React from "react";
import PropTypes from "prop-types"

import LoadingData from "./LoadingData";
import AddTodoForm from "./AddTodoForm"
import Todo from "./Todo";

class Todos extends React.Component {
   
    render() {
        const {loaded, todos, deleteTodo, checkToggle} = this.props;
        
        return (
            <div>
                <AddTodoForm />
                { !loaded ? <LoadingData/> :  todos.map(item => (
                    <Todo 
                    todo={item}
                    key={item.id}
                    deleteTodo={deleteTodo}
                    checkToggle={checkToggle}
                    />
                ))}
            </div>
        )
    }
}

Todos.propTypes = {
    loaded: PropTypes.bool,
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    checkToggle: PropTypes.func,
}

export default Todos;