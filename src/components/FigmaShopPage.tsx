import { FC } from 'react';
//Components
import './figmaStyle.css';
import FigmaNavBar from './FigmaNavBar.tsx';
import DraggableScroll from './DraggableScroll.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import ImgOne from '../images/pexels-elijahsad-3894557.jpg';
import ImgTwo from '../images/pexels-lukebarky-2885916.jpg';
import ImgThree from '../images/pexels-mwabonje-1820559.jpg';
import ImgFour from '../images/pexels-pixabay-157920.jpg';
import ImgFive from '../images/pexels-salomonjr10-3881965.jpg';

const FigmaShopPage: FC = () => {
    return (
        <Container fluid className='min-vh-100 px-0 pt-5'>
            <FigmaNavBar />
            <Container fluid className="cs-bg-navbar overflow-auto d-flex flex-row gap-2 px-0 py-3">
                <Image fluid src={ImgOne} alt='image' className='cs-img-size rounded-circle user-select-none' />
                <Image fluid src={ImgTwo} alt='image' className='cs-img-size cs-clip-one user-select-none' />
                <Image fluid src={ImgThree} alt='image' className='cs-img-size cs-clip-two user-select-none' />
                <Image fluid src={ImgFour} alt='image' className='cs-img-size' />
                <Image fluid src={ImgFive} alt='image' className='cs-img-size' />
            </Container>
        </Container>
    );
}

export default FigmaShopPage;