import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importacion de Component
import Navegation from "./components/Navegation";
import TodoForm from "./components/TodoForm";

//import todo desde el json
import {todos} from "./todos.json";

class App extends Component {
  constructor(){
    super();
    this.state={
      todos
    }
    this.handleAddTodo=this.handleAddTodo.bind(this);
  }
handleAddTodo(todo){
  this.setState({
    todos:[...this.state.todos,todo]
  })
}
removeTodo(index){
  this.setState({
    todos:this.state.todos.filter((e,i)=>{
      return i !== index
    })
  })
}
  render() {
  const todos=  this.state.todos.map((todo, i)=>{
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                  {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger"
              onClick={this.removeTodo.bind(this,i)}
              >Delete</button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <Navegation title="TASKS" tareas={this.state.todos.length} />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            <div className="col-md-8">
              <div className="row">
                    {todos}
                </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
