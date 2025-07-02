import { FC, useEffect, useState } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Icons
import { ImArrowUpRight2 } from "react-icons/im";
import { FaCircleArrowUp } from "react-icons/fa6";

const FooterSection: FC = () => {
    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container fluid className='cs-bg-main px-5 py-5'>
            <Row className='mx-lg-5 px-lg-5'>
                <Col lg={3} xs={12}>
                    Logo or smth
                </Col>
                <Col as={Row} lg={9} xs={12}>
                    <Col xs={8}>
                        <h2 className='fw-bold text-uppercase'>Objects<br /> that inspire.</h2>
                    </Col>
                    <Col as={Nav} xs={4} className='d-flex flex-column align-items-start justify-content-start'>
                        <Nav.Link className='cs-nb-btn cs-transition text-black'>Privecy & Terms</Nav.Link>
                        <Nav.Link className='cs-nb-btn cs-transition text-black'>Contact Us</Nav.Link>
                    </Col>
                    <Col as={Nav} xs={12} className='fs-4 justify-content-between pt-5'>
                        <Nav.Link className='cs-nb-btn cs-transition text-uppercase text-black'>Figma <ImArrowUpRight2 /></Nav.Link>
                        <Nav.Link className='cs-nb-btn cs-transition text-uppercase text-black'>Twitter</Nav.Link>
                        <Nav.Link className='cs-nb-btn cs-transition text-uppercase text-black'>Instagram</Nav.Link>
                        <Nav.Link className='cs-nb-btn cs-transition text-uppercase me-lg-5 text-black'>YouTube</Nav.Link>
                    </Col>
                </Col>
            </Row>
            {showButton && (
            <Button
                className='cs-nb-btn cs-transition bg-transparent border-0 ms-lg-5 text-black'
                onClick={scrollToTop}
                style={{ position: 'fixed', bottom: '40px', right: '25px', zIndex: 1000 }}
                >
                <FaCircleArrowUp size={'3em'} />
            </Button>
            )}
        </Container>
    );
}

export default FooterSection;