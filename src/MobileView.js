import React from 'react';
import Particles from "react-particles-js";
import "./MobileView.css"
import styled, { keyframes } from 'styled-components';

function MobileView() {
    let client_w = document.getElementById('root').clientWidth;
    let client_h = document.getElementById('root').clientHeight;
    
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
        font-family: "GT-Sectra-Fine","Microsoft Yahei","微软雅黑", STXihei, "华文细黑", serif;
        color: white;
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
      <Particles
        width="100vw"
        height="100vh"
        params={{
          "fps_limit": 28,
          "particles": {
              "collisions": {
                  "enable": false
              },
              "number": {
                  "value": (client_w + client_h) / 12,
                  "density": {
                      "enable": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 200,
                  "opacity": 0.3
              },
              "move": {
                  "speed": 2
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "opacity_min": 0.05,
                      "speed": 1,
                      "sync": false
                  },
                  "value": 0.3
              }
          },
          "retina_detect": false,
        }}
      />
    </div>
  );
}

export default MobileView;