export const useAccordion = () => {
  const accordion = () => {
    if (document.documentElement.clientWidth <= 380) {
      const accordionList = document.querySelectorAll('.footer__body-list');

      accordionList.forEach((el) => {
        el.addEventListener('click', (e) => {
          const accordionList = e.currentTarget;
          const openedAccordionItem = accordionList.querySelector(
            '.footer__body-item--opened',
          );
          const openedAccordionContent = accordionList.querySelector(
            '.footer__body-item--opened .footer__body-sublist',
          );

          const accordionControl = e.target.closest('.footer__body-item-title');
          if (!accordionControl) return;
          e.preventDefault();
          const accordionItem = accordionControl.parentElement;
          const accordionContent = accordionControl.nextElementSibling;

          if (openedAccordionItem && accordionItem !== openedAccordionItem) {
            openedAccordionContent.style.maxHeight = null;
            openedAccordionItem.classList.remove('footer__body-item--opened');
          }
          accordionItem.classList.toggle('footer__body-item--opened');

          if (accordionItem.classList.contains('footer__body-item--opened')) {
            accordionContent.style.maxHeight =
              accordionContent.scrollHeight + 'px';
          } else {
            accordionContent.style.maxHeight = null;
          }
        });
      });
    }
  };

  accordion();
};
