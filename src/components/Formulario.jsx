import React from 'react';
import styled from '@emotion/styled';

const Formulario = () => {

    const FormularioLayout = styled.div`
        display: block;
        text-align: center;
    `;

    const FormularioImagen = styled.div`
        background-image: url('/media/formulariopanaderia.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 40vh;
        
        @media(min-width: 1024px) {
            height: 70vh;
        }
    `;

    const Formulario = styled.form`
        font-family: 'Roboto Slab', sans-serif;
        line-height: 1.8;
        width: 50%; 
        margin: auto;

        p {
            color: #d60303;
            font-family: 'Lobster', cursive;
        }

    `;

    const FormularioInputs = styled.div`
        display: flex;
        flex-direction: column;
        padding: 3rem 0;

        input {
            margin: 0 2rem;
        }

        textarea {
            resize: none;
            margin: 0 2rem;
        }

        button {
            margin: 2rem auto;
            width: 20%;
            height: 3rem;
            color: #FFF;
            background-color: #d60303;
            border: none;
        }
    `;

    return ( 
        <FormularioLayout>
            <Formulario>
                <h1>Contacto</h1>
                <p>- dejanos tus consultas o sugerencias -</p>
                <FormularioInputs>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name='nombre' />
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" name='email' />
                    <label htmlFor="telefono">Telefono</label>
                    <input type="number" id="telefono" name='telefono' />
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" cols="30" rows="5"></textarea>
                    <button>Enviar</button>
                </FormularioInputs>
            </Formulario>
            <FormularioImagen>
                
            </FormularioImagen>
        </FormularioLayout> 
    );
}
 
export default Formulario;