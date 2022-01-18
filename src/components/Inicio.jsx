import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Inicio = () => {
  const Img = styled.img`
    width: 100%;
    height: 100vh;
  `;

  const Hh1 = styled.h1`
    position: fixed;
    top: 0;
    z-index: 5;
  `;
  return (
    <div>
      <Hh1>ESTO ES UNA NAVBARBRO</Hh1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <Img src="media/inicioFondo1.jpeg" alt="fondo" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src="media/inicioFondo2.jpeg" alt="fondo" />
        </SwiperSlide>
      </Swiper>
      <Img src="media/inicioFondo2.jpeg" alt="fondo" />
      <Img src="media/inicioFondo2.jpeg" alt="fondo" />
    </div>
  );
};

export default Inicio;
