import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const IconoDiv = styled.div`
    & {
      font-size: 40px;
    }
  `;
  return (
    <footer className="">
      <div>
        <img src="/media/logoPanaderia.png" alt="logo panaderia" />

        <p>
          El secreto para lograr la calidad, la frescura y el sabor inigualable
          de los productos que elaboramos responde a un arte, que se transmite
          de generación en generación y se basa en la pasión por lo que hacemos.
        </p>
        <IconoDiv>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
        </IconoDiv>
      </div>
    </footer>
  );
};

export default Footer;
