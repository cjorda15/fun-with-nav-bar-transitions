import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Forms from './components/Forms/Forms'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import MainContent from './components/MainContent/MainContent'
import NavBar from './components/NavBar/NavBar'

const Content = () => {
  return (
     <div>
      <div className="main-headline">
      <NavBar/>
      </div>
      <Switch>
        <Route path="/forms" render = {(history) => {
          return <Forms history = {history}/>}}/>
         <Route path="/about" render = {(history) => {
           return <About history = {history}/>}}/>
         <Route path="/contact" render = {(history) => {
           return <Contact history = {history}/>}}/>
         <Route path="/" render = {(history) => {
         return <MainContent history = {history}/>}}/>
      </Switch>
   </div>
  )
}

export default Content
