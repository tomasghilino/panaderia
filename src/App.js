import React from 'react';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import NuestrasDelicias from './components/NuestrasDelicias';
import Productos from './components/Productos';
import Catering from './components/Catering';
import VideoInstitucional from './components/VideoInstitucional';
import Contacto from './components/Contacto';
import Maps from './components/Maps';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Inicio />
      <Nosotros />
      <Productos />
      <NuestrasDelicias />
      <Catering />
      <VideoInstitucional />
      <Contacto />
      <Maps />
      <Footer />
    </>
  );
}

export default App;
