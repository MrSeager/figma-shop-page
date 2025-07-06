import { FC, useEffect, useState, Fragment } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Icons
import { ImArrowUpRight2 } from "react-icons/im";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircle, FaStar, FaHeart } from "react-icons/fa";

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

    const tickerItem = (
        <span style={{ display: 'inline-flex', alignItems: 'center' }} className='mx-0 px-0 text-uppercase fw-bold h3'>
            some text <FaCircle className='mx-2 text-white' />
            more text <FaStar className='mx-2 text-white' />
            even more text <FaHeart className='mx-2 text-white' />
        </span>
    );

    return (
        <Container fluid className='cs-bg-main px-0 pt-5'>
            <Row className='mx-md-5 mx-1 fw-bold w-100 m-0 px-0'>
                <Col as={Row} lg={3} xs={12} className='mx-0 text-uppercase px-5'>
                    <Col xs={5} className='cs-bg-logo d-flex flex-column align-items-center justify-content-center p-0'>
                        <h2 className='my-3'>The</h2>
                    </Col>
                    <Col xs={7}></Col>
                    <Col xs={5} className='cs-bg-logo d-flex justify-content-center align-items-center'>
                        <h2 className="my-3 vertical-text">Figma</h2>
                    </Col>
                    <Col xs={7} className='cs-bg-logo d-flex justify-content-center align-items-end'>
                        <h2 className='mb-3'>Store</h2>
                    </Col>
                </Col>
                <Col as={Row} lg={9} xs={12} className='mx-0'>
                    <Col lg={8} xs={12} className='my-lg-0 my-3'>
                        <h2 className='fw-bold text-uppercase text-lg-start text-center'>Objects<br /> that inspire.</h2>
                    </Col>
                    <Col as={Nav} lg={4} xs={12} className='d-flex flex-lg-column flex-row align-items-start justify-content-lg-start justify-content-center'>
                        <Nav.Link className='cs-nb-btn cs-transition text-black'>Privecy & Terms</Nav.Link>
                        <Nav.Link className='cs-nb-btn cs-transition text-black'>Contact Us</Nav.Link>
                    </Col>
                    <Col as={Nav} xs={12} className='fs-4 justify-content-lg-start justify-content-center pt-5'>
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
            <Container fluid className='ticker-container mt-5'>
                <div className="ticker-track">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Fragment key={i}>{tickerItem}</Fragment>
                    ))}
                </div>
            </Container>
        </Container>
    );
}

export default FooterSection;