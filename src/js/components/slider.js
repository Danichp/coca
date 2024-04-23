import Swiper from 'swiper';
import { Scrollbar, Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Scrollbar],
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 1,

    scrollbar: {
      el: '.insight__scrollbar',
      dragSize: 'auto',
    },

    breakpoints: {
      578: {
        slidesPerView: 1.15,
      },
      769: {
        spaceBetween: 32,
        centeredSlides: false,
        initialSlide: 0,
        slidesPerView: 'auto',

        scrollbar: {
          dragSize: 300,
        },
      },
    },
  });
};

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Autoplay, FreeMode],
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    speed: 6000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    freeMode: true,
    freeModeMomentum: false,
  });
};
