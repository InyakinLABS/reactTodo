import React, { Component } from "react";

export default class NewTaskForm extends Component{
  constructor(){
    super()
    this.state={
      value:'',
    }
  }

    render(){
      const {addItem}=this.props
      const formSubmit=(event)=>{
        event.preventDefault();
        if (this.state.value.trim()) addItem(this.state.value)
        this.setState({value:''})
      }
      return (
        <form className="header" onSubmit={formSubmit} >
        <h1>TODO</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus value={this.state.value}
        onChange={(event)=>{this.setState({value:event.target.value.trim()})}}/>
      </form>
      
    )
  }
}
  