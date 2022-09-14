import React, { useState } from 'react';

import { FaChevronUp } from 'react-icons/fa';

export function ScrollToTop() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (window.pageYOffset > 40) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <button
            type='button'
            onClick={scrollTop}
            className='fixed z-50 flex right-[5%] bottom-[3%] md:right-[3%] md:bottom-[7%] w-12 h-12 md:w-16 md:h-16 md:opacity-50 hover:opacity-100 hover:drop-shadow-containerBlueX transition ease-in-out duration-300 bg-white rounded-xl md:rounded-[20px] justify-items-center place-content-center items-center'
            style={{
                display: showScroll ? 'flex' : 'none',
                animation: 'fadeIn 0.5s ease-in-out',
            }}
        >
            <FaChevronUp color='#F26628' className='w-6 h-6 md:w-10 md:h-10' />
        </button>
    );
}
