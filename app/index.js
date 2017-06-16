import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Content from './Content'


console.log("dd");
const history = createHistory()

render(
  <Router history ={history}>
    <Route to ='/' component ={Content}/>
  </Router>,
   document.getElementById('root'));
