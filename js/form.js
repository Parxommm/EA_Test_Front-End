import sendData from "./utils.js";
import showModal from "./modal.js";

const form = document.querySelector('.form'),
      inputEmail = form.querySelector('.form__input');


const checkEmail = () => {
  const address = inputEmail.value;
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(!reg.test(address)) {
    inputEmail.setCustomValidity("Enter the correct E-mail");
  } else {
    inputEmail.setCustomValidity("");
  }
}

const sendForm = () => {
  inputEmail.addEventListener('input', checkEmail);
  form.addEventListener('submit', evt => {
    evt.preventDefault();

    const formData = new FormData(form);

    sendData('https://jsonplaceholder.typicode.com/posts', formData)
      .then(() => {
        form.reset();
        showModal();
      })
      .catch(err => console.log(err));
  });
}

export default sendForm;