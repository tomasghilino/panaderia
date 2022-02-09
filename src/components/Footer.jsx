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
import './Maps.css';

const Footer = () => {
  const IconoDiv = styled.div`
    display: flex;
    gap: 1rem;
    & {
      font-size: 40px;
      color: white;
    }
  `;

  const Footer = styled.footer`
    background-color: #272727;

    p {
      color: #cacaca;
    }
  `;

  const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    padding: 5rem;
    gap: 60px;
    margin: ;

    align-items: center;
    justify-content: space-evenly;

    img {
      width: 150px;
      height: 150px;
    }
  `;

  const IconosContainer = styled.div`
    color: white;
    margin-top: 3rem;
  `;
  return (
    <Footer>
      <FooterContainer className="container">
        <div>
          <img src="/media/logoPanaderia.png" alt="logo panaderia" />

          <p>
            El secreto para lograr la calidad, la frescura y el sabor
            inigualable de los productos que elaboramos responde a un arte, que
            se transmite de generación en generación y se basa en la pasión por
            lo que hacemos.
          </p>
          <IconoDiv>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebook} />
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
          <div>
            <FontAwesomeIcon icon={faNetworkWired} />
            <p className="d-inline-block textoIcono">www.dibepanaderia.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} />
            <p className="d-inline-block textoIcono">
              Martes a Domingo: 7AM - 13PM y 16PM - 20:30PM
            </p>
          </div>
        </IconosContainer>
      </FooterContainer>
    </Footer>
  );
};

export default Footer;
