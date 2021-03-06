import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  z-index: 9999;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ scrolled }) =>
    scrolled ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)'};
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0px 0px 20px 0px rgba(0,0,0,0.75)' : 'none'};
  -webkit-box-shadow: ${({ scrolled }) =>
    scrolled ? '0px 0px 20px 0px rgba(0,0,0,0.75)' : 'none'};
  -moz-box-shadow: ${({ scrolled }) =>
    scrolled ? '0px 0px 20px 0px rgba(0,0,0,0.75)' : 'none'};
  transition: all 0.4s ease-in-out;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScolled] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 0) {
      setScolled(true);
    }
    if (position === 0) {
      setScolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const Botones = styled.div`
    display: flex;
    text-decoration: none;
    gap: 2rem;
    margin-right: 2rem;
    background-color: transparent;
    @media (max-width: 1024px) {
      display: none;
    }
  `;

  const Boton = styled.a`
    text-decoration: none;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    transition: all 0.3s;
    &:hover {
      color: #d60303;
      cursor: pointer;
    }

    @media (max-width: 1024px) {
      color: #d1d1d1;
    }
  `;

  const Logo = styled.a`
    text-decoration: none;
    margin-left: 4rem;
    width: 8rem;
    height: 8rem;
    &:hover {
      cursor: pointer;
      filter: brightness(120%);
    }
  `;

  const BurguerIcon = styled.button`
    border: none;
    margin-right: 0.5rem;
    background-color: transparent;
    transition: all 0.3s;

    &:hover {
      filter: brightness(120%);
    }

    @media (min-width: 1024px) {
      display: none;
    }
  `;

  const BurguerMenu = styled.div`
    display: none;
    flex-direction: column;
    top: 50px;
    right: 10px;
    padding: 1rem;
    border-radius: 0.3rem;
    position: absolute;
    align-items: center;
    background-color: #d60303;

    @media (max-width: 1024px) {
      display: flex;
    }
  `;

  const BurguerMenuDiv = styled.div`
    position: relative;
    display: flex;
  `;

  return (
    <Nav scrolled={scrolled}>
      <Logo>
        <Link to="inicio">
          <img className="w-100 h-100" src="media/logo.webp" alt="" />
        </Link>
      </Logo>
      <div className="d-flex">
        <Botones>
          <Boton>
            <Link to="inicio">Inicio</Link>
          </Boton>
          <Boton>
            <Link to="nosotros">Nosotros</Link>
          </Boton>
          <Boton>
            <Link to="productos">Productos</Link>
          </Boton>
          <Boton>
            <Link to="catering">Catering</Link>
          </Boton>
          <Boton>
            <Link to="contacto">Contacto</Link>
          </Boton>
          <Boton>
            <Link to="ubicacion">Ubicacion</Link>
          </Boton>
        </Botones>
        <BurguerMenuDiv>
          <BurguerIcon onClick={() => setOpen(!open)} open={open}>
            <div className="me-5">
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                  fill="#b1002c"
                />
                <path
                  d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                  fill="#b1002c"
                />
                <path
                  d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                  fill="#b1002c"
                />
              </svg>
            </div>
          </BurguerIcon>
          {open ? (
            <BurguerMenu>
              <Boton>
                <Link to="inicio">Inicio</Link>
              </Boton>
              <Boton>
                <Link to="nosotros">Nosotros</Link>
              </Boton>
              <Boton>
                <Link to="productos">Productos</Link>
              </Boton>
              <Boton>
                <Link to="catering">Catering</Link>
              </Boton>
              <Boton>
                <Link to="contacto">Contacto</Link>
              </Boton>
              <Boton>
                <Link to="ubicacion">Ubicacion</Link>
              </Boton>
            </BurguerMenu>
          ) : null}
        </BurguerMenuDiv>
      </div>
    </Nav>
  );
};

export default Navbar;
