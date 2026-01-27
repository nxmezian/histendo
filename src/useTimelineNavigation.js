import { useState, useEffect } from 'react';

export function useTimelineNavigation(hideDelay = 3000){

    const [activeIndex, setActiveIndex] = useState(0);
    const [navVisible, setNavVisible] = useState(true);

    useEffect = (() => {
        const timeout = setTimeout(()=> setNavVisible(false), 3000)
        return () => clearTimeout(timeout)
    }, [hideDelay])

    return {
        activeIndex,
        setActiveIndex,
        navVisible,
        setNavVisible
    };
}

export default useTimelineNavigation;