import { FC } from 'react';
//Bootstrap
import { Container, Button, Navbar, Nav, Form } from 'react-bootstrap';
//Icons
import { IoSearch } from "react-icons/io5";
import { SlUser } from "react-icons/sl";

const FigmaNavBar: FC = () => {
    return (
        <Navbar fixed='top' expand='lg' className='cs-bg-navbar'>
            <Container fluid className='position-relevant'>
                <div className='d-flex flex-row gap-3'>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse className='flex-grow-0 cs-nav-collapse'>
                        <Nav className='gap-3'>
                            <Nav.Link className='text-black border border-2 border-black rounded-pill text-uppercase px-4'>Shop</Nav.Link>
                            <Nav.Link className='text-black border border-2 border-black rounded-pill text-uppercase px-4'>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button className='cs-justify-self-start border-0 bg-transparent text-black'><IoSearch /></Button>
                </div>
                <Navbar.Brand href='#' className='text-center text-uppercase'>The Figma Store</Navbar.Brand>
                <Nav className='d-flex flex-row'>
                    <Nav.Link><SlUser /></Nav.Link>
                    <Nav.Link className='text-black border border-2 border-black rounded-pill text-uppercase px-4'>Cart 0</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default FigmaNavBar;