import React,{Component} from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default class Task extends Component{

  state={
    done:false,
    
  }
  clickHandler=()=>{
    this.setState(({done})=>{
      return {done: !done}
     
    })
  }
  render(){
    const {todo,deleteItem}=this.props
    const {value,id, timeStamp}=todo;
    let classNames = ''
    return (
        <li className={classNames} onClick={this.clickHandler} key={id}>
           <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>
                <span className="description">{value}</span>
                <span className="created">{timeStamp}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy" onClick={()=>deleteItem(id)}></button>
            </div>
          </li>
      )
  }
 
}
