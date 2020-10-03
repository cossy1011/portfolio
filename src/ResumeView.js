import React from 'react';
import styled from "styled-components";

import ResumeCard from "./ResumeCard";

const ResumeView = () => {

    const Line = styled.svg`
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
    `
    return (
        <>
        <div style={{
            position: "absolute",
            top: 0,
            left: "110vw",
            zIndex: -1,
        }}>
            <svg x="0" y="0" width="200vw" height="100vh">
                <line x1="0" y1="50vh" x2="200vw" y2="50vh" stroke="white" stroke-width="1"></line>
            </svg>
        </div>
        <div style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "20vw"
        }}>
            <ResumeCard isUp={true} year={1995} description={"I was born in Fukushima."}/>
            <ResumeCard isUp={false} year={2015} description={"I entered Kyoto Univ."}/>
            <ResumeCard isUp={true} year={2020} description={"I major X-ray astronomy in Cosmic-ray Lab."}/>
        </div>
        </>
    )
}

export default ResumeView;