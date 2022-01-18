import React from 'react';
import styled from '@emotion/styled';
const Inicio = () => {
  const ImagenFondo = styled.img`
    width: 100%;
    height: 100vh;
  `;
  return (
    <div>
      <ImagenFondo src="media/inicioFondo.jpeg" alt="panaderia fondo" />
    </div>
  );
};

export default Inicio;
