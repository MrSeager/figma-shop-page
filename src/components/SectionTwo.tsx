import { FC } from 'react';
//Components
import SectionTwoItem from './SectionTwoItem.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Row } from 'react-bootstrap';
import { useRotation  } from './anim.tsx';
//Spring
import { useSpring, animated } from '@react-spring/web'
//Icons
import { GiFlake, GiChaingun } from "react-icons/gi";
import { RiHourglass2Line } from "react-icons/ri";
import { LuOption, LuSun } from "react-icons/lu";
import { GrAttachment } from "react-icons/gr";
import { CgShapeZigzag } from "react-icons/cg";
import { PiTriangleDashedFill } from "react-icons/pi";
//Images
import HandImg from '../images/hand-gesture.svg';

interface itemsProps {
    id: number,
    image: string,
    title: string,
    price: number,
}

interface SectionTwoProps {
    items: itemsProps[]
}

const AnimatedG = animated('g')

const SectionTwo: FC<SectionTwoProps> = ({ items }) => {
    const { rotate } = useRotation(10000)
    
    return (
        <Container fluid className='mt-5 pt-5 d-flex flex-column align-items-center position-relative'>
            <Container className='cs-badge bg-white ratio ratio-1x1 border-4 border-black position-absolute border rounded-circle'>
                <svg width="200" height="200" viewBox="10 10 200 200">
                    <defs>
                        <path
                        id="circlePath"
                        d="M110,110 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                        />
                    </defs>

                    <AnimatedG transform={rotate.to(r => `rotate(${r}, 110, 110)`)}>
                        <text fill="black" fontSize="35" textAnchor="middle" dominantBaseline="middle">
                        <textPath href="#circlePath">
                            100% OF PROFITS DONATED • 100% OF PROFITS DONATED •
                        </textPath>
                        </text>
                    </AnimatedG>
                </svg>
                <Container>
                    <Image fluid src={HandImg} alt='first hand' className='w-50' />
                    <Image fluid src={HandImg} alt='second hand' className='w-50' />
                </Container>
            </Container>
            
            <h1 className='cs-w-h text-center text-uppercase text-secondary my-5'>Figma's<GiFlake className='text-primary mx-2' />collection  
            <RiHourglass2Line className='text-danger mx-2' />of <span className='text-black text-decoration-underline'>layers</span>
            <LuOption className='text-danger mx-2' />and<GiChaingun className='text-success mx-2' />
            components<LuSun className='text-warning mx-2' />for you<GrAttachment className='text-primary mx-2' />
            and<CgShapeZigzag className='text-warning mx-2' />your friends<PiTriangleDashedFill className='text-success mx-2' /></h1>
            <Row className='mt-5 mx-lg-5 mx-0'>
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <SectionTwoItem 
                            image={item.image}
                            title={item.title} 
                            price={item.price}
                        />
                    ))
                ) : <p>Loading...</p>}
            </Row>
        </Container>
    );
}

export default SectionTwo;