import React from 'react';
import styled from '@emotion/styled';

const Productos = () => {

    const ProductosLayout = styled.div`
        width: 100%;
        height: 100%;
    `;

    const Productos = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 22rem;
        transition: all .3s;

        &:hover{
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }
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
    `;

    const ProductosTexto = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        text-transform: uppercase;

        h1 {
            color: #d60303;
            font-weight: bolder;
        }
    `;

    return ( 
        <ProductosLayout>
            <ProductosTitulo>
                <h1>Productos</h1>
                <p>- Nuestras especialidades -</p>
            </ProductosTitulo>
            <ProductosContenido>
                <Productos>
                    <div>
                        <img className='h-100 w-100' src="/media/productos1.jpg" alt="productos"/>
                    </div>
                    <ProductosTexto>
                        <h1>Panaderia</h1>
                        <p>Panes de todo tipo y tamaño</p>
                    </ProductosTexto>
                </Productos>
                <Productos>
                    <ProductosTexto>
                        <h1>Delicias</h1>
                        <p>Gran variedad de bocadillos dulces</p>
                    </ProductosTexto>
                    <div>
                        <img className='h-100 w-100' src="/media/productos2.jpg" alt="productos"/>
                    </div>
                </Productos>
                <Productos>
                    <div>
                        <img className='h-100 w-100' src="/media/productos3.jpg" alt="productos"/>
                    </div>
                    <ProductosTexto>
                        <h1>Facturas</h1>
                        <p>Rellenas de chocolate, dulce de leche o crema pastelera</p>
                    </ProductosTexto>
                </Productos>
                <Productos>
                    <ProductosTexto>
                        <h1>Bocadillos salados</h1>
                        <p>Pancitos, sacramentos, empanadas, chips y mas!</p>
                    </ProductosTexto>
                    <div>
                        <img className='h-100 w-100' src="/media/productos4.jpg" alt="productos"/>
                    </div>
                </Productos>
            </ProductosContenido>
        </ProductosLayout>
     );
}
 
export default Productos;