export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('.header__switcher-checkbox');

  const them = localStorage.getItem('theme') || 'light';
  themeTarget.dataset.theme = them;

  if (them === 'dark') {
    themeSwitcher.checked = true;
  }

  themeSwitcher.addEventListener('click', () => {
    if (themeTarget.dataset.theme === 'light') {
      themeTarget.dataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTarget.dataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
};
