import React ,{Component}from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../footer/footer";
import '../../css/app.css'

class App extends Component{
    state={
        todoData:[
            {value:'lala',timeStamp:'12',id:1},
            {value:'lalala',timeStamp:'12',id:2},
            {value:'lalala',timeStamp:'12',id:3},
        ]
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

    
    render(){
    return (
        <div className="todoapp">
            <NewTaskForm />
            <section className="main"> 
                <TaskList todos={this.state.todoData} deleteItem={this.deleteItem}/>
            </section>
            <Footer/>
        </div> 
    )
    }
}   

export default App