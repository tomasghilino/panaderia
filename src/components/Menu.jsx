import React from 'react';
import styled from '@emotion/styled';

const Menu = () => {
  const ImagenTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 17rem;

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

  const TextoMenuLista = styled.div`
    display: block;
    text-align: center;
    padding: 4rem;
    
    ul {
      color: #252525;
      font-weight: bold;
      list-style: none;
    }

    li::before {
      content: "•";
      font-size: 130%;
      line-height: 0;
      margin: 0 0.3rem 0 -0.25rem;
      position: relative;
      top: 0.08rem;
      color: red;
    }

    @media(min-width: 1024px) {
      display: flex;
      justify-content: center;
      text-align: start;
      gap: 3rem;
    }
  `;

  return (
    <>
      <ImagenTitulo background={`/media/menucatering.jpg`}>
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
      <ImagenTitulo background={`/media/menulunch.jpg`}>
        <h1>Lunch</h1>
      </ImagenTitulo>
      <TextoMenuLista>
        <div>
          <ul>
            <li>Chips</li>
            <li>Fosforito</li>
            <li>Saladitos</li>
            <li>Saborizados con pavita y tomate</li>
            <li>Figacitas con matambre casero</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Bruschettas</li>
            <li>Pletzalej</li>
            <li>Tortitas negras con jamon crudo</li>
            <li>Locatellis</li>
            <li>Pizzetas</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Empanadas</li>
            <li>Calentitos</li>
            <li>Brochets</li>
            <li>Otros...</li>
          </ul>
        </div>
      </TextoMenuLista>
      <ImagenTitulo background={`/media/menupasteleriadulce.jpg`}>
        <h1>Pasteleria Dulce</h1>
      </ImagenTitulo>
      <TextoMenuLista>
      <div>
          <ul>
            <li>Masas finas</li>
            <li>Masas secas</li>
            <li>Patit fours</li>
            <li>Monoporciones</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Tartas</li>
            <li>Postres</li>
            <li>Macarrones</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Tortas</li>
            <li>Tortas temáticas</li>
            <li>Otros...</li>
          </ul>
        </div>
      </TextoMenuLista>
      <ImagenTitulo background={`/media/menusandwich.jpg`}>
        <h1>Sandwich</h1>
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
