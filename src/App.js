import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    number1:0,
    number2:0,
    answer:0
  }

helloWorldHandler=()=>{
  this.setState({
    answer:parseInt(this.state.number1)+parseInt(this.state.number2)
  });
};
number1Handler=(event)=>{
  this.setState({
    number1:event.target.value
  });
};

number2Handler=(event)=>{
  this.setState({
    number2:event.target.value
  });
};

  render() {

     return (
       <div className="App">
        <h1>hello</h1>
        <input type="text" value={this.state.number1} onChange={this.number1Handler}/>
        <input type="text" value={this.state.number2} onChange={this.number2Handler}/>
        <button onClick={this.helloWorldHandler}>click me</button>
       
        {this.state.answer!=0?<p>{this.state.answer}</p>:null}
        <Person name="shreeja" age="22"  >
          dgghj
        </Person>
      </div>
     );
   // return React.createElement('div',null,React.createElement('h1',null,'hello'))
  }
}

export default App;
