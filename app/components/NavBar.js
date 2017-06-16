import React from 'react'
import {NavLink} from 'react-router-dom'
import Scroll from 'react-scroll'

const NavBar = () => {

  const scrollAfterSearch = (input) => {
    setTimeout(() => {
      return Scroll.scroller.scrollTo(input,{
        duration:1000,
        delay: 70,
        smooth: true
      })
    },100)
  }

  return(
    <div className="nav-bar-container">
      <NavLink
        className="nav-link"
        to={'/'}>
          home
      </NavLink>
      <NavLink
      className="nav-link"
      to={'/funforms'}>
      fun with forms
      </NavLink>
      <NavLink
      className="nav-link"
      to={'/myjam'}>
      my jam
      </NavLink>
    </div>
 )

}

export default NavBar
