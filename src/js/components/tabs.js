export const useTabs = () => {
  const tabControls = document.querySelector('.activity__tab-controls');

  tabControls.addEventListener('click', tabToggle);

  function tabToggle(e) {
    const tabControl = e.target.closest('.activity__tab-controls-link');

    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains('activity__tab-controls-link--active'))
      return;

    const tabContentId = tabControl.getAttribute('href');
    const tabContent = document.querySelector(tabContentId);
    const activeControl = document.querySelector(
      '.activity__tab-controls-link--active',
    );
    const activeContent = document.querySelector(
      '.activity__tab-content--show',
    );

    activeControl.classList.remove('activity__tab-controls-link--active');
    activeContent.classList.remove('activity__tab-content--show');

    tabControl.classList.add('activity__tab-controls-link--active');
    tabContent.classList.add('activity__tab-content--show');
  }
};
