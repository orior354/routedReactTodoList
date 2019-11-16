import React from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import About from "./About";
import Todos from "./Todos";

class NavBar extends React.Component {
    render() {
        const {loaded, todos, deleteTodo, checkToggle} = this.props
        return (
            <div className="NavBar">
                <Router>
                    <Link to="/">Home</Link> | 
                    <Link to="/about">About</Link>
                    <Route exact={true} path="/" render={() => (
                        <Todos 
                        loaded={loaded} 
                        todos={todos} 
                        deleteTodo={deleteTodo}
                        checkToggle={checkToggle}
                        />
                    )} />
                    <Route exact={true} path="/about"  component={About}/>
                </Router>
            </div>
        )
    }
}
export default NavBar