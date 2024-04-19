export const useBurger = () => {
  const burgerBtn = document.querySelector('.burger');
  const burgerMenu = document.querySelector('.header__right');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('.body');

  const closeBurgerMenu = () => {
    burgerBtn.classList.remove('burger--active');
    burgerMenu.classList.remove('header__right--visible');
    overlay.classList.remove('overlay--visible');
    body.classList.remove('body--fixed');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('header__right--visible');
    overlay.classList.toggle('overlay--visible');
    body.classList.toggle('body--fixed');
  });

  overlay.addEventListener('click', closeBurgerMenu);
};
