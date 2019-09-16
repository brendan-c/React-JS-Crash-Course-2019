import React from 'react'

export default function header() {
  return (
    <header style={headerStyle}>
      <h1>todo list</h1>
    </header>
  )
}

const headerStyle = {
  background: 'rgba(0,0,0,.9)',
  color: '#f3f3f3',
  padding: '15px',
  textAlign: 'center'
}
