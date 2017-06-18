import React from 'react'
import './Forms.css'

const Forms = () => {
  return(
    <div id="form-container" className="form-container">
      <div className="form-top-bar"></div>
      <form className="form-field">
        <input type="text" placeholder="enter your name"/>
        <input type="text" placeholder="enter your agent id"/>
        <input type="text" placeholder="enter your location"/>
      </form>
      <form>
      </form>
    </div>
  )
}

export default Forms
