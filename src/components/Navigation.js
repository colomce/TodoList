import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                    <li><Link to="/">TodoList</Link></li>
                    <li><Link to="/done">Completed</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;