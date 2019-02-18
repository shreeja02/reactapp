import React, { Component } from 'react';


class Task extends Component{

    state={
        tasks:[
            {Id:'1',Title:'raect code',Status:'done'},
            {Id:'2',Title:'Angular code',Status:'pending'},
            {Id:'3',Title:'Flutter code',Status:'pending'}
        ],
        Id:0,Title:'',Status:'',flag:false,taskIndex:0
        
    }
    idHandler=(event)=>{
        this.setState({
            Id:event.target.value
        });

    }
    titleHandler=(event)=>{
        this.setState({
            Title:event.target.value
        });
    }
    statusHandler=(event)=>{
        this.setState({
            Status:event.target.value
        });
    }
    deleteTaskHandler=(index)=>{
        const task=[...this.state.tasks];
        task.splice(index,1);
        this.setState({tasks:task});
    }
    updateTaskHandler=(index)=>{
        this.setState({
            taskIndex:index
        });
        console.log('taskindex'+this.state.taskIndex);
        const task=this.state.tasks[index];
        console.log(task);
        this.state.Id=this.state.tasks[index].Id;
        this.state.Title=this.state.tasks[index].Title;
        this.state.Status=this.state.tasks[index].Status;
        console.log(this.state.Id);
        
        this.setState({
            flag:true
        });
    }
    updateTaskItemHandler=()=>{
        let Id=this.state.Id;
        //console.log("id"+Id);
        let Title=this.state.Title;
        //console.log("title"+Title);
        let Status=this.state.Status;
        //console.log("status"+Status);
        let task=[...this.state.tasks];
        //console.log('index'+this.state.taskIndex);
        task[this.state.taskIndex]={Id,Title,Status};
        this.setState({
            tasks:task,
            flag:false
        });

    }
    addTaskHandler=()=>{
        let Id=this.state.Id;
       //console.log(id);
        let Title=this.state.Title;
        //console.log(title);
        let Status=this.state.Status;
       let task=this.state.tasks.concat({Id,Title,Status});
       
        //task.push({id,title,status});
        console.log(task);
        this.setState({
            tasks:task
        });
        console.log(this.state.tasks);
    }
    render(){
        let task=null;
        if(this.state.flag){
            task=(
                <div>
                    <input type="text" onChange={this.idHandler}
                    value={this.state.Id}></input>
                    <input type="text" onChange={this.titleHandler} value={this.state.Title}></input>
                    <input type="text" onChange={this.statusHandler} value={this.state.Status}></input>
                    <button onClick={this.updateTaskItemHandler}>Update</button>    
                </div>
            );
        }
        return(
            <div>
                <input type="text" onChange={this.idHandler}></input>
                <input type="text" onChange={this.titleHandler}></input>
                <input type="text" onChange={this.statusHandler}></input>

                <button onClick={this.addTaskHandler}>Add</button>
                   <table>
                   <thead>
                       <th>
                          Id
                       </th>
                       <th>
                          Title
                       </th>
                       <th>
                          Status
                       </th>
                       <th>
                          Action
                       </th>
                   </thead>
                   {this.state.tasks.map((todo,index)=>{
                       return(
                        
                            <tbody>
                            <tr>
                                <td>{todo.Id}</td>
                                <td>{todo.Title}</td>
                                <td>{todo.Status}</td>
                                <td><button onClick={()=>this.deleteTaskHandler(index)}>Delete</button></td>
                                <td><button onClick={()=>this.updateTaskHandler(index)}>Update</button></td>
                            </tr>
                            </tbody>
                       
                       )
                   })
                   
               }
                </table>
                {task}
            </div>
        );
    }

}

export default Task;