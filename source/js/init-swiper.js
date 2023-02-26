const initSwiper = () => {

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.promo__button--next',
      prevEl: '.promo__button--prev',
    },
  });

  return swiper;

};

export { initSwiper };
