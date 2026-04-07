const yearEl = document.getElementById('year');
const form = document.querySelector('.join-form');
const formMessage = document.getElementById('formMessage');

yearEl.textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Thanks! Your application request was received. We will contact you soon.';
  form.reset();
});
