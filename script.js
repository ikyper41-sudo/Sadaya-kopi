const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Header lebih tegas saat halaman digulir.
function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Navigasi mobile.
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Buka menu' : 'Tutup menu');
  navLinks.classList.toggle('open', !isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka menu');
  });
});

// Tahun footer otomatis.
document.getElementById('year').textContent = new Date().getFullYear();
