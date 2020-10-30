import api from './api';

export const getTodos = () => {
    return api.get("/api/todos");
}

export const getDoneTodos = () => {
    return api.get("/api/todos?done=true");
}

export const addTodo = (text) => {
    return api.post("/api/todos", {
        text,
        done: false
    });
}

export const deleteTodo = (id) => {
    return api.delete(`/api/todos/${id}`);
}

export const updateTodo = (id, todo) => {
    return api.put(`/api/todos/${id}`, todo);
}