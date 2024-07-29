import "./shootingstar.scss";
import { useRef, useEffect } from "react";

const ShootingStar = ({ x, y }) => {

    const starRef = useRef(null);

    useEffect(() => {
        starRef.current.style.left = `${x}px`
        starRef.current.style.top = `${y}px`
    }, [starRef])

    return (
        <svg width="316" height="4" viewBox="0 0 316 4" fill="none" xmlns="http://www.w3.org/2000/svg" id="star" ref={starRef}>
            <path d="M2 2H314" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
    )
}

export default ShootingStar