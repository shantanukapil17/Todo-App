import React, { Component } from 'react'
import Todolist from './Todolist';
import uuid  from 'uuid';
import todo from './todo.css';

export default class Todoinput extends Component {
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
    return (
      <div className="card card-body my-3" id={this.props.keyName}>
        <form onSubmit={this.handleSubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                    <button type="submit" 
            className={
                this.state.edit ?
                <i className="fas fa-pen" />
                : <button class="button button3">8px</button>
            }>
             {this.state.edit =  <i className="fas fa-plus-square" />}
            </button>
                       
                    </div>
                </div>
               
            </div>
          
        </form>
        <Todolist
            keyName={this.props.keyName}
            items={this.state.items}
            clearlist={this.clearlist}
            handledelete={this.handledelete}
            handledit={this.handledit}
            dropChange={this.dropChange}
        />
    </div>
    )
  }
}
