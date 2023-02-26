let navMain = document.querySelector('.site-list');
let navToggle = document.querySelector('.main-nav__toggle');

const initMenu = () => {
  console.log('init menu');
  navMain.classList.remove('site-list--nojs');
  navMain.classList.remove('site-list--opened');
  navMain.classList.add('site-list--closed');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('site-list--closed');
    navMain.classList.toggle('site-list--opened');
  });
}

export {initMenu};
