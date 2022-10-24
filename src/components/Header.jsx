import React from 'react';
import AuthService from '../services/Auth-service';
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

export default function Header(props) {
    const { isLogin, user } = props;
    const navigate = useNavigate();

    const logout = async () => {
        AuthService.Logout();
        navigate('/login');
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <div className='brand'>
                            <img src="/logo-w.png"></img>
                            <span>Vehicle Market</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto align-items-lg-center">
                            <Nav.Link as={NavLink} to="/home" >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/">Pricing</Nav.Link>
                            <NavDropdown title="Shop By Type" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/">Action</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to="/">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="align-items-lg-center">
                            {isLogin ? (
                                <NavDropdown title={'Hi.. '+ user.name} id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/dash/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
                                    <Nav.Link as={NavLink} to="/register">Sign Up</Nav.Link>
                                </>
                            )}
                            <Nav.Link as={NavLink} to={isLogin?('/dash/createads'):('/login')}><Button variant="outline-secondary">Post Your Ad</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
