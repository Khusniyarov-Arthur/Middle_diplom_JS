import Swiper, { Navigation } from 'swiper';

export const swiper = () => {
  const swiper = new Swiper('#customer-benefit', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left",
    },
    
    breakpoints: {
      576: {
        slidesPerView: 3,
      },

    },
  });
}
