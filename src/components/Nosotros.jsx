import React from 'react';
import styled from '@emotion/styled';

const Nosotros = () => {
  const ContenedorNosotros = styled.div`
    background-color: #e9e9e9;
  `;

  const TextoNosotros = styled.div`
    font-family: 'Roboto Slab', sans-serif;
    line-height: 1.8;

    padding: 2rem;
    color: #3f3f3f;
    font-size: 1.3rem;

    h1 {
      font-size: 3.5rem;
    }

    h1,
    p {
      text-align: center;
    }
  `;

  const TextoCursiva = styled.p`
    color: #d60303;
    font-family: 'Lobster', cursive;
  `;

  const Immg = styled.div`
    background: url('/media/nosotrosImagen.webp') center center no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
      height: 300px;
    }
  `;
  return (
    <ContenedorNosotros id="nosotros" className="row gx-0">
      <TextoNosotros className="col-md-6 ">
        <h1>Nosotros</h1>
        <TextoCursiva>- Nuestros Secretos -</TextoCursiva>
        <p>
          El secreto para lograr la calidad, la frescura y el sabor inigualable
          de los productos que elaboramos responde a un arte, que se transmite
          de generación en generación y se basa en la pasión por lo que hacemos.
        </p>
        <p>
          Somos la segunda generación de una familia, junto a un equipo cuyo
          principal objetivo sigue siendo brindar a nuestros clientes productos
          de calidad.
        </p>

        <TextoCursiva>
          Productos artesanales con la mejor materia prima.
        </TextoCursiva>
      </TextoNosotros>
      <Immg loading="lazy" className="col-md-6"></Immg>
    </ContenedorNosotros>
  );
};

export default Nosotros;
