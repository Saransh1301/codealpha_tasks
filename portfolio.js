// Dark mode toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if(body.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Simple contact form validation and feedback
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    formMessage.textContent = 'Please fill out all fields correctly.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  formMessage.style.color = 'green';

  form.reset();
});
