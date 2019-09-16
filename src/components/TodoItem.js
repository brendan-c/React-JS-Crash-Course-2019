import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f2f2f2',
      padding: '10px',
      borderBottom: '1px #ddd solid',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  markComplete = e => {}

  render() {
    const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            style={checkboxStyle}
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            style={delBtnStyle}
          >
            x
          </button>
        </p>
      </div>
    )
  }
}

const checkboxStyle = {
  marginRight: '0.8rem',
  cursor: 'pointer'
}
const delBtnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  lineHeight: '1rem'
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
