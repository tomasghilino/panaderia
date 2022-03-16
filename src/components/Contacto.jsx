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

    @media (min-width: 1024px) {
      height: 70vh;
    }
  `;

  const Contacto = styled.form`
    font-family: 'Roboto Slab', sans-serif;
    line-height: 1.8;

    @media (min-width: 768px) {
      width: 50%;
      margin: auto;
    }

    p {
      color: #d60303;
      font-family: 'Lobster', cursive;
    }
  `;

  const ContactoInputs = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      padding: 3rem 0;
    }

    input {
      margin: 0 2rem;
      padding: 0.5rem 0.9rem;
      -webkit-appearance: none;
      border: 2px solid #666666;
      border-radius: 0.1rem;
      margin-bottom: 2rem;
    }

    textarea {
      resize: none;
      margin: 0 2rem;
      padding: 0.5rem 0.9rem;
      border: 2px solid #666666;
      border-radius: 0.1rem;
    }

    button {
      margin: 2rem auto;
      width: 35%;
      height: 3rem;
      color: #fff;
      background-color: #d60303;
      border: 1px solid #c50000;
      border-radius: 0.1rem;
    }
  `;

  return (
    <ContactoLayout id="contacto">
      <Contacto>
        <h1>Contacto</h1>
        <p>- dejanos tus consultas o sugerencias -</p>
        <ContactoInputs>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" />

          <input type="email" id="email" name="email" placeholder="Email" />

          <input
            type="number"
            id="telefono"
            name="telefono"
            placeholder="Teléfono"
          />

          <textarea
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="5"
            placeholder="Dejanos tu mensaje o sugerencia..."
          ></textarea>
          <button>Enviar</button>
        </ContactoInputs>
      </Contacto>
      <ContactoImagen></ContactoImagen>
    </ContactoLayout>
  );
};

export default Contacto;
