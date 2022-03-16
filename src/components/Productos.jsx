import React from 'react';
import styled from '@emotion/styled';

const Productos = () => {
  const ProductosLayout = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 3rem;
  `;

  const ProductosTitulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3.5rem;
      font-family: 'Roboto Slab', sans-serif;
      line-height: 1.8;
      color: #3f3f3f;
    }

    p {
      font-size: 1.5rem;
      color: #d60303;
      font-family: 'Lobster', cursive;
    }
  `;

  const ProductosContenido = styled.div`
    display: block;

    div {
      height: 20rem;
      overflow: hidden;

      img:hover {
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
        -o-transform: scale(1.1, 1.1);
        -ms-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
        transition: all 0.4s;
      }
    }

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 30rem);
      grid-auto-flow: dense;
      transition: all 0.3s;

      div {
        height: 30rem;
      }

      div:nth-child(4n + 3) {
        grid-column: 2;
      }
    }
  `;

  const ProductosTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    padding: 2rem;
    text-align: center;

    h1 {
      color: #d60303;
      font-weight: bolder;
    }
  `;

  return (
    <ProductosLayout id="productos">
      <ProductosTitulo>
        <h1>Productos</h1>
        <p>- Nuestras especialidades -</p>
      </ProductosTitulo>
      <ProductosContenido>
        <div>
          <img
            loading="lazy"
            className="h-100 w-100"
            src="/media/productos1.webp"
            alt="productos"
          />
        </div>
        <ProductosTexto>
          <h1>Panaderia</h1>
          <p>Panes de todo tipo y tamaño</p>
        </ProductosTexto>
        <div>
          <img
            loading="lazy"
            className="h-100 w-100"
            src="/media/productos2.webp"
            alt="productos"
          />
        </div>
        <ProductosTexto>
          <h1>Delicias</h1>
          <p>Gran variedad de bocadillos dulces</p>
        </ProductosTexto>
        <div>
          <img
            loading="lazy"
            className="h-100 w-100"
            src="/media/productos3.webp"
            alt="productos"
          />
        </div>
        <ProductosTexto>
          <h1>Facturas</h1>
          <p>Rellenas de chocolate, dulce de leche o crema pastelera</p>
        </ProductosTexto>
        <div>
          <img
            loading="lazy"
            className="h-100 w-100"
            src="/media/productos4.webp"
            alt="productos"
          />
        </div>
        <ProductosTexto>
          <h1>Bocadillos salados</h1>
          <p>Pancitos, sacramentos, empanadas, chips y mas!</p>
        </ProductosTexto>
      </ProductosContenido>
    </ProductosLayout>
  );
};

export default Productos;
