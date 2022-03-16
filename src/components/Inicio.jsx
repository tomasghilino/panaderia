import React from 'react';
import styled from '@emotion/styled';

import Navbar from './Navbar';

const Inicio = () => {
  const Div = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
  `;

  const Img = styled.img`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 400px;
    width: 400px;

    @media (min-width: 768px) {
      height: 600px;
      width: 600px;
    }
  `;

  const Video = styled.video`
    z-index: 1;
    position: absolute;
    width: auto;
    height: auto;
    right: 0;
    bottom: 0;
    transform: translateX(calc((100% - 100vw) / 2));
    filter: brightness(75%);
  `;

  return (
    <Div id="inicio">
      <Navbar />

      <Img src="media/logoPanaderia.png" alt="logo panaderia"></Img>

      <Video muted loop autoPlay>
        <source src="media/panaderiaVideo.mp4" type="video/mp4"></source>
      </Video>
    </Div>
  );
};

export default Inicio;
