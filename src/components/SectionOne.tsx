import { FC, useRef } from 'react';
//Components
import { useDraggable } from "react-use-draggable-scroll";
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

const SectionOne: FC = () => {
    const ref = useRef<HTMLDivElement>(null!);
    const { events } = useDraggable(ref, {
        applyRubberBandEffect: true,
    });

    return (
        <Container 
            fluid 
            ref={ref}
            className='gap-4 cs-bg-navbar py-3 user-select-none border-bottom border-4 border-black'
            {...events}
            style={{
                display: "flex",
                overflowX: "scroll",
                cursor: "grab",
                scrollbarWidth: "none",
            }}
        >
            <Image fluid src={ImgOne} alt='image' className='cs-img-size rounded-circle user-select-none border border-4 border-black' />
            <Image fluid src={ImgTwo} alt='image' className='cs-img-size cs-clip-one user-select-none' />
            <Image fluid src={ImgThree} alt='image' className='cs-img-size cs-clip-two user-select-none' />
            <Image fluid src={ImgFour} alt='image' className='cs-img-size' />
            <Image fluid src={ImgFive} alt='image' className='cs-img-size' />
        </Container>
    );
}

export default SectionOne;