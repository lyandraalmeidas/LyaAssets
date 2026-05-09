import Logo from '../../assets/icons/logo.svg';
import HomeIcon from '../../assets/icons/home.svg';
import CatalogIcon from '../../assets/icons/catalog.svg';
import AboutIcon from '../../assets/icons/about.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';
import '../../assets/fonts/Fonts.css';
import {Link} from "react-router-dom";

function Menu () {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/Inicio">
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
            <Nav.Link as={Link} to="/Inicio">
              <img src={HomeIcon} alt="Home" width="16" height="16" className="me-2" />
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/Catalogo">
              <img src={CatalogIcon} alt="Catalog" width="16" height="16" className="me-2" />
              Catalogo
            </Nav.Link>
            <Nav.Link as={Link} to="/Contato">
              <img src={AboutIcon} alt="About" width="16" height="16" className="me-2" />
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;