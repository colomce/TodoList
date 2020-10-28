import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTodo } from '../apis/todo';
import {PlusCircleFilled} from '@ant-design/icons';
import { Form, Row, Col, Button, Input } from 'antd';

class TodoGenerator extends Component {

  constructor(props) {
    super(props);
    this.myForm = React.createRef();
  }
  
  isTodoExist = (text) => {
    const todos = this.props.todos.filter(todo => todo.text === text);
    return todos.length > 0;
  }

  isTodoEmpty = (text) => {
    return text === "";
  }

  onSubmit = (values) => {
    const text = values.text;
    if (this.isTodoEmpty(text)) {
      toast.error("Empty Input!", {
        position: "top-center",
        autoClose: 1000,
        closeOnClick: true
      });
      return;
    }
    if (this.isTodoExist(text)) {
      toast.error(text + " already exist!", {
        position: "top-center",
        autoClose: 1500,
        closeOnClick: true
      });
      return;
    }

    addTodo(text).then(response => {
      this.props.addTodo(response.data);
      this.myForm.current.resetFields();
    });
  }

  render() {
    return (
      <div id="todoGenerator">
        <Form
          ref={this.myForm}
          name="todo"
          onFinish={this.onSubmit}
          layout="horizontal"
          className="todo-form"
        >
          <Row gutter={20}>
            <Col xs={24} sm={24} md={17} lg={19} xl={20}>
              <Form.Item
                name="text"
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Input placeholder="What needs to be accomplished?" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={7} lg={5} xl={4}>
              <Button type="primary" htmlType="submit" block>
                <PlusCircleFilled />
                Add todo
              </Button>
            </Col>
          </Row>
        </Form>
        <ToastContainer />
      </div>
    );
  }
}

export default TodoGenerator;