import React ,{Component}from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../footer/footer";
import '../../css/app.css'

class App extends Component{
    defId=0;
    state={
        todoData:[],
        filter:"All",
    }
    clickHandler=(id,status)=>{
        
        this.setState(({todoData})=>{
          return{
            todoData: todoData.map((item)=>{
                if(item.id===id){
                    item.checked=status;
                }
                return item
            })
          } 
        })
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
    filterItems = () => {
        const { todoData, filter } = this.state;
        return todoData.filter(({ checked }) => {
            if (filter === 'All') {
                return true; 
            } else if (filter === 'Completed') {
                return checked === true; 
            } else {
                return checked === false;
            }
        });
    };
    newFilter=(filter)=>{
        this.setState({filter:filter})
    }

    clearCompleted=()=>{
        this.setState(({todoData})=>{
            return{
                todoData:todoData.filter(item=>!item.checked)
            }
        });
    }

    editItem=(id, text)=> {
        this.setState(({ todoData }) => ({
          todoData: todoData.map((element) => {
            if (element.id === id) element.value = text;
            return element;
          }),
        }));
      }

    
    render(){
    return (
        <div className="todoapp">
            <NewTaskForm addItem={this.addItem.bind(this)} />
            <section className="main"> 
                <TaskList todos={this.filterItems()} deleteItem={this.deleteItem}
                editItem={this.editItem}
                clickHandler={this.clickHandler}/>
            </section>
            <Footer 
            itemsLeft={this.state.todoData.filter(item=>!item.checked).length}
            newFilter={this.newFilter} 
            clearCompleted={this.clearCompleted}/>
        </div> 
    )
    }
}   

export default App