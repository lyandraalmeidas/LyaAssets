import Logo from '../../assets/icons/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';
import '../../assets/fonts/Fonts.css';

function Menu () {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
           <img
              alt=""
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-center"
            />{' '}
           OnlySprite
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Catalogo</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#sla">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;