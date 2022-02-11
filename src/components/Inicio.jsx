import React from 'react';
import styled from '@emotion/styled';

import Navbar from './Navbar';

const Inicio = () => {
  const Div = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('media/inicioFondo1.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
  `;

  const ContenedorHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Div
      id='inicio'
    >
      <Navbar />
      <ContenedorHero>
        <img
          className="img-fluid text-center"
          src="media/logoPanaderia.png"
          alt="logo panaderia"
        />
      </ContenedorHero>
    </Div>
  );
};

export default Inicio;
