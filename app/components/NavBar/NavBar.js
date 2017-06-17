import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu'
import './NavBar.css'

class NavBar extends Component{
  constructor(props){
    super(props)
  }

  render(){
  return(
   <div className="nav-bar-container">
    <Menu
     isOpen={ false }
     className="bm-menu">
     <NavLink
      className="nav-link"
      onClick={()=>{onClick()}}
      to={'/'}>
        home
     </NavLink>
     <NavLink
      className="nav-link"
      to={'/forms'}>
      forms
     </NavLink>
     <NavLink
      className="nav-link"
      to={'/about'}>
      about
     </NavLink>
     <NavLink
      className="nav-link"
      to={'/contact'}>
      contact
     </NavLink>
    </Menu>
   </div>
  )
 }
}




export default NavBar
