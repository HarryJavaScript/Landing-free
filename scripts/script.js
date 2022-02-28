const header = document.querySelector('.section-header');
const mainNavigation = document.getElementById('main-navigation');

// right scroll EL
document.querySelector('.button-burger').addEventListener('click', () => {
  header.classList.toggle('section-header--active-navigation');
  if (header.classList.contains('section-header--active-navigation')) {
    hideScroll();
  } else {
    showScroll();
  }
});

const hideScroll = () => {
  const scrollWidth = `${getScrollBarWidth()}px`;

  document.body.style.paddingRight = scrollWidth;
  document.body.style.overflow = 'hidden';
  mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = (evt) => {
  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';
  mainNavigation.style.paddingRight = '';
};

const hideNavigationMenu = () => {
  showScroll();
  header.classList.remove('section-header--active-navigation');
};

// resize window EL
window.addEventListener('resize', hideNavigationMenu);

const getScrollBarWidth = () => {
  const outer = document.createElement('div');

  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';

  document.body.appendChild(outer);
  const getScrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);

  return getScrollBarWidth;
}

// section FAQ show-hide answer
document.querySelector('.faq-accordion').addEventListener('click', (evt) => {
  if (evt.target.closest('.faq-accordion__item-trigger')) {
    evt.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active');
  }
});

// Swiper plugin
// Swiper Hero-Image Section
const swiperHeroImage = new Swiper('.section-hero-image', {
  loop: true,
  grabCursor: true,

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: '.section-hero-image .dots',
    clickable: true,
  },
});

// Swiper Blog Section
const swiperBlog = new Swiper('.slider-blog-container', {
  loop: true,
  grabCursor: true,

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: '.section-blog .dots',
    clickable: true,
  },

  navigation: {
    nextEl: '.section-blog .button-blog__next',
    prevEl: '.section-blog .button-blog__prev',
  },
});

// Swiper Quotes Section
const swiperQuotes = new Swiper('.slider-quotes-container', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 30,

  pagination: {
    el: '.section-quotes .dots',
    clickable: true,
  },
});