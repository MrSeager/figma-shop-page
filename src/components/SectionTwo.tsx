import { FC } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Row, Col, Card } from 'react-bootstrap';
//Icons
import { GiFlake, GiChaingun } from "react-icons/gi";
import { RiHourglass2Line } from "react-icons/ri";
import { LuOption, LuSun } from "react-icons/lu";
import { GrAttachment } from "react-icons/gr";
import { CgShapeZigzag } from "react-icons/cg";
import { PiTriangleDashedFill } from "react-icons/pi";

interface itemsProps {
    id: number,
    image: string,
    title: string,
    price: number,
}

interface SectionTwoProps {
    items: itemsProps[]
}

const SectionTwo: FC<SectionTwoProps> = ({ items }) => {
    return (
        <Container fluid className='mt-5 pt-5 d-flex flex-column align-items-center'>
            <h1 className='w-50 text-center text-uppercase text-secondary my-5'>Figma's<GiFlake className='text-primary mx-2' />collection  
            <RiHourglass2Line className='text-danger mx-2' />of <span className='text-black text-decoration-underline'>layers</span>
            <LuOption className='text-danger mx-2' />and<GiChaingun className='text-success mx-2' />
            components<LuSun className='text-warning mx-2' />for you<GrAttachment className='text-primary mx-2' />
            and<CgShapeZigzag className='text-warning mx-2' />your friends<PiTriangleDashedFill className='text-success mx-2' /></h1>
            <Row className='mt-5'>
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <Card className='border-0 my-3'>
                                <div className='cs-img-wrapper'>
                                    <Card.Img 
                                        variant='top' 
                                        src={'https://raw.githubusercontent.com/MrSeager/figma-shop-page/refs/heads/main/src/images' + item.image} 
                                        alt='image' 
                                        className='cs-img'
                                    />
                                </div>
                                <Card.Body className='d-flex flex-row justify-content-between h5 fw-bold py-2 m-0'>
                                    <Card.Text className='m-0'>{item.title}</Card.Text>
                                    <Card.Text className='m-0'>${item.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : <p>Loading...</p>}
            </Row>
        </Container>
    );
}

export default SectionTwo;