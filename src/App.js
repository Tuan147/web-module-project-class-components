import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const toDoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      toDoList: toDoList
    }
  }

  handleClearTask = () => {
    this.setState({
      ...this.state,
      TodoList: this.state.toDoList.filter(item => {
        return !item.completed;
      })
    });
  };

  handleAddTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      toDoList: [...this.state.toDoList, newTask]
      })
  };

  handleToggleTask = (selectedTask) => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.map(item => {
        if (item.id === selectedTask.id) {
          return ({
            ...item,
            completed: !item.completed
          })
        } else {
          return item;
        }
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>To Do List</h1>
        <TodoForm handleAddTask={this.handleAddTask}/>
        </div>
        <TodoList handleToggleTask={this.handleToggleTask} toDoList={this.state.toDoList} /> 
        <button onClick={this.handleClearTask} className="clear-btn">Clear Task</button>
      </div>
    );
  }
}

export default App;
