import { animate } from 'framer-motion';

export function animateCount(
    element: HTMLElement,
    target: number,
    duration: number = 2000,
    suffix: string = '',
    delay: number = 0
) {
    animate(0, target, {
        duration: duration / 1000,
        delay: delay / 1000,
        ease: 'easeOut',
        onUpdate: (latest) => {
            element.textContent = Math.floor(latest).toString() + suffix;
        },
    });
}
