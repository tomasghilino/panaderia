import React from 'react';
import styled from '@emotion/styled';

import Navbar from './Navbar';
const Inicio = () => {
  const Div = styled.div`
    background-image: url('media/inicioFondo1.jpeg');
    height: 100vh;
  `;
  return (
    <Div>
      <Navbar />
    </Div>
  );
};

export default Inicio;
