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

    @media (max-width: 992px) {
      width: 600px;
      height: 400px;
    }

    @media (max-width: 568px) {
      width: 300px;
      height: 220px;
    }
  `;
  return (
    <div className="bg-light text-center ">
      <Titulo>Video Institucional</Titulo>
      <Video src="https://www.youtube.com/embed/EGbNI26PPYg" />
    </div>
  );
};

export default VideoInstitucional;
