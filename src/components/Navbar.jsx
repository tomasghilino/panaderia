import React from 'react';
import styled from '@emotion/styled';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {

    const Nav = styled.nav`
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 6rem;
        background-color: rgba(0, 0, 0, 0.4);

        /* sombra */
        box-shadow: -2px -3px 17px 1px rgba(0,0,0,0.75);
        -webkit-box-shadow: -2px -3px 17px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px -3px 17px 1px rgba(0,0,0,0.75);
    `;

    const Botones = styled.div`
        display: flex;
        text-decoration: none;
        gap: 2rem;
        margin-right: 2rem;
        background-color: transparent;
    `;

    const Boton = styled.a`
        text-decoration: none;
        border: none;
        font-size: 1.5rem;
        font-weight: bold;
        color: #b1002c;
        transition: all .3s;
        &:hover{
            color: #d80036;
            cursor: pointer;
        }
    `;

    const Logo = styled.a`
        text-decoration: none;
        margin-left: 5rem;
        max-width: 8rem;
        max-height: 8rem;
        &:hover{
            cursor: pointer;
        }
    `;

    const Redes = styled.div`
        display: flex;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.4);
        padding: .5rem;
        gap: .5rem;
        align-items: center;
        color: #000000;
    `;

    return ( 
        <Nav>
            <Logo>
                <img className='w-100 h-100' src='media/logo.png' alt="" />
            </Logo>
            <div className='d-flex align-items-center'>
                <Botones>
                    <Boton>Inicio</Boton>
                    <Boton>Nosotros</Boton>
                    <Boton>Catering</Boton>
                    <Boton>Contacto</Boton>
                </Botones>
                <div>
                    <Redes>
                        <h4>Franco Brumatti</h4>
                        <div className='d-flex flex-nowrap'>
                            <SocialIcon className='mx-2' url="https://github.com/FrancoBrumatti" network="github" />
                            <SocialIcon url="https://www.linkedin.com/in/franco-brumatti/" network="linkedin" />
                        </div>
                    </Redes>
                    <Redes>
                        <h4>Tomas Ghilino</h4>
                        <div className='d-flex flex-nowrap'>
                            <SocialIcon className='mx-2' url="https://github.com/FrancoBrumatti" network="github" />
                            <SocialIcon url="https://www.linkedin.com/in/franco-brumatti/" network="linkedin" />
                        </div>
                    </Redes>
                </div>
            </div>
        </Nav>
    );
}
 
export default Navbar;