(function () {
  var overlay = document.getElementById('mode-selector-overlay');
  if (!overlay) return;

  var overlayCards = overlay.querySelectorAll('.service a');
  var overlayTitles = overlay.querySelectorAll('.service a h2');
  var overlayImages = overlay.querySelectorAll('.service a img');
  var compass = overlay.querySelector('.mode-selector-compass img');
  var openTrigger = document.getElementById('mode-selector-open');
  var closeTrigger = document.getElementById('mode-selector-close');
  var isClosing = false;
  var activeDirection = null;
  var BASE_ROTATION_OFFSET = -45;
  var ANGLE_TOP = BASE_ROTATION_OFFSET;
  var ANGLE_LEFT = BASE_ROTATION_OFFSET - 30;
  var ANGLE_RIGHT = BASE_ROTATION_OFFSET + 30;

  document.body.classList.add('mode-selector-open');

  function openModeSelector() {
    isClosing = false;
    if (closeTrigger) {
      closeTrigger.classList.add('is-active');
    }
    document.body.classList.add('mode-selector-open');
    overlay.classList.remove('is-hidden');

    if (window.gsap) {
      gsap.killTweensOf([overlay, overlayTitles, overlayImages, compass, closeTrigger]);
      gsap.set(overlay, { clearProps: 'opacity,visibility,pointerEvents' });
      gsap.set([overlayTitles, overlayImages], {
        opacity: 1,
        scale: 1
      });
      if (compass) {
        gsap.set(compass, {
          rotation: ANGLE_TOP
        });
      }
      if (closeTrigger) {
        gsap.fromTo(closeTrigger, {
          autoAlpha: 0,
          scale: 0.96,
          rotation: 0
        }, {
          autoAlpha: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          delay: 0.12,
          ease: 'power2.inOut'
        });
      }
    }
  }

  function initOverlayHeadingAnimations() {
    var overlayHeadings = overlay.querySelectorAll('[data-animate-heading]');
    if (!overlayHeadings.length || !window.gsap || !window.SplitText) return;

    overlayHeadings.forEach(function (heading) {
      if (heading.dataset.headingAnimated === 'true') return;
      var split = SplitText.create(heading, {
        type: 'words, lines'
      });
      heading.dataset.headingAnimated = 'true';
      gsap.set(heading, {
        autoAlpha: 1
      });
      gsap.from(split.lines, {
        yPercent: 100,
        rotate: 4,
        autoAlpha: 0,
        opacity: 0,
        transformOrigin: '0% 50% -50',
        ease: 'power2.inOut',
        duration: 1.3,
        delay: 0,
        stagger: 0.12
      });
    });
  }

  if (window.gsap) {
    if (compass) {
      gsap.set(compass, {
        rotation: ANGLE_TOP
      });
    }
  }

  initOverlayHeadingAnimations();

  function closeModeSelector(direction) {
    if (isClosing) return;
    isClosing = true;

    if (window.gsap) {
      var tlOut = gsap.timeline({
        onComplete: function () {
          overlay.classList.add('is-hidden');
          overlay.style.removeProperty('visibility');
          overlay.style.removeProperty('pointer-events');
          overlay.style.removeProperty('opacity');
          document.body.classList.remove('mode-selector-open');
          isClosing = false;
        }
      });

      var targetRotation = direction === 'left' ? ANGLE_LEFT : ANGLE_RIGHT;

      if (compass) {
        var currentRaw = Number(gsap.getProperty(compass, 'rotation')) || 0;
        var currentNormalized = ((currentRaw % 360) + 360) % 360;
        var deltaToTarget = (targetRotation - currentNormalized + 360) % 360;
        var finalRotation = currentRaw + 420 + deltaToTarget;

        tlOut.to(compass, {
          duration: 0.95,
          rotation: finalRotation,
          ease: 'power2.out'
        }, 0)
          .to(compass, {
            duration: 0.12,
            rotation: finalRotation + 3,
            ease: 'power1.out'
          })
          .to(compass, {
            duration: 0.14,
            rotation: finalRotation,
            ease: 'power1.inOut'
        }, 0);
      }

      tlOut
        .to([overlayTitles, overlayImages], {
          duration: 0.25,
          opacity: 0,
          scale: 0.985,
          stagger: 0.03,
          ease: 'power4.in'
        }, 0)
        .to(closeTrigger, {
          duration: 0.3,
          autoAlpha: 0,
          scale: 0.96,
          rotation: 0,
          ease: 'power2.inOut'
        }, 0)
        .to(overlay, {
          duration: 0.4,
          opacity: 0,
          ease: 'power4.inOut'
        }, 0.08);
      return;
    }

    overlay.classList.add('is-hidden');
    overlay.style.removeProperty('visibility');
    overlay.style.removeProperty('pointer-events');
    overlay.style.removeProperty('opacity');
    document.body.classList.remove('mode-selector-open');
    isClosing = false;
  }

  overlayCards.forEach(function (card) {
    function resolveCardDirection() {
      var rect = card.getBoundingClientRect();
      var centerX = rect.left + (rect.width / 2);
      return centerX < (window.innerWidth / 2) ? 'left' : 'right';
    }

        function setActiveDirection() {
      activeDirection = resolveCardDirection();

      if (window.gsap && compass) {
        gsap.to(compass, {
          duration: 0.28,
          rotation: activeDirection === 'left' ? ANGLE_LEFT : ANGLE_RIGHT,
          ease: 'power2.out',
          overwrite: true
        });
      }
    }

    card.addEventListener('mouseenter', setActiveDirection);
    card.addEventListener('focus', setActiveDirection);
    card.addEventListener('mouseleave', function () {
      activeDirection = null;

      if (window.gsap && compass) {
        gsap.to(compass, {
          duration: 0.22,
          rotation: ANGLE_TOP,
          ease: 'power2.out',
          overwrite: true
        });
      }
    });
    card.addEventListener('blur', function () {
      activeDirection = null;

      if (window.gsap && compass) {
        gsap.to(compass, {
          duration: 0.22,
          rotation: ANGLE_TOP,
          ease: 'power2.out',
          overwrite: true
        });
      }
    });

    card.addEventListener('click', function (event) {
      event.preventDefault();
      var direction = activeDirection || resolveCardDirection();
      closeModeSelector(direction);
    });
  });

  if (openTrigger) {
    openTrigger.addEventListener('click', function (event) {
      event.preventDefault();
      openModeSelector();
    });
  }

  if (closeTrigger) {
    closeTrigger.addEventListener('click', function (event) {
      event.preventDefault();
      var direction = activeDirection || 'right';
      closeModeSelector(direction);
    });
  }
})();
