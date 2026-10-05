(function () {
  var header = document.getElementById('siteHeader');
  var navToggle = document.getElementById('navToggle');
  var gnb = document.getElementById('gnb');
  var yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (navToggle && gnb) {
    navToggle.addEventListener('click', function () {
      var isOpen = gnb.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    gnb.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        gnb.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
