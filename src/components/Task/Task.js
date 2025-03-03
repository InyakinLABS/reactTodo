import React,{Component} from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default class Task extends Component{
constructor(){
  super()
  this.state={
    done:false,
    checked:false,
  }
}
  
  clickHandler=()=>{
    this.setState(({done,checked})=>{
      return {done: !done,
        checked:!checked
      }

     
    })
  }
  render(){
    const done=this.state.done
    const {todo,deleteItem}=this.props
    const {value,id,date}=todo;
    let classNames = ''
    if(done){
      classNames="completed"
      
    }
    const formattedDate=formatDistanceToNow(date,{includeSeconds:true})
    
    return (
        <li className={classNames} onClick={this.clickHandler} key={id}>
           <div className="view">
              <input className="toggle" checked={this.state.checked} readOnly type="checkbox"/>
              <label>
                <span className="description">{value}</span>
                <span className="created">created {formattedDate} ago </span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy" onClick={()=>deleteItem(id)}></button>
            </div>
          </li>
      )
  }
 
}
