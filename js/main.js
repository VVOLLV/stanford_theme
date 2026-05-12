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

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });

  // === Smooth scroll for anchor links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // === Intersection Observer for fade-in animations ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Quick stats strip fade-in
  const quickStats = document.querySelector('.quick-stats');
  if (quickStats) {
    quickStats.style.opacity = '0';
    quickStats.style.transform = 'translateY(20px)';
    quickStats.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(quickStats);
  }

  // Hero always visible
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }

  // === Counter Animation for Stat Numbers ===
  function animateCounters() {
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const duration = 2000;
      const startTime = performance.now();

      function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      }

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);
        const current = target * easedProgress;

        if (target % 1 === 0) {
          el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
        } else {
          el.textContent = prefix + current.toFixed(2) + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          if (target % 1 === 0) {
            el.textContent = prefix + target.toLocaleString() + suffix;
          } else {
            el.textContent = prefix + target.toFixed(2) + suffix;
          }
        }
      }

      // Start animation when element becomes visible
      const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            requestAnimationFrame(update);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      counterObserver.observe(el);
    });
  }

  animateCounters();

  // === Scroll to Top Button ===
  const scrollTopBtn = document.getElementById('scroll-top');

  function toggleScrollTop() {
    if (window.scrollY > 600) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleScrollTop, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initial check
  toggleScrollTop();

  // === Keyboard navigation: close on Escape ===
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  });

  console.log('Stanford University replica — optimized.');
});
