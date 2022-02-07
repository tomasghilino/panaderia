import React from 'react';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import NuestrasDelicias from './components/NuestrasDelicias';
import Productos from './components/Productos';
import Menu from './components/Menu';
import VideoInstitucional from './components/VideoInstitucional';
import Maps from './components/Maps';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Inicio />
      <Nosotros />
      <Productos />
      <NuestrasDelicias />
      <Menu />
      <VideoInstitucional />
      <Maps />
      <Footer />
    </>
  );
}

export default App;
