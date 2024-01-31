import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const HeaderComponent = () => {
   //Operacion de lectura de redux - opc1
  const name2 = useSelector(state => state.demoStore.name)
  //Operacion de lectura de redux - opc2
  const {name, email, phone} = useSelector(state => state.demoStore)

    return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to ="/" className="navbar-brand">Pedidos Restaurante | {name}</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/clientes" className='nav-link'>Clientes</Link>
            <Link to="/productos" className='nav-link'>Productos</Link>
            <Link to="/categorias" className='nav-link'>Categorias</Link>
            <Link to="/pedidos" className='nav-link'>Pedidos</Link>
            <Link to="/usuarios" className='nav-link'>Usuarios</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default HeaderComponent;