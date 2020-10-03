import React from 'react';
import ResumeView from './ResumeView';
import styled, { keyframes } from 'styled-components';
import "./PcView.css";

function PcView() {

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
      color: white;
      animation: ${props => props.random}s ${fadeIn} ease-out;
    `
  
    const Title = ["→", "s", "c", "r", "o", "l", "l"]
  
    var TitleList = [];
    for(let i = 0; i < Title.length; i++){
      var random = Math.random() * 2 + 1;
      var tempProps = {
        random: random
      }
      TitleList.push(<FadeInTitle {...tempProps}>{Title[i]}</FadeInTitle>);
    }
  
    return (
      <div className="container">
        <div 
          className="scroll"
          style={{
            height:"100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
          <h1 style={{
            letterSpacing: "1rem",
          }}>
            {TitleList}
          </h1>
        </div>
        <ResumeView />
      </div>
    );
  }
  
  export default PcView;