import { Form, Nav, Navbar, Container, Button, NavDropdown } from 'react-bootstrap';

import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand><NavLink to={'/'} className='navLink'>Los coches del albert</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><NavLink className='navLink' to='/ListaCompleta'>Lista completa</NavLink></Nav.Link>
                        <Nav.Link><NavLink className='navLink' to='/CrearCoches'>Crear coches</NavLink></Nav.Link>

                        {/* <NavDropdown className='navLink' title="Marcas" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant='outline-light'>Buscar</Button>
                    </Form>
                    <Nav>
                        <Nav.Link><NavLink className='navLink' to='/Registro'>Registro</NavLink></Nav.Link>
                        <Nav.Link><NavLink className='navLink' to='/Iniciar-sesion'>Iniciar sesión</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Navigation;