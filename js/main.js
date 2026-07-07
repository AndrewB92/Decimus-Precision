(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('header button[aria-label="Toggle menu"]');
  const mobileMenu = document.querySelector('.static-mobile-menu');
  const badgeClose = document.getElementById('badge-close');

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (menuButton && mobileMenu) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        mobileMenu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (badgeClose) {
    badgeClose.addEventListener('click', () => {
      const badge = badgeClose.closest('div');
      if (badge) badge.remove();
    });
  }
})();
