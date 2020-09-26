import React, { Component } from "react";

class Addtodo extends Component {
    state = {
        title:''
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }
    onChange = (e) =>this.setState({[e.target.name]: e.target.value});
  render() {
    return (
      <form  onSubmit= {this.onSubmit} style = {{ display :'flex'}}>
        <input type="text" name="title" placeholder = "Add Todo..." style = {{flex:'10'}} onChange ={this.onChange} />
        <input type ='submit' value = 'submit' className = 'btn' style = {{flex:'1'}}/>
      </form>
    );
  }
}

export default Addtodo;
