// Portfolio site scripts
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all interactive features
  initNavbar();
  initContactForm();
  initVideoCards();
});

/**
 * Handle responsive navbar collapse on link clicks
 */
function initNavbar() {
  const navLinks = document.querySelectorAll('#navContent .nav-link');
  const navCollapse = document.getElementById('navContent');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
}

/**
 * Handle contact form submission (demo: opens mail client)
 */
function initContactForm() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const subject = encodeURIComponent('Website contact from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  });
}

/**
 * Handle video thumbnail clicks (opens YouTube in new tab)
 */
function initVideoCards() {
  const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach(card => {
    card.addEventListener('click', function() {
      const id = card.dataset.videoId;
      if (!id) return;

      // Open YouTube watch page to avoid embedding issues
      const watchUrl = `https://www.youtube.com/watch?v=${id}`;
      window.open(watchUrl, '_blank', 'noopener');
    });
  });
}
