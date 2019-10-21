import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class NavbarComponent extends React.Component{

    constructor(){
        super()
        this.state ={
            user: null 
        } 
    }



  render(){
    return(
             <Navbar bg="dark" variant="dark">



      <Nav className="mr-auto">
       <NavLink to="/" className="NavLink">
          Home &nbsp;&nbsp;               
      </NavLink>

      
          
      <NavLink to="/test" className="NavLink">
          Test 
      </NavLink>


        
      </Nav>

    </Navbar>


    );
  }
}

export default NavbarComponent;