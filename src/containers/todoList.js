import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodos, createTodo } from "../store/todos/action";
// import PropTypes from 'prop-types';

class todoList extends Component {
  state = {
    title: "",
    input: ""
  };
  componentDidMount() {
    const { getTodos } = this.props;

    getTodos();
  }

  handleInput = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(prev => ({
      [name]: value
    }));
  };

  handleSubmit = () => {
    const { createTodo } = this.props;
    const { title, input } = this.state;
    const params = {
      title: title,
      body: input
    };
    createTodo(params);
  };

  render() {
    const { todos } = this.props;
    const { title } = this.state;

    return (
      <div>
        <h1>todos</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <input
            style={{ width: "300px" }}
            onChange={e => this.handleInput(e)}
            type="text"
            name="title"
            placeholder="todo"
            value={title}
          />
          <br />
          <textarea
            style={{ width: "300px", height: "150px" }}
            onChange={e => this.handleInput(e)}
            name="input"
          />
          <br />
          <button style={{ width: "300px" }} type="submit">
            submit
          </button>
        </form>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <div>{todo.title}</div>
              <div>{todo.body}</div>
              <div>{todo.completed && "completed"}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// todoList.propTypes = {};

const mapStateToProps = state => {
  return {
    todos: state.todos.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const postId = 1;
  return {
    getTodos: () => dispatch(getTodos()),
    createTodo: params => dispatch(createTodo(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList);
