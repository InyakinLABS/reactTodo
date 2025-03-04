import React,{Component} from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'





export default class Task extends Component{
constructor(){
  super()
  this.state={
    editing:false,
    value:''  
  }
}
handleSubmit(event) {
  event.preventDefault();
  const {
    editItem,
    todo: { id },
  } = this.props;
  editItem(id, this.state.value);
  this.setState({ value: '' });
  this.setState({ editing: false });
}
 
  render(){
    const {todo,deleteItem,clickHandler}=this.props
    const {value,id,date,checked}=todo;
    const formattedDate=formatDistanceToNow(date,{includeSeconds:true})
    
    return (
        <li className={checked ? 'completed' : this.state.editing ? 'editing' : null} >
           <div className="view" >
              <input className="toggle" id={id} onChange={(event) => clickHandler(id, event.target.checked)}  checked={checked}  type="checkbox"/>
              <label htmlFor={id}>
                <span className="description">{value}</span>
                <span className="created">created {formattedDate} ago </span>
              </label>
              <button  type="button"
            onClick={() => this.setState(({ editing }) => ({ editing: !editing, value: this.props.todo.value }))}
            className="icon icon-edit" ></button> 
              <button className="icon icon-destroy" onClick={()=>deleteItem(id)}></button>
            </div>


            {this.state.editing && (
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              onChange={(event) => this.setState({ value: event.target.value })}
              type="text"
              className="edit"
              value={this.state.value}
            />
          </form>
        )}


          </li>
      )
  }
 
}
