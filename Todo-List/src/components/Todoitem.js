import React, { Component } from 'react'
import Todolist from './Todolist'
import uuid from 'uuid'

export default class Todoitem extends Component {
  
    dragStart(ev) {
        ev.persist();
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData("Text",JSON.stringify(this.props));
        ev.dataTransfer.setDragImage(ev.target,0,0);
    }
    state ={
      items: [],
      id:uuid(),
      item: "",
      edit: false
    };
    handleChange = (e) => {
      this.setState({
        item: e.target.value
      });
    };
  handleSubmit =(e)=>{
      e.preventDefault();
      const newitems= {
        id: this.state.id,
        title: this.state.item
      }
      const updateditems =[...this.state.items, newitems];
      this.setState({
        items:updateditems,
        item:'',
        id:uuid(),
        edit: false
      });
    };

  clearlist =() => {
      this.setState({
        items: []
      })
    }
    
  handledelete = (id) => {
        console.log(this.state)
        console.log(id)
      const filters = this.state.items.filter(item => 
        item.id !== id)
      this.setState({
        items: filters
      });
    };
  
  dropChange=(src)=>{
      const newitems= {
          id: src.keyId,
          title: src.title
      }  
      const updateditems =[...this.state.items, newitems];
      this.setState({
        items:updateditems,
        item:'',
        id:uuid(),
        edit: false
      });
  }

    
  render() {
    const {title, handledelete, handledit} = this.props;
    return (
      <div draggable="true" onDragStart={(ev)=>{this.dragStart(ev)}}>
        <div>
         <input 
                    type="text" 
                    className="form-control-text-capitalize" 
                    placeholder="Add an Item" 
                    value={this.state.item} onChange={this.handleChange}/>
        <h6>{title}</h6>
            <span className="mx-2 text-danger" onClick={handledelete}>
                <i className="fas fa-trash" />
            </span>
            
       </div>
      
      </div>
    )
  }
}

