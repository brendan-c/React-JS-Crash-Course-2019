import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <React.Fragment>
      <Link to='/'>todos</Link> | <Link to='/about'>about</Link>
      <br></br>
      <br></br>
      <header style={headerStyle}>
        <h1>todo list</h1>
      </header>
    </React.Fragment>
  )
}

const headerStyle = {
  background: 'rgba(0,0,0,.9)',
  color: '#f3f3f3',
  padding: '15px',
  textAlign: 'center'
}
