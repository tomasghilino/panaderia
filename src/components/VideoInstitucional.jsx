import React from 'react';
import styled from '@emotion/styled';
const VideoInstitucional = () => {
  const Titulo = styled.h1`
    padding-top: 5rem;
    font-family: 'Roboto Slab', sans-serif;
    letter-spacing: 0.2rem;
  `;

  const Video = styled.iframe`
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 1280px;
    height: 720px;

    @media (max-width: 1291px) {
      width: 600px;
      height: 400px;
    }

    @media (max-width: 609px) {
      width: 300px;
      height: 220px;
    }

    @media (max-width: 390px) {
      width: 250px;
      height: 170px;
    }
  `;
  return (
    <div className="bg-secondary bg-gradient text-center ">
      <Titulo>Video Institucional</Titulo>
      <Video src="https://www.youtube.com/embed/EGbNI26PPYg" />
    </div>
  );
};

export default VideoInstitucional;
