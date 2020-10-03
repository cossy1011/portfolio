import React from "react";
import styled from "styled-components";

const ResumeCard = ({ isUp, year, description }) => {

    const Career = styled.div `
        height: 200px;
        width: 500px;
        color: white;
    `

    if ( isUp ) {
        return (
            <Career style={{position: "relative"}}>
                <p style={{margin: 0, lineHeight: "20px"}}>{description}</p>
                <svg x="0" y="0" width="500px" height="100px" style={{
                    position: "relative",
                    top: 0,
                    left: 0,
                }}>
                    <circle cx="20px" cy="80px" r="10px" fill="white" />
                    <line x1="20px" y1="80px" x2="100px" y2="0px" stroke="white" stroke-width="1" />
                    <line x1="100px" y1="0px" x2="400px" y2="0px" stroke="white" stroke-width="2" />
                </svg>
                <p style={{margin: 0}}>{year}</p>
            </Career>
        )
    } else {
        return (
            <Career style={{position: "relative"}}>
                <p style={{margin: 0, lineHeight: "80px"}}>{year}</p>
                <svg x="0" y="0" width="500px" height="100px" style={{
                    position: "relative",
                    top: 0,
                    left: 0,
                }}>
                    <circle cx="20px" cy="20px" r="10px" fill="white" />
                    <line x1="20px" y1="20px" x2="100px" y2="100px" stroke="white" stroke-width="1" />
                    <line x1="100px" y1="100px" x2="400px" y2="100px" stroke="white" stroke-width="2" />
                </svg>
                <p style={{margin: 0}}>{description}</p>
            </Career>
        )
    }
}

export default ResumeCard;