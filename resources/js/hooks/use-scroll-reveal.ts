import { useEffect, useRef } from 'react';

/**
 * Intersection Observer hook for scroll-reveal animations.
 * Adds `data-visible` attribute when element enters viewport.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <section ref={ref} className="scroll-reveal"> ... </section>
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;

        if (!el) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.setAttribute('data-visible', '');
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}
