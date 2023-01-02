import React from 'react'
import { Card, Button} from '@aws-amplify/ui-react';
import {  NavbarBrand, Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap'

export const NavbarCepoint = ({props}) => {
  return (
    <Card
    columnStart="1"
    columnEnd="-1"
    
  
  >
    <Navbar variant='warning'>
        
    <NavbarBrand id="logo" className="logo" href="/">
            <strong>
           CEpoint

            </strong>
         </NavbarBrand>
       
        
       
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Salir"
            
              
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <Button  variant='success' onClick={props.signOut}> logout</Button>
            
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
 
    </Navbar>
    
   
  </Card>
  )
}
