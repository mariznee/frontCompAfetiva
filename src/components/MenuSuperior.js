import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Logo from "../../src/logo.png"

const MenuSuperior = () => {
    return (
        <Navbar className="mt-3 fw-bold" bg="secondary" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Computação 
                    <br></br>Afetiva</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        {/* <Button variant="info" style={{ margin: "30px 5px" }}>Início</Button> */}
                        <Link to="/" className="btn btn-primary" style={{ margin: "30px 5px" }}>Início</Link>
                        <Button variant="primary" style={{ margin: "30px 5px" }}>Perfil</Button>
                        <Button variant="primary" style={{ margin: "30px 5px" }}>Missões</Button>
                        <Button variant="primary" style={{ margin: "30px 5px" }}>Conquistas</Button>
                        <img src={Logo} style={{ height: "135px", width: "135px" }} />                        
                        <Button variant="primary" style={{ margin: "30px 5px" }}>Ranking</Button>
                        <Button variant="primary" style={{ margin: "30px 5px" }}>Configurações</Button>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Busca rápida"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="info">Buscar</Button>{' '}
                    </Form>
            </Container>
        </Navbar>
    );
}

export default MenuSuperior;
