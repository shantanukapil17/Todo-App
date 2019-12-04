import React, { Component } from 'react'
import Todoitem from './Todoitem'
import Todoinput from './Todoinput';



export default class Todolist extends Component {
    dropOver(ev){
        ev.preventDefault();
    }
    handleDrop(ev){
        let src = ev.dataTransfer.getData("Text");
        src=JSON.parse(src)
        if(src.keyName!=this.props.keyName)
            this.props.dropChange(src);
    }
    render() {
    const {items, clearlist, handledelete, handledit,dropChange} = this.props;
    return (

        

      <div onDrop={(ev)=>{this.handleDrop(ev)}} onDragOver={(ev)=>{this.dropOver(ev)}} >
          <ul className="list-group my-5" >
            <h3 className="text-capitalize-text-center" >TODO </h3>
            {
                items.map(item => {
                    return  <Todoitem  
                    key={item.id}
                    keyId={item.id}
                    keyName={this.props.keyName} 
                    title={item.title}
                    handledelete={() => handledelete(item.id)}
                    handledit={()=> handledit(item.id)}
                    />
                })
            }
            <button 
                type="button" 
                className="btn btn-danger btn-block text-capitalize mt-5"
                onClick={clearlist}
            >
                clear list
            </button>
          </ul>
      </div> 

      
      
    )
 
  }

}

