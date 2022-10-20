
import { React, useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Image } from "react-bootstrap"
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
  const navigateMasc = useNavigate("/masculina");
  const navigateHome = useNavigate("/")
  
  function limparLocalStorage(){
    localStorage.removeItem("token")
    localStorage.removeItem("usuario_id")
    navigateHome("/")
  }
  
  


  return (
    <Navbar key="lg" bg="light" expand="lg" className="mb-3">
      <Container fluid className="me-5 ms-3">
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
            <Nav id="Seção" className="justify-content-center mx-auto">
              <Button id="btn_Masc" className="mx-4" variant="outline-danger" onClick={() => navigateMasc("/masculina")}  >Masculino</Button>
              <Button id="btn_fem" className="mx-4" variant="outline-danger" onClick={() => navigateFem("/feminina")}  >Feminino</Button>
            </Nav>
            <Nav className="justify-content-end mx-auto">
              <Nav.Link to="/carrinho" as={Navigator}>Carrinho</Nav.Link>
            </Nav>
            <Nav.Link id="venda-conosco" to="/login-loja" className="link-secondary pe-4" as={Navigator}>Venda Conosco</Nav.Link>
            <NavDropdown
              className="justify-content-end me-5 link-secondary"
              title="Usuário"
              id={`offcanvasNavbarDropdown-expand-lg`}
            >
              <NavDropdown.Item to="/perfil" as={Navigator}>
                Usuário
              </NavDropdown.Item>
              <NavDropdown.Item to="/login" as={Navigator}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item to="/cadastro" as={Navigator}>
                Cadastre-se
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button className='text-decoration-none text-dark' variant='link' onClick={limparLocalStorage}>
                      Logout
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>


  )
}
export default NavBar;