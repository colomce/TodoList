import React, { Component } from 'react';
import TodoItemView from './TodoItemView';
import { Link } from 'react-router-dom';
import { getTodos } from '../apis/todo';
import Spinner from './Spinner';

class DoneList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    componentDidMount() {
        this.setState({loading: true});
        getTodos().then(response => {
            this.props.getTodos(response.data);
            this.setState({loading: false});
        });
    }

    render() {
        const doneTodo = this.props.todos
            .filter((todo) => todo.done)
            .map((todo) => (<TodoItemView key={todo.id} todo={todo}/>));
        return (
            <div>
                <h1 className="white">Done</h1>
                <Link to="/" className="white link">todo</Link>
                <div></div>
                {this.state.loading ? (<Spinner/>) : doneTodo}
            </div>
        );
    }
}

export default DoneList;