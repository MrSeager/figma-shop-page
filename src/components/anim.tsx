import { useSpring } from '@react-spring/web';

export const useHover = ( hover: boolean, scl: number ) => 
    useSpring({
        scale: hover ? scl : 1,
        config: { tension: 110, friction: 10 },
    });

export const useRotation = (duration: number = 8000) =>
    useSpring({
        from: { rotate: 0 },
        to: { rotate: 360 },
        loop: true,
        config: { duration },
    })