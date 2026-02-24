/* ═══════════════════════════════════════════════
   FLOWGOLF — Global JavaScript
   ═══════════════════════════════════════════════ */

// Modal
function openModal() { document.getElementById('modal').classList.add('active'); }
function closeModal() { document.getElementById('modal').classList.remove('active'); }
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
  }
});

// Mobile nav
function toggleNav() {
  const links = document.querySelector('.nav-links');
  if (!links) return;
  const isOpen = links.classList.toggle('mobile-open');
  if (isOpen && window.innerWidth <= 768) {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '100%';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'var(--cream)';
    links.style.padding = '24px';
    links.style.boxShadow = 'var(--shadow)';
    links.style.gap = '20px';
  } else {
    links.removeAttribute('style');
  }
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;
  if (window.scrollY > 50) {
    nav.style.padding = '12px 48px';
    nav.style.boxShadow = 'var(--shadow)';
  } else {
    nav.style.padding = '20px 48px';
    nav.style.boxShadow = 'none';
  }
});

// Active nav link
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a:not(.btn)').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
