import { FC } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image } from 'react-bootstrap';
//Icons
import { GiFlake, GiChaingun } from "react-icons/gi";
import { RiHourglass2Line } from "react-icons/ri";
import { LuOption, LuSun } from "react-icons/lu";
import { GrAttachment } from "react-icons/gr";
import { CgShapeZigzag } from "react-icons/cg";
import { PiTriangleDashedFill } from "react-icons/pi";

const SectionTwo:FC = () => {
    return (
        <Container fluid className='mt-5 pt-5 d-flex flex-column align-items-center'>
            <h1 className='w-50 text-center text-uppercase text-secondary'>Figma's<GiFlake className='text-primary mx-2' />collection  
            <RiHourglass2Line className='text-danger mx-2' />of <span className='text-black text-decoration-underline'>layers</span>
            <LuOption className='text-danger mx-2' />and<GiChaingun className='text-success mx-2' />
            components<LuSun className='text-warning mx-2' />for you<GrAttachment className='text-primary mx-2' />
            and<CgShapeZigzag className='text-warning mx-2' />your friends<PiTriangleDashedFill className='text-success mx-2' /></h1>
        </Container>
    );
}

export default SectionTwo;