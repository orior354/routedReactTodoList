import React from 'react';
import axios from 'axios';

import NavBar from "./components/NavBar"

import "./App.css";

class App extends React.Component {

  state = {
    loaded: false,
    todos: []
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      this.setState({todos: res.data, loaded: true});
    })
    .catch(e => {
      console.log(e)
    });
  }

  render () {
    return (
    <div className="App">
      <NavBar 
      loaded={this.state.loaded} 
      todos={this.state.todos} 
      deleteTodo={this.deleteTodo}
      checkToggle={this.checkToggle}
      />
    </div>
    )
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      console.log(res);
      this.setState({
        loaded: true,
        todos: this.state.todos.filter(todo => todo.id !== id )
      });
    })
    .catch((err) => {
      console.log(err)
    })
  }

  checkToggle = (id) => {
    this.setState({
      loaded: true,
      todo: this.state.todos.map(item => {
        if(item.id !== id) return item
        item.completed = !item.completed;
        return item;
      })
    })
    console.log(this.state, id)
  }
}

export default App;
