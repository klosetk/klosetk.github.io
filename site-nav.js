/* Shared navigation menu: scroll-aware section links, a compact sticky bar, and a More projects dropdown. */
(function () {
  var menu = document.querySelector('.sn-static');
  if (!menu) return;
  var links = [].slice.call(menu.querySelectorAll('.sn-links a[href^="#"]'));
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });

  // Compact bar
  var bar = document.createElement('div');
  bar.className = 'sn-bar';
  bar.innerHTML =
    '<div class="sn-bar-in wrap">' +
      '<button type="button" class="sn-btn has-chev" aria-expanded="false" aria-controls="sn-panel"><span class="sn-burger" aria-hidden="true"></span>Navigation menu</button>' +
      '<span class="sn-now"></span>' +
    '</div>' +
    '<div class="sn-panel wrap" id="sn-panel" hidden></div>';
  var toggle = bar.querySelector('.sn-btn'), now = bar.querySelector('.sn-now'), panel = bar.querySelector('.sn-panel');
  var copies = links.map(function (a) { var c = a.cloneNode(true); panel.appendChild(c); return c; });
  var more = menu.querySelector('.sn-more');
  if (more) bar.querySelector('.sn-bar-in').appendChild(more.cloneNode(true));
  document.body.appendChild(bar);

  function setPanel(open) {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function closeMore(except) {
    [].forEach.call(document.querySelectorAll('.sn-more[open]'), function (d) { if (d !== except) d.removeAttribute('open'); });
  }

  toggle.addEventListener('click', function (e) { e.stopPropagation(); closeMore(null); setPanel(panel.hidden); });
  panel.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a')) setPanel(false); });
  // The current page's entry in More projects goes to the top of this page instead of doing nothing.
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('.sn-drop a[aria-current="page"]') : null;
    if (!a) return;
    e.preventDefault();
    closeMore(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.addEventListener('click', function (e) {
    if (!bar.contains(e.target)) setPanel(false);
    var inside = e.target.closest ? e.target.closest('.sn-more') : null;
    closeMore(inside);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var wasPanel = !panel.hidden;
    setPanel(false); closeMore(null);
    if (wasPanel) toggle.focus();
  });
  [].forEach.call(document.querySelectorAll('.sn-more'), function (d) {
    d.addEventListener('toggle', function () { if (d.open) setPanel(false); });
  });

  // Scroll state
  var last = -2, ticking = false;
  function update() {
    ticking = false;
    bar.classList.toggle('show', menu.getBoundingClientRect().bottom < 0);
    if (!bar.classList.contains('show')) setPanel(false);
    var y = window.scrollY + 120, cur = -1;
    targets.forEach(function (el, i) { if (el && el.getBoundingClientRect().top + window.scrollY <= y) cur = i; });
    if (cur === last) return;
    last = cur;
    links.forEach(function (a, i) {
      if (i === cur) { a.setAttribute('aria-current', 'true'); copies[i].setAttribute('aria-current', 'true'); }
      else { a.removeAttribute('aria-current'); copies[i].removeAttribute('aria-current'); }
    });
    now.textContent = cur >= 0 ? links[cur].textContent : '';
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
