import React from 'react';
import './navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
 import { useNavigate } from 'react-router-dom';
function Navbartemp() {

    const navigate = useNavigate()

    return (
        <div className='pt-4' id='top'>
                <Navbar  expand="lg" id="nav">
                     {/* bg="dark" variant="dark" */}
                
                    <Navbar.Brand className='logo'><bold>Team C</bold></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mr-auto'>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#" onClick = {()=>{navigate("/proapi")}}>Laptops</NavDropdown.Item>
                                <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
                                <NavDropdown.Item href="#">Option 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline className='search-holder'>
                        <div class="row">
                            <div class='col'><input type="text" placeholder="Search..." className='mr-sm-2 search-input' /></div>
                            <div class='col pt-2'><Button variant="outline-light" className='search-button '>Search</Button></div>
                        </div>
                        </Form>
                        <div className='ml-auto d-flex align-items-center'>
                            <Button variant="outline-light" onClick = {()=>{navigate("/signin")}} className="login-btn">Hello, Sign In</Button>
                            <button className="icon-button" onClick = {()=>{navigate("/cart")}}>
                                <i className="fas fa-shopping-cart"></i>
                                View Cart
                            </button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    );
}
 
export default Navbartemp;

