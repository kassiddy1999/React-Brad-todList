import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    
      return {
          padding:'10px',
          background:'#f4f4f4',
          borderBottom:'1px #ccc dotted',
          textDecoration: this.props.todo.completed ? 'line-through':'none'
      }
  }

 
  render() {
    const{title,id} =this.props.todo
    return (
      <div style = {this.getStyle()}>
        <p>
        <input type = "checkbox" onChange = {this.props.markComplete.bind(this,id)}/>{' '}
         {title}
         <button onClick = {this.props.delTodo.bind(this,id)} style = {btnStyle}>x</button></p>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
const btnStyle = {
  background:'#ff0000',
  border:'none',
  color:'#fff',
  padding:'5px 8px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
}

export default TodoItem;
