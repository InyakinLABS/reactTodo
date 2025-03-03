import React, { Component } from "react";
import Task from "../Task/Task";



class TaskList extends Component{
    render() {
        const { todos,deleteItem } = this.props;
        return (
          <ul className="todo-list">
            {todos.map((todo) => (
              <Task key={todo.id} todo={todo} deleteItem={deleteItem} />
            ))}
          </ul>
        );
      }
}


export default TaskList
