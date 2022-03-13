const modal = document.querySelector('.modal-overlay'),
      modalBtn =  modal.querySelector('.modal__btn'),
      modalClose = modal.querySelector('.modal__close');

const closeModal = () => {
  modal.classList.remove('open');
  modalBtn.removeEventListener('click', closeModal);
  modalClose.removeEventListener('click', closeModal);
}

const showModal = () => {
  modal.classList.add('open');
  modalBtn.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
}

export default showModal;