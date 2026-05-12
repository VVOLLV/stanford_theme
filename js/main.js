/* ============================================
   Stanford University Replica — Main Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === Mobile Hamburger Menu ===
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('active');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav on link click
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          mainNav.classList.remove('active');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // === Mobile dropdown toggle ===
  document.querySelectorAll('.has-dropdown').forEach(item => {
    item.querySelector('.nav-link').addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('active');
      }
    });
  });

  // === Header shadow on scroll ===
  const header = document.getElementById('main-header');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 10) {
      header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScrollY = scrollY;
  }, { passive: true });

  // === Smooth scroll for anchor links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // === Intersection Observer for fade-in animations ===
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Animate sections on scroll
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Hero always visible
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }

  // === Search toggle placeholder ===
  const searchToggle = document.querySelector('.search-toggle');
  if (searchToggle) {
    searchToggle.addEventListener('click', () => {
      // Placeholder: in a full implementation, this would open a search overlay
      console.log('Search toggle clicked — search overlay not yet implemented');
    });
  }

  // === Keyboard navigation: close dropdowns on Escape ===
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });

  console.log('Stanford University replica — ready.');
});
