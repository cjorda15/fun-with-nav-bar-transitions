import React from 'react'
import { Route, Switch } from 'react-router-dom';
import FunForms from './components/FunForms'
import MyJam from './components/MyJam'
import MainContent from './components/MainContent'
import NavBar from './components/NavBar'

const Content = () => {
  return (
     <div>
      <NavBar/>
      <Switch>
        <Route path="/funforms" render = {(history) => {
          return <FunForms history = {history}/>}}/>
         <Route path="/myjam" render = {(history) => {
           return <MyJam history = {history}/>}}/>
         <Route path="/" render = {(history) => {
         return <MainContent history = {history}/>}}/>
      </Switch>
   </div>
  )
}

export default Content
