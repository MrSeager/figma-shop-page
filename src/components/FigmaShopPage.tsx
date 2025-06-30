import { FC, useState, useEffect } from 'react';
//Components
import './figmaStyle.css';
import FigmaNavBar from './FigmaNavBar.tsx';
import SectionOne from './SectionOne.tsx';
import SectionTwo from './SectionTwo.tsx';
import FooterSection from './FooterSection.tsx';
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

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/MrSeager/figma-shop-page/refs/heads/main/src/data.json').then((response) => {
          setItems(response.data.items);
        });
    }, []);

    return (
        <Container fluid className='cs-bg-main min-vh-100 px-0 pt-5 cs-w shadow'>
            <FigmaNavBar />
            <SectionOne />
            <SectionTwo
                items={items}
            />
            <FooterSection />
        </Container>
    );
}

export default FigmaShopPage;