export const useScrollHeader = () => {
  let oldScrollTopPosition = 0;
  const header = document.querySelector('.header');
  const scrollInTop =
    document.documentElement.scrollTop < header.offsetHeight + 20;

  window.onscroll = () => {
    if (scrollInTop) {
      header.classList.add('header--show');
      header.classList.remove('header--fixed');
    } else {
      const scrollTopPosition = document.documentElement.scrollTop;
      if (oldScrollTopPosition < scrollTopPosition) {
        header.classList.remove('header--show');
      } else {
        header.classList.add('header--show');
        header.classList.add('header--fixed');
      }
      oldScrollTopPosition = scrollTopPosition;
    }
  };
};
