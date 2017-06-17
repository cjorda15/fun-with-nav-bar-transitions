import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { bubble as Menu } from 'react-burger-menu'
import Scroll from 'react-scroll';
import './NavBar.css'


class NavBar extends Component{
  constructor(props){
    super(props)
  }

 scrollAfterSearch(input){
   console.log('wiooo');
    setTimeout(() => {
   return Scroll.scroller.scrollTo(input, {
     duration: 1000,
     delay: 70,
     smooth: true
   })
  },100)
 }

  render(){
  return(
   <div className="nav-bar-container">
    <Menu
     right
     isOpen={ false }
     className="bm-menu">
     <NavLink
     onClick={()=>{this.scrollAfterSearch('main-content-container')}}
      className="nav-link"
      to={'/'}>
        home
     </NavLink>
     <NavLink
      onClick={()=>{this.scrollAfterSearch('form-container')}}
      className="nav-link"
      to={'/forms'}>
      forms
     </NavLink>
     <NavLink
      onClick={()=>{this.scrollAfterSearch('about-container')}}
      className="nav-link"
      to={'/about'}>
      about
     </NavLink>
     <NavLink
      onClick={()=>{this.scrollAfterSearch('contact-container')}}
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
