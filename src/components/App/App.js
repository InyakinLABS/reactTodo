import React from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../footer/footer";
import './main.css'

const App = ()=>{
    return (
        <div className="todoapp">
            <NewTaskForm />
            <section className="main">
                <TaskList/>
            </section>
            <Footer/>
        </div>
       
    )
}   

export default App