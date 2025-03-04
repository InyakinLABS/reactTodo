import React, { Component } from "react";
import Filters from '../TasksFilter/TasksFilter'




export default class Footer extends Component{
    
    render(){
        const {itemsLeft,newFilter,clearCompleted}=this.props
        return(
            <footer className="footer">
            <span className="todo-count">{itemsLeft} items left</span>
            <Filters newFilter={newFilter}/>
            <button className="clear-completed" onClick={()=>clearCompleted()}>Clear completed</button>
            </footer>
        )
    }
}


