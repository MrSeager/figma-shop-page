import { FC, useState } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Card } from 'react-bootstrap';
import { useHover } from './anim.tsx';
//Spring
import { useSpring, animated } from '@react-spring/web'

interface SectionTwoItemProps {
    image: string,
    title: string,
    price: number,
}

const SectionTwoItem: FC<SectionTwoItemProps> = ({ image, title, price }) => {
    const [isHovered, setHovered] = useState<boolean>(false);
    const animHover = useHover(isHovered, 1.05);

    return (
        <Col lg={3} md={4} sm={6} xs={12}>
            <animated.div
                style={animHover} 
                className='card border-0 my-3'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className='cs-img-wrapper'>
                    <Card.Img 
                        variant='top' 
                        src={'https://raw.githubusercontent.com/MrSeager/figma-shop-page/refs/heads/main/src/images' + image} 
                        alt='image' 
                        className='cs-img'
                    />
                </div>
                <Card.Body className='d-flex flex-row justify-content-between h5 fw-bold py-2 m-0'>
                    <Card.Text className='m-0'>{title}</Card.Text>
                    <Card.Text className='m-0'>${price}</Card.Text>
                </Card.Body>
            </animated.div>
        </Col>
    );
}

export default SectionTwoItem;