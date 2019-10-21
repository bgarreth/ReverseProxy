import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import NavbarComponent from './navbar.js';
import MainContent from './MainContent.js';
import TestComponent from './TestComponent.js';



class App extends Component {

 
  render() 
    {
     return <BrowserRouter><div>

           <NavbarComponent></NavbarComponent>
           <Route exact path='/' component={MainContent}></Route>
            <Route path='/test' component={TestComponent}></Route>
         </div>
         </BrowserRouter>
  }
}

export default App;
