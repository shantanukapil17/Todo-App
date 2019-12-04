import React, { Component } from 'react'
import Todoinput from './components/Todoinput';
import "bootstrap/dist/css/bootstrap.min.css";
import Appp from './Appp.css';


class App extends Component {
  state={
    item1:[],
    item2:[],
    item3:[]
  }

  manageState(data){
    this.setState({
      data
    })
  }

  changeState(data){
  
  }

  render() {  
   return (
      <div>
        <div className="card-body" className="container">
          <div className="row">
            <div className="col-10 mx-autho col-md-4 mt-4">
            
              <Todoinput keyName="todo" changeState={this.changeState} manageState={this.manageState}/>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default App;
