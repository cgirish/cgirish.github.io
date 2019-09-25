// Modal
// ——————————————————————————————————————————————————
document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
    if (target.hasAttribute('data-target')) {
      var m_ID = target.getAttribute('data-target');
      document.getElementById(m_ID).classList.add('open');
      document.querySelector('body').classList.toggle('overflow-hidden');
      ;(function() {
        var bLazy = new Blazy({ });
      })();
      e.preventDefault();
    }
  }

  // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
  if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
    var modal = document.querySelector('[class="modal open"]');
    modal.classList.remove('open');
    document.querySelector('body').classList.toggle('overflow-hidden');
    e.preventDefault();
  }
}, false);
