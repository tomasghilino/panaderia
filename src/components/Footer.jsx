import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faPhone,
  faMailBulk,
  faNetworkWired,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const IconoDiv = styled.div`
    display: flex;
    gap: 1rem;
    & {
      font-size: 40px;
      cursor: pointer;
    }

    a {
      pointer-events: none;
    }
  `;

  const Footer = styled.footer`
    background-color: #272727;

    p {
      color: #cacaca;
    }

    a {
      color: white;
    }
  `;

  const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    padding: 5rem;
    gap: 60px;
    margin: auto;

    align-items: center;
    justify-content: space-evenly;

    img {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  `;

  const IconosContainer = styled.div`
    margin-top: 3rem;
    & {
      color: white;
    }
  `;
  return (
    <Footer>
      <FooterContainer className="container">
        <div>
          <img src="/media/logoPanaderia.webp" alt="logo panaderia" />

          <p>
            El secreto para lograr la calidad, la frescura y el sabor
            inigualable de los productos que elaboramos responde a un arte, que
            se transmite de generación en generación y se basa en la pasión por
            lo que hacemos.
          </p>
          <IconoDiv>
            <a href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </IconoDiv>
        </div>

        <IconosContainer>
          <div>
            <FontAwesomeIcon icon={faHome} />
            <p className="d-inline-block textoIcono">Obelisco, Buenos Aires</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <p className="d-inline-block textoIcono"> +54 11 1234-5678</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMailBulk} />
            <p className="d-inline-block textoIcono">correo@correo.com</p>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon icon={faNetworkWired} />
            <p className="d-inline-block textoIcono">www.dibepanaderia.com</p>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon icon={faClock} />
            <p className="d-inline-block textoIcono">
              Martes a Domingo: 7AM - 13PM y 16PM - 20:30PM
            </p>
          </div>
        </IconosContainer>
      </FooterContainer>
      <div className="bg-dark p-4 text-center">
        <div className="container">
          <p className="fs-5">
            Panaderia Dibe | Sitio web hecho a modo de estudio académico. &copy;
            2022
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
