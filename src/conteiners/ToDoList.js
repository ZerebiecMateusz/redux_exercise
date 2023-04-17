import React from "react";
import { connect } from "react-redux";

import Todo from "../components/Todo";
import { toggleTodo } from "../actions/todo.actions";

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>
            ))}
        </ul>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = {
    toggleTodo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (TodoList);