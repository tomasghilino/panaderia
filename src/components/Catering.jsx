import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBirthdayCake,
  faBreadSlice,
  faHamburger,
} from '@fortawesome/free-solid-svg-icons';

const Catering = () => {
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
    text-align: start;

    border-top: 3px solid red;

    ul {
      color: #252525;
      font-weight: bold;
      list-style: none;
    }

    li::before {
      content: '•';
      font-size: 130%;
      line-height: 0;
      margin: 0 0.3rem 0 -0.25rem;
      position: relative;
      top: 0.08rem;
      color: #d60303;
    }

    @media (min-width: 1024px) {
      display: flex;
      justify-content: center;
      gap: 3rem;
    }
  `;

  const IconosCatering = styled.div`
    color: #d60303;
  `;

  const ContenidoMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  `;

  const TituloSandwich = styled.div`
    padding: 1rem;
    margin-left: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
  `;

  return (
    <>
      <ImagenTitulo id="catering" background={`/media/menucatering.jpg`}>
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
      <ContenidoMenu>
        <IconosCatering>
          <FontAwesomeIcon className="fa-5x mb-3" icon={faBreadSlice} />
        </IconosCatering>
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
      </ContenidoMenu>
      <ImagenTitulo background={`/media/menupasteleriadulce.jpg`}>
        <h1>Pasteleria Dulce</h1>
      </ImagenTitulo>
      <ContenidoMenu>
        <IconosCatering>
          <FontAwesomeIcon className="fa-5x mb-3" icon={faBirthdayCake} />
        </IconosCatering>
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
      </ContenidoMenu>
      <ImagenTitulo background={`/media/menusandwich.jpg`}>
        <h1>Sandwich</h1>
      </ImagenTitulo>
      <ContenidoMenu>
        <IconosCatering>
          <FontAwesomeIcon className="fa-5x mb-3" icon={faHamburger} />
        </IconosCatering>
        <TextoMenuLista>
          <div>
            <TituloSandwich>COMUNES</TituloSandwich>
            <ul>
              <li>Jamon y queso</li>
              <li>Jamon y tomate</li>
              <li>Jamon y choclo</li>
              <li>Jamon y huevo</li>
              <li>Jamon y lechuga</li>
              <li>Queso y aceituna</li>
              <li>Queso y cantimpalo</li>
              <li>Queso y longaniza</li>
              <li>Queso y motadela bocatti</li>
            </ul>
          </div>
          <div>
            <TituloSandwich>ESPECIALES</TituloSandwich>
            <ul>
              <li>Jamon y anana</li>
              <li>Jamon y palmito</li>
              <li>Jamon y roquefort</li>
              <li>Jamon y durazno</li>
              <li>Queso y atun</li>
              <li>Queso y pollo</li>
            </ul>
          </div>
          <div>
            <TituloSandwich>SUPERESPECIALES</TituloSandwich>
            <ul>
              <li>Crudo y queso</li>
              <li>Crudo y tomate</li>
              <li>Crudo y anana</li>
              <li>Crudo y palmito</li>
              <li>Crudo y durazno</li>
              <li>Crudo, rúcula y queso parmesano</li>
              <li>Crudo, rúcula y tomates secos</li>
            </ul>
          </div>
        </TextoMenuLista>
        <TituloSandwich>SIMPLES</TituloSandwich>
        <TextoMenuLista>
          <div className="d-flex">
            <ul>
              <li>Jamon cocido</li>
              <li>Jamon crudo</li>
              <li>Cantimpalo</li>
            </ul>
            <ul>
              <li>Mortadela bocatti</li>
              <li>Longaniza</li>
              <li>Queso</li>
            </ul>
          </div>
        </TextoMenuLista>
      </ContenidoMenu>
    </>
  );
};

export default Catering;
