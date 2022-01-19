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
        background-color: rgba(0, 0, 0, 0.2);
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
    `;

    const Logo = styled.a`
        text-decoration: none;
        margin-left: 5rem;
    `;

    const Redes = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const RedesFranco = styled.div`
        display: flex;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.2);
        padding: .5rem;
        gap: .5rem;
        align-items: center;
    `;

    const RedesTomi = styled.div`
        display: flex;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.15);
        padding: .5rem;
        gap: .5rem;
        align-items: center;
    `;

    return ( 
        <Nav>
            <Logo>
                Logo
            </Logo>
            <div className='d-flex align-items-center'>
                <Botones>
                    <Boton>Inicio</Boton>
                    <Boton>Nosotros</Boton>
                    <Boton>Catering</Boton>
                    <Boton>Contacto</Boton>
                </Botones>
                <Redes>
                    <RedesFranco>
                        <h3>Franco Brumatti</h3>
                        <div className='justify-content-between'>
                            <SocialIcon className='mx-2' url="https://github.com/FrancoBrumatti" network="github" />
                            <SocialIcon url="https://www.linkedin.com/in/franco-brumatti/" network="linkedin" />
                        </div>
                    </RedesFranco>
                    <RedesTomi>
                        <h3>Tomas Ghilino</h3>
                        <div className='justify-content-between'>
                            <SocialIcon className='mx-2' url="https://github.com/FrancoBrumatti" network="github" />
                            <SocialIcon url="https://www.linkedin.com/in/franco-brumatti/" network="linkedin" />
                        </div>
                    </RedesTomi>
                </Redes>
            </div>
        </Nav>
    );
}
 
export default Navbar;