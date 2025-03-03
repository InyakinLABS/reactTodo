import React ,{Component}from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../footer/footer";
import '../../css/app.css'

class App extends Component{
    defId=0;
    state={
        todoData:[]
    }

    deleteItem=(id)=>{
        this.setState(({todoData})=>{
            const idx=todoData.findIndex((el)=>el.id===id)
            todoData.splice(idx,1);
            const before=todoData.slice(0,idx)
            const after=todoData.slice(idx)
            return{
                todoData:[...before,...after]
            }
        })
    }
    addItem=(value)=>{
        const newItem={
            value:value,
            id:this.defId++,
            checked:false,
            date:new Date(),
        }
        this.setState(({todoData})=>{
           return{
            todoData:[...todoData,newItem]
           } 
        })
    }

    
    render(){
    return (
        <div className="todoapp">
            <NewTaskForm addItem={this.addItem.bind(this)} />
            <section className="main"> 
                <TaskList todos={this.state.todoData} deleteItem={this.deleteItem}/>
            </section>
            <Footer/>
        </div> 
    )
    }
}   

export default App