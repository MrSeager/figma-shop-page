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
    });

export const useFirstHandStyle = ( hovered: boolean ) =>
    useSpring({
        transform: hovered ? 'translateX(-10%)' : 'translateX(0%)',
        opacity: 1,
    });

export const useSecondHandStyle = ( hovered: boolean ) => 
    useSpring({
        transform: hovered ? 'translateX(10%)' : 'translateX(50%)',
        opacity: hovered ? 1 : 0,
    });