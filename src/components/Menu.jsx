import React from 'react';
import styled from '@emotion/styled';

const Menu = () => {
  const ImagenTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15rem;

    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.background}) no-repeat fixed center;
    background-size: cover;

    color: #fff;
    font-weight: bold;
  `;

  const TextoMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    font-size: 1.2rem;
  `;

  return (
    <>
      <ImagenTitulo background={`/media/inicioFondo1.jpeg`}>
        <h1>Catering Artesanal</h1>
        <p>- Nuestro menu -</p>
      </ImagenTitulo>
      <TextoMenu>
        <p>
          Ofrecemos el servicio para pequeños eventos familiares y
          empresariales, que el cliente mismo viene a retirar o se lo llevamos a
          su domicilio.
        </p>
        <p>
          Los pedidos de catering pueden abarcar todos los productos que
          hacemos, en ese sentido, nosotros lo asesoramos en las combinaciones
          de sabores y cantidades de porciones más adecuadas para cada tipo de
          reunión.
        </p>
      </TextoMenu>
      <ImagenTitulo background={`/media/productos6.jpeg`}>
        <h1>Catering Artesanal</h1>
        <p>- Nuestro menu -</p>
      </ImagenTitulo>
      <TextoMenu>
        <p>
          Ofrecemos el servicio para pequeños eventos familiares y
          empresariales, que el cliente mismo viene a retirar o se lo llevamos a
          su domicilio.
        </p>
        <p>
          Los pedidos de catering pueden abarcar todos los productos que
          hacemos, en ese sentido, nosotros lo asesoramos en las combinaciones
          de sabores y cantidades de porciones más adecuadas para cada tipo de
          reunión.
        </p>
      </TextoMenu>
      <ImagenTitulo background={`/media/inicioFondo1.jpeg`}>
        <h1>Catering Artesanal</h1>
        <p>- Nuestro menu -</p>
      </ImagenTitulo>
      <TextoMenu>
        <p>
          Ofrecemos el servicio para pequeños eventos familiares y
          empresariales, que el cliente mismo viene a retirar o se lo llevamos a
          su domicilio.
        </p>
        <p>
          Los pedidos de catering pueden abarcar todos los productos que
          hacemos, en ese sentido, nosotros lo asesoramos en las combinaciones
          de sabores y cantidades de porciones más adecuadas para cada tipo de
          reunión.
        </p>
      </TextoMenu>
    </>
  );
};

export default Menu;
