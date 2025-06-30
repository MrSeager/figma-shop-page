import { FC, useRef } from 'react';
//Components
import { useDraggable } from "react-use-draggable-scroll";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Button } from 'react-bootstrap';
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
            className='gap-4 cs-bg-main py-3 user-select-none border-bottom border-4 border-black'
            {...events}
            style={{
                display: "flex",
                overflowX: "scroll",
                cursor: "grab",
                scrollbarWidth: "none",
            }}
        >       
                <div className="me-3 flex-shrink-0 position-relative cs-hover">
                    <Image fluid roundedCircle src={ImgOne} alt='image' className='cs-img-size border border-4 border-black' />
                    <Button className='cs-transition cs-btn border-0 bg-white text-black fw-bold rounded-pill px-4 position-absolute top-50 start-50 translate-middle'>Something here</Button>
                </div>
                <div className="me-3 flex-shrink-0 position-relative cs-hover">
                    <Image fluid rounded src={ImgTwo} alt='image' className='cs-img-size rounded-5 border border-4 border-black' />
                    <Button className='cs-transition cs-btn border-0 bg-white text-black fw-bold rounded-pill px-4 position-absolute top-50 start-50 translate-middle'>And something here</Button>
                </div>
                <div className="me-3 flex-shrink-0 position-relative cs-hover">
                    <Image fluid roundedCircle src={ImgThree} alt='image' className='cs-img-size border border-4 border-black' />     
                    <Button className='cs-transition cs-btn border-0 bg-white text-black fw-bold rounded-pill px-4 position-absolute top-50 start-50 translate-middle'>And here</Button>
                </div>
                <div className="me-3 flex-shrink-0 position-relative cs-hover">
                    <Image fluid rounded src={ImgFour} alt='image' className='cs-img-size rounded-5 border border-4 border-black' />         
                    <Button className='cs-transition cs-btn border-0 bg-white text-black fw-bold rounded-pill px-4 position-absolute top-50 start-50 translate-middle'>And here as well</Button>
                </div>
                <div className="me-3 flex-shrink-0 position-relative cs-hover">
                    <Image fluid roundedCircle src={ImgFive} alt='image' className='cs-img-size border border-4 border-black' />
                    <Button className='cs-transition cs-btn border-0 bg-white text-black fw-bold rounded-pill px-4 position-absolute top-50 start-50 translate-middle'>And here is no exception</Button>
                </div>
        </Container>
    );
}

export default SectionOne;