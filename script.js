const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
const contactForm = document.getElementById('contact-form');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  navToggle.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) {
    mainNav.classList.remove('open');
    navToggle.classList.remove('active');
  }
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const category = document.getElementById('category').value;
  const quantity = document.getElementById('quantity').value.trim();
  const message = document.getElementById('message').value.trim();

  const text = `Hello M2M Prints,%0A%0AMy name is ${encodeURIComponent(name)}.%0AProduct category: ${encodeURIComponent(category)}.%0AQuantity: ${encodeURIComponent(quantity)}.%0AMobile: ${encodeURIComponent(mobile)}.%0AMessage: ${encodeURIComponent(message)}.%0A%0APlease share a quote.`;
  const url = `https://wa.me/919800000000?text=${text}`;
  window.open(url, '_blank');
});

const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('active');
  });
});
