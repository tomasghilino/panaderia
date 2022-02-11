import React from 'react';
import styled from '@emotion/styled';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain, faSubway, faBus } from '@fortawesome/free-solid-svg-icons';

const Maps = () => {
  const Seccion = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    line-height: 2;

    p {
      font-family: 'Roboto Slab', sans-serif;
      color: #747474;
      font-size: 1.2rem;
    }

    @media (max-width: 992px) {
      display: flex;
      flex-direction: column-reverse;
    }
  `;

  const Titulo = styled.h1`
    font-family: 'Roboto Slab', sans-serif;
    letter-spacing: 0.2rem;
  `;

  const TextoDiv = styled.div`
    margin-bottom: 5rem;
    p {
      color: #990808 !important;
      font-size: 1.1rem;
    }
  `;

  const UbicacionContainer = styled.div`
    padding: 2rem;
  `;
  return (
    <div id="ubicacion">
      <Seccion>
        <MapContainer
          center={[-34.6037389, -58.3815704]}
          zoom={60}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-34.6037389, -58.3815704]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

        <UbicacionContainer className="bg-light text-center">
          <Titulo>Ubicación</Titulo>
          <TextoDiv>
            <p>Obelisco, Buenos Aires, Argentina</p>
            <p>Tel.: 123456456 - correo@correo.com</p>
          </TextoDiv>

          <p>
            Las siguientes líneas de transporte tienen rutas que pasan cerca de
            Obelisco de Buenos Aires
          </p>
          <div>
            <FontAwesomeIcon icon={faBus} />
            <p className="d-inline-block textoIcono">
              Colectivo: 140A , 140D , 24A , 29C , 59 - 1 , 59X , 67
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faTrain} />
            <p className="d-inline-block textoIcono">
              Tren: MITRE , SAN MARTÍN
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faSubway} />
            <p className="d-inline-block textoIcono">Subte: B</p>
          </div>
          <p>Productos artesanales con la mejor materia prima.</p>
        </UbicacionContainer>
      </Seccion>
    </div>
  );
};

export default Maps;
