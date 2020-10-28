import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTodo } from '../apis/todo';

class TodoGenerator extends Component {

  isTodoExist = (text) => {
    const todos = this.props.todos.filter(todo => todo.text === text);
    return todos.length > 0;
  }

  isTodoEmpty = (text) => {
    return text === "";
  }

  onSubmit = (event) => {
    event.preventDefault();
    const text = event.target.todoInput.value;
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
      event.target.todoInput.value = "";
    });
  }

  render() {
    return (
      <div id="todoGenerator">
        <form onSubmit={this.onSubmit}>
          <span>
            <input type="text" name="todoInput" id="todoInput" />
            <input type="submit" value="Add Item" id="todoSubmit" />
          </span>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default TodoGenerator;