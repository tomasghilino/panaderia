import React from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './stylesSwiper.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const NuestrasDelicias = () => {
  const NuestrasDeliciasContainer = styled.div`
    text-align: center;
    margin-top: 5rem;
    padding: 4rem;

    @media (max-width: 768px) {
      padding: 0.5rem;
      h1,
      p {
        font-size: 1.5rem;
      }
    }
  `;
  const Titulo = styled.h1`
    font-family: 'Roboto Slab', sans-serif;
    font-size: 3.5rem;
    color: #3f3f3f;
  `;
  const Subtitulo = styled.p`
    font-family: 'Lobster', cursive;
    font-size: 1.5rem;
    color: #d60303;
  `;

  const ImgSlider = styled.img`
    padding: 2rem;
  `;

  return (
    <section className="bg-light">
      <NuestrasDeliciasContainer>
        <Titulo>Nuestras Delicias</Titulo>
        <Subtitulo>- Frescura y sabor -</Subtitulo>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <ImgSlider src="/media/productos1.jpg" alt="productos 1" />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlider src="/media/productos2.jpg" alt="productos 2" />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlider src="/media/productos3.jpg" alt="productos 3" />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlider src="/media/productos4.jpg" alt="productos 4" />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlider src="/media/productos5.jpeg" alt="productos 5" />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlider src="/media/productos6.jpeg" alt="productos 6" />
          </SwiperSlide>
        </Swiper>
      </NuestrasDeliciasContainer>
    </section>
  );
};

export default NuestrasDelicias;
