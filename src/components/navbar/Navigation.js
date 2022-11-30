import { Form, Nav, Navbar, Container, Button, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../../context/authContext';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {

    const [search, setSearch] = useState([])

    const handleSearch = e => {
        setSearch(e.target.value)
        console.log("Busqueda: " + e.target.value)
    }

    // const filterSearch = (searchElement) => {
    //     const searchResult = 
    // }

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

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
                        {
                            (isLoggedIn && user.role === "ADMIN")
                                ?
                                <Nav.Link><NavLink className='navLink' to='/CrearCoches'>Crear coches</NavLink></Nav.Link>
                                :
                                <></>
                        }

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
                            value={search}
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleSearch}
                        />
                        <Button variant='outline-light'>Buscar</Button>
                    </Form>
                    <Nav>
                        {
                            isLoggedIn
                                ?
                                <Nav.Link><NavLink className='navLink' to='/Registro' onClick={logOutUser}>Cerrar sesión</NavLink></Nav.Link>
                                :
                                <>
                                    <Nav.Link><NavLink className='navLink' to='/Registro'>Registro</NavLink></Nav.Link>
                                    <Nav.Link><NavLink className='navLink' to='/Iniciar-sesion'>Iniciar sesión</NavLink></Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Navigation;