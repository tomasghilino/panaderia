import React from 'react';
import styled from '@emotion/styled';

import Navbar from './Navbar';
const Inicio = () => {
  const Div = styled.div`
    background-image: url('media/inicioFondo1.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
  `;
  return (
    <Div>
      <Navbar />
    </Div>
  );
};

export default Inicio;
