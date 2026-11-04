/* HOKKAIDO interaction enhancements: scroll reveal, compact menu and touch feedback.
   Progressive enhancement: content remains visible when JavaScript or
   IntersectionObserver is unavailable. */
(function () {
  'use strict';

  function initialize() {
    const menuButton = document.getElementById('menuBtn');
    const menu = document.getElementById('mainLinks');
    const compactMenu = window.matchMedia('(max-width: 1250px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (menuButton && menu) {
      const synchronizeMenu = () => {
        const expanded = compactMenu.matches && menu.classList.contains('open');
        menuButton.setAttribute('aria-expanded', String(expanded));
        menuButton.setAttribute('aria-label', expanded ? '關閉選單' : '開啟選單');
        menu.setAttribute('aria-hidden', String(compactMenu.matches && !expanded));
      };

      // app.js already owns menu toggling and link closing; this layer
      // only synchronizes accessibility and handles outside/Escape close.
      menuButton.addEventListener('click', synchronizeMenu);
      menu.addEventListener('click', synchronizeMenu);
      document.addEventListener('pointerdown', (event) => {
        if (!compactMenu.matches || !menu.classList.contains('open')) return;
        if (event.target.closest('.topnav')) return;
        menu.classList.remove('open');
        synchronizeMenu();
      });
      document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape' || !menu.classList.contains('open')) return;
        menu.classList.remove('open');
        synchronizeMenu();
        menuButton.focus();
      });
      if (compactMenu.addEventListener) compactMenu.addEventListener('change', synchronizeMenu);
      else compactMenu.addListener(synchronizeMenu);
      synchronizeMenu();
    }

    const cardSelector = [
      '.tour-card', '.highlight-card', '.hotel',
      '.dd-pick', '.fg-card', '.dd-overview-item'
    ].join(', ');
    const observer = ('IntersectionObserver' in window)
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('reveal-pending');
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          });
        }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' })
      : null;
    let registered = new WeakSet();
    let stagger = 0;

    const watchCard = (element) => {
      if (registered.has(element)) return;
      registered.add(element);
      if (!observer || reducedMotion.matches) return;
      const rect = element.getBoundingClientRect();
      // Already visible on page load: never flash or hide existing content.
      if (rect.width > 0 && rect.height > 0 &&
          rect.bottom > 0 && rect.top < window.innerHeight * 0.9) return;
      element.style.setProperty('--reveal-delay', (stagger++ % 3) * 75 + 'ms');
      element.classList.add('reveal-pending');
      observer.observe(element);
    };

    const inspectNode = (node) => {
      if (node.nodeType !== 1) return;
      if (node.matches(cardSelector)) watchCard(node);
      node.querySelectorAll(cardSelector).forEach(watchCard);
    };

    // Works for initial cards and items rebuilt by itinerary, food and hotel filters.
    inspectNode(document.body);
    if (observer && 'MutationObserver' in window) {
      const dynamicCards = new MutationObserver((changes) => {
        changes.forEach((change) => {
          change.addedNodes.forEach(inspectNode);
        });
      });
      dynamicCards.observe(document.body, { childList: true, subtree: true });
    }

    const onMotionChange = () => {
      if (reducedMotion.matches) {
        if (observer) observer.disconnect();
        document.querySelectorAll('.reveal-pending').forEach((element) => {
          element.classList.remove('reveal-pending');
          element.classList.add('reveal-visible');
        });
      } else {
        registered = new WeakSet();
        inspectNode(document.body);
      }
    };
    if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', onMotionChange);
    else reducedMotion.addListener(onMotionChange);

    const touchTargets = [
      '.tour-card', '.car-btn', '.day-nav', '.hotel-filter',
      '.hotel', '.highlight-card', '.dd-pick', '.fg-card',
      '.dd-expand', '.fg-tab', '.menu-toggle'
    ].join(', ');
    let pressed = null;
    const release = () => {
      if (pressed) pressed.classList.remove('is-pressing');
      pressed = null;
    };
    document.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse') return;
      const target = event.target.closest(touchTargets);
      if (!target) return;
      release();
      pressed = target;
      pressed.classList.add('is-pressing');
    }, { passive: true });
    document.addEventListener('pointerup', release, { passive: true });
    document.addEventListener('pointercancel', release, { passive: true });
    window.addEventListener('blur', release);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
