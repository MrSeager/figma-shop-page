import { FC, useState, useEffect } from 'react';
//Components
import './figmaStyle.css';
import FigmaNavBar from './FigmaNavBar.tsx';
import SectionOne from './SectionOne.tsx';
import SectionTwo from './SectionTwo.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Axios
import axios from 'axios';

interface itemsProps {
    id: number,
    image: string,
    title: string,
    price: number,
}

const FigmaShopPage: FC = () => {
    const [items, setItems] = useState<itemsProps[]>([]);

    

    return (
        <Container fluid className='min-vh-100 px-0 pt-5'>
            <FigmaNavBar />
            <SectionOne />
            <SectionTwo />
        </Container>
    );
}

export default FigmaShopPage;