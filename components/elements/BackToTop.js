'use client';

import { useEffect, useState } from "react";

function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasScrolled]);

    const onScroll = () => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true);
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false);
        }
    };

    if (!mounted) return null;

    return (
        <>
            {hasScrolled && (
                <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: 2147483647 }}>
                    <i className="fi-rr-arrow-small-up" />
                </a>
            )}
        </>
    );
}
export default BackToTop;