import React, { Component } from 'react';
import {deleteTodo, getTodos, updateTodo } from '../apis/todo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CheckSquareOutlined, RadiusBottomleftOutlined} from '@ant-design/icons';

class TodoItem extends Component {

  render() {

    const todoIsDone = this.props.todo.done;

    const onClick = () => {
      const { id, text, done} = this.props.todo;
      const updatedTodo = {id, text, done: !done};
      updateTodo(id, updatedTodo).then(response => {
        getTodos().then(response => {
          this.props.getTodos(response.data);
          if (this.props.todo.done) {
            toast.success(this.props.todo.text + " is marked as finished.", {
              autoClose: 1500,
              closeOnClick: true
            });
          } else {
            toast.error(this.props.todo.text + " is marked as unfinished.", {
              autoClose: 1500,
              closeOnClick: true
            });
          }
        });
      }).catch( error => {
        toast.error(error.response.data.message, {
          autoClose: 1500,
          closeOnClick: true
        });
      }) ;
    }

    const onDelete = (id) => {
      deleteTodo(id).then(response => {
        getTodos().then(response => {
          this.props.getTodos(response.data);
          toast.success("Successfully removed " + this.props.todo.text + ".", {
            autoClose: 1500,
            closeOnClick: true
          });
        })
      }).catch( error => {
        toast.error(error.response.data.message, {
          autoClose: 1500,
          closeOnClick: true
        });
      });
    }

    const style = {
      textDecoration: todoIsDone ? 'line-through' : '',
      color: todoIsDone ? 'gray' : 'white'
    }
    return (
      <div>
        <div id="todoItem">
          <div className="col-92">
            <span onClick={onClick}>
              {this.props.todo.done ? <CheckSquareOutlined /> : <RadiusBottomleftOutlined />}
              &nbsp;
            </span>
            <span style={style}>{this.props.todo.text}</span>
          </div>
          <span className="col-8" onClick={() => onDelete(this.props.todo.id)}><span id="deleteIcon">X</span></span>
        </div>
      </div>
    );
  }
}

export default TodoItem;