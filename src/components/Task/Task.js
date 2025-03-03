import React,{Component} from "react";
import "./task.css"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default class Task extends Component{
  render(){
    const {value, id, timeStamp}=this.props;

    return (
      <li className="todo-list-item" key={id}>
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>
              <span className="description">lalala{value}</span>
              <span className="created">created {timeStamp} ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
          <input type="text" className="edit" value="Editing task"/>
      </li>)
  }
 
}
