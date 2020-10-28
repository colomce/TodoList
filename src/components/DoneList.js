import React, { Component } from 'react';
import TodoItemView from './TodoItemView';
import { getTodos } from '../apis/todo';
import Spinner from './Spinner';
import {Row, Col} from 'antd';

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

            <Row>
                <Col span={7}></Col>
                <Col span={10}>
                    <div>
                        <div></div>
                        {this.state.loading ? (<Spinner/>) : doneTodo}
                    </div>
                </Col>
                <Col span={7}></Col>
            </Row>

        );
    }
}

export default DoneList;