import React from 'react'
import logo from '../assests/logo.png'

function header() {
  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
      </header>
    </div>
  )
}

export default header
