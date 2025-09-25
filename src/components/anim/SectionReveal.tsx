// components/SectionReveal.tsx
"use client";

import React, { useEffect, useRef } from "react";
import type { ReactNode, RefObject, CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
    children: ReactNode;
    scrollContainerRef?: RefObject<HTMLElement>;
    className?: string;

    // Container animation
    containerFrom?: gsap.TweenVars;
    containerTo?: gsap.TweenVars;
    containerStart?: string;
    containerEnd?: string;

    // Items animation (for elements marked with data-reveal)
    itemsSelector?: string; // default: '[data-reveal]'
    itemsFrom?: gsap.TweenVars;
    itemsTo?: gsap.TweenVars;
    itemsStart?: string;
    itemsEnd?: string;
    itemsStagger?: number;
}

const SectionReveal: React.FC<SectionRevealProps> = ({
    children,
    scrollContainerRef,
    className = "",

    containerFrom = { rotate: 2, opacity: 0.9, transformOrigin: "0% 50%" },
    containerTo = { rotate: 0, opacity: 1, ease: "none" },
    containerStart = "top bottom",
    containerEnd = "bottom bottom",

    itemsSelector = "[data-reveal]",
    itemsFrom = {
        y: 24,
        opacity: 0,
        filter: "blur(6px)" as CSSProperties["filter"],
    },
    itemsTo = { y: 0, opacity: 1, filter: "blur(0px)", ease: "none" },
    itemsStart = "top bottom-=15%",
    itemsEnd = "bottom 65%",
    itemsStagger = 0.08,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const scroller = scrollContainerRef?.current ?? window;

        // Use gsap.context so selectors are scoped to this component
        const ctx = gsap.context(() => {
            // Container tween
            const containerTween = gsap.fromTo(el, containerFrom, {
                ...containerTo,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: containerStart,
                    end: containerEnd,
                    scrub: true,
                },
            });

            // Child items staggered tween
            const items = el.querySelectorAll<HTMLElement>(itemsSelector);
            if (items.length) {
                gsap.fromTo(items, itemsFrom, {
                    ...itemsTo,
                    stagger: itemsStagger,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: itemsStart,
                        end: itemsEnd,
                        scrub: true,
                    },
                });
            }

            // Optional: image decode before animating (prevents popping)
            items.forEach((node) => {
                const imgs = node.querySelectorAll("img");
                imgs.forEach((img) => {
                    if (img.decode) img.decode().catch(() => {});
                });
            });

            return () => {
                // context cleanup kills all created tweens/triggers in this scope
                ctx.revert();
            };
        }, ref);

        return () => ctx.revert();
    }, [
        scrollContainerRef,
        containerFrom,
        containerTo,
        containerStart,
        containerEnd,
        itemsSelector,
        itemsFrom,
        itemsTo,
        itemsStart,
        itemsEnd,
        itemsStagger,
    ]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default SectionReveal;
