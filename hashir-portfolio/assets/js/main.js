// Main JS for navbar toggle, AOS init, and small helpers

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');
  });

  // Close the nav when a link is clicked (mobile)
  nav.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      nav.classList.remove('show');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// AOS init
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic'
    });
  }

  // Dynamic year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
