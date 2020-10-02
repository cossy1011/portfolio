import React from 'react';
import Particles from "react-particles-js";
import "./MobileView.css"

function MobileView() {
  let client_w = document.getElementById('root').clientWidth;
  let client_h = document.getElementById('root').clientHeight;
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
        }}
      >Coming soon...</h1>
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