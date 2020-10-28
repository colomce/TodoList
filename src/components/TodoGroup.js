import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';
import {Row, Col} from 'antd';

class TodoGroup extends Component {
  render() {
    const todos = this.props.todos.map((todo) => (
      <TodoItemContainer key={todo.id} todo={todo} />
    ));
    return (
      <Row>
        <Col span={24}>{todos}</Col>
    </Row>
    );
  }
}

export default TodoGroup;