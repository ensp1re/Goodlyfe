document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
  
    function toggleMobileNav() {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    }
  
    hamburger.addEventListener('click', toggleMobileNav);
  
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileNav();
      });
    });
  });
  
  