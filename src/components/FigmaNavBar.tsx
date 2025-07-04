import { FC, useState, useEffect } from 'react';
//Bootstrap
import { Container, Button, Navbar, Nav, Form } from 'react-bootstrap';
//Icons
import { FaSearch, FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const FigmaNavBar: FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [searchBar, setSearchBar] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => {
        setScrolled(window.scrollY > 50); // change threshold as needed
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Navbar fixed='top' expand='lg' className={`position-relevant ${scrolled ? 'cs-bg-navbar-second' : 'cs-bg-navbar'} pt-0 cs-transition cs-w mx-auto d-flex flex-column`}>
            {searchBar ?
                <Form.Control type="string" placeholder="Search" className='rounded-0 border-top-0 border-end-0 border-start-0 px-5 py-3 fs-4 shadow-none border-3 border-black' />
            : ''}
            <Container fluid className='px-lg-3 px-1 w-100 mt-2 d-flex flex-row justify-content-between flex-nowrap'>
                <div className='d-flex flex-row gap-3'>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className='border-3 border-black'><GiHamburgerMenu className='text-black' /></Navbar.Toggle>
                    <Navbar.Collapse className={`${scrolled ? 'cs-bg-navbar-second' : 'cs-bg-navbar'} cs-transition flex-grow-0 cs-nav-collapse`}>
                        <Nav className='gap-3 flex-row'>
                            <Nav.Link className='fw-bold cs-nb-btn cs-transition text-black border border-2 border-black rounded-pill text-uppercase px-4'>Shop</Nav.Link>
                            <Nav.Link className='fw-bold cs-nb-btn cs-transition text-black border border-2 border-black rounded-pill text-uppercase px-4'>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button onClick={() => setSearchBar(prev => !prev)} className='cs-nb-btn cs-transition cs-justify-self-start border-0 bg-transparent text-black'><FaSearch /></Button>
                </div>
                <Navbar.Brand href='#' className='cs-nb-btn cs-transition fw-bold text-center text-uppercase cs-fs'>The Figma Store</Navbar.Brand>
                <Nav className='d-flex flex-row align-items-center gap-3'>
                    <Nav.Link className='cs-nb-btn text-black cs-transition'><FaRegUser /></Nav.Link>
                    <Nav.Link className='fw-bold cs-nb-btn cs-transition text-black border border-2 border-black rounded-pill text-uppercase px-4'>Cart 0</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default FigmaNavBar;