import React, { Component } from "react";
import Task from "../Task/Task";



class TaskList extends Component{
    render() {
        const { todos,deleteItem,editItem,clickHandler} = this.props;
        return (
          <ul className="todo-list">
            {todos.map((todo) => (
              <Task key={todo.id} todo={todo} deleteItem={deleteItem}
              editItem={editItem}
              clickHandler={clickHandler} />
            ))}
          </ul>
        );
      }
}


export default TaskList
