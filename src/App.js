import React from "react";
import Task from "./components/task";
import TaskInput from "./components/taskInput";

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      tasks: [
        {
          id:0,
          task:"Сходить в магаз",
          completed:false
        },{
          id:1,
          task:"Сделать уборку",
          completed:true
      }
    ]
  };
}

    doneTask = id => {
      const index = this.state.tasks.map(task => task.id).indexOf(id);
      this.setState (state => {
        let { tasks } = state;
        tasks[index].done = true;
        return tasks;
      });
    };
    deleteTask = id => {
      const index = this.state.tasks.map(task => task.id).indexOf(id);
      this.setState (state => {
        let { tasks } = state;
        delete tasks[index];
        return tasks;
      })
    }

    addTask = task => [
      this.setState(state => {
        let { tasks } = state;
        tasks.push({
          id: tasks.length !==0 ? task.lenth : 0,
          task: task,
          completed: false
        });
        return tasks;
      })
    ]

    render () {
      const { tasks } = this.state;
      const activeTasks = tasks.filter(task => !task.completed);
      const completedTasks = tasks.filter (task => task.completed);

      return (
        <div className="App">
          <h1 className="title">Active tasks : {activeTasks.length} </h1>
          {[...activeTasks, ...completedTasks].map(task => (
            <Task 
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task= { task }
            key= { task.id }>  
            </Task>
          ))}
          <TaskInput addTask={this.addTask}></TaskInput>
        </div>
      );
    }
  }

export default App;
