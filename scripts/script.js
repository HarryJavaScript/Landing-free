document.querySelector('.faq-accordion').addEventListener('click', (evt) => {
  if (evt.target.closest('.faq-accordion__item-trigger')) { //убрать if
    evt.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active');
  }
});


document.querySelector('.button-burger').addEventListener('click', (event) => {
  document.querySelector('.section-header').classList.toggle('section-header--active-navigation');
  // document.querySelector('.section-header').classList.toggle('section-header--active-navigation');
});


// Swiper

const swiper = new Swiper('.section-hero-image', {
  // // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-pagination-bullet',
  // },
});