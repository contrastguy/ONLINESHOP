
import { React } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas,Image } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { NavLink as Navigator } from 'react-router-dom'
import Logo from "./Imagens/Logo.png"
import "./CSS/styles.css"






const NavBar = () => {

    // function toggleButton(){
    //   const btnMasc = getElementById('btn_masc')
    //   btnMasc.addEventListener("click", function(){
    //     document.getElementById('btn_fem').disabled = true
    //   })
    //   const btnFem = getElementById('btn_fem')
    //   btnFem.addEventListener("click", function(){
    //     document.getElementById('btn_masc').disabled = false
    //   })
      

    // }

    const navigateFem = useNavigate("/feminina");
    const navigateMasc = useNavigate("/");
    
    
    return(
        <Navbar key="lg" bg="light" expand="lg" className="mb-3">
            <Container fluid>
              <Navbar.Brand to="/" as={Navigator}><Image id="Logo-img" src={Logo} /></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav id="Seção" className="justify-content-center mx-auto ">
                    <Button id="btn_masc" className="mx-4" variant="outline-danger" onClick={() => navigateMasc("/")}    active>Masculino</Button>
                    <Button id="btn_fem" className="mx-4" variant="outline-danger" onClick={() => navigateFem("/feminina")}  >Feminino</Button>
                  </Nav>
                  <Nav className="justify-content-end mx-auto">
                    <Nav.Link href="#">Carrinho</Nav.Link>
                  </Nav>
                  <NavDropdown
                      className="justify-content-end mx-auto"
                      title="Usuário"
                      id={`offcanvasNavbarDropdown-expand-lg`}
                    >
                      <NavDropdown.Item to="/perfil" as={Navigator}>Usuário</NavDropdown.Item>
                      <NavDropdown.Item to="/login" as={Navigator}>
                        Login
                      </NavDropdown.Item>
                      <NavDropdown.Item to="/cadastro" as={Navigator}>
                        Cadastre-se
                      </NavDropdown.Item>
                    </NavDropdown>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-danger">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
        </Navbar>

    
    )
}
export default NavBar;