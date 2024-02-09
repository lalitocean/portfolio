import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaAnglesUp } from "react-icons/fa6";


const GoToTop = () => {
    const [isVisible, setisVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    };
    const listenToScroll = () => {
        let heightToHidden = 300;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setisVisible(true);
        }
        else {
            setisVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <Wrapper>
            {isVisible && (
                <div className='Top-Btn' onClick={goToBtn}>
                    <FaAnglesUp />
                </div>)}
        </Wrapper>
    )
}
const Wrapper = styled.section`
display:flex;
justify-content:center;
align-items:center;
.Top-Btn{
    font-size:2rem;
    width:3rem;
    height:3rem;
    color:black;
    border:2px solid black;
    background-color:white;
    box-shadow:${({ theme }) => theme.colors.shadow};
    border-radius:50%;
    position:fixed;
    bottom:3rem;
    right:3rem;
    z-index:999;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    
}
`;

export default GoToTop