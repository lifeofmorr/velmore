// VELMORE UNO — bundle selector: visual state + buy-button price label.
(function () {
  var options = document.querySelectorAll('.bundle-select .option');
  var buyBtn = document.querySelector('.hero-copy .btn-buy');
  var prices = { machine: 'ADD TO CART — $789.00', bundle: 'ADD TO CART — $888.00' };
  options.forEach(function (opt) {
    var input = opt.querySelector('input[type="radio"]');
    if (!input) return;
    input.addEventListener('change', function () {
      options.forEach(function (o) { o.classList.remove('selected'); });
      opt.classList.add('selected');
      if (buyBtn && prices[input.value]) buyBtn.textContent = prices[input.value];
    });
  });

  // Reveal-on-scroll for content sections.
  var els = document.querySelectorAll('.feature, .how, .specs, .faq, .reviews, .gifts');
  if (!('IntersectionObserver' in window)) return;
  els.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(function (el) { io.observe(el); });
})();
