/* HOKKAIDO interaction enhancements: scroll reveal, compact menu and touch feedback.
   Progressive enhancement: content stays visible when JavaScript or
   IntersectionObserver is unavailable, because only this file adds the
   reveal classes and the html.motion-on switch that they depend on. */
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
      // app.js installs its toggle on DOMContentLoaded. Observe the final class
      // state so accessibility stays correct regardless of listener order.
      if ('MutationObserver' in window) {
        new MutationObserver(synchronizeMenu).observe(menu, {
          attributes: true, attributeFilter: ['class']
        });
      } else {
        menuButton.addEventListener('click', () => setTimeout(synchronizeMenu, 0));
        menu.addEventListener('click', () => setTimeout(synchronizeMenu, 0));
      }
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

    // Elements that enter from the side or from below, mirroring
    // Tour.tsx / Tours.tsx (x +-100, y 80, 550ms, stagger 0.15, delay 0.1)
    // and About.tsx (photo from the left, copy from the right).
    const revealGroups = [
      '.section-head',
      '.tour-card', '.highlight-card', '.hotel',
      '.dd-pick', '.fg-card', '.dd-overview-item',
      '.gallery-shot', '.story-photo', '.story-copy',
      '.prep-article', '.budget-field', '.brief-item', '.fact',
      '.refund-step', '.checklist-timeline-row', '.time-step'
    ];
    const cardSelector = revealGroups.join(', ');
    const observer = ('IntersectionObserver' in window)
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || entry.intersectionRatio < 0.15) return;
            entry.target.classList.remove('reveal-pending');
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          });
        }, { threshold: 0.15 })
      : null;

    // Motion is opt-in from JS so a missing stylesheet or script can never
    // leave the page blank, and so browsers that ignore
    // prefers-reduced-motion: no-preference still animate.
    const setMotionEnabled = (enabled) => {
      document.documentElement.classList.toggle('motion-on', Boolean(enabled));
    };
    setMotionEnabled(Boolean(observer) && !reducedMotion.matches);

    let registered = new WeakSet();

    const positionInGroup = (element, selector) => {
      const parent = element.parentElement;
      if (!parent) return 0;
      const siblings = Array.from(parent.children).filter((child) => child.matches(selector));
      const index = siblings.indexOf(element);
      return index < 0 ? 0 : index;
    };

    const motionFor = (element) => {
      if (element.matches('.story-photo')) {
        return { direction: 'left', x: -120, y: 0, duration: 600, delay: 0 };
      }
      if (element.matches('.story-copy')) {
        return { direction: 'right', x: 120, y: 0, duration: 600, delay: 0 };
      }
      if (element.matches('.section-head')) {
        return { direction: 'bottom', x: 0, y: 44, duration: 620, delay: 0 };
      }
      const selector = revealGroups.find((candidate) => element.matches(candidate)) || '';
      const index = positionInGroup(element, selector);
      const direction = ['left', 'right', 'bottom'][index % 3];
      return {
        direction,
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        y: direction === 'bottom' ? 80 : 0,
        duration: 550,
        delay: 100 + (index % 3) * 150
      };
    };

    const watchCard = (element) => {
      if (registered.has(element)) return;
      registered.add(element);
      if (!observer || reducedMotion.matches) return;
      const motion = motionFor(element);
      element.dataset.revealDirection = motion.direction;
      element.style.setProperty('--reveal-x', motion.x + 'px');
      element.style.setProperty('--reveal-y', motion.y + 'px');
      element.style.setProperty('--reveal-duration', motion.duration + 'ms');
      element.style.setProperty('--reveal-delay', motion.delay + 'ms');
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
    // Keyboard navigation must never leave focus on a transparent pending card.
    document.addEventListener('focusin', (event) => {
      const element = event.target.closest('.reveal-pending');
      if (!element) return;
      element.classList.remove('reveal-pending', 'reveal-visible');
      if (observer) observer.unobserve(element);
    });
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
        setMotionEnabled(false);
        if (observer) observer.disconnect();
        document.querySelectorAll('.reveal-pending').forEach((element) => {
          element.classList.remove('reveal-pending');
          element.classList.add('reveal-visible');
        });
      } else {
        setMotionEnabled(Boolean(observer));
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

    // Small diagnostic hook: whether motion is live, how many elements are
    // waiting to animate, and how many have already entered. Useful when a
    // deployed copy behaves differently from the local preview.
    window.hokkaidoMotion = {
      version: '2026-11-04-motion3',
      supported: Boolean(observer),
      reducedMotion: reducedMotion.matches,
      get enabled() { return document.documentElement.classList.contains('motion-on'); },
      get pending() { return document.querySelectorAll('.reveal-pending').length; },
      get revealed() { return document.querySelectorAll('.reveal-visible').length; }
    };
    document.dispatchEvent(new CustomEvent('hokkaido:motionready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
