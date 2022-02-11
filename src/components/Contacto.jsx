import React from 'react';
import styled from '@emotion/styled';

const Contacto = () => {

    const ContactoLayout = styled.div`
        display: block;
        text-align: center;
        margin-top: 2rem;
    `;

    const ContactoImagen = styled.div`
        background-image: url('/media/contactopanaderia.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 40vh;
        
        @media(min-width: 1024px) {
            height: 70vh;
        }
    `;

    const Contacto = styled.form`
        font-family: 'Roboto Slab', sans-serif;
        line-height: 1.8;
        width: 50%; 
        margin: auto;

        p {
            color: #d60303;
            font-family: 'Lobster', cursive;
        }

    `;

    const ContactoInputs = styled.div`
        display: flex;
        flex-direction: column;
        padding: 3rem 0;

        input {
            margin: 0 2rem;
            padding: .3rem .3rem;
            -webkit-appearance: none;
            border: 2px solid #000;
            border-radius: 0.1rem;
        }

        textarea {
            resize: none;
            margin: 0 2rem;
            padding: .3rem .3rem;
            border: 2px solid #000;
            border-radius: 0.1rem;
        }

        button {
            margin: 2rem auto;
            width: 35%;
            height: 3rem;
            color: #FFF;
            background-color: #d60303;
            border: 1px solid #c50000;
            border-radius: 0.1rem;
        }
    `;

    return ( 
        <ContactoLayout
            id='contacto'
        >
            <Contacto>
                <h1>Contacto</h1>
                <p>- dejanos tus consultas o sugerencias -</p>
                <ContactoInputs>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name='nombre' />
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" name='email' />
                    <label htmlFor="telefono">Telefono</label>
                    <input type="number" id="telefono" name='telefono' />
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" cols="30" rows="5"></textarea>
                    <button>Enviar</button>
                </ContactoInputs>
            </Contacto>
            <ContactoImagen>
                
            </ContactoImagen>
        </ContactoLayout> 
    );
}
 
export default Contacto;