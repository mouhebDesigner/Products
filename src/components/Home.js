import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Product from './Product';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import '../css/style.css';
export default class Home extends React.Component{
    render(){
        return(
            

                <Navbar collapseOnSelect expand="lg" className="Navbar" variant="dark">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">
                            <Link to="/" className="NavLink">Home</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Link to="/Product" className="NavLink">Products</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="#memes">
                            <Link to="/Contact" className="NavLink">Contacts</Link>
                        </Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                
            
        )
    }
}