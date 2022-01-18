import React from 'react';
import styled from '@emotion/styled';

const Navbar = () => {

    const Nav = styled.nav`
        z-index: 1;
        display: flex;
        justify-content: space-around;
        background-color: rgba(255, 255, 255, 0);
    `;

    return ( 
        <Nav>
            <div>
                Logo
            </div>
            <div>
                <h1>boton</h1>
                <h1>boton</h1>
                <h1>boton</h1>
                <h1>boton</h1>
            </div>
        </Nav>
    );
}
 
export default Navbar;