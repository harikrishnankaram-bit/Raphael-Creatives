'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function TransitionScribble() {
    useEffect(() => {
        const logoClickable = document.querySelector('.logo-fantasy') || document.querySelector('.logo-truus');
        const transitionScribblePath = document.querySelector('.transition-scribble path') as SVGPathElement | null;
        const transitionScribbleSvg = document.querySelector('.transition-scribble') as SVGSVGElement | null;

        if (!transitionScribblePath || !transitionScribbleSvg) return;

        const transitionColors = [
            '#0d9488', '#14b8a6', '#0f766e', '#059669', '#10b981', '#0891b2', '#06b6d4'
        ];

        const runScribbleAnimation = (e: Event | null) => {
            if (e) e.preventDefault();
            if (
                gsap.isTweening(transitionScribblePath) || 
                gsap.isTweening(transitionScribbleSvg) || 
                document.body.classList.contains('is-transitioning')
            ) return;

            // Config settings
            const strokeWidthStart = "8%";
            const strokeWidthMax = "31%";
            const scale = 0.7;
            const durIn = 2.2;
            const durOut = 2.7;

            gsap.set(transitionScribbleSvg, { scale: scale });

            const pathLength = transitionScribblePath.getTotalLength();
            const l = pathLength + 5;

            const randomColor = transitionColors[Math.floor(Math.random() * transitionColors.length)];
            transitionScribbleSvg.style.color = randomColor;

            gsap.set(transitionScribblePath, { 
                strokeDasharray: `${l}`, 
                strokeDashoffset: `${l}`, 
                strokeWidth: strokeWidthStart, 
                opacity: 1 
            });
            gsap.set(transitionScribbleSvg, { opacity: 1, x: 0, y: 0, rotation: 0 });

            // Setup logo animation references
            const logoContainer = document.querySelector('.transition-logo-container') as HTMLElement | null;
            if (logoContainer) {
                gsap.set(logoContainer, { opacity: 0, scale: 0.8 });
            }

            document.body.classList.add('is-transitioning');

            const drawTl = gsap.timeline({
                onComplete: () => {
                    document.body.classList.remove('is-transitioning');
                    gsap.set(transitionScribblePath, { strokeWidth: '0%' });
                }
            });

            // 1. Draw In
            drawTl.to(transitionScribblePath, { strokeDashoffset: 0, duration: durIn, ease: 'power1.inOut' }, 0);
            drawTl.to(transitionScribblePath, { strokeWidth: strokeWidthMax, duration: durIn, ease: 'power2.inOut' }, 0);

            // Animate Logo In (fade in when scribble covers around 40%)
            if (logoContainer) {
                drawTl.to(logoContainer, {
                    opacity: 1,
                    scale: 1,
                    duration: durIn * 0.5,
                    ease: 'power2.out'
                }, durIn * 0.4);
            }

            // 2. Midpoint callback: reveal layout
            drawTl.to('#content-wrapper', { opacity: 1, duration: 0.1 }, durIn);

            drawTl.call(() => {
                window.scrollTo(0, 0);
            }, [], durIn);

            // Animate Logo Out (fade out when scribble begins to open up)
            if (logoContainer) {
                drawTl.to(logoContainer, {
                    opacity: 0,
                    scale: 1.1,
                    duration: durOut * 0.4,
                    ease: 'power2.in'
                }, durIn + (durOut * 0.3));
            }

            // 3. Draw Out (Erase)
            drawTl.to(transitionScribblePath, { strokeDashoffset: -l, duration: durOut, ease: 'power2.inOut' }, durIn);
            drawTl.to(transitionScribblePath, { strokeWidth: strokeWidthStart, duration: durOut, ease: 'power2.inOut' }, durIn);
        };

        if (logoClickable) {
            logoClickable.addEventListener('click', runScribbleAnimation);
        }

        // Auto-run on mount/load
        const timer = setTimeout(() => runScribbleAnimation(null), 100);

        return () => {
            if (logoClickable) {
                logoClickable.removeEventListener('click', runScribbleAnimation);
            }
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 3222 3114"
                fill="none"
                preserveAspectRatio="none"
                className="transition-scribble"
            >
                <path
                    d="M299.654 453.865C505.574 319.225 711.494 184.585 836.054 109.945C960.614 35.3048 997.574 24.7448 944.014 110.385C890.454 196.025 745.254 378.185 571.454 634.385C397.654 890.585 199.654 1215.3 110.854 1382.58C22.0544 1549.86 48.4544 1549.86 77.8944 1540.62C107.334 1531.38 139.014 1512.9 367.854 1319.9C596.694 1126.9 1021.73 759.945 1255.21 555.065C1488.69 350.185 1517.73 318.505 1527.41 306.145C1537.09 293.785 1526.53 301.705 1346.85 618.625C1167.17 935.545 818.694 1561.22 635.214 1896.74C451.734 2232.26 443.814 2258.66 447.654 2268.3C451.494 2277.94 467.334 2270.02 511.134 2236.9C554.934 2203.78 626.214 2145.7 966.534 1817.46C1306.85 1489.22 1914.05 892.585 2263.81 557.505C2613.57 222.425 2687.49 166.985 2741.41 129.185C2795.33 91.3848 2827.01 72.9048 2843.33 67.3448C2859.65 61.7848 2859.65 69.7048 2849.09 96.2248C2838.53 122.745 2817.41 167.625 2584.77 544.505C2352.13 921.385 1370.37 2165.43 1139.25 2537.83C908.134 2910.23 902.854 2926.07 902.774 2939.51C902.694 2952.95 907.974 2963.51 1255.21 2613.87C1602.45 2264.23 2829.73 1017.54 2903.53 1071.46C2977.33 1125.38 2176.12 2817.04 2128 3037C2079.88 3256.96 2911.24 2018.56 3172 1793"
                    stroke="currentColor"
                    strokeLinecap="round"
                    style={{ strokeWidth: '0%', strokeDashoffset: '0.001', strokeDasharray: '0px, 999999px' }}
                />
            </svg>
            <div className="transition-logo-container flex flex-col items-center gap-6">
                <img
                    src="/Raphael.png"
                    alt="Raphael Logo"
                    className="w-28 h-28 object-contain rounded-full shadow-[0_0_40px_rgba(20,184,166,0.15)]"
                />
                <h1 className="text-lg md:text-xl font-bold tracking-[0.35em] text-white uppercase text-center pl-[0.35em]">
                    RAPHAEL CREATIVES
                </h1>
            </div>
        </>
    );
}
