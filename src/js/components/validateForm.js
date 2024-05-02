export const useValidateForm = () => {
  const form = document.querySelector('.get-started__form'); //form submit

  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault(); //запрещаем стандартную отправку формы
    let error = formValidate(form);

    let formData = new FormData(form);
    if (error === 0) {
      alert('Форма отправлена');
      form.reset();
    }
  }

  function formValidate(e) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('tel')) {
        if (!telTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains('_name')) {
        if (input.value == '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.classList.add('error');
  }
  function formRemoveError(input) {
    input.classList.remove('error');
  }
  function telTest(input) {
    return input.value.lenght == 17;
  }
};
