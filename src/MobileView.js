import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Reset } from "styled-reset";

import Background from "./Background";
import "./MobileView.css";

function MobileView() {
    
    const fadeIn = keyframes`
        0% {
            filter: blur(3rem);
            opacity: 0;
        }
        100% {
            filter: blur(0);
            opacity: 1;
        }
    `

    const FadeInTitle = styled.span`
        color: gray;
        animation: ${props => props.random}s ${fadeIn} ease-out;
    `

    const Title = ["C", "o", "m", "i", "n", "g", "", "S", "o", "o", "n", "..."]

    var TitleList = [];
    for(let i = 0; i < Title.length; i++){
        var random = Math.random() * 2 + 1;
        var tempProps = {
            random: random
        }
        TitleList.push(<FadeInTitle {...tempProps}>{Title[i]}</FadeInTitle>);
    }

  return (
    <div>
        <Reset />
        <Background />
        <h1
            style={{
            color: "#FFFFFF",
            height: "100vh",
            width: "100vw",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            letterSpacing: "0.3rem"
        }}>
            {TitleList}
        </h1>
    </div>
  );
}

export default MobileView;