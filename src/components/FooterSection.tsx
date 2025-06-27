import { FC } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Icons
import { ImArrowUpRight2 } from "react-icons/im";
import { FaCircleArrowUp } from "react-icons/fa6";

const FooterSection: FC = () => {
    return (
        <Container fluid className='cs-bg-navbar px-5 py-5'>
            <Row className='mx-5 px-5'>
                <Col xs={3}>
                    Logo or smth
                </Col>
                <Col as={Row} xs={9}>
                    <Col xs={8}>
                        <h2 className='fw-bold text-uppercase'>Objects<br /> that inspire.</h2>
                    </Col>
                    <Col as={Nav} xs={4} className='d-flex flex-column align-items-start justify-content-start'>
                        <Nav.Link className='text-black'>Privecy & Terms</Nav.Link>
                        <Nav.Link className='text-black'>Contact Us</Nav.Link>
                    </Col>
                    <Col as={Nav} xs={12} className='fs-4 justify-content-between pt-5'>
                        <Nav.Link className='text-uppercase text-black'>Figma <ImArrowUpRight2 /></Nav.Link>
                        <Nav.Link className='text-uppercase text-black'>Twitter</Nav.Link>
                        <Nav.Link className='text-uppercase text-black'>Instagram</Nav.Link>
                        <Nav.Link className='text-uppercase me-5 text-black'>YouTube</Nav.Link>
                        <Nav.Link className='text-uppercase ms-5 text-black'><FaCircleArrowUp size={'2em'} /></Nav.Link>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default FooterSection;