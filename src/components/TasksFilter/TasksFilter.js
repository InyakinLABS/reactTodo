import React, { Component } from "react";
const filterContent=['All','Active','Completed']
const filterButton=filterContent.map((item,index)=>{
    return (
        <li key={index}>
            <button >{item}</button>
        </li>
    )
})

export default class Filters extends Component{
    render(){
        return(
            <ul className="filters">
                {filterButton}
            </ul>
            )
    }
   
}
