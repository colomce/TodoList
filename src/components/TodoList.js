import React, { Component } from 'react';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import TodoGroupContainer from '../containers/TodoGroupContainer';
import {Link } from 'react-router-dom';
import {getTodos} from '../apis/todo';
import Spinner from './Spinner';
import { Row, Col } from 'antd';

class TodoList extends Component {

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
    return (

      <Row>
        <Col span={7}></Col>
        <Col span={10}>
            <div>
            <Link to="/done" className="white link">done</Link>
            <TodoGeneratorContainer/> 
            { this.state.loading ? (<Spinner/>) : (<TodoGroupContainer/>)}
            </div>
        </Col>
        <Col span={7}></Col>
      </Row>

    );
  }
}

export default TodoList;