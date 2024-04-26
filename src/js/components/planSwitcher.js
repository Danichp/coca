export const usePlanSwitcher = () => {
  const priceArray = document.querySelectorAll('.hero__plan-price-num');
  const priceTimeArray = document.querySelectorAll('.hero__plan-price-text');
  const switcher = document.querySelector('.hero__switcher-input-checkbox');
  const priceNumArray = [];

  priceArray.forEach((el) => {
    priceNumArray.push(+el.innerHTML);
  });

  switcher.checked = true;

  switcher.addEventListener('change', () => {
    if (switcher.checked) {
      for (let i = 0; i < priceArray.length; i++) {
        priceArray[i].textContent = priceNumArray[i];
      }
      priceTimeArray.forEach((el) => {
        el.textContent = '/mo';
      });
    } else {
      for (let i = 0; i < priceArray.length; i++) {
        priceArray[i].textContent = (priceNumArray[i] * 1.2) / 30;
      }
      priceTimeArray.forEach((el) => {
        el.textContent = '/day';
      });
    }
  });
};
