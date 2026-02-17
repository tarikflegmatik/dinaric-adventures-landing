/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/src/index.js":
/*!********************************!*\
  !*** ./assets/js/src/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_swiper_swipers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/swiper/swipers */ "./assets/js/src/modules/swiper/swipers.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/script */ "./assets/js/src/modules/script.js");
/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_map_mapalex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/map/mapalex */ "./assets/js/src/modules/map/mapalex.js");
/* harmony import */ var _modules_map_mapalex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_map_mapalex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ "./assets/js/src/modules/filter.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

// import './modules/swiper/swipers';




 //after page loads, if html has class "js" remove noscript elements that are immediate siblings of elements with class .ewww_webp_loaded

if (document.documentElement.classList.contains('js')) {
  var noscripts = document.querySelectorAll('noscript');
  noscripts.forEach(function (noscript) {
    if (noscript.previousElementSibling.classList.contains('ewww_webp_loaded')) {
      noscript.remove();
    }
  });
}

var isAosDisabled = false;
aos__WEBPACK_IMPORTED_MODULE_1___default.a.init({
  // Global settings:
  disable: function disable() {
    return isAosDisabled; // Return the current state of isAosDisabled
  },
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 130,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
var smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 2,
  smoothTouch: 0.1,
  effects: true
});

var ready = function ready(callback) {
  document.readyState !== 'loading' ? callback() : document.addEventListener('DOMContentLoaded', callback);
};

document.addEventListener('DOMContentLoaded', function () {
  Object(_modules_swiper_swipers__WEBPACK_IMPORTED_MODULE_0__["initSwipers"])();
});
jQuery(document).ajaxComplete(function () {
  Object(_modules_swiper_swipers__WEBPACK_IMPORTED_MODULE_0__["initSwipers"])();
}); // Run on page load
// window.addEventListener("reload", () => {
// window.scrollTo(0, 0);
// ScrollTrigger.clearScrollMemory("manual");
// });
// $(document).ready(function () {
// 	$("#generate-pdf").attr("disabled", true);
// });
// $(window).on("load", function () {
// 	$("#generate-pdf").attr("disabled", false);
// });
// $(document).ready(function () {
// 	$(document).on("keydown", e => {
// 		if (e.ctrlKey && e.key === "p") {
// 			e.preventDefault();
// 			generatePDF();
// 		}
// 	});
// 	$(document).on("click", "#generate-pdf", e => {
// 		e.preventDefault();
// 		generatePDF();
// 	});
// });
// function generatePDF() {
// 	// Disable GSAP ScrollSmoother
// 	if (typeof smoother !== "undefined" && smoother) {
// 		smoother.kill();
// 	}
// 	// Disable GSAP ScrollTrigger animations
// 	if (typeof ScrollTrigger !== "undefined") {
// 		ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// 	}
// 	// Remove GSAP transformations
// 	$("#smooth-content").css({
// 		transform: "none",
// 		position: "static",
// 	});
// 	$("#smooth-wrapper").css({
// 		transform: "none",
// 		position: "static",
// 	});
// 	// Disable AOS animations
// 	$("[data-aos]").each(function () {
// 		$(this).removeAttr("data-aos").css({
// 			opacity: "1",
// 			transform: "none",
// 		});
// 	});
// 	$("[data-view-more]").each(function () {
// 		const innerLoopItems = $(this).find(".view-more-loop-item");
// 		innerLoopItems.each(function () {
// 			$(this).css("display", "");
// 		});
// 	});
// 	$("[data-component='accordion']").each(function () {
// 		const $accordion = $(this);
// 		$accordion.find("[data-accordion-item]").each(function () {
// 			const $cross = $(this).find(".arrow");
// 			const $inner = $(this).find("[data-accordion-inner]");
// 			const $header = $(this).find("[data-accordion-header]");
// 			$inner.slideDown("slow");
// 			$cross.addClass("rotate");
// 			$header.addClass("active");
// 		});
// 	});
// 	$(".truncated").removeClass("truncated");
// 	// Disable GSAP text effects (like splitting text)
// 	$("[data-split]").each(function () {
// 		$(this).html($(this).text());
// 	});
// 	$("html").css("scroll-behavior", "auto");
// 	// Ensure smooth scrolling is off
// 	setTimeout(() => {
// 		window.print(); // Trigger print
// 	}, 800);
// 	setTimeout(() => {
// 		location.reload(); // Reload page to restore animations after printing
// 	}, 1000);
// }

document.addEventListener('DOMContentLoaded', function () {
  var observer = new MutationObserver(function (mutations) {
    var openDialogs = document.querySelectorAll('dialog[open]');
    smoother.paused(openDialogs.length > 0);
  });
  observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true
  });
});
/*
	SNAMI: REVEAL IMAGES ON SCROLL TRIGGER
*/

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);
  var revealContainers = gsap.utils.toArray('[data-reveal-image]');
  if (revealContainers.length === 0) return;
  revealContainers.forEach(function (container) {
    var image = container.querySelector('img');
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: 'restart none none none'
      }
    });
    tl.to(container, {
      duration: 1,
      '--height': '100%',
      ease: 'power2.ease'
    }).to(container, {
      duration: 1,
      '--height': '0%',
      ease: 'power2.ease'
    }).to(image, {
      duration: 0.2,
      opacity: 1,
      delay: -1,
      height: '100%'
    }).from(image, {
      duration: 1,
      scale: 1.4,
      ease: 'power2.inOut',
      delay: -1.2
    }).to(container, {
      '--clr-1': 'rgba(26, 26, 26, 0.6)',
      '--clr-2': 'rgba(26, 26, 26, 0.3)'
    }, '<');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.view-more-container').forEach(function (container) {
    container.addEventListener('click', function (e) {
      var button = e.target.closest('.view-more-link');
      if (!button) return;
      e.preventDefault();
      var viewMoreSection = button.closest('[data-view-more]');
      var hiddenItems = viewMoreSection.querySelectorAll('.view-more-loop-item[data-hidden-loop]');
      var btnSpan = container.querySelector('.change-text');
      var isExpanded = button.getAttribute('data-expanded') === 'true';

      if (isExpanded) {
        // VIEW LESS: Hide items and scroll to data-scroll-to element
        var scrollElement = viewMoreSection.querySelector('[data-scroll-to="true"]'); // Hide all items with data-hidden-loop

        hiddenItems.forEach(function (loopItem) {
          loopItem.style.display = 'none';
        });
        btnSpan.textContent = 'View More';
        button.setAttribute('data-expanded', 'false'); // Scroll after layout recalculation

        setTimeout(function () {
          if (scrollElement) {
            var top = scrollElement.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({
              top: top,
              behavior: 'smooth'
            });
          }
        }, 50);
      } else {
        // VIEW MORE: Reveal 3 more items
        var revealedCount = 0;
        hiddenItems.forEach(function (loopItem) {
          if (revealedCount < 3 && loopItem.style.display === 'none') {
            loopItem.style.display = '';
            revealedCount++;
          }
        }); // Check if all items are revealed

        var allVisible = _toConsumableArray(hiddenItems).every(function (loopItem) {
          return loopItem.style.display !== 'none';
        });

        if (allVisible) {
          btnSpan.textContent = 'View Less';
          button.setAttribute('data-expanded', 'true');
        }
      }

      document.querySelectorAll('.swiper').forEach(function (swiper) {
        if (swiper.swiper) {
          swiper.swiper.update();
        }
      });
      refreshPluginsOnClick();
    });
  });
});
/*
	SNAMI: CURSOR FOLLOWER
	Add data-cursor-target attribute to the element you want to target
*/

ready(function () {
  var isTouchDevice = ('ontouchstart' in window); // create cursor

  var cursorDiv = document.createElement('div');
  cursorDiv.classList.add('cursor-follower');
  document.body.appendChild(cursorDiv);
  var cursor = document.querySelector('.cursor-follower');
  if (isTouchDevice) return;
  window.addEventListener('mousemove', function (e) {
    var target = e.target,
        x = e.x,
        y = e.y;
    var cursorTarget = target.closest('[data-cursor-target]');
    var isTargetOnLink = target.closest('a:not([data-fancybox], .clickable-parent-heading > a)');

    if (cursorTarget && !isTargetOnLink) {
      var cursorText = cursorTarget.getAttribute('data-cursor-text') || 'DRAG';
      cursorDiv.textContent = cursorText;
      gsap.to(cursor, {
        x: x + 60,
        y: y + 60,
        duration: 0.5,
        ease: 'power2',
        opacity: 1,
        scale: 2.5
      });
    } else {
      gsap.to(cursor, {
        x: x + 60,
        y: y + 60,
        duration: 0.5,
        ease: 'power2',
        opacity: 0,
        scale: 1
      });
    }
  });
  document.addEventListener('mouseleave', function () {
    gsap.to(cursor, {
      duration: 0.5,
      opacity: 0,
      scale: 0
    });
  });
});
ready(function () {
  var filterButtons = document.querySelectorAll('.filter span');
  var resorts = document.querySelectorAll('.single-resort');
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');
      var activeSpan = document.querySelector('.filter span.active');

      if (activeSpan) {
        activeSpan.classList.remove('active');
      }

      button.classList.add('active');
      resorts.forEach(function (resort) {
        var resortType = resort.getAttribute('data-resort-type');

        if (filter === 'all' || resortType === filter) {
          resort.style.display = '';
        } else {
          resort.style.display = 'none';
        }
      });
      refreshPluginsOnClick();
    });
  });
});
/*
	SNAMI: CUSTOM SWIPER FOR DESTINATIONS PAGE / SINGLE DESTINATION PAGE
	Same elements are used for all destinations swiper and has the same functionality.
*/

var swiperMap = new Map();

function initializeSwiper(selector, options) {
  return new Swiper(selector, options);
}

function updateActiveClass(swiper, activeIndex) {
  var swiperSection = swiper.el.closest('section');

  if (swiperSection) {
    swiperSection.querySelectorAll('[data-swiper-index]').forEach(function (el) {
      el.classList.remove('active');

      if (parseInt(el.getAttribute('data-swiper-index')) === activeIndex) {
        el.classList.add('active');
      }
    });
  }
}

var customSwiper = document.querySelectorAll('.customSwiper');

var _loop = function _loop(index) {
  var _ref4, _ref5, _ref6;

  var swiperSection = customSwiper[index].closest('section');
  var prevButton = swiperSection.querySelector('.button-prev');
  var nextButton = swiperSection.querySelector('.button-next');
  var defaultPrevButton = swiperSection.querySelector('.swiper-button-prev');
  var defaultNextButton = swiperSection.querySelector('.swiper-button-next');
  var defaultPagination = swiperSection.querySelector('.pagination');
  var pagination = swiperSection.querySelector('.swiper-pagination');
  (_ref4 = defaultPrevButton !== null && defaultPrevButton !== void 0 ? defaultPrevButton : prevButton) === null || _ref4 === void 0 || _ref4.classList.add('button-prev-' + index);
  (_ref5 = defaultNextButton !== null && defaultNextButton !== void 0 ? defaultNextButton : nextButton) === null || _ref5 === void 0 || _ref5.classList.add('button-next-' + index);
  (_ref6 = defaultPagination !== null && defaultPagination !== void 0 ? defaultPagination : pagination) === null || _ref6 === void 0 || _ref6.classList.add('pagination-' + index);
  customSwiper[index].classList.add('customSwiper-' + index);
  var progress = swiperSection.querySelector('.progress');
  var SwiperOptions = {
    // loop: true,
    spaceBetween: 0,
    grabCursor: false,
    slidesPerView: 1,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 1500,
    watchSlidesProgress: index === 1 ? false : true,
    effect: 'fade',
    // autoplay: {
    // 	disableOnInteraction: false,
    // },
    navigation: {
      nextEl: swiperSection.querySelector('.button-next-' + index),
      prevEl: swiperSection.querySelector('.button-prev-' + index)
    },
    on: {
      slideChange: function slideChange() {
        var activeIndex = this.realIndex;
        updateActiveClass(this, activeIndex);
      },
      init: function init() {
        if (customSwiper[index] === customSwiper[index].closest('.not-playing') || customSwiper[index].classList.contains('not-playing')) {
          this.autoplay.stop();
        } else {
          this.autoplay.start();
        }

        if (progress) {
          progress.classList.remove('animate');
          progress.classList.add('animate');
        }
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        if (progress) {
          progress.classList.remove('animate');
        }
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        if (progress) {
          progress.classList.add('animate');
        }
      }
    },
    pagination: {
      el: swiperSection.querySelector('.pagination-' + index),
      type: 'custom',
      renderCustom: function renderCustom(swiper, current, total) {
        var progressPercentage = current / total * 100;
        return "\n\t\t\t  <div class=\"pagination-wrapper\">\n\t\t\t\t <div class=\"spans-wrapper\">\n\t\t\t\t\t<span class=\"current\">".concat(('0' + current).slice(-2), "</span>\n\t\t\t\t\t /\n\t\t\t\t\t<span class=\"total\">").concat(('0' + total).slice(-2), "</span>\n\t\t\t\t </div>\n\t\t\t\t <div class=\"progressbar-background\">\n\t\t\t\t\t<div class=\"progressbar-fill\" style=\"width: ").concat(progressPercentage, "%;\"></div>\n\t\t\t\t </div>\n\t\t\t  </div>");
      }
    }
  };

  if (document.querySelector('#editors-picks-slider')) {
    SwiperOptions.allowTouchMove = true;
    SwiperOptions.loop = true;
    SwiperOptions.grabCursor = true;
    SwiperOptions.effect = 'none';
  }

  var customNewSwiper = initializeSwiper('.customSwiper-' + index, SwiperOptions);
  var swiperContainer = customNewSwiper.el;

  if (pagination) {
    customNewSwiper.autoplay.stop();
    new IntersectionObserver(function (entries, observer) {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        customNewSwiper.autoplay.start();
      }
    }).observe(swiperContainer);
  } // Map the Swiper instance to its container


  swiperMap.set(swiperContainer, customNewSwiper);
};

for (var index = 0; index < customSwiper.length; index++) {
  _loop(index);
} // handle spot clicks


document.addEventListener('DOMContentLoaded', function () {
  var spotNames = document.querySelectorAll('.spot-name');
  spotNames.forEach(function (spotName) {
    spotName.addEventListener('click', function (event) {
      event.preventDefault(); // Get the data attributes from the clicked .spot-name

      var spotIndex = spotName.getAttribute('data-spot-index');
      var swiperIndex = spotName.closest('[data-swiper-index]').getAttribute('data-swiper-index'); // Select all .spot-text elements with the same data-swiper-index

      var spotTexts = document.querySelectorAll(".spot-text[data-swiper-index=\"".concat(swiperIndex, "\"]"));
      var spotNameImages = document.querySelectorAll('.spot-name-image');
      var spotImages = document.querySelectorAll("img[data-swiper-index=\"".concat(swiperIndex, "\"]")); // Remove .active class from all .spot-text elements and .spot-name elements with the same swiper index

      spotTexts.forEach(function (spotText) {
        return spotText.classList.remove('spot-text-active');
      });
      spotNameImages.forEach(function (spotNameImage) {
        return spotNameImage.classList.remove('spot-name-image');
      });
      spotNames.forEach(function (name) {
        if (name.closest('[data-swiper-index]').getAttribute('data-swiper-index') === swiperIndex) {
          name.classList.remove('spot-name-active');
        }
      });
      spotImages.forEach(function (image) {
        return image.classList.remove('active-image');
      }); // Add .active class to the targeted .spot-text element and .spot-name element

      var targetSpotText = document.querySelector(".spot-text[data-swiper-index=\"".concat(swiperIndex, "\"][data-spot-index=\"").concat(spotIndex, "\"]"));

      if (targetSpotText) {
        targetSpotText.classList.add('spot-text-active');
      }

      spotName.classList.add('spot-name-active'); // Add .active-image class to the targeted image

      var targetImage = document.querySelector("img[data-swiper-index=\"".concat(swiperIndex, "\"][data-spot-index=\"").concat(spotIndex, "\"]"));

      if (targetImage) {
        targetImage.classList.add('active-image');
        targetImage.classList.add('active');
      }
    });
  });
});
ready(function () {
  var parallax = document.querySelector('#destination_page_slider');
  if (!parallax) return;
  gsap.registerPlugin(ScrollTrigger);
  var magicalText = parallax.querySelector('.magical-text');
  var swiperWrapper = parallax.querySelector('.destination_swiper');
  var swiperControls = parallax.querySelector('.swiper_controls');
  var sliderHeadings = gsap.utils.toArray('.heading-wrapper > h3', parallax);
  var content = parallax.querySelector('.content');
  var tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'power2.Out',
      duration: 1
    },
    scrollTrigger: {
      animation: tl,
      trigger: parallax,
      start: 'top 15%',
      end: 'bottom bottom',
      scrub: 1,
      // pin: true,
      // pinSpacing: true,
      once: true // markers: true,

    }
  });
  var scaleValues = [{
    breakpoint: 440,
    initial: {
      clipPath: 'inset(0 15% 0 15%)'
    }
  }, {
    breakpoint: 780,
    initial: {
      clipPath: 'inset(0 25% 0 25%)'
    }
  }, {
    breakpoint: 1240,
    initial: {
      clipPath: 'inset(0 30% 0 30%)'
    }
  }, {
    breakpoint: Infinity,
    initial: {
      clipPath: 'inset(0 35% 0 35%)'
    }
  }];
  var viewportWidth = window.innerWidth;
  var currentValues = scaleValues.find(function (_ref) {
    var breakpoint = _ref.breakpoint;
    return viewportWidth <= breakpoint;
  });
  tl.to(magicalText, {
    opacity: 0,
    y: '-50%',
    color: 'white',
    zIndex: 2
  }).fromTo(sliderHeadings, {
    left: '50%',
    top: '50%',
    x: '-50%'
  }, {
    left: '50%',
    top: '0%',
    y: '-50%'
  }, '<').to(content, {
    opacity: 1
  }, '<').fromTo(swiperWrapper, {
    clipPath: currentValues.initial.clipPath,
    scale: 0.8
  }, {
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1
  }, '<').to(swiperControls, {
    opacity: 1
  }, '<');
}); // #town-review section

ready(function () {
  var ExplorerSection = document.querySelector('#town-review');
  var mazeWrapper = document.querySelector('.maze-wrapper');
  var svgPaths = mazeWrapper === null || mazeWrapper === void 0 ? void 0 : mazeWrapper.querySelectorAll('#maze-svg path');
  if (!ExplorerSection || !svgPaths) return;
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

  var createMazeWrapper = function createMazeWrapper() {
    var timeline = gsap.timeline();
    svgPaths.forEach(function (path) {
      var pathLength = path.getTotalLength();
      gsap.set(path, {
        opacity: 0,
        visibility: 'visible',
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });
      timeline.to(path, {
        opacity: 1,
        strokeDashoffset: 0,
        ease: 'power1.inOut'
      }, '<');
    });
    timeline.to(mazeWrapper, {
      opacity: 0,
      y: '-100%',
      cursor: 'none',
      zIndex: -1
    });
    return timeline;
  };

  ScrollTrigger.create({
    trigger: mazeWrapper,
    animation: createMazeWrapper(),
    start: 'top top',
    end: function end() {
      return "+=".concat(window.innerHeight, " * 2");
    },
    scrub: 1,
    pin: ExplorerSection
  });
}); // ----------------------------------
// #timeless section

ready(function () {
  var timelessSection = document.querySelector('#timeless');
  if (!timelessSection) return;
  var innerTimeless = timelessSection.querySelector('.timeless');
  var innerLyrical = timelessSection.querySelector('#lyrical');
  gsap.registerPlugin(ScrollTrigger);

  var timelessSectionAnimation = function timelessSectionAnimation() {
    var timeliness = gsap.timeline();
    gsap.set([innerLyrical], {
      y: '100%',
      opacity: 0
    });
    timeliness.to(innerTimeless, {
      delay: 0.2,
      x: '100%',
      opacity: 0,
      zIndex: -1
    }, 0);
    timeliness.to([innerLyrical], {
      y: 0,
      opacity: 1
    }, 0.5);
    return timeliness;
  };

  ScrollTrigger.create({
    trigger: timelessSection,
    animation: timelessSectionAnimation(),
    start: 'top top',
    end: '+=' + window.innerHeight * 2,
    scrub: true,
    pin: timelessSection,
    // markers: true,
    invalidateOnRefresh: true
  });
}); // ------------------------------------

ready(function () {
  var revealImages = document.querySelectorAll('[data-clip-image]');
  var randomItems = gsap.utils.toArray('[data-item-gsap]');

  if (revealImages.length !== 0) {
    gsap.registerPlugin(ScrollTrigger);
    revealImages.forEach(function (container, i) {
      var image = container.querySelector('img');
      var tl = gsap.timeline({
        defaults: {
          ease: 'power4.Out'
        },
        scrollTrigger: {
          trigger: container,
          toggleActions: 'restart none none reset'
        }
      });
      tl.set(container, {
        autoAlpha: 1
      });
      tl.from(container, 1.3, {
        xPercent: -100
      });
      tl.from(image, 1.3, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.3
      });
    });
  }

  if (randomItems.length !== 0) {
    randomItems.forEach(function (item) {
      gsap.fromTo(item, {
        opacity: 0,
        yPercent: -100
      }, {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          stagger: 0.5,
          toggleActions: 'play none none reverse'
        }
      });
    });
  }
});
ready(function () {
  var scrollingSection = document.querySelectorAll('[data-scroll-animation]');
  if (scrollingSection.length === 0) return;
  gsap.registerPlugin(ScrollTrigger); // for starting the featured image with animation
  // const scaledImage = document.querySelector(".scale-image");

  var tl = gsap.timeline({
    defaults: {
      ease: 'power2.inOut',
      duration: 2
    }
  }); // tl.fromTo(scaledImage, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1 });

  scrollingSection.forEach(function (section) {
    var featuredSection = document.querySelector('[data-featured]');
    var imageWrapper = section.querySelector('.image-wrapper');
    var scaledImage = section.querySelector('.scale-image');
    var circleText = section.querySelector('.circleText');
    var content = section.querySelector('.content-wrapper > .col-2');
    var listItems = content ? gsap.utils.toArray('.step', content) : []; // for featured image on tour single post

    var tl_section = gsap.timeline({
      paused: true,
      defaults: {
        ease: featuredSection ? 'power2.inOut' : 'power2.in',
        duration: featuredSection ? 0.6 : 1.5
      },
      scrollTrigger: {
        trigger: section,
        start: 'top 0%',
        end: featuredSection ? '' : '+=' + window.innerHeight * 2,
        scrub: featuredSection ? 0.4 : 1,
        pin: true,
        anticipatePin: true,
        toggleActions: 'play none none none'
      }
    });

    if (circleText) {
      tl_section.to(circleText, {
        opacity: 0
      }, '<');
    }

    if (scaledImage) {
      // Calculate dynamic sizes based on the viewport
      var scaleValues = [{
        breakpoint: 480,
        initial: {
          width: '55%',
          height: '50%',
          opacity: 1
        }
      }, {
        breakpoint: 1024,
        initial: {
          width: '45%',
          height: '55%',
          opacity: 1
        }
      }, {
        breakpoint: Infinity,
        // For devices above 1024px
        initial: {
          width: '30%',
          height: '75%',
          opacity: 1
        }
      }];
      var viewportWidth = window.innerWidth;
      var currentValues = scaleValues.find(function (_ref2) {
        var breakpoint = _ref2.breakpoint;
        return viewportWidth <= breakpoint;
      });
      tl_section.fromTo(scaledImage, {
        width: currentValues.initial.width,
        height: currentValues.initial.height,
        '--opac': '1'
      }, {
        width: '100%',
        height: '100%',
        '--opac': '.3'
      }, '<');
    }

    if (imageWrapper) {
      tl_section.to(imageWrapper, {
        '--clr-1': '#00000070',
        '--clr-2': '#00000003'
      }, '<');
    }

    if (content) {
      tl_section.fromTo(content, {
        opacity: 0,
        y: '50%'
      }, {
        opacity: 1,
        y: '0%',
        zIndex: 2
      }, '<');
    }

    if (listItems.length !== 0) {
      tl_section.fromTo(listItems, {
        opacity: 0,
        y: '50%'
      }, {
        opacity: 1,
        y: '0%',
        stagger: 1
      }, '<');
    }
  });
}); // #concierge_page_about

ready(function () {
  var _triggerElements$, _triggerElements$2, _triggerElements$3, _triggerElements$4, _triggerElements$5;

  var conciergeSection = document.querySelector('#concierge_page_about');
  if (!conciergeSection) return;
  var triggerElements = gsap.utils.toArray(['.first-item', '.second-item', '.third-item'], conciergeSection);
  var imagesScaled = (_triggerElements$ = triggerElements[0]) === null || _triggerElements$ === void 0 ? void 0 : _triggerElements$.querySelector('.image-scaled');
  var imagesLT = (_triggerElements$2 = triggerElements[2]) === null || _triggerElements$2 === void 0 ? void 0 : _triggerElements$2.querySelector('.media.left_top');
  var imagesLB = (_triggerElements$3 = triggerElements[2]) === null || _triggerElements$3 === void 0 ? void 0 : _triggerElements$3.querySelector('.media.left_bottom');
  var imagesRT = (_triggerElements$4 = triggerElements[2]) === null || _triggerElements$4 === void 0 ? void 0 : _triggerElements$4.querySelector('.media.right_top');
  var imagesRB = (_triggerElements$5 = triggerElements[2]) === null || _triggerElements$5 === void 0 ? void 0 : _triggerElements$5.querySelector('.media.right_bottom');
  triggerElements.forEach(function (element, i) {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 45%',
        end: 'top 65%',
        // no scrub, just trigger once
        toggleActions: 'play none none reverse' // play when triggered
        // markers: true,

      }
    }); // Fade in the element over 1 second

    tl.to(element, {
      opacity: 1,
      duration: 1
    });

    if (i === 0 && imagesScaled) {
      // Animate the scaled image over 1.5 seconds
      tl.to(imagesScaled, {
        width: '100%',
        opacity: 0.7,
        duration: 0.8,
        ease: 'power2.out'
      }, 0 // start at the same time as element fade
      );
    }

    if (i === 2) {
      // Animate the four images at the same time with longer duration
      tl.to([imagesLT, imagesLB, imagesRT, imagesRB], {
        xPercent: function xPercent(index) {
          return [-30, -50, 50, 67][index];
        },
        yPercent: function yPercent(index) {
          return [-8, 30, -27, 12][index];
        },
        zIndex: 2,
        duration: 1.8,
        // longer transition
        ease: 'power2.out'
      }, 0 // start all at the same time
      );
    }
  });
}); //Slightly Move Image with mousemove

function mouseMoveFunc(evt) {
  var section = evt.currentTarget;
  var moveContainer = section.querySelectorAll('.mouse-mover');
  if (!moveContainer.length) return;
  var percent = gsap.utils.normalize(0, section.offsetWidth, evt.pageX - section.offsetLeft);
  moveContainer.forEach(function (item) {
    var randomFactor = Math.random() * (0.15 - 0.1) + 0.1;
    var maxOffset = gsap.getProperty(item, 'width') * randomFactor.toFixed(3);
    gsap.to(item, {
      duration: 1.5,
      x: percent * maxOffset - maxOffset / 1.2,
      overwrite: true
    });
  });
}

ready(function () {
  var sections = document.querySelectorAll('[data-mouse-move]');
  sections.forEach(function (section) {
    section.addEventListener('mousemove', mouseMoveFunc);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var movingSwiper = document.querySelector('.moveswiper');
  if (!movingSwiper) return;
  gsap.registerPlugin(ScrollTrigger);
  var content = document.querySelector('.content');
  var yValue = window.innerWidth < 1281 ? '80px' : '180px';
  var tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'power2.Out',
      duration: 1.2
    },
    scrollTrigger: {
      animation: tl,
      trigger: movingSwiper,
      start: 'top 30%',
      end: '+-100px',
      // markers: true,
      toggleActions: 'play none none reverse'
    }
  });
  tl.to(movingSwiper, {
    y: yValue,
    '--opacity': '0.8'
  }).to(content, {
    opacity: 1,
    cursor: 'auto',
    pointerEvents: 'auto'
  });
});

var portfolioSwiper = function portfolioSwiper(el) {
  gsap.registerPlugin(ScrollTrigger);
  var content = el.querySelectorAll('.title-wrapper, .intro-text, .swiper-pagination, .navigation-area');
  var tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'power2.Out',
      duration: 1.2
    },
    scrollTrigger: {
      // animation: tl,
      trigger: el,
      // once: true,
      start: 'top 30%',
      end: 'bottom 30%',
      // markers: true,
      toggleActions: 'play none none reverse'
    }
  });
  var isSmall = window.matchMedia('(max-width: 1281px)').matches;
  tl.to(el, {
    y: isSmall ? '80px' : '130px',
    '--opacity': '0.8'
  }).to(content, {
    opacity: 1,
    cursor: 'auto'
  });
};

ready(function () {
  var portfolioSw = document.querySelector('.portfolioswiper');
  if (portfolioSw) portfolioSwiper(portfolioSw);
}); // Marquee text on portfolio single pages

ready(function () {
  var marqueeTexts = document.querySelectorAll('.floating-marquee');
  if (marqueeTexts.length === 0) return;
  gsap.registerPlugin(ScrollTrigger);
  marqueeTexts.forEach(function (marquee) {
    var direction = 1; // 1 = forward, -1 = backward scroll

    var rollTargets = marquee.querySelectorAll('.rollingText'); // Select ALL rollingText elements

    if (rollTargets.length === 0) {
      console.error('Error: No rollingText elements found in marquee.');
      return;
    } // Apply rolling effect to each text


    var rolls = Array.from(rollTargets).map(function (target) {
      return roll(target, {
        duration: 20
      });
    }); // Create ScrollTrigger to reverse direction on scroll

    var scroll = ScrollTrigger.create({
      trigger: marquee,
      onUpdate: function onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1;

          try {
            gsap.to(rolls, {
              timeScale: direction,
              overwrite: true
            });
          } catch (error) {
            console.error('GSAP Animation Error:', error);
          }
        }
      }
    }); // Rolling function to animate each text element

    function roll(target, vars, reverse) {
      var _vars;

      vars = vars || {};
      (_vars = vars).ease || (_vars.ease = 'none');
      var tl = gsap.timeline({
        repeat: -1
      });
      var elements = gsap.utils.toArray(target);
      var clones = elements.map(function (el) {
        var clone = el.cloneNode(true);
        el.parentNode.appendChild(clone);
        return clone;
      });

      function positionClones() {
        elements.forEach(function (el, i) {
          gsap.set(clones[i], {
            position: 'absolute',
            top: el.offsetTop,
            left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)
          });
        });
      }

      positionClones();
      elements.forEach(function (el, i) {
        return tl.to([el, clones[i]], _objectSpread({
          xPercent: reverse ? 100 : -100
        }, vars), 0);
      }); // let resizeTimeout;
      // window.addEventListener('resize', () => {
      // 	clearTimeout(resizeTimeout);
      // 	resizeTimeout = setTimeout(() => {
      // 		let time = tl.totalTime();
      // 		tl.totalTime(0);
      // 		positionClones();
      // 		tl.totalTime(time);
      // 	}, 100);
      // });

      return tl;
    }
  });
}); // document.addEventListener("DOMContentLoaded", function () {
// 	if (!document.getElementById("private_transportation_page_services")) return;
// 	// Button click listener to toggle the active state for both images and texts based on data-sub-index
// 	const buttons = document.querySelectorAll(".sub-category-names button[data-sub-index]");
// 	buttons.forEach(button => {
// 		button.addEventListener("click", function () {
// 			const subIndex = this.getAttribute("data-sub-index");
// 			const parentSwiperIndex = this.closest("[data-swiper-index]").getAttribute("data-swiper-index");
// 			// Remove active class from all buttons in the current category
// 			const parentButtons = document.querySelectorAll(
// 				`.sub-category-names[data-swiper-index="${parentSwiperIndex}"] button[data-sub-index]`,
// 			);
// 			parentButtons.forEach(btn => btn.classList.remove("active"));
// 			// Add active class to the clicked button
// 			this.classList.add("active");
// 			// Remove active class from all images in the current category
// 			const parentImages = document.querySelectorAll(
// 				`.swiper-slide[data-swiper-index="${parentSwiperIndex}"] img[data-sub-index]`,
// 			);
// 			parentImages.forEach(image => image.classList.remove("active"));
// 			// Add active class to the image that corresponds to the clicked button
// 			const images = document.querySelectorAll(
// 				`.swiper-slide[data-swiper-index="${parentSwiperIndex}"] img[data-sub-index="${subIndex}"]`,
// 			);
// 			images.forEach(image => image.classList.add("active"));
// 			// Remove active class from all text elements in the current category
// 			const parentElements = document.querySelectorAll(
// 				`.sub-category-texts[data-swiper-index="${parentSwiperIndex}"] [data-sub-index]`,
// 			);
// 			parentElements.forEach(element => element.classList.remove("active"));
// 			// Add active class to the text that corresponds to the clicked button
// 			const elements = document.querySelectorAll(
// 				`.sub-category-texts[data-swiper-index="${parentSwiperIndex}"] [data-sub-index="${subIndex}"]`,
// 			);
// 			elements.forEach(element => element.classList.add("active"));
// 			// Remove active class from default category text in the current swiper index
// 			const defaultElements = document.querySelectorAll(
// 				`.category-default-texts [data-default="${parentSwiperIndex}"]`,
// 			);
// 			defaultElements.forEach(element => element.classList.remove("active"));
// 		});
// 	});
// 	// Handle swiper navigation buttons and reset active classes on slide change
// 	const swiperSection = document.querySelector(".swiper.servicesSwiper");
// 	if (swiperSection) {
// 		const prevButton = document.querySelector(".button-prev");
// 		const nextButton = document.querySelector(".button-next");
// 		const resetActiveClasses = () => {
// 			// Remove active class from all images across the slides
// 			const activeImages = document.querySelectorAll(".swiper-slide img[data-sub-index]");
// 			activeImages.forEach(image => image.classList.remove("active"));
// 			// Remove active class from all text elements across the slides
// 			const activeElements = document.querySelectorAll("[data-sub-index]");
// 			activeElements.forEach(element => element.classList.remove("active"));
// 			// Optionally reset active state for other categories, if needed
// 			const activeButtons = document.querySelectorAll(".sub-category-names button.active");
// 			activeButtons.forEach(button => button.classList.remove("active"));
// 		};
// 		if (prevButton) {
// 			prevButton.addEventListener("click", resetActiveClasses);
// 		}
// 		if (nextButton) {
// 			nextButton.addEventListener("click", resetActiveClasses);
// 		}
// 	}
// });

ready(function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('[data-section-scroll]').forEach(function (container) {
    var image = container.querySelector('img.bg');
    gsap.to(image, {
      y: function y() {
        return image.offsetHeight - container.offsetHeight;
      },
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
        markers: false,
        invalidateOnRefresh: true
      }
    });
  });
}); // ready(() => {
// 	// Select all tables with class "table-route"
// 	const tables = document.querySelectorAll('[id^="routeTable-"]');
// 	if (tables.length === 0) return;
// 	tables.forEach((table, tableIndex) => {
// 		new DataTable(table, {
// 			paging: true,
// 			// scrollCollapse: true,
// 			// responsive: true,
// 			// scrollY: "50vh",
// 			initComplete: function () {
// 				const headFilters = table.closest(".table-container").querySelector(".head-filters");
// 				if (!headFilters) {
// 					console.warn("No head-filters element found for table:", table);
// 					return;
// 				}
// 				this.api()
// 					.columns()
// 					.every(function () {
// 						let column = this;
// 						let select = document.createElement("select");
// 						select.add(new Option("All", "")); // Default "All" option
// 						const label = headFilters.querySelectorAll(".filter label")[column.index()];
// 						if (label) {
// 							const labelAttr = label.getAttribute("for");
// 							select.name = labelAttr;
// 							select.id = labelAttr;
// 							// select.value = labelAttr;
// 							label.parentElement.appendChild(select); // Append select to the label's parent
// 						}
// 						select.addEventListener("change", function () {
// 							column.search(select.value || "", true, false).draw();
// 						});
// 						column
// 							.data()
// 							.unique()
// 							.sort()
// 							.each(function (d) {
// 								select.add(new Option(d));
// 							});
// 					});
// 			},
// 		});
// 	});
// });

document.addEventListener('DOMContentLoaded', function () {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    var menuItems = document.querySelectorAll('#menu-navigation-main-menu li .item_image');
    var links = document.querySelectorAll('#menu-navigation-main-menu li a');
    var menuImageContainer = document.getElementById('menu-image-container');
    var menuWrapper = document.querySelector('.headermenu'); // for mouseleave reset

    if (!menuImageContainer || menuItems.length === 0 || links.length === 0) return;
    if (typeof gsap === 'undefined') return;
    var defaultBg = menuImageContainer.querySelector('.default-bg');
    var imageMap = []; // Build an image map for consistent indexing

    menuItems.forEach(function (item) {
      var imageUrl = item.getAttribute('data-image');

      if (imageUrl) {
        var div = document.createElement('div');
        div.style.backgroundImage = "url(".concat(imageUrl, ")");
        div.classList.add('menu-image', 'background-img');
        menuImageContainer.appendChild(div);
        imageMap.push(div);
      } else {
        imageMap.push(null); // keeps index alignment
      }
    });
    var images = gsap.utils.toArray('.menu-image');
    var activeIndex = null;
    var backgroundRemoved = false; // Hide all menu images initially

    gsap.set(images, {
      autoAlpha: 0
    }); // Handle hover/focus events

    links.forEach(function (link, i) {
      var targetImg = imageMap[i];

      var showImage = function showImage() {
        var imageToShow = targetImg; // Hide previous active image

        if (activeIndex !== null && imageMap[activeIndex]) {
          gsap.to(imageMap[activeIndex], {
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power2.inOut'
          });
        } // If this item has no image, show default background


        if (!imageToShow && defaultBg) {
          gsap.to(defaultBg, {
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power2.inOut'
          });
        } else if (imageToShow) {
          // Hide default background and show image
          if (defaultBg && !backgroundRemoved) {
            backgroundRemoved = true;
          }

          gsap.to(defaultBg, {
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power2.inOut'
          });
          gsap.to(imageToShow, {
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power2.inOut'
          });
        }

        activeIndex = i;
      };

      link.addEventListener('mouseenter', showImage);
      link.addEventListener('focus', showImage);
    }); // // Reset when leaving the menu area
    // if (menuImageContainer) {
    // 	menuImageContainer.addEventListener("mouseleave", () => {
    // 		// Hide all menu images
    // 		gsap.to(images, {
    // 			autoAlpha: 0,
    // 			duration: 0.6,
    // 			ease: "power2.inOut",
    // 		});
    // 		// Fade back in the default background
    // 		if (defaultBg) {
    // 			gsap.to(defaultBg, {
    // 				autoAlpha: 1,
    // 				duration: 0.6,
    // 				ease: "power2.inOut",
    // 			});
    // 		}
    // 		activeIndex = null;
    // 		backgroundRemoved = false;
    // 	});
    // }
  }
});
document.addEventListener('DOMContentLoaded', function () {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    var panels = gsap.utils.toArray('[data-panel-overlap]');
    if (panels.length === 0) return;
    gsap.registerPlugin(ScrollTrigger);
    panels.forEach(function (panel, i) {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: i === panels.length - 1 ? false : true,
        pinSpacing: false
      });
    });
  }
});

var hideFloatRequest = function hideFloatRequest() {
  var hideSectionTrigger = document.querySelectorAll('[data-hide-elements]');
  var elementsToHide = document.querySelectorAll('header .header_wrapper, #global-share'); // , [id^='request-BtnOpen']:not(.overviewBar, .tablerequest)

  var requestBtn = document.querySelector("[id^='request-BtnOpen']:not(.overviewBar, .tablerequest)"); // Ensure request button is hidden initially

  if (requestBtn) {
    gsap.set(requestBtn, {
      autoAlpha: 0,
      y: '100%',
      opacity: 0
    });
  }

  var isHidden = false; // Track if ScrollTrigger is active

  if (hideSectionTrigger.length > 0) {
    hideSectionTrigger.forEach(function (section) {
      var isFooter = section.tagName.toLowerCase() === 'footer';
      ScrollTrigger.create({
        trigger: section,
        start: isFooter ? 'top 100%' : 'top 60%',
        end: 'bottom top',
        // markers: true,
        toggleActions: 'play reverse play reverse',
        onToggle: function onToggle(_ref3) {
          var isActive = _ref3.isActive;
          isHidden = isActive;
          elementsToHide.forEach(function (el) {
            gsap.to(el, {
              opacity: isActive ? 0 : 1,
              pointerEvents: isActive ? 'none' : 'auto',
              duration: 0,
              delay: 0 // ease: "power2.inOut",

            });
          }); // Force request button to stay hidden when section is in view

          if (isActive && requestBtn) {
            gsap.to(requestBtn, {
              autoAlpha: 0,
              y: '100%',
              opacity: 0
            });
          } else {
            // Reapply the scroll-based logic after the section is out of view
            handleScroll();
          }
        }
      });
    });
  }

  function handleScroll() {
    if (isHidden || !requestBtn) return;

    if (window.scrollY > 30) {
      gsap.to(requestBtn, {
        autoAlpha: 1,
        y: 0,
        opacity: 1,
        duration: 0,
        delay: 0
      });
    } else {
      gsap.to(requestBtn, {
        autoAlpha: 0,
        y: '100%',
        opacity: 0,
        duration: 0,
        delay: 0
      });
    }
  }

  window.addEventListener('scroll', handleScroll);
};

window.addEventListener('load', hideFloatRequest); // background color changer (IntersectionObserver) — recommended

document.addEventListener('DOMContentLoaded', function () {
  var sections = Array.from(document.querySelectorAll('[data-color]'));
  if (!sections.length) return; // use gsap if available for a smooth fade, otherwise apply instantly

  var setBg = function setBg(color) {
    if (typeof gsap !== 'undefined') {
      gsap.to(document.body, {
        backgroundColor: color || '',
        duration: 0.35,
        ease: 'none'
      });
    } else {
      document.body.style.backgroundColor = color || '';
    }
  };

  var currentColor = null; // thresholds 0..1 so we get accurate ratio updates

  var thresholds = Array.from({
    length: 101
  }, function (_, i) {
    return i / 100;
  }); // map to keep latest intersectionRatio per element

  var ratios = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // store the latest ratio for each observed element
      ratios.set(entry.target, entry.intersectionRatio);
    }); // choose the element with the largest intersectionRatio

    var maxRatio = 0;
    var bestEl = null;

    var _iterator = _createForOfIteratorHelper(ratios.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            el = _step$value[0],
            ratio = _step$value[1];

        if (ratio > maxRatio) {
          maxRatio = ratio;
          bestEl = el;
        }
      } // only change color when a section is meaningfully visible (tune threshold as needed)

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var MIN_VISIBLE_RATIO = 0.25;

    if (bestEl && maxRatio >= MIN_VISIBLE_RATIO) {
      var color = bestEl.getAttribute('data-color') || '';

      if (color !== currentColor) {
        currentColor = color;
        setBg(color);
      }
    } else {
      // nothing (or not enough) visible — optional fallback
      if (currentColor !== null) {
        currentColor = null; // set default or clear: setBg("#fff") or setBg("") to clear inline style

        setBg('');
      }
    }
  }, {
    threshold: thresholds,
    root: null // viewport
    // rootMargin could be used to shift the "window" if you want the trigger to happen earlier/later
    // rootMargin: "-10% 0 -10% 0"

  }); // start observing

  sections.forEach(function (el) {
    ratios.set(el, 0);
    observer.observe(el);
  }); // If your filter code removes/creates elements you can re-observe:
  // call window.reobserveSections() after the DOM change

  window.reobserveSections = function () {
    // clear map and unobserve/re-observe current matching sections
    ratios.clear();
    sections.forEach(function (el) {
      return observer.unobserve(el);
    });
    var freshSections = Array.from(document.querySelectorAll('[data-color]'));
    freshSections.forEach(function (el) {
      ratios.set(el, 0);
      observer.observe(el);
    });
  };
});
document.querySelectorAll('.section_animation').forEach(function (section, index, sections) {
  var image = section.querySelector('.pinned_image');
  var text = section.querySelector('.h4');
  var isLast = index === sections.length - 1; // Pin, scale the image, and adjust text position

  gsap.fromTo(image, {
    scale: 0
  }, {
    scale: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      pin: true,
      pinSpacing: isLast,
      scrub: 1,
      // markers: true,
      onUpdate: function onUpdate(self) {
        var progress = self.progress;
        var offset = 50 - progress * 20; // Dynamically adjust centering

        text.style.top = "".concat(offset, "%");
      }
    }
  }); // Fade out previous section when next enters

  if (index > 0) {
    gsap.fromTo(sections[index - 1], {
      opacity: 1
    }, {
      opacity: 0,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'top center',
        scrub: 1
      }
    });
  } // Fade in first section


  if (index === 0) {
    gsap.fromTo(section, {
      opacity: 0
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'top 50%',
        scrub: 1
      }
    });
  } // Fade out last section before next content


  if (isLast) {
    gsap.to(section, {
      opacity: 0,
      scrollTrigger: {
        trigger: section,
        start: 'bottom center',
        end: 'bottom top',
        scrub: 1
      }
    });
  }
}); // SNAMI
// Text animation v1 using data attribute "data-animate-text"
// ready(() => {
// 	document.fonts.ready.then(() => {
// 		gsap.registerPlugin(ScrollTrigger, SplitText);
// 		const animateTextElements = document.querySelectorAll("[data-animate-text] > *");
// 		if (animateTextElements.length === 0) return;
// 		animateTextElements.forEach(element => {
// 			if (!element.innerHTML.trim()) {
// 				console.log("Skipping empty element:", element);
// 				return;
// 			}
// 			const splitText = new SplitText(element, {
// 				types: "lines, words, chars",
// 				linesClass: "split-lines",
// 			});
// 			if (!splitText || !splitText.lines) {
// 				console.log("Error: SplitText failed on element", element);
// 				return;
// 			}
// 			const textTimeline = gsap.timeline({
// 				defaults: {
// 					ease: "power2.inOut",
// 					duration: 1,
// 				},
// 			});
// 			textTimeline.to(element, { opacity: 1, autoAlpha: 1 }, 0.2);
// 			gsap.from(splitText.lines, {
// 				y: "100%",
// 				opacity: 0,
// 				autoAlpha: 0,
// 				delay: 0.2,
// 				stagger: 0.15,
// 				scrollTrigger: {
// 					trigger: element,
// 					start: "top 80%",
// 					toggleActions: "play none none none",
// 				},
// 			});
// 		});
// 	});
// });
// ready(() => {
// 	gsap.registerPlugin(ScrollTrigger, SplitText);
// 	document.fonts.ready.then(() => {
// 		const animateTextElements = document.querySelectorAll('[data-animate-text] > *');
// 		if (!animateTextElements.length) return;
// 		animateTextElements.forEach((element) => {
// 			if (!element.textContent.trim()) return;
// 			let splitText = SplitText.create(element, {
// 				types: 'lines, words, chars',
// 				linesClass: 'split-lines',
// 			});
// 			if (!splitText.lines?.length) {
// 				console.warn('SplitText failed:', element);
// 				return;
// 			}
// 			gsap.from(splitText.lines, {
// 				y: '100%',
// 				opacity: 0,
// 				autoAlpha: 0,
// 				duration: 1,
// 				ease: 'power2.inOut',
// 				stagger: 0.15,
// 				scrollTrigger: {
// 					trigger: element,
// 					start: 'top 80%',
// 					toggleActions: 'play none none none',
// 				},
// 			});
// 			let resizeTimeout;
// 			window.addEventListener('resize', () => {
// 				clearTimeout(resizeTimeout);
// 				resizeTimeout = setTimeout(() => {
// 					splitText.revert();
// 					splitText = SplitText.create(element, {
// 						types: 'lines, words, chars',
// 						linesClass: 'split-lines',
// 					});
// 				}, 200);
// 			});
// 		});
// 	});
// });
// // SNAMI
// // Heading animation using data attribute "data-animate-heading"
// ready(() => {
// 	gsap.registerPlugin(ScrollTrigger, SplitText);
// 	document.fonts.ready.then(() => {
// 		const animHeadings = document.querySelectorAll('[data-animate-heading]');
// 		if (!animHeadings.length) return;
// 		animHeadings.forEach((animHeading) => {
// 			const split = new SplitText(animHeading, { type: 'words, lines' });
// 			const lines = split.lines;
// 			gsap.set(animHeading, { autoAlpha: 1 });
// 			gsap.timeline({
// 				scrollTrigger: {
// 					trigger: animHeading,
// 					start: 'top 90%',
// 					end: 'bottom 50%',
// 					toggleActions: 'play none none none',
// 				},
// 			}).from(lines, {
// 				yPercent: 100,
// 				rotate: 4,
// 				autoAlpha: 0,
// 				opacity: 0,
// 				transformOrigin: '0% 50% -50',
// 				ease: 'power2.inOut',
// 				duration: 1.3,
// 				delay: 0.25,
// 				stagger: 0.12,
// 			});
// 			let resizeTimeout;
// 			window.addEventListener('resize', () => {
// 				clearTimeout(resizeTimeout);
// 				resizeTimeout = setTimeout(() => {
// 					split.revert();
// 					const newSplit = new SplitText(animHeading, { type: 'words,lines' });
// 					gsap.set(animHeading, { autoAlpha: 1 });
// 				}, 200);
// 			});
// 		});
// 	});
// });

ready(function () {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  document.fonts.ready.then(function () {
    initTextAnimations();
    initHeadingAnimations();
  });
});

function initTextAnimations() {
  var animateTextElements = document.querySelectorAll('[data-animate-text] > *');
  if (!animateTextElements.length) return;
  var splits = new Map();
  animateTextElements.forEach(function (element) {
    var _splitText$lines;

    if (!element.textContent.trim()) return;
    var splitText = SplitText.create(element, {
      types: 'lines, words, chars',
      linesClass: 'split-lines'
    });

    if (!((_splitText$lines = splitText.lines) !== null && _splitText$lines !== void 0 && _splitText$lines.length)) {
      console.warn('SplitText failed:', element);
      return;
    }

    splits.set(element, splitText);
    gsap.from(splitText.lines, {
      y: '100%',
      opacity: 0,
      autoAlpha: 0,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.15,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
}

function initHeadingAnimations() {
  var animHeadings = document.querySelectorAll('[data-animate-heading]');
  if (!animHeadings.length) return;
  var splits = new Map();
  animHeadings.forEach(function (heading) {
    setupHeadingAnimation(heading, splits);
  });
}

function setupHeadingAnimation(heading, splits) {
  if (heading.dataset.headingAnimated === 'true') return;
  var split = SplitText.create(heading, {
    type: 'words, lines'
  });
  splits.set(heading, split);
  heading.dataset.headingAnimated = 'true';
  gsap.set(heading, {
    autoAlpha: 1
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: heading,
      start: 'top 90%',
      end: 'bottom 50%',
      toggleActions: 'play none none none'
    }
  }).from(split.lines, {
    yPercent: 100,
    rotate: 4,
    autoAlpha: 0,
    opacity: 0,
    transformOrigin: '0% 50% -50',
    ease: 'power2.inOut',
    duration: 1.3,
    delay: 0.25,
    stagger: 0.12
  });
} // document.fonts.ready.then(() => {
// 	gsap.registerPlugin(ScrollTrigger, SplitText);
// 	const animHeadings = gsap.utils.toArray("[data-animate-heading]");
// 	let splitHeadings;
// 	let resizeTimeout;
// 	// Set initial opacity
// 	gsap.set(animHeadings, { opacity: 1 });
// 	function createSplitText() {
// 		splitHeadings = SplitText.create(animHeadings, {
// 			type: "words,lines",
// 			mask: "lines",
// 			linesClass: "line",
// 		});
// 	}
// 	function initAnimations() {
// 		animHeadings.forEach(heading => {
// 			const lines = heading.querySelectorAll(".line");
// 			gsap.fromTo(
// 				lines,
// 				{
// 					opacity: 0,
// 					yPercent: 100,
// 					rotate: 4,
// 					transformOrigin: "0% 50% -50",
// 				},
// 				{
// 					opacity: 1,
// 					yPercent: 0,
// 					rotate: 0,
// 					duration: 1.4,
// 					ease: "power2.inOut",
// 					stagger: { amount: 0.12 },
// 					scrollTrigger: {
// 						trigger: heading,
// 						start: "top 80%",
// 						toggleActions: "play none none reverse",
// 					},
// 				},
// 			);
// 		});
// 	}
// 	function handleResize() {
// 		clearTimeout(resizeTimeout);
// 		resizeTimeout = setTimeout(() => {
// 			ScrollTrigger.getAll().forEach(trigger => {
// 				if (animHeadings.includes(trigger.trigger)) {
// 					trigger.kill();
// 				}
// 			});
// 			// Revert split text
// 			if (splitHeadings?.revert) {
// 				splitHeadings.revert();
// 			}
// 			createSplitText();
// 			initAnimations();
// 		}, 150);
// 	}
// 	createSplitText();
// 	initAnimations();
// 	window.addEventListener("resize", handleResize, { passive: true });
// });
// ready(() => {
// 	gsap.registerPlugin(ScrollTrigger, SplitText);
// 	const animHeadings = document.querySelectorAll("[data-animate-heading]");
// 	if (animHeadings.length === 0) return;
// 	animHeadings.forEach(animHeading => {
// 		const tl = gsap.timeline({
// 			scrollTrigger: {
// 				trigger: animHeading,
// 				start: "top 90%",
// 				end: "bottom 50%",
// 				toggleActions: "play none none none",
// 				onEnter: () => gsap.to(animHeading, { autoAlpha: 1, duration: 0.3 }), // Animate to opacity 1 on enter
// 			},
// 		});
// 		const mySplitText = new SplitText(animHeading, { type: "words,lines" }),
// 			lines = mySplitText.lines;
// 		tl.from(lines, {
// 			duration: 1.3,
// 			delay: 0.25,
// 			yPercent: 100,
// 			rotate: 4,
// 			autoAlpha: 0,
// 			opacity: 0,
// 			transformOrigin: "0% 50% -50",
// 			ease: "power2.inOut",
// 			stagger: 0.12,
// 		});
// 	});
// });


document.addEventListener('DOMContentLoaded', function () {
  var chooseSection = document.querySelector('#choose_snami_about');
  if (!chooseSection) return;
  var itemsToAnimate = chooseSection.querySelectorAll('.itemstoanimate');
  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: chooseSection,
      start: 'top top',
      end: '+=100%',
      pin: chooseSection,
      scrub: 1
    }
  }); // // First item scale and fade out

  tl.fromTo(itemsToAnimate[0], {
    scale: 1,
    y: 0
  }, {
    scale: 0.8,
    y: '-100%'
  }, '<');
}); // document.addEventListener("DOMContentLoaded", () => {
// 	const privateServices = document.querySelector("#private_transportation_page_banner");
// 	if (!privateServices) return;
// 	const itemsToAnimate = privateServices.querySelectorAll(".itemstoanimate");
// 	gsap.registerPlugin(ScrollTrigger);
// 	const tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: privateServices,
// 			start: "top top",
// 			end: "+=100%",
// 			pin: privateServices,
// 			scrub: 1,
// 		},
// 	});
// 	// // First item scale and fade out
// 	tl.fromTo(itemsToAnimate[0], { scale: 1, y: 0 }, { scale: 0.8, y: "-100%", delay: 0.1 }, "<");
// });
//Homepage template agents section
// Background color change

var section = document.querySelector('#home_agents');

if (section) {
  var inner = section.querySelector('.home_agents');
  var elements = gsap.utils.toArray('.text, .title', section);
  var isMobile = window.matchMedia('(max-width: 801px)').matches;
  var scrollDistance = window.innerHeight * (isMobile ? 0.9 : 1.1);
  gsap.fromTo(section, {
    backgroundColor: '#ffffff',
    color: '#2C2F33'
  }, {
    backgroundColor: '#2C2F33',
    color: '#ffffff',
    scrollTrigger: {
      trigger: inner,
      start: 'top center',
      end: 'top top',
      scrub: 1
    }
  });
  gsap.fromTo(elements, {
    opacity: 0.3,
    scale: 0.8
  }, {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: inner,
      start: 'top top',
      end: '+=' + scrollDistance,
      scrub: 0.6,
      pin: true
    }
  });
} // if (document.querySelector("#home_agents")) {
// 	gsap.to("#home_agents", {
// 		backgroundColor: "#2C2F33",
// 		ease: "none",
// 		scrollTrigger: {
// 			trigger: "#home_agents",
// 			start: "top center",
// 			end: "60% bottom",
// 			scrub: 1,
// 			// markers: true,
// 		},
// 	});
// 	// Text color change
// 	gsap.to("#home_agents .info .title h2, #home_agents .info .text p", {
// 		color: "#fff",
// 		scale: 1,
// 		ease: "none",
// 		scrollTrigger: {
// 			trigger: "#home_agents",
// 			start: "top center",
// 			end: "bottom center",
// 			scrub: 1,
// 		},
// 	});
// 	// Pin .info when it reaches the center
// 	gsap.to("#home_agents .info", {
// 		scrollTrigger: {
// 			trigger: "#home_agents",
// 			start: "top center",
// 			end: "bottom top",
// 			// end: `${window.matchMedia("(max-width: 768px)").matches ? "bottom top-=100" : "bottom top-=200"}`,
// 			pin: "#home_agents .info",
// 			pinSpacing: false,
// 			scrub: 1,
// 			markers: true,
// 		},
// 	});
// 	// Fade out .info content at the end
// 	// gsap.to("#home_agents .info .title h2, #home_agents .info .text p", {
// 	// 	opacity: 0,
// 	// 	ease: "power2.out",
// 	// 	scrollTrigger: {
// 	// 		trigger: "#home_agents",
// 	// 		start: `${window.matchMedia("(max-width: 768px)").matches ? "bottom center" : "bottom-=200  center"}`, // Start fade out before reaching the end
// 	// 		end: `${window.matchMedia("(max-width: 768px)").matches ? "bottom top" : "bottom-=200 top"}`, // Start fade out before reaching the end
// 	// 		scrub: 1,
// 	// 	},
// 	// });
// }
//About template  who we are section


if (document.querySelector('.whoweare_featured_div')) {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.whoweare_featured_div',
      start: 'top top',
      // Trigger when the section reaches the top
      end: 'bottom',
      // Scroll distance before unpinning
      scrub: true,
      // Smooth animation tied to scroll
      pin: true,
      // Pin the section while scrolling
      anticipatePin: 1 // Prevent layout shifts
      //markers: true, // Add markers to visualize the scroll positions (can be removed later)

    }
  }).to('.image_top', {
    scaleY: -1,
    // Scale Y to -100% (flip upside down)
    transformOrigin: 'top',
    ease: 'none'
  }).to('.image_bottom', {
    scaleY: -1,
    // Scale Y to 100% (normal)
    transformOrigin: 'bottom',
    ease: 'none'
  }, '<'); // Runs at the same time as image_top animation
}

window.onload = function () {
  // Initialize the Check-in date picker
  var checkInFlatpickr = flatpickr('.custom_checkin', {
    dateFormat: 'd/m/Y',
    // Day/Month/Year format (e.g., 13/02/2025)
    minDate: new Date(),
    // Prevent selecting previous dates
    mode: 'range' // onChange: function (selectedDates, dateStr, instance) {
    // 	// Update the Check-out minDate when Check-in date changes
    // 	checkOutFlatpickr.set("minDate", dateStr); // Set Check-out date min date to selected Check-in date
    // },

  });
  var checkInFlatpickr2 = flatpickr('.custom_checkin2', {
    dateFormat: 'd/m/Y',
    // Day/Month/Year format (e.g., 13/02/2025)
    minDate: new Date(),
    // Prevent selecting previous dates
    mode: 'range' // onChange: function (selectedDates, dateStr, instance) {
    // 	// Update the Check-out minDate when Check-in date changes
    // 	checkOutFlatpickr.set("minDate", dateStr); // Set Check-out date min date to selected Check-in date
    // },

  }); // Initialize the Check-out date picker

  var checkOutFlatpickr = flatpickr('.custom_checkout', {
    dateFormat: 'd/m/Y',
    // Day/Month/Year format (e.g., 13/02/2025)
    minDate: new Date() // Prevent selecting previous dates

  });
  var checkOutFlatpickr2 = flatpickr('.custom_checkout2', {
    dateFormat: 'd/m/Y',
    // Day/Month/Year format (e.g., 13/02/2025)
    minDate: new Date() // Prevent selecting previous dates

  });
  var rangeFlatpickr_time = flatpickr('.custom_time', {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    defaultDate: '08:45',
    time_24hr: true
  });
};

var flatpickrInstances = [];
var isInitializing = false;
var mobileMediaQuery = window.matchMedia('(max-width: 768px)');

function isMobileDevice() {
  return mobileMediaQuery.matches;
}

function initializeFlatpickr() {
  if (isInitializing) return;
  isInitializing = true;
  var elements = document.querySelectorAll('.range_flat');

  if (typeof flatpickr !== 'function') {
    // console.error("Flatpickr library not loaded");
    isInitializing = false;
    return;
  }

  try {
    // Destroy existing instances if they exist
    flatpickrInstances.forEach(function (instance) {
      if (instance && typeof instance.destroy === 'function') {
        instance.destroy();
      }
    });
    flatpickrInstances = []; // Create new instances for each element

    elements.forEach(function (element) {
      var instance = flatpickr(element, {
        dateFormat: 'F j',
        inline: true,
        mode: 'range',
        showMonths: isMobileDevice() ? 1 : 2,
        minDate: new Date(),
        disableMobile: true,
        clickOpens: false,
        locale: {
          firstDayOfWeek: 1
        }
      });
      flatpickrInstances.push(instance);
    }); // console.log(`Flatpickr initialized successfully for ${flatpickrInstances.length} elements`);
  } catch (error) {
    console.error('Error initializing Flatpickr:', error);
    flatpickrInstances = [];
  }

  isInitializing = false;
}

function updateFlatpickrMonths() {
  var monthsToShow = isMobileDevice() ? 1 : 2;
  flatpickrInstances.forEach(function (instance, index) {
    if (instance && typeof instance.set === 'function') {
      try {
        instance.set('showMonths', monthsToShow);
        instance.close();
        instance.open();
      } catch (error) {
        console.error("Error updating Flatpickr instance ".concat(index, ":"), error);
      }
    }
  });
}

function checkEnabledPanel(e) {
  if (e.target.matches("button[data-action='wsf-tab_next']") || e.target.matches("button[data-action='wsf-tab_prev']")) {
    setTimeout(function () {
      var visibleTabWithFlatpickr = Array.from(document.querySelectorAll(".wsf-group[role='tabpanel'][data-group-index]")).find(function (panel) {
        return window.getComputedStyle(panel).display !== 'none' && panel.querySelector('.range_flat') !== null;
      });

      if (visibleTabWithFlatpickr) {
        // Check if we have valid instances
        var hasValidInstances = flatpickrInstances.length > 0 && flatpickrInstances.some(function (instance) {
          return instance && typeof instance.set === 'function';
        });

        if (!hasValidInstances) {
          initializeFlatpickr();
        } else {
          updateFlatpickrMonths();
        }
      }
    }, 200);
  }
} // Optional: Listen for media query changes to update calendar when screen size changes


mobileMediaQuery.addEventListener('change', function (e) {
  updateFlatpickrMonths();
}); // Initialize when everything is ready

document.addEventListener('DOMContentLoaded', initializeFlatpickr); // Add the click listener

document.addEventListener('click', checkEnabledPanel); // Optional: Cleanup function

function cleanup() {
  flatpickrInstances.forEach(function (instance) {
    if (instance && typeof instance.destroy === 'function') {
      instance.destroy();
    }
  });
  flatpickrInstances = [];
  mobileMediaQuery.removeEventListener('change', updateFlatpickrMonths);
}

document.addEventListener('DOMContentLoaded', function () {
  function updateTotal() {
    var _document$querySelect, _document$querySelect2, _document$querySelect3;

    var adults = parseInt((_document$querySelect = document.querySelector('.adults_input input')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value) || 0;
    var children = parseInt((_document$querySelect2 = document.querySelector('.children_input input')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value) || 0;
    var infants = parseInt((_document$querySelect3 = document.querySelector('.infants_input input')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value) || 0;
    var total = adults + children + infants;
    var totalInput = document.querySelector('#wsf-1-field-6');

    if (totalInput) {
      totalInput.value = total;
      totalInput.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      totalInput.dispatchEvent(new Event('change', {
        bubbles: true
      }));
    }
  }

  document.body.addEventListener('click', function (event) {
    var inputContainer;

    if (event.target.classList.contains('adults_plus')) {
      inputContainer = document.querySelector('.adults_input input');
    } else if (event.target.classList.contains('adults_minus')) {
      inputContainer = document.querySelector('.adults_input input');
    } else if (event.target.classList.contains('children_plus')) {
      inputContainer = document.querySelector('.children_input input');
    } else if (event.target.classList.contains('children_minus')) {
      inputContainer = document.querySelector('.children_input input');
    } else if (event.target.classList.contains('infants_plus')) {
      inputContainer = document.querySelector('.infants_input input');
    } else if (event.target.classList.contains('infants_minus')) {
      inputContainer = document.querySelector('.infants_input input');
    }

    if (inputContainer) {
      var newValue = parseInt(inputContainer.value) || 0;

      if (event.target.classList.contains('adults_plus') || event.target.classList.contains('children_plus') || event.target.classList.contains('infants_plus')) {
        newValue += 1;
      } else if (event.target.classList.contains('adults_minus') || event.target.classList.contains('children_minus') || event.target.classList.contains('infants_minus')) {
        newValue = Math.max(0, newValue - 1);
      }

      inputContainer.value = newValue; // Dispatch WSForm events to detect the change

      inputContainer.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      inputContainer.dispatchEvent(new Event('change', {
        bubbles: true
      }));
      updateTotal();
    }
  });
});
/* 
	SNAMI: READ MORE FUNCTIONALITY
	Add Read more + Read less functionality to all truncated containers
*/

document.addEventListener('DOMContentLoaded', function () {
  var wrappers = document.querySelectorAll('.readmore-wrapper');
  if (!wrappers.length) return;
  wrappers.forEach(function (wrapper, i) {
    var uniqueClassName = "readmore-".concat(i);
    wrapper.classList.add(uniqueClassName);
    var paragraphWrapper = wrapper.querySelector('.maintext-paragraph');
    if (!paragraphWrapper) return;
    setTimeout(function () {
      var totalHeight = Math.round(paragraphWrapper.offsetHeight); // Skip readmore if content height ≤ 150px

      if (totalHeight <= 150) return;
      var collapsedHeight = Math.round(totalHeight / 2);
      initReadMore(".".concat(uniqueClassName), {
        collapsedHeight: collapsedHeight,
        speed: 600,
        moreLink: '<span>Read More +</span>',
        lessLink: '<span>Read Less -</span>',
        scrollToTopOnCollapse: false,
        animationMode: 'ease',
        afterToggle: function afterToggle() {
          setTimeout(function () {
            if (typeof ScrollTrigger !== 'undefined') {
              ScrollTrigger.refresh();
            }
          }, 700);
        }
      });
    }, 10);
  });
}); // Refresh AOS and ScrollTrigger

function refreshPluginsOnClick() {
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }

  if (typeof aos__WEBPACK_IMPORTED_MODULE_1___default.a !== 'undefined') {
    aos__WEBPACK_IMPORTED_MODULE_1___default.a.refresh();
  }
}

$('#load-more').on('click', function () {
  $(document).one('ajaxComplete', function () {
    setTimeout(refreshPluginsOnClick, 1200);
  });
}); // for the Private Day Tours Page on select destination change event

document.addEventListener('DOMContentLoaded', function () {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  var selectInput = document.getElementById('choose-category');

  if (selectInput && document.body.classList.contains('page-template-tmpl_tours-experiences')) {
    selectInput.addEventListener('change', function () {
      setTimeout(refreshPluginsOnClick, 300);
    });
  }
});

function initializeOverviewBar() {
  var _lastItem$querySelect;

  var overviewFloatBar = document.querySelector('#floating-overviewbar');
  if (!overviewFloatBar) return;
  overviewFloatBar.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = link.getAttribute('href');
      if (target) gsap.to(window, {
        scrollTo: target
      });
    });
  });
  ScrollTrigger.create({
    start: 'top 100%-=' + (overviewFloatBar.offsetHeight - 3),
    end: 'max',
    pin: overviewFloatBar,
    pinSpacing: false
  });
  var listItems = overviewFloatBar === null || overviewFloatBar === void 0 ? void 0 : overviewFloatBar.querySelectorAll('.floating-overviewbar-item');
  listItems.forEach(function (listItem) {
    var anchor = listItem.querySelector('a');
    var targetSelector = anchor === null || anchor === void 0 ? void 0 : anchor.getAttribute('href');
    if (!targetSelector) return;
    var targetSection = document.querySelector(targetSelector);
    if (!targetSection) return;
    gsap.to(listItem, {
      scrollTrigger: {
        trigger: targetSection,
        start: 'top center',
        end: 'bottom center',
        toggleClass: {
          targets: listItem,
          className: 'active'
        },
        scrub: true
      }
    });
  }); // Hide the overview bar after the last section

  var lastItem = listItems[listItems.length - 1];
  var lastHref = lastItem === null || lastItem === void 0 || (_lastItem$querySelect = lastItem.querySelector('a')) === null || _lastItem$querySelect === void 0 ? void 0 : _lastItem$querySelect.getAttribute('href');
  var lastSection = lastHref ? document.querySelector(lastHref) : null;

  if (lastSection) {
    gsap.to(overviewFloatBar, {
      scrollTrigger: {
        trigger: lastSection,
        start: 'bottom bottom',
        end: 'bottom center',
        scrub: true,
        onEnter: function onEnter() {
          return overviewFloatBar.classList.add('remove');
        },
        onLeaveBack: function onLeaveBack() {
          return overviewFloatBar.classList.remove('remove');
        }
      }
    });
  }

  if (overviewFloatBar) {
    var isScrolling = false;
    var targetScroll = 0;
    var currentScroll = 0;

    var smoothScroll = function smoothScroll() {
      var distance = targetScroll - currentScroll;

      if (Math.abs(distance) < 1) {
        isScrolling = false;
        return;
      }

      currentScroll += distance * 0.2; // easing factor

      overviewFloatBar.scrollLeft = currentScroll;
      requestAnimationFrame(smoothScroll);
    };

    overviewFloatBar.addEventListener('wheel', function (event) {
      if (event.deltaY !== 0) {
        event.preventDefault();

        if (!isScrolling) {
          currentScroll = overviewFloatBar.scrollLeft;
        }

        targetScroll += event.deltaY;
        isScrolling = true;
        smoothScroll();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var pagesToRun = ['page-template-tmpl_multidays', 'single-resort', 'single-tour', 'single-experience'];

  if (pagesToRun.some(function (cls) {
    return document.body.classList.contains(cls);
  })) {
    initializeOverviewBar();
  }
}); // function initializeOverviewBar() {
// 	const overviewFloatBar = document.querySelector("#floating-overviewbar");
// 	if (!overviewFloatBar) return;
// 	overviewFloatBar.querySelectorAll("a").forEach(link => {
// 		link.addEventListener("click", function (event) {
// 			event.preventDefault();
// 			const scrollToHere = link.getAttribute("href");
// 			gsap.to(window, { scrollTo: scrollToHere });
// 		});
// 	});
// 	if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
// 		gsap.registerPlugin(ScrollTrigger);
// 	}
// 	ScrollTrigger.create({
// 		start: "top 100%-=" + (overviewFloatBar.offsetHeight - 3),
// 		end: "max",
// 		pin: overviewFloatBar,
// 		pinSpacing: false,
// 	});
// 	const list = overviewFloatBar.querySelectorAll(".floating-overviewbar-item");
// 	document.querySelectorAll("section").forEach((section, index) => {
// 		const listItem = list[index];
// 		if (!listItem) return;
// 		const anchorLink = listItem.querySelector("a");
// 		const targetSection = document.querySelector(anchorLink.getAttribute("href"));
// 		if (!targetSection) return;
// 		gsap.to(listItem, {
// 			scrollTrigger: {
// 				trigger: targetSection,
// 				start: "top center",
// 				end: "top 100%-=" + targetSection.offsetHeight,
// 				toggleClass: { targets: listItem, className: "active" },
// 				scrub: true,
// 			},
// 		});
// 		const lastSection = list[list.length - 1];
// 		if (lastSection) {
// 			const lastAnchorLink = lastSection.querySelector("a").getAttribute("href");
// 			gsap.to(overviewFloatBar, {
// 				scrollTrigger: {
// 					trigger: lastAnchorLink,
// 					start: "bottom bottom",
// 					end: "bottom center",
// 					scrub: true,
// 					onEnter: () => {
// 						overviewFloatBar.classList.add("remove");
// 					},
// 					onLeaveBack: () => {
// 						overviewFloatBar.classList.remove("remove");
// 					},
// 				},
// 			});
// 		}
// 	});
// }
// document.addEventListener("DOMContentLoaded", () => {
// 	const pagesToRun = ["page-template-tmpl_multidays", "single-resort", "single-tour", "single-experience"];
// 	if (pagesToRun.some(className => document.body.classList.contains(className))) {
// 		initializeOverviewBar();
// 	}
// });
// // default_page_share_to

document.addEventListener('DOMContentLoaded', function () {
  var defaultShare = document.querySelector('#default_page_share_to');
  if (!defaultShare) return;
  var circleImage = defaultShare.querySelector('.image-circle');
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: circleImage,
      start: 'clamp(top 80%)',
      end: 'clamp(top 30%)',
      // markers: true,
      scrub: 1,
      toggleActions: 'play none none reverse'
    }
  });
  var mm = gsap.matchMedia();
  mm.add('(min-width: 1281px)', function () {
    // $medium-small
    tl.to(circleImage, {
      scale: 0.45
    }, 0);
  });
  mm.add('(max-width: 1280px)', function () {
    // $medium-small
    tl.to(circleImage, {
      scale: 0.45
    }, 0);
  });
  mm.add('(max-width: 1024px)', function () {
    // $desktop
    tl.to(circleImage, {
      scale: 0.55
    }, 0);
  });
  mm.add('(max-width: 991px)', function () {
    //$tablet
    tl.to(circleImage, {
      scale: 0.65
    }, 0);
  });
});
ready(function () {
  document.querySelectorAll('[data-scroll-featured]').forEach(function (triggerElement) {
    var targetElement = triggerElement.querySelector('.scrolled-bgImage');
    if (!targetElement) return;
    var smallImages = triggerElement.querySelectorAll('.image');
    var spanElements = triggerElement.querySelectorAll('span');
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top',
        end: 'center top',
        scrub: 1,
        pin: triggerElement,
        anticipatePin: 1
      }
    });
    tl.to(targetElement, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      filter: 'brightness(0.3)'
    });

    if (spanElements.length !== 0) {
      spanElements.forEach(function (span) {
        gsap.to(span, 0.8, {
          opacity: 1
        });
      });
    }

    if (smallImages.length !== 0) {
      smallImages.forEach(function (container, i) {
        var img = container.querySelector('img');
        gsap.set(container, {
          autoAlpha: 1
        });
        gsap.from(container, 0.8, {
          xPercent: i % 2 === 0 ? -100 : 100
        });
        gsap.from(img, 0.8, {
          xPercent: i % 2 === 0 ? 100 : -100,
          scale: 1.2,
          transformOrigin: i % 2 === 0 ? 'left' : 'right'
        });
        tl.to(container, {
          x: i % 2 === 0 ? '-100%' : '100%'
        }, '<');
      });
    }
  });
}); // gsap.registerPlugin(ScrollTrigger);
// const serviceAnimation = el => {
// 	const itemsToAnimate = el.querySelector(".section-banner");
// 	let tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: el,
// 			start: "0% top",
// 			end: "bottom 10%",
// 			pin: el,
// 			anticipatePin: true,
// 			scrub: 1.5,
// 			// markers: true,
// 			onUpdate: function (self) {
// 				if (self.progress >= 0.85) {
// 					// fire at 90% instead of 100%
// 					let start = self.start;
// 					self.scroll(start);
// 					self.disable();
// 					self.animation.progress(1);
// 					ScrollTrigger.refresh();
// 					window.scrollTo(0, start);
// 					// console.log("left");
// 				}
// 			},
// 			// onLeave: function (self) {
// 			// 	let start = self.start;
// 			// 	self.scroll(start);
// 			// 	self.disable();
// 			// 	self.animation.progress(1);
// 			// 	ScrollTrigger.refresh();
// 			// 	window.scrollTo(0, start);
// 			// },
// 		},
// 	});
// 	tl.to(itemsToAnimate, {
// 		y: "-100%",
// 		opacity: 0,
// 		ease: "power4.inOut",
// 	});
// };
// ready(() => {
// 	const servicesSection = document.querySelector("#private_transportation_page_services");
// 	if (servicesSection) serviceAnimation(servicesSection);
// });
// const runSectionAnimation = el => {
// 	const parentWrapper = el.querySelector(".image-holder");
// 	const centerImage = el.querySelector(".centered-image.second img");
// 	let targets = gsap.utils.toArray([
// 		".image-holder .image-list.first",
// 		".image-holder .image-list.centered-image.second",
// 		".image-holder .image-list.third",
// 		".image-holder .image-list.forth",
// 		".image-holder .image-list.fifth",
// 	]);
// 	const calculateCenterOffset = () => {
// 		const imageRect = centerImage.getBoundingClientRect();
// 		const viewportCenter = {
// 			x: window.innerWidth / 2,
// 			y: window.innerHeight / 2,
// 		};
// 		const imageCenter = {
// 			x: imageRect.left + imageRect.width / 2,
// 			y: imageRect.top + imageRect.height / 2,
// 		};
// 		const offset = {
// 			x: viewportCenter.x - imageCenter.x,
// 			y: viewportCenter.y - imageCenter.y,
// 		};
// 		return offset;
// 	};
// 	let tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: parentWrapper,
// 			pin: el,
// 			start: "center center",
// 			end: "+=1000px",
// 			scrub: 2,
// 			// markers: true,
// 			// pinSpacing: false,
// 			// anticipatePin: 1,
// 			// invalidateOnRefresh: true,
// 			// markers: true,
// 			// onRefresh: () => {
// 			// 	newOffset = calculateCenterOffset();
// 			// },
// 		},
// 	});
// 	const config = [
// 		{
// 			selector: targets[0],
// 			x: "-100vw",
// 			y: "-20vw",
// 		},
// 		{
// 			selector: targets[2],
// 			x: "100vw",
// 			y: "-20vw",
// 		},
// 		{
// 			selector: targets[3],
// 			x: "-100vw",
// 			y: "20vw",
// 		},
// 		{
// 			selector: targets[4],
// 			x: "100vw",
// 			y: "20vw",
// 		},
// 	];
// 	let mm = gsap.matchMedia();
// 	mm.add("(min-width: 800px)", () => {
// 		tl.from(parentWrapper, {
// 			scaleX: 0.5,
// 			scaleY: 0.5,
// 		});
// 	});
// 	mm.add("(max-width: 799px)", () => {
// 		tl.from(parentWrapper, {
// 			scaleX: 0.65,
// 			scaleY: 0.65,
// 		});
// 	});
// 	tl.to(
// 		parentWrapper,
// 		{
// 			x: () => calculateCenterOffset().x,
// 			y: () => calculateCenterOffset().y,
// 		},
// 		"<",
// 	);
// 	config.forEach(item => {
// 		const itemImage = item.selector.querySelector("img");
// 		tl.to(
// 			item.selector,
// 			{
// 				x: item.x,
// 				y: item.y,
// 				opacity: 0.3,
// 				scale: 2,
// 			},
// 			"<",
// 		);
// 	});
// };
// document.addEventListener("DOMContentLoaded", function () {
// 	const privateSection = document.querySelector("#private_transportation_middle-section");
// 	if (privateSection) {
// 		runSectionAnimation(privateSection);
// 	}
// });
///TEST
// ready(() => {
// 	const privateTemplate = document.querySelector(".page-template-tmpl_transportation");
// 	if (privateTemplate) {
// 		runSectionAnimation(privateTemplate);
// 	}
// });
// const runSectionAnimation = el => {
// 	const section1 = el.querySelector("#private_transportation_middle-section");
// 	const section2 = el.querySelector("#private_transportation_page_services");
// 	if (!section1 || !section2) {
// 		return;
// 	}
// 	const parentWrapper = section1.querySelector(".image-holder");
// 	const centerImage = parentWrapper.querySelector(".centered-image.second img");
// 	const itemsToAnimate = section2.querySelector(".section-banner");
// 	if (!parentWrapper || !centerImage || !itemsToAnimate) {
// 		return;
// 	}
// 	let targets = gsap.utils.toArray([
// 		".image-holder .image-list.first",
// 		".image-holder .image-list.centered-image.second",
// 		".image-holder .image-list.third",
// 		".image-holder .image-list.forth",
// 		".image-holder .image-list.fifth",
// 	]);
// 	if (targets.length === 0) {
// 		return;
// 	}
// 	let initialOffset = null;
// 	const calculateCenterOffset = () => {
// 		try {
// 			const imageRect = centerImage.getBoundingClientRect();
// 			const viewportCenter = {
// 				x: window.innerWidth / 2,
// 				y: window.innerHeight / 2,
// 			};
// 			const imageCenter = {
// 				x: imageRect.left + imageRect.width / 2,
// 				y: imageRect.top + imageRect.height / 2,
// 			};
// 			const offset = {
// 				x: viewportCenter.x - imageCenter.x,
// 				y: viewportCenter.y - imageCenter.y,
// 			};
// 			if (initialOffset === null) {
// 				initialOffset = { ...offset };
// 			}
// 			return offset;
// 		} catch (error) {
// 			return { x: 0, y: 0 };
// 		}
// 	};
// 	const config = [
// 		{
// 			selector: targets[0],
// 			x: "-100vw",
// 			y: "-20vw",
// 		},
// 		{
// 			selector: targets[2],
// 			x: "100vw",
// 			y: "-20vw",
// 		},
// 		{
// 			selector: targets[3],
// 			x: "-100vw",
// 			y: "20vw",
// 		},
// 		{
// 			selector: targets[4],
// 			x: "100vw",
// 			y: "20vw",
// 		},
// 	];
// 	let tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: parentWrapper,
// 			pin: section1,
// 			start: "center center",
// 			end: "+=1000px",
// 			scrub: 1.5,
// 			invalidateOnRefresh: true,
// 			// onUpdate: () => {
// 			// 	initialOffset = null;
// 			// 	setTimeout(() => {
// 			// 		initialOffset = calculateCenterOffset();
// 			// 	}, 100);
// 			// },
// 			// markers: true,
// 			// onRefresh: () => {
// 			// 	newOffset = calculateCenterOffset();
// 			// },
// 		},
// 	});
// 	let mm = gsap.matchMedia();
// 	mm.add("(min-width: 800px)", () => {
// 		tl.from(parentWrapper, {
// 			scaleX: 0.5,
// 			scaleY: 0.5,
// 			ease: "power2.inOut",
// 		});
// 	});
// 	mm.add("(max-width: 799px)", () => {
// 		tl.from(parentWrapper, {
// 			scaleX: 0.65,
// 			scaleY: 0.65,
// 			ease: "power2.inOut",
// 		});
// 	});
// 	tl.to(
// 		parentWrapper,
// 		{
// 			x: () => calculateCenterOffset().x,
// 			y: () => calculateCenterOffset().y,
// 		},
// 		"<",
// 	);
// 	config.forEach(item => {
// 		if (item.selector) {
// 			tl.to(
// 				item.selector,
// 				{
// 					x: item.x,
// 					y: item.y,
// 					opacity: 0.3,
// 					scale: 2,
// 					ease: "power2.out",
// 				},
// 				"<",
// 			);
// 		}
// 	});
// 	gsap.to(itemsToAnimate, {
// 		y: "-100%",
// 		opacity: 0,
// 		ease: "power2.inOut",
// 		scrollTrigger: {
// 			trigger: section2,
// 			start: "0% top",
// 			end: "bottom 10%",
// 			pin: section2,
// 			anticipatePin: true,
// 			scrub: 1.5,
// 			// invalidateOnRefresh: true,
// 			// markers: true,
// 			onUpdate: function (self) {
// 				if (self.progress >= 0.85) {
// 					let start = self.start;
// 					self.scroll(start);
// 					self.disable();
// 					self.animation.progress(1);
// 					ScrollTrigger.refresh();
// 					window.scrollTo(0, start);
// 				}
// 			},
// 		},
// 	});
// 	ScrollTrigger.refresh();
// };

ready(function () {
  var privateTemplate = document.querySelector('.page-template-tmpl_transportation');

  if (privateTemplate) {
    runSectionAnimation(privateTemplate);
  }
});

var runSectionAnimation = function runSectionAnimation(el) {
  var section1 = el.querySelector('#private_transportation_middle-section');
  var section2 = el.querySelector('#private_transportation_page_services');

  if (!section1 || !section2) {
    return;
  }

  var parentWrapper = section1.querySelector('.image-holder');
  var centerImage = parentWrapper.querySelector('.centered-image.second img');
  var itemsToAnimate = section2.querySelector('.section-banner');

  if (!parentWrapper || !centerImage || !itemsToAnimate) {
    return;
  }

  var targets = gsap.utils.toArray(['.image-holder .image-list.first', '.image-holder .image-list.centered-image.second', '.image-holder .image-list.third', '.image-holder .image-list.forth', '.image-holder .image-list.fifth']);

  if (targets.length === 0) {
    return;
  }

  var calculateCenterOffset = function calculateCenterOffset() {
    try {
      var imageRect = centerImage.getBoundingClientRect();
      var viewportCenter = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      };
      var imageCenter = {
        x: imageRect.left + imageRect.width / 2,
        y: imageRect.top + imageRect.height / 2
      };
      var offset = {
        x: viewportCenter.x - imageCenter.x,
        y: viewportCenter.y - imageCenter.y
      };
      return offset;
    } catch (error) {
      return {
        x: 0,
        y: 0
      };
    }
  };

  var config = [{
    selector: targets[0],
    x: '-100vw',
    y: '-20vw'
  }, {
    selector: targets[2],
    x: '100vw',
    y: '-20vw'
  }, {
    selector: targets[3],
    x: '-100vw',
    y: '20vw'
  }, {
    selector: targets[4],
    x: '100vw',
    y: '20vw'
  }];
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: parentWrapper,
      pin: section1,
      start: 'center center',
      end: '+=1000px',
      scrub: 1.5,
      paused: true,
      invalidateOnRefresh: true,
      onLeave: function onLeave(self) {
        tl.progress(1);
      } // onLeaveBack: self => {
      // 	tl.progress(0);
      // },

    }
  });
  var mm = gsap.matchMedia();
  mm.add('(min-width: 800px)', function () {
    tl.from(parentWrapper, {
      scaleX: 0.5,
      scaleY: 0.5,
      ease: 'power2.inOut'
    });
  });
  mm.add('(max-width: 799px)', function () {
    tl.from(parentWrapper, {
      scaleX: 0.65,
      scaleY: 0.65,
      ease: 'power2.inOut'
    });
  });
  tl.to(parentWrapper, {
    x: function x() {
      return calculateCenterOffset().x;
    },
    y: function y() {
      return calculateCenterOffset().y;
    }
  }, '<');
  config.forEach(function (item) {
    if (item.selector) {
      tl.to(item.selector, {
        x: item.x,
        y: item.y,
        opacity: 0.3,
        scale: 2,
        ease: 'power2.out'
      }, '<');
    }
  });
  gsap.to(itemsToAnimate, {
    y: '-100%',
    opacity: 0,
    duration: 1.2,
    paused: true,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: section2,
      start: '0% top',
      end: 'bottom 10%',
      pin: section2,
      anticipatePin: true,
      scrub: 1.5,
      invalidateOnRefresh: true // markers: true,
      // onUpdate: function (self) {
      // 	if (self.progress >= 0.85) {
      // 		let start = self.start;
      // 		self.scroll(start);
      // 		self.disable();
      // 		self.animation.progress(1);
      // 		ScrollTrigger.refresh();
      // 		window.scrollTo(0, start);
      // 	}
      // },

    }
  });
};

/***/ }),

/***/ "./assets/js/src/modules/filter.js":
/*!*****************************************!*\
  !*** ./assets/js/src/modules/filter.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_swiper_swipers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/swiper/swipers */ "./assets/js/src/modules/swiper/swipers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

 // ===================================
// UTILITY FUNCTIONS
// ===================================

function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      clearTimeout(timeout);
      func.apply(void 0, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function toggleRoomFilterVisibility(selectedType) {
  var roomWrapper = document.querySelector('.room-wrapper');
  var totalGuestWrapper = document.querySelector('.guest-total-number-wrapper');
  if (!roomWrapper || !totalGuestWrapper) return;
  var shouldShow = selectedType === 'villa';
  roomWrapper.style.display = shouldShow ? '' : 'none';
  totalGuestWrapper.style.display = shouldShow ? '' : 'none';
}

function toggleInputs(inputs, allowedTypes) {
  var forceEnableAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  inputs.forEach(function (input) {
    var typesAttr = input.dataset.resortId;
    if (!typesAttr) return;
    var types = JSON.parse(typesAttr);
    var label = input.closest('label');
    if (!label) return;
    var isAllowed = forceEnableAll || types.some(function (t) {
      return allowedTypes.includes(t);
    });

    if (isAllowed) {
      label.style.pointerEvents = 'auto';
      label.style.opacity = '1';
      input.disabled = false;
    } else {
      label.style.pointerEvents = 'none';
      label.style.opacity = '0.3';
      input.disabled = true;
      input.checked = false;
    }
  });
}
/**
 * Update filters based on selected resort type and property types
 */


function updateFilters() {
  var _document$querySelect;

  var roomWrapper = document.querySelector('.room-wrapper');
  var propertyInputs = document.querySelectorAll('.property-specific-list input[type="checkbox"]');
  var recommendedInputs = document.querySelectorAll('.recommended-list input[type="checkbox"]');
  var selectedResort = (_document$querySelect = document.querySelector('input[name="resort_type"]:checked')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
  if (!roomWrapper) return;

  if (selectedResort === 'villa') {
    roomWrapper.style.display = '';
    toggleInputs(propertyInputs, ['villa']);
    toggleInputs(recommendedInputs, ['villa']);
  } else if (selectedResort === 'hotel') {
    roomWrapper.style.display = 'none';
    toggleInputs(propertyInputs, ['hotel']);
    toggleInputs(recommendedInputs, ['hotel']);
  } else {
    // resort_type = all
    roomWrapper.style.display = 'none'; // Enable everything

    toggleInputs(propertyInputs, [], true);
    toggleInputs(recommendedInputs, [], true); // Refine based on selected property type(s)

    var checkedProps = _toConsumableArray(propertyInputs).filter(function (input) {
      return input.checked;
    });

    if (checkedProps.length > 0) {
      var allowed = checkedProps.map(function (input) {
        return JSON.parse(input.dataset.resortId);
      }).flat();
      toggleInputs(recommendedInputs, allowed); // Special case: villa-only property selected → show room capacity

      if (allowed.includes('villa') && !allowed.includes('hotel')) {
        roomWrapper.style.display = '';
      }
    }
  }
} // ===================================
// HTML TEMPLATES
// ===================================


var Templates = {
  ageInputWrapper: function ageInputWrapper(index) {
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var template = document.createElement('template');
    template.innerHTML = "\n\t\t\t<div class=\"age-wrapper\" data-child-index=\"".concat(index, "\">\n\t\t\t\t<button type=\"button\" class=\"child_age-input__ctrl input__ctrl minus\" ").concat(age === 1 ? 'disabled' : '', ">-</button>\n\t\t\t\t<span class=\"child_age-input__value input__value\" style=\"flex-direction: column;\">\n\t\t\t\t\t<span class=\"specify-age\" style=\"font-size: 13px;\">Please Specify Age</span>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span class=\"text\">Age:</span>\n\t\t\t\t\t\t<span class=\"child-age\">").concat(age, "</span>\n\t\t\t\t\t</div>\n\t\t\t\t</span>\n\t\t\t\t<button type=\"button\" class=\"child_age-input__ctrl input__ctrl plus\" ").concat(age === 17 ? 'disabled' : '', ">+</button>\n\t\t\t</div>\n\t\t");
    return template.content.firstElementChild;
  },
  chip: function chip(displayValue, titleValue, filterKey, filterValue) {
    var template = document.createElement('template');
    template.innerHTML = "\n\t\t\t<span class=\"chip\" data-filter-key=\"".concat(filterKey, "\" data-filter-value=\"").concat(filterValue, "\" title=\"").concat(titleValue, "\">\n\t\t\t\t<span class=\"chip-text\">").concat(displayValue, "</span>\n\t\t\t\t<button type=\"button\" class=\"chip-remove\" aria-label=\"Remove ").concat(titleValue, " filter\">\xD7</button>\n\t\t\t</span>\n\t\t");
    return template.content.firstElementChild;
  },
  loadingItem: function loadingItem() {
    var template = document.createElement('template');
    template.innerHTML = '<li class="loading-item">Loading resorts...</li>';
    return template.content.firstElementChild;
  },
  noResults: function noResults() {
    var template = document.createElement('template');
    template.innerHTML = "\n\t\t\t<li class=\"no-results\" style=\"text-wrap: nowrap;\">\n\t\t\t\tNo stays fit your selected criteria.<br>\n\t\t\t\tAdjust your filters \u2014 or contact a travel designer for guidance.\n\t\t\t</li>\n\t\t";
    return template.content.firstElementChild;
  },
  errorItem: function errorItem() {
    var template = document.createElement('template');
    template.innerHTML = '<li class="error-item">Failed to load resorts. Please try again.</li>';
    return template.content.firstElementChild;
  }
}; // ===================================
// CHIP MANAGER (Extracted from FilterController)
// ===================================

var ChipManager = /*#__PURE__*/function () {
  function ChipManager() {
    var containerSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.chips-container .chips';

    _classCallCheck(this, ChipManager);

    this.container = document.querySelector(containerSelector);
    this.filterLabels = {
      resort_type: 'Resort Type',
      filter_dest: 'Destination',
      property_type: 'Property Type',
      recommended_for: 'Recommended For',
      price_min: 'Min Price',
      price_max: 'Max Price',
      room_number: 'Rooms',
      adults: 'Adults',
      children: 'Children',
      children_ages: 'Age',
      sort_by: 'Sort by',
      search: 'Search',
      total_guest: 'Guest'
    };
  }

  _createClass(ChipManager, [{
    key: "createChips",
    value: function createChips(filters) {
      if (!this.container) return;
      var existingChips = this.getExistingChipMap();
      var shouldExist = this.calculateShouldExistChips(filters);
      this.removeObsoleteChips(existingChips, shouldExist);
      this.addNewChips(existingChips, shouldExist);
    }
  }, {
    key: "getExistingChipMap",
    value: function getExistingChipMap() {
      var map = new Set();
      this.container.querySelectorAll('.chip').forEach(function (chip) {
        var key = chip.getAttribute('data-filter-key');
        var value = chip.getAttribute('data-filter-value');
        map.add("".concat(key, ":").concat(value));
      });
      return map;
    }
  }, {
    key: "calculateShouldExistChips",
    value: function calculateShouldExistChips(filters) {
      var _this = this;

      var shouldExist = new Set();
      Object.entries(filters).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (!value || value === '' || Array.isArray(value) && value.length === 0) {
          return;
        } // Handle comma-separated values


        if (['filter_dest', 'property_type', 'recommended_for'].includes(key) && typeof value === 'string') {
          value.split(',').forEach(function (id) {
            return shouldExist.add("".concat(key, ":").concat(id.trim()));
          });
        } // Handle price range (combine min/max into one chip)
        else if (key === 'price_min' || key === 'price_max') {
          _this.handlePriceChip(key, value, filters, shouldExist);
        } // Handle other filters
        else {
          shouldExist.add("".concat(key, ":").concat(value));
        }
      });
      return shouldExist;
    }
  }, {
    key: "handlePriceChip",
    value: function handlePriceChip(key, value, filters, shouldExist) {
      if (!window.priceRangeController) return;
      var defaultMin = window.priceRangeController.rangeMin;
      var defaultMax = window.priceRangeController.rangeMax; // Always add price chips if they differ from defaults - keep them separate

      if (key === 'price_min' && parseInt(value) !== defaultMin) {
        shouldExist.add("".concat(key, ":").concat(value));
      }

      if (key === 'price_max' && parseInt(value) !== defaultMax) {
        shouldExist.add("".concat(key, ":").concat(value));
      }
    }
  }, {
    key: "removeObsoleteChips",
    value: function removeObsoleteChips(existingChips, shouldExist) {
      this.container.querySelectorAll('.chip').forEach(function (chip) {
        var key = chip.getAttribute('data-filter-key');
        var value = chip.getAttribute('data-filter-value');
        var chipId = "".concat(key, ":").concat(value);

        if (!shouldExist.has(chipId)) {
          chip.remove();
        }
      });
    }
  }, {
    key: "addNewChips",
    value: function addNewChips(existingChips, shouldExist) {
      var _this2 = this;

      shouldExist.forEach(function (chipId) {
        if (!existingChips.has(chipId)) {
          var _chipId$split = chipId.split(':'),
              _chipId$split2 = _slicedToArray(_chipId$split, 2),
              key = _chipId$split2[0],
              value = _chipId$split2[1];

          _this2.createSingleChip(key, value);
        }
      });
    }
  }, {
    key: "createSingleChip",
    value: function createSingleChip(key, value) {
      var displayValue = this.getDisplayValue(key, value);
      if (!displayValue) return; // Skip if it's part of a combined chip
      // Create plain text version for title (remove HTML tags)

      var plainTextValue = displayValue.replace(/<[^>]*>/g, '');
      var chip = Templates.chip(displayValue, plainTextValue, key, value);
      this.container.appendChild(chip);
    }
  }, {
    key: "getDisplayValue",
    value: function getDisplayValue(key, value) {
      // Handle price range - keep them separated
      if (key === 'price_min') {
        return "<b>Min budget:</b> ".concat(value, "EUR");
      }

      if (key === 'price_max') {
        return "<b>Max budget:</b> ".concat(value, "EUR");
      } // Get display names from DOM elements


      if (key === 'filter_dest') {
        var el = document.querySelector("input[type=\"checkbox\"][value=\"".concat(value, "\"]"));
        var destValue = (el === null || el === void 0 ? void 0 : el.dataset.idName) || (el === null || el === void 0 ? void 0 : el.getAttribute('data-name')) || value;
        return "<b>Destination:</b> ".concat(destValue);
      }

      if (key === 'property_type') {
        var _el = document.querySelector("input[type=\"checkbox\"][value=\"".concat(value, "\"]"));

        var propValue = (_el === null || _el === void 0 ? void 0 : _el.dataset.idName) || (_el === null || _el === void 0 ? void 0 : _el.getAttribute('data-name')) || value;
        return "<b>Stay Style:</b> ".concat(propValue);
      }

      if (key === 'recommended_for') {
        var _el2 = document.querySelector("input[type=\"checkbox\"][value=\"".concat(value, "\"]"));

        var recValue = (_el2 === null || _el2 === void 0 ? void 0 : _el2.dataset.idName) || (_el2 === null || _el2 === void 0 ? void 0 : _el2.getAttribute('data-name')) || value;
        return "<b>Recommended For:</b> ".concat(recValue);
      }

      if (key === 'sort_by') {
        var selectEl = document.querySelector('select[name="sort_by"]');
        var option = selectEl === null || selectEl === void 0 ? void 0 : selectEl.querySelector("option[value=\"".concat(value, "\"]"));
        var sortValue = (option === null || option === void 0 ? void 0 : option.dataset.dataname) || (option === null || option === void 0 ? void 0 : option.textContent.trim()) || value;
        return "<b>Sort by:</b> ".concat(sortValue);
      }

      if (key === 'resort_type') {
        var _el3 = document.querySelector("input[name=\"resort_type\"][value=\"".concat(value, "\"]"));

        var resortValue = (_el3 === null || _el3 === void 0 ? void 0 : _el3.dataset.idName) || (_el3 === null || _el3 === void 0 ? void 0 : _el3.getAttribute('data-name')) || value;
        return "<b>Resort Type:</b> ".concat(resortValue);
      }

      if (key === 'children_ages') {
        return "<b>Age:</b> ".concat(value);
      }

      if (key === 'children') {
        return "<b>Children:</b> ".concat(value);
      }

      if (key === 'adults') {
        return "<b>Adults:</b> ".concat(value);
      }

      if (key === 'room_number') {
        return "<b>Rooms:</b> ".concat(value);
      }

      if (key === 'search') {
        return "<b>Search:</b> ".concat(value);
      }

      if (key === 'total_guest') {
        return "<b>Guest:</b> ".concat(value);
      }

      return value;
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.container) {
        this.container.innerHTML = '';
      }
    }
  }]);

  return ChipManager;
}(); // ===================================
// ROOM CONTROLLER
// ===================================


var RoomController = /*#__PURE__*/function () {
  function RoomController() {
    _classCallCheck(this, RoomController);

    this.roomsCount = 1;
    this.maxRooms = 20;
    this._isSyncing = false;
    this.elements = {
      roomsCountEl: document.querySelector('#rooms-count'),
      roomMinusBtn: document.querySelector('.room-input__ctrl.minus'),
      roomPlusBtn: document.querySelector('.room-input__ctrl.plus'),
      roomHiddenInput: document.querySelector('#room-number-hidden')
    };

    if (this.elements.roomsCountEl) {
      this.init();
    }
  }

  _createClass(RoomController, [{
    key: "init",
    value: function init() {
      this.updateUI();
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this$elements$roomPl,
          _this3 = this,
          _this$elements$roomMi;

      (_this$elements$roomPl = this.elements.roomPlusBtn) === null || _this$elements$roomPl === void 0 || _this$elements$roomPl.addEventListener('click', function () {
        if (_this3.roomsCount < _this3.maxRooms) {
          _this3.roomsCount++;

          _this3.updateUI();

          _this3.syncToURL();
        }
      });
      (_this$elements$roomMi = this.elements.roomMinusBtn) === null || _this$elements$roomMi === void 0 || _this$elements$roomMi.addEventListener('click', function () {
        if (_this3.roomsCount > 1) {
          _this3.roomsCount--;

          _this3.updateUI();

          _this3.syncToURL();
        }
      });
    }
  }, {
    key: "updateUI",
    value: function updateUI() {
      if (!this.elements.roomsCountEl) return;
      this.elements.roomsCountEl.textContent = this.roomsCount;
      var label = this.elements.roomsCountEl.nextElementSibling;

      if (label) {
        label.textContent = this.roomsCount === 1 ? 'Room' : 'Rooms';
      }

      if (this.elements.roomHiddenInput) {
        this.elements.roomHiddenInput.value = this.roomsCount;
      }

      if (this.elements.roomMinusBtn) {
        this.elements.roomMinusBtn.disabled = this.roomsCount === 1;
      }

      if (this.elements.roomPlusBtn) {
        this.elements.roomPlusBtn.disabled = this.roomsCount === this.maxRooms;
      }
    }
  }, {
    key: "syncToURL",
    value: function syncToURL() {
      var _this4 = this;

      if (this._isSyncing) return;
      this._isSyncing = true;
      var filters = window.filterController.getCurrentFilters();
      filters.room_number = this.roomsCount;
      window.filterController.updateURL(filters);
      window.filterController.fetchResorts(filters);
      setTimeout(function () {
        _this4._isSyncing = false;
      }, 50);
    }
  }, {
    key: "reset",
    value: function reset() {
      var skipSync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.roomsCount = 1;
      this.updateUI();

      if (!skipSync) {
        this.syncToURL();
      }
    }
  }]);

  return RoomController;
}(); // ===================================
// GUEST CONTROLLER
// ===================================


var GuestController = /*#__PURE__*/function () {
  function GuestController() {
    _classCallCheck(this, GuestController);

    this.maxNumGuests = 100;
    this.adultsCount = 1;
    this.childrenCount = 0;
    this._isSyncing = false;
    this._syncTimeout = null;
    this.elements = {
      adultsSubsBtn: document.querySelector('.guests-input__ctrl.minus'),
      adultsAddBtn: document.querySelector('.guests-input__ctrl.plus'),
      childrenSubsBtn: document.querySelector('.child-input__ctrl.minus'),
      childrenAddBtn: document.querySelector('.child-input__ctrl.plus'),
      adultsCountEl: document.querySelector('#guests-count-adults'),
      totalGuestCount: document.querySelector('#total_guest'),
      childrenCountEl: document.querySelector('#guests-count-children'),
      childAgeWrapper: document.getElementById('child-age')
    };

    if (this.elements.adultsCountEl && this.elements.childrenCountEl) {
      this.init();
    }
  }

  _createClass(GuestController, [{
    key: "init",
    value: function init() {
      this.updateUI();
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this$elements$adults,
          _this5 = this,
          _this$elements$adults2,
          _this$elements$childr,
          _this$elements$childr2;

      (_this$elements$adults = this.elements.adultsAddBtn) === null || _this$elements$adults === void 0 || _this$elements$adults.addEventListener('click', function () {
        _this5.adultsCount = _this5.incrementValue(_this5.adultsCount);

        _this5.updateUI();

        _this5.syncToURL();
      });
      (_this$elements$adults2 = this.elements.adultsSubsBtn) === null || _this$elements$adults2 === void 0 || _this$elements$adults2.addEventListener('click', function () {
        _this5.adultsCount = _this5.decrementValue(_this5.adultsCount, 1);

        _this5.updateUI();

        _this5.syncToURL();
      });
      (_this$elements$childr = this.elements.childrenAddBtn) === null || _this$elements$childr === void 0 || _this$elements$childr.addEventListener('click', function () {
        if (_this5.getTotalGuests() < _this5.maxNumGuests) {
          _this5.childrenCount++;

          _this5.createAgeInput(_this5.childrenCount);

          _this5.updateUI();

          _this5.updateHiddenAgeInput();

          _this5.syncToURL();
        }
      });
      (_this$elements$childr2 = this.elements.childrenSubsBtn) === null || _this$elements$childr2 === void 0 || _this$elements$childr2.addEventListener('click', function () {
        if (_this5.childrenCount > 0) {
          _this5.childrenCount--;

          _this5.removeLastAgeInput();

          _this5.updateUI();

          _this5.updateHiddenAgeInput();

          _this5.syncToURL();
        }
      });
    }
  }, {
    key: "getTotalGuests",
    value: function getTotalGuests() {
      return this.adultsCount + this.childrenCount;
    }
  }, {
    key: "incrementValue",
    value: function incrementValue(count) {
      return this.getTotalGuests() < this.maxNumGuests ? count + 1 : count;
    }
  }, {
    key: "decrementValue",
    value: function decrementValue(count, min) {
      return count > min ? count - 1 : count;
    }
  }, {
    key: "createAgeInput",
    value: function createAgeInput(index) {
      var _this6 = this;

      if (!this.elements.childAgeWrapper) return;
      var age = 1;
      var wrapper = Templates.ageInputWrapper(index, age);
      var minusBtn = wrapper.querySelector('.child_age-input__ctrl.minus');
      var plusBtn = wrapper.querySelector('.child_age-input__ctrl.plus');
      var ageDisplay = wrapper.querySelector('.child-age'); // const ageLabel = ageDisplay.nextElementSibling;

      var updateAge = function updateAge() {
        ageDisplay.textContent = age; // ageLabel.textContent = age > 1 ? 'Years old' : 'Year old';

        minusBtn.disabled = age === 1;
        plusBtn.disabled = age === 17;

        _this6.updateHiddenAgeInput();

        _this6.syncToURL();
      };

      minusBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (age > 1) {
          age--;
          updateAge();
        }
      });
      plusBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (age < 17) {
          age++;
          updateAge();
        }
      });
      this.elements.childAgeWrapper.appendChild(wrapper);
    }
  }, {
    key: "removeLastAgeInput",
    value: function removeLastAgeInput() {
      if (!this.elements.childAgeWrapper) return;
      var lastChild = this.elements.childAgeWrapper.lastElementChild;

      if (lastChild) {
        this.elements.childAgeWrapper.removeChild(lastChild);
      }
    }
  }, {
    key: "updateUI",
    value: function updateUI() {
      if (!this.elements.adultsCountEl || !this.elements.childrenCountEl) return;
      this.elements.adultsCountEl.textContent = this.adultsCount;
      this.elements.childrenCountEl.textContent = this.childrenCount;

      if (this.elements.adultsSubsBtn) {
        this.elements.adultsSubsBtn.disabled = this.adultsCount === 1;
      }

      if (this.elements.childrenSubsBtn) {
        this.elements.childrenSubsBtn.disabled = this.childrenCount === 0;
      }

      var adultLabel = this.elements.adultsCountEl.nextElementSibling;
      var childLabel = this.elements.childrenCountEl.nextElementSibling;

      if (adultLabel) {
        adultLabel.textContent = this.adultsCount === 1 ? 'Adult' : 'Adults';
      }

      if (childLabel) {
        childLabel.textContent = this.childrenCount === 1 ? 'Child' : 'Children';
      }

      var maxReached = this.getTotalGuests() === this.maxNumGuests;

      if (this.elements.adultsAddBtn) {
        this.elements.adultsAddBtn.disabled = maxReached;
      }

      if (this.elements.childrenAddBtn) {
        this.elements.childrenAddBtn.disabled = maxReached;
      }

      if (this.elements.totalGuestCount) {
        this.elements.totalGuestCount.value = this.getTotalGuests();
      }
    }
  }, {
    key: "updateHiddenAgeInput",
    value: function updateHiddenAgeInput() {
      if (!this.elements.childAgeWrapper) return;
      var ageSpans = this.elements.childAgeWrapper.querySelectorAll('.child-age');
      var ages = Array.from(ageSpans).map(function (span) {
        return span.textContent.trim();
      });
      var hiddenInput = document.getElementById('children-ages-hidden');

      if (hiddenInput) {
        hiddenInput.value = ages.join(',');
      }
    }
  }, {
    key: "syncToURL",
    value: function syncToURL() {
      var _this7 = this;

      if (this._isSyncing) {
        return;
      }

      if (this._syncTimeout) {
        clearTimeout(this._syncTimeout);
      }

      this._syncTimeout = setTimeout(function () {
        var _document$querySelect2;

        _this7._isSyncing = true;
        var filters = window.filterController.getCurrentFilters();
        var resortType = (_document$querySelect2 = document.querySelector('input[name="resort_type"]:checked')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value; // For villas: use total_guest only

        if (resortType === 'villa') {
          var totalGuests = _this7.getTotalGuests();

          if (totalGuests > 1) {
            filters.total_guest = totalGuests;
          } else {
            delete filters.total_guest;
          }

          delete filters.adults;
          delete filters.children;
          delete filters.children_ages;
        } // For non-villas: use adults, children, ages
        else {
          delete filters.total_guest;

          if (_this7.adultsCount > 1) {
            filters.adults = _this7.adultsCount;
          } else {
            delete filters.adults;
          }

          if (_this7.childrenCount > 0) {
            filters.children = _this7.childrenCount;

            if (_this7.elements.childAgeWrapper) {
              var ageSpans = _this7.elements.childAgeWrapper.querySelectorAll('.child-age');

              if (ageSpans.length > 0) {
                var ages = Array.from(ageSpans).map(function (span) {
                  return span.textContent.trim();
                });
                filters.children_ages = ages.join(',');
              }
            }
          } else {
            delete filters.children;
            delete filters.children_ages;
          }
        }

        window.filterController.updateURL(filters);
        window.filterController.fetchResorts(filters);
        setTimeout(function () {
          _this7._isSyncing = false;
        }, 50);
      }, 150);
    }
  }, {
    key: "reset",
    value: function reset() {
      var skipSync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.adultsCount = 1;
      this.childrenCount = 0;
      this.updateUI();

      if (this.elements.childAgeWrapper) {
        this.elements.childAgeWrapper.innerHTML = '';
      }

      var ageInput = document.getElementById('children-ages-hidden');

      if (ageInput) {
        ageInput.value = '';
      }

      if (!skipSync) {
        this.syncToURL();
      }
    }
  }]);

  return GuestController;
}(); // ===================================
// PRICE RANGE CONTROLLER
// ===================================


var PriceRangeController = /*#__PURE__*/function () {
  function PriceRangeController() {
    _classCallCheck(this, PriceRangeController);

    this.rangeInputs = document.querySelectorAll(".price-range-wrapper .range-input input[type='range']");
    this.priceInputs = document.querySelectorAll(".price-range-wrapper .price-input input[type='number']");
    this.priceRangeProgress = document.querySelector('.price-range-wrapper .slider .progress');
    this.priceGap = 10;
    this._isSyncing = false;

    if (this.rangeInputs.length > 0 && this.priceInputs.length > 0) {
      this.rangeMin = parseInt(this.rangeInputs[0].min) || 0;
      this.rangeMax = parseInt(this.rangeInputs[0].max) || 10000;
      this.init();
    }
  }

  _createClass(PriceRangeController, [{
    key: "init",
    value: function init() {
      this.bindEvents();
      this.updateProgressBar();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this8 = this;

      this.priceInputs.forEach(function (input) {
        input.addEventListener('input', function (e) {
          var min = parseInt(_this8.priceInputs[0].value) || 0;

          var max = parseInt(_this8.priceInputs[1].value) || _this8.rangeMax;

          if (max - min >= _this8.priceGap && max <= _this8.rangeMax) {
            _this8.rangeInputs[0].value = min;
            _this8.rangeInputs[1].value = max;

            _this8.updateProgressBar();
          }
        });
      });
      this.rangeInputs.forEach(function (input) {
        input.addEventListener('input', function (e) {
          e.preventDefault();
          var min = parseInt(_this8.rangeInputs[0].value) || 0;

          var max = parseInt(_this8.rangeInputs[1].value) || _this8.rangeMax;

          if (max - min < _this8.priceGap) {
            if (e.target.classList.contains('range-min')) {
              _this8.rangeInputs[0].value = max - _this8.priceGap;
            } else {
              _this8.rangeInputs[1].value = min + _this8.priceGap;
            }
          } else {
            _this8.priceInputs[0].value = min;
            _this8.priceInputs[1].value = max;

            _this8.updateProgressBar();
          }
        });
      });
      ['input-min', 'input-max', 'range-min', 'range-max'].forEach(function (selector) {
        var input = document.querySelector(".".concat(selector));
        if (!input) return;
        input.addEventListener('change', function () {
          if (_this8._isSyncing) return;
          _this8._isSyncing = true;
          var min = parseInt(_this8.rangeInputs[0].value) || 0;

          var max = parseInt(_this8.rangeInputs[1].value) || _this8.rangeMax;

          var filters = window.filterController.getCurrentFilters();
          filters.price_min = min;
          filters.price_max = max;
          window.filterController.updateURL(filters);
          window.filterController.fetchResorts(filters);
          setTimeout(function () {
            _this8._isSyncing = false;
          }, 50);
        });
      });
    }
  }, {
    key: "updateProgressBar",
    value: function updateProgressBar() {
      if (!this.priceRangeProgress || this.rangeInputs.length < 2) return;
      var min = parseInt(this.rangeInputs[0].value) || 0;
      var max = parseInt(this.rangeInputs[1].value) || this.rangeMax;
      var percentMin = (min - this.rangeMin) / (this.rangeMax - this.rangeMin) * 100;
      var percentMax = (max - this.rangeMin) / (this.rangeMax - this.rangeMin) * 100;
      this.priceRangeProgress.style.left = "".concat(percentMin.toFixed(), "%");
      this.priceRangeProgress.style.right = "".concat(100 - percentMax.toFixed(), "%");
    }
  }, {
    key: "reset",
    value: function reset() {
      var skipSync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // console.log('PriceRangeController reset called, skipSync:', skipSync);
      // console.log('Resetting to:', this.rangeMin, '-', this.rangeMax);
      // Set all inputs to default values
      if (this.rangeInputs[0]) this.rangeInputs[0].value = this.rangeMin;
      if (this.rangeInputs[1]) this.rangeInputs[1].value = this.rangeMax;
      if (this.priceInputs[0]) this.priceInputs[0].value = this.rangeMin;
      if (this.priceInputs[1]) this.priceInputs[1].value = this.rangeMax; // Force update progress bar

      this.updateProgressBar(); // console.log('After reset - rangeInputs:', this.rangeInputs[0]?.value, this.rangeInputs[1]?.value);
      // console.log('After reset - priceInputs:', this.priceInputs[0]?.value, this.priceInputs[1]?.value);

      if (!skipSync) {
        var filters = window.filterController.getCurrentFilters(); // CRITICAL: Don't include default price values in filters

        delete filters.price_min;
        delete filters.price_max;
        window.filterController.updateURL(filters);
        window.filterController.fetchResorts(filters);
      }
    }
  }]);

  return PriceRangeController;
}(); // ===================================
// FILTER CONTROLLER
// ===================================


var FilterController = /*#__PURE__*/function () {
  function FilterController() {
    _classCallCheck(this, FilterController);

    this.chipManager = new ChipManager();
    this._isFetching = false;
    this.currentRequest = null;
    this.init();
  }

  _createClass(FilterController, [{
    key: "init",
    value: function init() {
      this.bindEvents();
      this.initializeFromURL();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this9 = this;

      // Resort type changes
      document.querySelectorAll('input[name="resort_type"]').forEach(function (radio) {
        radio.addEventListener('change', function () {
          // Don't trigger if we're in the middle of clearing all filters
          if (_this9._isClearing) return;
          var selectedType = radio.value; // console.log('Resort type changed to:', selectedType);
          // Update filter visibility immediately

          updateFilters(); // Use a longer timeout to ensure everything is ready

          setTimeout(function () {
            var filters = _this9.getCurrentFilters(); // console.log('Syncing filters:', filters);


            _this9.updateURL(filters);

            _this9.fetchResorts(filters);
          }, 50);
        });
      }); // Property type changes

      document.querySelectorAll('.property-specific-list input[type="checkbox"]').forEach(function (input) {
        input.addEventListener('change', function () {
          updateFilters();
        });
      }); // Sort by changes

      if (typeof jQuery !== 'undefined') {
        jQuery(document).ready(function () {
          jQuery('select[name="sort_by"]').on('change', function () {
            // Don't trigger if we're in the middle of clearing all filters
            if (_this9._isClearing) return;

            var filters = _this9.getCurrentFilters();

            _this9.updateURL(filters);

            _this9.fetchResorts(filters);
          });
        });
      } // Destination checkboxes


      document.querySelectorAll('input[name="filter_dest[]"]').forEach(function (cb) {
        cb.addEventListener('change', function () {
          var filters = _this9.getCurrentFilters();

          _this9.updateURL(filters);

          _this9.fetchResorts(filters);
        });
      }); // Property type checkboxes

      document.querySelectorAll('input[name="property_type[]"]').forEach(function (cb) {
        cb.addEventListener('change', function () {
          var filters = _this9.getCurrentFilters();

          _this9.updateURL(filters);

          _this9.fetchResorts(filters);
        });
      }); // Recommended for checkboxes

      document.querySelectorAll('input[name="recommended_for[]"]').forEach(function (cb) {
        cb.addEventListener('change', function () {
          var filters = _this9.getCurrentFilters();

          _this9.updateURL(filters);

          _this9.fetchResorts(filters);
        });
      }); // Chip removal (delegated)

      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('chip-remove')) {
          _this9.removeChip(e.target.closest('.chip'));
        }
      }); // Pagination

      if (typeof jQuery !== 'undefined') {
        jQuery(document).on('click', '.pagination a.page-numbers', function (e) {
          e.preventDefault();
          var $target = jQuery(e.currentTarget);
          var page = $target.data('page') || parseInt($target.text(), 10) || 1;

          var filters = _this9.getCurrentFilters();

          filters.page = page;

          _this9.fetchResorts(filters);
        });
      } // Search input


      var searchInput = document.querySelector('#property-search');

      if (searchInput) {
        searchInput.addEventListener('input', debounce(function (e) {
          var filters = _this9.getCurrentFilters();

          filters.search = e.target.value;

          _this9.updateURL(filters);

          _this9.fetchResorts(filters);
        }, 300));
      } // Clear filters buttons


      document.querySelectorAll("[id^='clear-dialog-filters']").forEach(function (btn) {
        btn.addEventListener('click', function () {
          return _this9.clearAllFilters();
        });
      });
    }
  }, {
    key: "updateURL",
    value: function updateURL(filters) {
      var basePath = window.location.pathname; // Clean filters - remove empty strings and null/undefined values

      var cleanFilters = {};
      Object.entries(filters).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        // Only include non-empty values
        if (value !== '' && value !== null && value !== undefined) {
          cleanFilters[key] = value;
        }
      });
      var queryString = new URLSearchParams(cleanFilters).toString();
      var url = queryString ? "".concat(basePath, "?").concat(queryString) : basePath;
      window.history.replaceState(null, '', url);
      this.chipManager.createChips(cleanFilters);
    }
  }, {
    key: "removeChip",
    value: function removeChip(chipElement) {
      if (!chipElement) return;
      var filterKey = chipElement.getAttribute('data-filter-key');
      var filterValue = chipElement.getAttribute('data-filter-value');
      chipElement.remove();
      this.clearSpecificFilter(filterKey, filterValue);
      var filters = this.getCurrentFilters();
      this.updateURL(filters);
      this.fetchResorts(filters);
    }
  }, {
    key: "clearSpecificFilter",
    value: function clearSpecificFilter(key, value) {
      var clearActions = {
        filter_dest: function filter_dest() {
          var cb = document.querySelector("input[name=\"filter_dest[]\"][value=\"".concat(value, "\"]"));
          if (cb) cb.checked = false;
        },
        property_type: function property_type() {
          var cb = document.querySelector("input[name=\"property_type[]\"][value=\"".concat(value, "\"]"));
          if (cb) cb.checked = false;
        },
        recommended_for: function recommended_for() {
          var cb = document.querySelector("input[name=\"recommended_for[]\"][value=\"".concat(value, "\"]"));
          if (cb) cb.checked = false;
        },
        resort_type: function resort_type() {
          var allOption = document.querySelector('input[name="resort_type"][value=""]') || document.querySelector('input[name="resort_type"]');
          if (allOption) allOption.checked = true;
          updateFilters();
        },
        sort_by: function sort_by() {
          var select = document.querySelector('select[name="sort_by"]');
          if (select) select.selectedIndex = 0;
        },
        price_min: function price_min() {
          var _window$priceRangeCon;

          return (_window$priceRangeCon = window.priceRangeController) === null || _window$priceRangeCon === void 0 ? void 0 : _window$priceRangeCon.reset(false);
        },
        price_max: function price_max() {
          var _window$priceRangeCon2;

          return (_window$priceRangeCon2 = window.priceRangeController) === null || _window$priceRangeCon2 === void 0 ? void 0 : _window$priceRangeCon2.reset(false);
        },
        room_number: function room_number() {
          var _window$roomControlle;

          return (_window$roomControlle = window.roomController) === null || _window$roomControlle === void 0 ? void 0 : _window$roomControlle.reset(false);
        },
        adults: function adults() {
          var _window$guestControll;

          return (_window$guestControll = window.guestController) === null || _window$guestControll === void 0 ? void 0 : _window$guestControll.reset(false);
        },
        children: function children() {
          var _window$guestControll2;

          return (_window$guestControll2 = window.guestController) === null || _window$guestControll2 === void 0 ? void 0 : _window$guestControll2.reset(false);
        },
        total_guest: function total_guest() {
          var _window$guestControll3;

          return (_window$guestControll3 = window.guestController) === null || _window$guestControll3 === void 0 ? void 0 : _window$guestControll3.reset(false);
        },
        search: function search() {
          var input = document.querySelector('#property-search');
          if (input) input.value = '';
        }
      };
      var action = clearActions[key];
      if (action) action();
    }
  }, {
    key: "clearAllFilters",
    value: function clearAllFilters() {
      var _this10 = this;

      // console.log('=== CLEAR ALL FILTERS START ===');
      // Set flag to prevent change event handlers from firing
      this._isClearing = true; // Reset controllers WITHOUT triggering sync
      // console.log('Resetting controllers...');

      if (window.guestController) window.guestController.reset(true);
      if (window.roomController) window.roomController.reset(true);

      if (window.priceRangeController) {
        // console.log('Calling priceRangeController.reset(true)');
        window.priceRangeController.reset(true);
      } // Reset checkboxes and radios (but NOT price inputs!)
      // console.log('Resetting checkboxes and radios...');


      document.querySelectorAll('[data-filter-key]').forEach(function (input) {
        // Skip price inputs - they're handled by priceRangeController
        if (input.name === 'input-min' || input.name === 'input-max' || input.classList.contains('range-min') || input.classList.contains('range-max')) {
          // console.log('Skipping price input:', input.name || input.className);
          return;
        }

        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = false;
        } else {
          input.value = '';
        }
      }); // Set resort type to "all"

      document.querySelectorAll("input[name='resort_type']").forEach(function (input) {
        if (input.type === 'radio') {
          input.checked = input.id === 'resort-type-all';
        }
      }); // Reset sort by

      var sortSelect = document.querySelector("select[name='sort_by']");
      if (sortSelect) sortSelect.selectedIndex = 0; // Update filters visibility

      updateFilters(); // console.log('Clearing URL and fetching...');
      // CRITICAL FIX: Clear URL completely and fetch with empty filters

      window.history.replaceState(null, '', window.location.pathname);
      this.chipManager.createChips({});
      this.fetchResorts({}); // Clear the flag after a short delay

      setTimeout(function () {
        _this10._isClearing = false; // console.log('=== CLEAR ALL FILTERS COMPLETE ===');
      }, 100);
    }
  }, {
    key: "fetchResorts",
    value: function fetchResorts(filters) {
      var _this11 = this;

      if (typeof jQuery === 'undefined' || typeof filter_ajax_obj === 'undefined') {
        return;
      }

      if (this.currentRequest) {
        this.currentRequest.abort();
      }

      if (this._isFetching) {
        // console.log('Already fetching, skipping...');
        return;
      }

      this._isFetching = true;
      var $gridList = jQuery('#grid-resorts .grid-resorts-list');
      var $postCount = jQuery('#grid-resorts #post-count');
      var $completeCount = jQuery('#complete-count');
      var $completeButton = jQuery('#complete-button');
      this.currentRequest = jQuery.ajax({
        url: filter_ajax_obj.ajax_url,
        type: 'POST',
        data: {
          action: 'filter_resorts',
          filters: filters,
          nonce: filter_ajax_obj.nonce,
          page: filters.page || 1
        },
        beforeSend: function beforeSend() {
          if ($gridList.length) {
            $gridList.empty().append(Templates.loadingItem());
          }

          if ($completeButton.length) {
            $completeButton.prop('disabled', true);
            $completeButton.data('original-text', $completeButton.text());
            $completeButton.html('<span class="loading-spinner"></span> Loading...');
          }

          if ($postCount.length) {
            $postCount.html('<span>Searching...</span>');
          }

          if ($completeCount.length) {
            $completeCount.html('Loading...');
          }
        },
        success: function success(response) {
          if ($gridList.length) {
            $gridList.html(response);
            var gridElement = document.querySelector('#grid-resorts');

            if (gridElement) {
              window.scrollTo({
                top: gridElement.offsetTop - 100,
                behavior: 'smooth'
              });
            }

            var $gridListItems = $gridList.find('.single-resort-card');
            var visibleCount = $gridListItems.length;
            var $meta = $gridList.find('.ajax-meta');
            var totalPosts = parseInt($meta.data('total-posts'), 10) || 0;
            var totalPages = parseInt($meta.data('total-pages'), 10) || 1;

            if ($postCount.length) {
              var pluralText = totalPosts !== 1 ? 'curated stays found' : 'curated stay found';
              $postCount.html("<span>".concat(totalPosts, " ").concat(pluralText, "</span>"));
            }

            if ($completeCount.length) {
              $completeCount.html("Showing ".concat(visibleCount));
            }

            if ($completeButton.length) {
              if (totalPages > 1) {
                $completeButton.show();
                $completeButton.text("Show More (".concat(visibleCount, " of ").concat(totalPosts, ")"));
              } else {
                $completeButton.hide();
              }
            }

            if (visibleCount === 0 && !$gridList.find('.no-results').length) {
              $gridList.empty().append(Templates.noResults());
            }
          }
        },
        error: function error(xhr, status, _error) {
          if (status === 'abort') return;
          console.error('AJAX error:', status, _error);

          if ($gridList.length) {
            $gridList.empty().append(Templates.errorItem());
          }

          if ($postCount.length) {
            $postCount.html('<span>Error loading results</span>');
          }

          if ($completeCount.length) {
            $completeCount.html('Error');
          }
        },
        complete: function complete() {
          // initSwipers();
          _this11._isFetching = false;
          _this11.currentRequest = null;

          if ($completeButton.length) {
            $completeButton.prop('disabled', false);
          }
        }
      });
      filters.page = 1;
    }
  }, {
    key: "getCurrentFilters",
    value: function getCurrentFilters() {
      var _document$querySelect3;

      var filters = {};

      if (typeof jQuery !== 'undefined') {
        var resortType = jQuery('input[name="resort_type"]:checked').val();
        var sortBy = jQuery('select[name="sort_by"]').val();
        var priceMin = jQuery('input[name="input-min"]').val();
        var priceMax = jQuery('input[name="input-max"]').val(); // Include resort_type for filtering logic (empty string means "all")
        // But we'll handle URL display separately in updateURL

        if (resortType !== undefined && resortType !== null) {
          filters.resort_type = resortType;
        }

        if (sortBy) filters.sort_by = sortBy; // Price range - only include if different from defaults

        if (window.priceRangeController) {
          var defaultMin = window.priceRangeController.rangeMin;
          var defaultMax = window.priceRangeController.rangeMax;

          if (parseInt(priceMin) !== defaultMin) {
            filters.price_min = priceMin;
          }

          if (parseInt(priceMax) !== defaultMax) {
            filters.price_max = priceMax;
          }
        } // Guest handling for villas vs non-villas


        if (resortType === 'villa') {
          if (window.guestController) {
            var totalGuests = window.guestController.getTotalGuests();

            if (totalGuests > 1) {
              filters.total_guest = totalGuests;
            }
          }
        } else {
          // Non-villas (hotel or all): adults, children, ages
          if (window.guestController) {
            if (window.guestController.adultsCount > 1) {
              filters.adults = window.guestController.adultsCount;
            }

            if (window.guestController.childrenCount > 0) {
              filters.children = window.guestController.childrenCount;

              if (window.guestController.elements.childAgeWrapper) {
                var ageSpans = window.guestController.elements.childAgeWrapper.querySelectorAll('.child-age');

                if (ageSpans.length > 0) {
                  var ages = Array.from(ageSpans).map(function (span) {
                    return span.textContent.trim();
                  });
                  filters.children_ages = ages.join(',');
                }
              }
            }
          }
        } // Room number - only for villas or all


        if (window.roomController && window.roomController.roomsCount > 1 && (resortType === '' || resortType === 'villa' || !resortType)) {
          filters.room_number = window.roomController.roomsCount;
        }
      } // Checkboxes


      var checkedDestinations = Array.from(document.querySelectorAll('input[name="filter_dest[]"]:checked') || []).map(function (cb) {
        return cb.value;
      });
      var checkedPropertyTypes = Array.from(document.querySelectorAll('input[name="property_type[]"]:checked') || []).map(function (cb) {
        return cb.value;
      });
      var checkedRecommended = Array.from(document.querySelectorAll('input[name="recommended_for[]"]:checked') || []).map(function (cb) {
        return cb.value;
      });
      if (checkedDestinations.length > 0) filters.filter_dest = checkedDestinations.join(',');
      if (checkedPropertyTypes.length > 0) filters.property_type = checkedPropertyTypes.join(',');
      if (checkedRecommended.length > 0) filters.recommended_for = checkedRecommended.join(','); // Search

      var searchValue = (_document$querySelect3 = document.querySelector('#property-search')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value.trim();

      if (searchValue) {
        filters.search = searchValue;
      }

      return filters;
    }
  }, {
    key: "getFiltersFromURL",
    value: function getFiltersFromURL() {
      var filters = {};
      var params = new URLSearchParams(window.location.search); // Resort type

      if (params.has('resort_type') && typeof jQuery !== 'undefined') {
        filters.resort_type = params.get('resort_type');
        jQuery("input[name=\"resort_type\"][value=\"".concat(filters.resort_type, "\"]")).prop('checked', true);
      } // Sort by


      if (params.has('sort_by') && typeof jQuery !== 'undefined') {
        filters.sort_by = params.get('sort_by');
        jQuery('select[name="sort_by"]').val(filters.sort_by);
      } // Price range


      if (params.has('price_min') && window.priceRangeController) {
        var minPrice = params.get('price_min');
        var minInput = document.querySelector('input[name="input-min"]');
        var minRange = document.querySelector('.range-min');
        if (minInput) minInput.value = minPrice;
        if (minRange) minRange.value = minPrice;
        filters.price_min = minPrice;
      }

      if (params.has('price_max') && window.priceRangeController) {
        var maxPrice = params.get('price_max');
        var maxInput = document.querySelector('input[name="input-max"]');
        var maxRange = document.querySelector('.range-max');
        if (maxInput) maxInput.value = maxPrice;
        if (maxRange) maxRange.value = maxPrice;
        filters.price_max = maxPrice;
      }

      if (window.priceRangeController && (params.has('price_min') || params.has('price_max'))) {
        setTimeout(function () {
          return window.priceRangeController.updateProgressBar();
        }, 100);
      } // Room number


      if (params.has('room_number') && window.roomController) {
        window.roomController.roomsCount = parseInt(params.get('room_number')) || 1;
        window.roomController.updateUI();
        filters.room_number = window.roomController.roomsCount;
      } // Total guest


      if (params.has('total_guest') && window.guestController) {
        filters.total_guest = parseInt(params.get('total_guest')) || 1;
      } // Adults


      if (params.has('adults') && window.guestController) {
        window.guestController.adultsCount = parseInt(params.get('adults')) || 1;
        filters.adults = window.guestController.adultsCount;
      } // Children


      if (params.has('children') && window.guestController) {
        window.guestController.childrenCount = parseInt(params.get('children')) || 0;
        filters.children = window.guestController.childrenCount;

        for (var i = 1; i <= window.guestController.childrenCount; i++) {
          window.guestController.createAgeInput(i);
        }
      } // Children ages


      if (params.has('children_ages') && window.guestController && window.guestController.elements.childAgeWrapper) {
        var ageArray = params.get('children_ages').split(',');
        filters.children_ages = params.get('children_ages');
        setTimeout(function () {
          var ageSpans = window.guestController.elements.childAgeWrapper.querySelectorAll('.child-age');
          var ageWrappers = window.guestController.elements.childAgeWrapper.querySelectorAll('.age-wrapper');
          ageArray.forEach(function (age, index) {
            if (ageSpans[index] && ageWrappers[index]) {
              ageSpans[index].textContent = age.trim();
              var label = ageSpans[index].nextElementSibling;

              if (label) {
                label.textContent = parseInt(age.trim()) > 1 ? 'Years old' : 'Year old';
              }

              var wrapper = ageWrappers[index];
              var minusBtn = wrapper.querySelector('.child_age-input__ctrl.minus');
              var plusBtn = wrapper.querySelector('.child_age-input__ctrl.plus');
              var ageValue = parseInt(age.trim());
              if (minusBtn) minusBtn.disabled = ageValue === 1;
              if (plusBtn) plusBtn.disabled = ageValue === 17;
            }
          });
          window.guestController.updateHiddenAgeInput();
        }, 50);
      } // Destinations


      if (params.has('filter_dest')) {
        var selectedDestinations = params.get('filter_dest').split(',');
        selectedDestinations.forEach(function (slug) {
          var cb = document.querySelector("input[name=\"filter_dest[]\"][value=\"".concat(slug, "\"]"));
          if (cb) cb.checked = true;
        });
        filters.filter_dest = selectedDestinations.join(',');
      } // Property types


      if (params.has('property_type')) {
        var selectedPropertyTypes = params.get('property_type').split(',');
        selectedPropertyTypes.forEach(function (slug) {
          var cb = document.querySelector("input[name=\"property_type[]\"][value=\"".concat(slug, "\"]"));
          if (cb) cb.checked = true;
        });
        filters.property_type = selectedPropertyTypes.join(',');
      } // Recommended for


      if (params.has('recommended_for')) {
        var selectedRecommended = params.get('recommended_for').split(',');
        selectedRecommended.forEach(function (slug) {
          var cb = document.querySelector("input[name=\"recommended_for[]\"][value=\"".concat(slug, "\"]"));
          if (cb) cb.checked = true;
        });
        filters.recommended_for = selectedRecommended.join(',');
      } // Search


      if (params.has('search')) {
        filters.search = params.get('search');
        var searchInput = document.querySelector('#property-search');
        if (searchInput) searchInput.value = filters.search;
      } // Update guest UI if needed


      if (window.guestController && (params.has('adults') || params.has('children') || params.has('total_guest'))) {
        setTimeout(function () {
          return window.guestController.updateUI();
        }, 100);
      }

      return filters;
    }
  }, {
    key: "initializeFromURL",
    value: function initializeFromURL() {
      var filters = this.getFiltersFromURL();

      if (Object.keys(filters).length > 0) {
        this.fetchResorts(filters);
      }

      updateFilters();
      this.chipManager.createChips(filters);
    }
  }, {
    key: "syncAll",
    value: function syncAll() {
      var filters = this.getCurrentFilters();
      this.updateURL(filters);
      this.fetchResorts(filters);
    }
  }]);

  return FilterController;
}(); // ===================================
// INITIALIZATION
// ===================================


if (document.querySelector('#resort-list')) {
  document.addEventListener('DOMContentLoaded', function () {
    window.guestController = new GuestController();
    window.priceRangeController = new PriceRangeController();
    window.roomController = new RoomController();
    window.filterController = new FilterController();
    updateFilters();
  });

  if (typeof jQuery !== 'undefined') {
    jQuery(document).ajaxComplete(function () {
      setTimeout(updateFilters, 100);
    });
  }
} // if (!document.querySelector('#resort-list')) {
// 	// Exit early if resort elements don't exist
// } else {
// 	// All filtering functionality wrapped in this block
// 	// Room Controller
// 	class RoomController {
// 		constructor() {
// 			this.roomsCount = 1;
// 			this.maxRooms = 20;
// 			this.elements = {
// 				roomsCountEl: document.querySelector('#rooms-count'),
// 				roomMinusBtn: document.querySelector('.room-input__ctrl.minus'),
// 				roomPlusBtn: document.querySelector('.room-input__ctrl.plus'),
// 				roomHiddenInput: document.querySelector('#room-number-hidden'),
// 			};
// 			// Only initialize if elements exist
// 			if (this.elements.roomsCountEl) {
// 				this.init();
// 			}
// 		}
// 		init() {
// 			this.updateValues();
// 			this.bindEvents();
// 		}
// 		bindEvents() {
// 			this.elements.roomPlusBtn?.addEventListener('click', () => {
// 				if (this.roomsCount < this.maxRooms) {
// 					this.roomsCount++;
// 					this.updateValues();
// 					this.syncRoomsToURL();
// 				}
// 			});
// 			this.elements.roomMinusBtn?.addEventListener('click', () => {
// 				if (this.roomsCount > 1) {
// 					this.roomsCount--;
// 					this.updateValues();
// 					this.syncRoomsToURL();
// 				}
// 			});
// 		}
// 		updateValues() {
// 			if (!this.elements.roomsCountEl) return;
// 			this.elements.roomsCountEl.textContent = this.roomsCount;
// 			// Update label
// 			const roomLabel = this.elements.roomsCountEl.nextElementSibling;
// 			if (roomLabel) roomLabel.textContent = this.roomsCount === 1 ? 'Room' : 'Rooms';
// 			// Update hidden input
// 			if (this.elements.roomHiddenInput) {
// 				this.elements.roomHiddenInput.value = this.roomsCount;
// 			}
// 			// Update button states
// 			if (this.elements.roomMinusBtn) this.elements.roomMinusBtn.disabled = this.roomsCount === 1;
// 			if (this.elements.roomPlusBtn) this.elements.roomPlusBtn.disabled = this.roomsCount === this.maxRooms;
// 		}
// 		syncRoomsToURL() {
// 			const filters = filterController.getCurrentFilters();
// 			filters.room_number = this.roomsCount;
// 			filterController.updateURL(filters);
// 			filterController.fetchResorts(filters);
// 		}
// 		reset() {
// 			this.roomsCount = 1;
// 			this.updateValues();
// 			this.syncRoomsToURL();
// 		}
// 	}
// 	// Guest Controls
// 	class GuestController {
// 		constructor() {
// 			this.maxNumGuests = 100;
// 			this.adultsCount = 1;
// 			this.childrenCount = 0;
// 			this.totalGuestCount = 1;
// 			this.elements = {
// 				adultsSubsBtn: document.querySelector('.guests-input__ctrl.minus'),
// 				adultsAddBtn: document.querySelector('.guests-input__ctrl.plus'),
// 				childrenSubsBtn: document.querySelector('.child-input__ctrl.minus'),
// 				childrenAddBtn: document.querySelector('.child-input__ctrl.plus'),
// 				adultsCountEl: document.querySelector('#guests-count-adults'),
// 				totalGuestCount: document.querySelector('#total_guest'),
// 				childrenCountEl: document.querySelector('#guests-count-children'),
// 				childAgeWrapper: document.getElementById('child-age'),
// 			};
// 			// Only initialize if elements exist
// 			if (this.elements.adultsCountEl && this.elements.childrenCountEl) {
// 				this.init();
// 			}
// 		}
// 		init() {
// 			this.updateValues();
// 			this.bindEvents();
// 		}
// 		bindEvents() {
// 			this.elements.adultsAddBtn?.addEventListener('click', () => {
// 				// console.log('Adults + clicked');
// 				this.adultsCount = this.addValues(this.adultsCount);
// 				this.updateValues();
// 				this.syncGuestsToURL();
// 			});
// 			this.elements.adultsSubsBtn?.addEventListener('click', () => {
// 				// console.log('Adults - clicked');
// 				this.adultsCount = this.substractValues(this.adultsCount, 1);
// 				this.updateValues();
// 				this.syncGuestsToURL();
// 			});
// 			this.elements.childrenAddBtn?.addEventListener('click', () => {
// 				if (this.calcTotalGuests() < this.maxNumGuests) {
// 					this.childrenCount++;
// 					this.createAgeInput(this.childrenCount);
// 					this.updateValues();
// 					this.updateHiddenAgeInput();
// 					this.syncGuestsToURL();
// 				}
// 			});
// 			this.elements.childrenSubsBtn?.addEventListener('click', () => {
// 				if (this.childrenCount > 0) {
// 					this.childrenCount--;
// 					this.removeLastAgeInput();
// 					this.updateValues();
// 					this.updateHiddenAgeInput();
// 					this.syncGuestsToURL();
// 				}
// 			});
// 		}
// 		calcTotalGuests() {
// 			this.totalGuestCount = this.adultsCount + this.childrenCount;
// 			return this.totalGuestCount;
// 		}
// 		addValues(count) {
// 			return this.calcTotalGuests() < this.maxNumGuests ? count + 1 : count;
// 		}
// 		substractValues(count, min) {
// 			return count > min ? count - 1 : count;
// 		}
// 		createAgeInput(index) {
// 			if (!this.elements.childAgeWrapper) return;
// 			const wrapper = document.createElement('div');
// 			wrapper.classList.add('age-wrapper');
// 			wrapper.setAttribute('data-child-index', index);
// 			let age = 1;
// 			wrapper.innerHTML = `
//                 <button type="button" class="child_age-input__ctrl input__ctrl minus">-</button>
//                 <span class="child_age-input__value input__value">
//                     <span class="child-age">${age}</span><span class="text">Year old</span>
//                 </span>
//                 <button type="button" class="child_age-input__ctrl input__ctrl plus">+</button>
//             `;
// 			const minusBtn = wrapper.querySelector('.child_age-input__ctrl.minus');
// 			const plusBtn = wrapper.querySelector('.child_age-input__ctrl.plus');
// 			const ageDisplay = wrapper.querySelector('.child-age');
// 			const ageLabel = ageDisplay.nextElementSibling;
// 			minusBtn.disabled = true;
// 			const updateAgeDisplay = () => {
// 				ageDisplay.textContent = age;
// 				ageLabel.textContent = age > 1 ? 'Years old' : 'Year old';
// 				minusBtn.disabled = age === 1;
// 				plusBtn.disabled = age === 17;
// 				this.updateHiddenAgeInput();
// 				this.syncGuestsToURL();
// 			};
// 			minusBtn.addEventListener('click', (e) => {
// 				e.preventDefault();
// 				if (age > 1) {
// 					age--;
// 					updateAgeDisplay();
// 				}
// 			});
// 			plusBtn.addEventListener('click', (e) => {
// 				e.preventDefault();
// 				if (age < 17) {
// 					age++;
// 					updateAgeDisplay();
// 				}
// 			});
// 			this.elements.childAgeWrapper.appendChild(wrapper);
// 		}
// 		removeLastAgeInput() {
// 			if (!this.elements.childAgeWrapper) return;
// 			const lastChild = this.elements.childAgeWrapper.lastElementChild;
// 			if (lastChild) this.elements.childAgeWrapper.removeChild(lastChild);
// 		}
// 		updateValues() {
// 			if (!this.elements.adultsCountEl || !this.elements.childrenCountEl) return;
// 			this.elements.adultsCountEl.textContent = this.adultsCount;
// 			this.elements.childrenCountEl.textContent = this.childrenCount;
// 			if (this.elements.adultsSubsBtn) this.elements.adultsSubsBtn.disabled = this.adultsCount === 1;
// 			if (this.elements.childrenSubsBtn) this.elements.childrenSubsBtn.disabled = this.childrenCount === 0;
// 			const adultLabel = this.elements.adultsCountEl.nextElementSibling;
// 			const childLabel = this.elements.childrenCountEl.nextElementSibling;
// 			if (adultLabel) adultLabel.innerHTML = this.adultsCount === 1 ? 'Adult' : 'Adults';
// 			if (childLabel) childLabel.innerHTML = this.childrenCount === 1 ? 'Child' : 'Children';
// 			const maxReached = this.calcTotalGuests() === this.maxNumGuests;
// 			if (this.elements.adultsAddBtn) this.elements.adultsAddBtn.disabled = maxReached;
// 			if (this.elements.childrenAddBtn) this.elements.childrenAddBtn.disabled = maxReached;
// 			if (this.elements.totalGuestCount) {
// 				this.elements.totalGuestCount.value = this.calcTotalGuests();
// 			}
// 		}
// 		updateHiddenAgeInput() {
// 			if (!this.elements.childAgeWrapper) return;
// 			const ageSpans = this.elements.childAgeWrapper.querySelectorAll('.child-age');
// 			const ages = Array.from(ageSpans).map((span) => span.textContent.trim());
// 			const hiddenInput = document.getElementById('children-ages-hidden');
// 			if (hiddenInput) hiddenInput.value = ages.join(',');
// 		}
// 		syncGuestsToURL() {
// 			// Prevent multiple simultaneous calls
// 			if (this._isSyncing) {
// 				return;
// 			}
// 			// Debounce to prevent infinite loops
// 			if (this._syncTimeout) {
// 				clearTimeout(this._syncTimeout);
// 			}
// 			this._syncTimeout = setTimeout(() => {
// 				const filters = filterController.getCurrentFilters();
// 				const resortType = document.querySelector('input[name="resort_type"]:checked')?.value;
// 				// For villas: only use total_guest
// 				if (resortType === 'villa') {
// 					const totalGuests = this.calcTotalGuests();
// 					if (totalGuests > 1) {
// 						filters.total_guest = totalGuests;
// 					} else {
// 						delete filters.total_guest;
// 					}
// 					// Remove individual guest filters for villa
// 					delete filters.adults;
// 					delete filters.children;
// 					delete filters.children_ages;
// 				} else {
// 					// For non-villas: use adults, children, ages
// 					delete filters.total_guest; // Remove total_guest for non-villas
// 					if (this.adultsCount > 1) {
// 						filters.adults = this.adultsCount;
// 					} else {
// 						delete filters.adults;
// 					}
// 					if (this.childrenCount > 0) {
// 						filters.children = this.childrenCount;
// 						if (this.elements.childAgeWrapper) {
// 							const ageSpans = this.elements.childAgeWrapper.querySelectorAll('.child-age');
// 							if (ageSpans.length > 0) {
// 								const ages = Array.from(ageSpans).map((span) => span.textContent.trim());
// 								filters.children_ages = ages.join(',');
// 							}
// 						}
// 					} else {
// 						delete filters.children;
// 						delete filters.children_ages;
// 					}
// 				}
// 				filterController.updateURL(filters);
// 				filterController.fetchResorts(filters);
// 				this._isSyncing = false;
// 			}, 150);
// 		}
// 		reset() {
// 			this.adultsCount = 1;
// 			this.childrenCount = 0;
// 			this.updateValues();
// 			this.elements.childAgeWrapper.innerHTML = '';
// 			const ageInput = document.getElementById('children-ages-hidden');
// 			if (ageInput) ageInput.value = '';
// 			this.syncGuestsToURL();
// 		}
// 	}
// 	// Price Range Controller
// 	class PriceRangeController {
// 		constructor() {
// 			this.rangeInputs = document.querySelectorAll(".price-range-wrapper .range-input input[type='range']");
// 			this.priceInputs = document.querySelectorAll(".price-range-wrapper .price-input input[type='number']");
// 			this.priceRangeProgress = document.querySelector('.price-range-wrapper .slider .progress');
// 			this.priceGap = 10;
// 			// Only initialize if elements exist
// 			if (this.rangeInputs.length > 0 && this.priceInputs.length > 0) {
// 				this.rangeMin = parseInt(this.rangeInputs[0].min) || 0;
// 				this.rangeMax = parseInt(this.rangeInputs[0].max) || 10000;
// 				this.init();
// 			}
// 		}
// 		init() {
// 			this.bindEvents();
// 			this.updateProgressBar();
// 		}
// 		bindEvents() {
// 			// Price Input Sync
// 			this.priceInputs.forEach((input) => {
// 				input.addEventListener('input', (e) => {
// 					let min = parseInt(this.priceInputs[0].value) || 0;
// 					let max = parseInt(this.priceInputs[1].value) || this.rangeMax;
// 					if (max - min >= this.priceGap && max <= this.rangeMax) {
// 						if (e.target.classList.contains('input-min') || e.target.classList.contains('input-max')) {
// 							this.rangeInputs[0].value = min;
// 							this.rangeInputs[1].value = max;
// 						}
// 						this.updateProgressBar();
// 					}
// 				});
// 			});
// 			// Range Input Sync
// 			this.rangeInputs.forEach((input) => {
// 				input.addEventListener('input', (e) => {
// 					e.preventDefault();
// 					let min = parseInt(this.rangeInputs[0].value) || 0;
// 					let max = parseInt(this.rangeInputs[1].value) || this.rangeMax;
// 					if (max - min < this.priceGap) {
// 						if (e.target.classList.contains('range-min')) {
// 							this.rangeInputs[0].value = max - this.priceGap;
// 						} else {
// 							this.rangeInputs[1].value = min + this.priceGap;
// 						}
// 					} else {
// 						this.priceInputs[0].value = min;
// 						this.priceInputs[1].value = max;
// 						this.updateProgressBar();
// 					}
// 				});
// 			});
// 			// Price range change events
// 			['input-min', 'input-max', 'range-min', 'range-max'].forEach((selector) => {
// 				const input = document.querySelector(`.${selector}`);
// 				if (!input) return;
// 				input.addEventListener('change', () => {
// 					const min = parseInt(this.rangeInputs[0].value) || 0;
// 					const max = parseInt(this.rangeInputs[1].value) || this.rangeMax;
// 					// const filters = filterController.getCurrentFilters();
// 					const filters = filterController.getCurrentFilters();
// 					filters.price_min = min;
// 					filters.price_max = max;
// 					filterController.updateURL(filters);
// 					filterController.fetchResorts(filters);
// 				});
// 			});
// 		}
// 		updateProgressBar() {
// 			if (!this.priceRangeProgress || this.rangeInputs.length < 2) return;
// 			const min = parseInt(this.rangeInputs[0].value) || 0;
// 			const max = parseInt(this.rangeInputs[1].value) || this.rangeMax;
// 			const percentMin = ((min - this.rangeMin) / (this.rangeMax - this.rangeMin)) * 100;
// 			const percentMax = ((max - this.rangeMin) / (this.rangeMax - this.rangeMin)) * 100;
// 			this.priceRangeProgress.style.left = `${percentMin.toFixed()}%`;
// 			this.priceRangeProgress.style.right = `${100 - percentMax.toFixed()}%`;
// 		}
// 		reset() {
// 			const defaultMin = this.rangeMin;
// 			const defaultMax = this.rangeMax;
// 			this.rangeInputs[0].value = defaultMin;
// 			this.rangeInputs[1].value = defaultMax;
// 			this.priceInputs[0].value = defaultMin;
// 			this.priceInputs[1].value = defaultMax;
// 			this.updateProgressBar();
// 			const filters = filterController.getCurrentFilters();
// 			filterController.updateURL(filters);
// 			filterController.fetchResorts(filters);
// 		}
// 	}
// 	// Main Filter Controller
// 	class FilterController {
// 		constructor() {
// 			this.init();
// 		}
// 		init() {
// 			this.bindEvents();
// 			this.initializeFromURL();
// 		}
// 		bindEvents() {
// 			// Resort Type + Sort By (using jQuery if available)
// 			if (typeof jQuery !== 'undefined') {
// 				jQuery(document).ready(() => {
// 					jQuery('input[name="resort_type"], select[name="sort_by"]').on('change', () => {
// 						const filters = this.getCurrentFilters();
// 						const resortType = jQuery('input[name="resort_type"]:checked').val();
// 						toggleRoomFilterVisibility(resortType);
// 						//   this.updateURL(filters);
// 						//   this.fetchResorts(filters);
// 						if (guestController) {
// 							guestController.syncGuestsToURL(); // This will handle the proper filtering
// 						} else {
// 							this.updateURL(filters);
// 							this.fetchResorts(filters);
// 						}
// 					});
// 				});
// 			}
// 			// Destination checkboxes
// 			document.querySelectorAll('input[name="filter_dest[]"]').forEach((cb) => {
// 				cb.addEventListener('change', (e) => {
// 					// e.preventDefault();
// 					const filters = this.getCurrentFilters();
// 					this.updateURL(filters);
// 					this.fetchResorts(filters);
// 				});
// 			});
// 			// Property Type checkboxes
// 			document.querySelectorAll('input[name="property_type[]"]').forEach((cb) => {
// 				cb.addEventListener('change', () => {
// 					const filters = this.getCurrentFilters();
// 					this.updateURL(filters);
// 					this.fetchResorts(filters);
// 				});
// 			});
// 			// Recommended For checkboxes
// 			document.querySelectorAll('input[name="recommended_for[]"]').forEach((cb) => {
// 				cb.addEventListener('change', () => {
// 					const filters = this.getCurrentFilters();
// 					this.updateURL(filters);
// 					this.fetchResorts(filters);
// 				});
// 			});
// 			// Bind chip removal events (delegated event listener)
// 			document.addEventListener('click', (e) => {
// 				if (e.target.classList.contains('chip-remove')) {
// 					this.removeChip(e.target.closest('.chip'));
// 				}
// 			});
// 		}
// 		updateURL(filters) {
// 			let basePath = window.location.pathname;
// 			let url = basePath;
// 			const queryParams = { ...filters };
// 			const queryString = new URLSearchParams(queryParams).toString();
// 			if (queryString) {
// 				url += `?${queryString}`;
// 			}
// 			window.history.replaceState(null, '', url);
// 			this.createChips(this.getCurrentFilters());
// 		}
// 		createChips(filters) {
// 			const chipWrapper = document.querySelector('.chips-container .chips');
// 			if (!chipWrapper) return;
// 			const existingChips = new Set();
// 			chipWrapper.querySelectorAll('.chip').forEach((chip) => {
// 				const key = chip.getAttribute('data-filter-key');
// 				const value = chip.getAttribute('data-filter-value');
// 				existingChips.add(`${key}:${value}`);
// 			});
// 			const shouldExist = new Set();
// 			Object.entries(filters).forEach(([key, value]) => {
// 				if (!value || value === '' || (Array.isArray(value) && value.length === 0)) {
// 					return;
// 				}
// 				if (key === 'filter_dest' && typeof value === 'string') {
// 					value.split(',').forEach((id) => {
// 						shouldExist.add(`${key}:${id.trim()}`);
// 					});
// 				} else if (key === 'property_type' && typeof value === 'string') {
// 					value.split(',').forEach((id) => {
// 						shouldExist.add(`${key}:${id.trim()}`);
// 					});
// 				} else if (key === 'recommended_for' && typeof value === 'string') {
// 					value.split(',').forEach((id) => {
// 						shouldExist.add(`${key}:${id.trim()}`);
// 					});
// 				} else if (key === 'price_min' || key === 'price_max') {
// 					if (priceRangeController) {
// 						const defaultMin = priceRangeController.rangeMin;
// 						const defaultMax = priceRangeController.rangeMax;
// 						if (
// 							(key === 'price_min' && parseInt(value) !== defaultMin) ||
// 							(key === 'price_max' && parseInt(value) !== defaultMax)
// 						) {
// 							shouldExist.add(`${key}:${value}`);
// 						}
// 					}
// 				} else {
// 					shouldExist.add(`${key}:${value}`);
// 				}
// 			});
// 			// Remove chips that shouldn't exist anymore
// 			chipWrapper.querySelectorAll('.chip').forEach((chip) => {
// 				const key = chip.getAttribute('data-filter-key');
// 				const value = chip.getAttribute('data-filter-value');
// 				const chipId = `${key}: ${value}`;
// 				if (!shouldExist.has(chipId)) {
// 					chip.remove();
// 				}
// 			});
// 			// Add chips that should exist but don't
// 			shouldExist.forEach((chipId) => {
// 				if (!existingChips.has(chipId)) {
// 					const [key, value] = chipId.split(':');
// 					this.createSingleChipFromKeyValue(key, value);
// 				}
// 			});
// 		}
// 		// Helper method to create a single chip from key/value
// 		createSingleChipFromKeyValue(key, value) {
// 			const filterLabels = {
// 				resort_type: 'Resort Type',
// 				filter_dest: 'Destination',
// 				property_type: 'Property Type',
// 				recommended_for: 'Recommended For',
// 				price_min: 'Min Price',
// 				price_max: 'Max Price',
// 				room_number: 'Rooms',
// 				adults: 'Adults',
// 				children: 'Children',
// 				children_ages: 'Age',
// 				sort_by: 'Sort by',
// 				search: 'Search',
// 			};
// 			const displayKey = filterLabels[key] || key;
// 			let displayValue = value;
// 			// Get display names for different filter types
// 			if (key === 'filter_dest') {
// 				const destEl = document.querySelector(`input[type="checkbox"][value="${value}"]`);
// 				const destValue = destEl?.dataset.idName || destEl?.getAttribute('data-name') || value;
// 				displayValue = `Signature Destinations: ${capitalizeFirstLetter(destValue)}`;
// 			} else if (key === 'property_type') {
// 				const propEl = document.querySelector(`input[type="checkbox"][value="${value}"]`);
// 				const propValue = propEl?.dataset.idName || propEl?.getAttribute('data-name') || value;
// 				displayValue = `Stay Style: ${capitalizeFirstLetter(propValue)}`;
// 			} else if (key === 'recommended_for') {
// 				const recEl = document.querySelector(`input[type="checkbox"][value="${value}"]`);
// 				const recValue = recEl?.dataset.idName || recEl?.getAttribute('data-name') || value;
// 				displayValue = `Recommended For: ${capitalizeFirstLetter(recValue)}`;
// 			} else if (key === 'sort_by') {
// 				const selectEl = document.querySelector('select[name="sort_by"]');
// 				const selectedOption = selectEl?.querySelector(`option[value="${value}"]`);
// 				const selectedValue = selectedOption?.dataset.dataname || selectedOption?.textContent.trim() || value;
// 				displayValue = `Sort By: ${capitalizeFirstLetter(selectedValue)}`;
// 			} else if (key === 'resort_type') {
// 				const resortEl = document.querySelector(`input[name="resort_type"][value="${value}"]`);
// 				const resortValue = resortEl?.dataset.idName || resortEl?.getAttribute('data-name') || value;
// 				displayValue = `Resort Type: ${capitalizeFirstLetter(resortValue)}`;
// 			} else if (key === 'price_min') {
// 				displayValue = `Min: ${value}€`;
// 			} else if (key === 'price_max') {
// 				displayValue = `Max: ${value}€`;
// 			} else if (key === 'children_ages' && value.length <= 1) {
// 				displayValue = `Child age: ${value}`;
// 			} else if (key === 'children_ages' && value.length > 1) {
// 				displayValue = `Child ages: ${value}`;
// 			} else if (key === 'children' || key === 'adults') {
// 				displayValue = `${key}: ${value}`;
// 			} else if (key === 'room_number') {
// 				displayValue = `Rooms: ${value}`;
// 			} else if (key === 'search') {
// 				displayValue = `Search: ${value}`;
// 			} else if (key === 'total_guest') {
// 				displayValue = `Guest: ${value}`;
// 			}
// 			this.createSingleChip(displayKey, displayValue, key, value);
// 		}
// 		createSingleChip(displayKey, displayValue, filterKey, filterValue) {
// 			const chipWrapper = document.querySelector('.chips-container .chips');
// 			if (!chipWrapper) return;
// 			const chip = document.createElement('span');
// 			chip.classList.add('chip');
// 			chip.setAttribute('data-filter-key', filterKey);
// 			chip.setAttribute('data-filter-value', filterValue);
// 			chip.setAttribute('title', `${displayKey}: ${displayValue}`);
// 			chip.innerHTML = `
// 			<span class="chip-text">${displayValue}</span>
// 			<button type="button" class="chip-remove" aria-label="Remove ${displayValue} filter">×</button>
// 		`;
// 			chipWrapper.appendChild(chip);
// 		}
// 		removeChip(chipElement) {
// 			if (!chipElement) return;
// 			const filterKey = chipElement.getAttribute('data-filter-key');
// 			const filterValue = chipElement.getAttribute('data-filter-value');
// 			// Remove the chip from DOM
// 			chipElement.remove();
// 			// Clear the corresponding filter
// 			this.clearSpecificFilter(filterKey, filterValue);
// 			// Update URL and fetch new results
// 			const filters = this.getCurrentFilters();
// 			this.updateURL(filters);
// 			this.fetchResorts(filters);
// 		}
// 		clearSpecificFilter(key, value) {
// 			if (key === 'filter_dest') {
// 				const checkbox = document.querySelector(`input[name="filter_dest[]"][value="${value}"]`);
// 				if (checkbox) checkbox.checked = false;
// 			} else if (key === 'property_type') {
// 				const checkbox = document.querySelector(`input[name="property_type[]"][value="${value}"]`);
// 				if (checkbox) checkbox.checked = false;
// 			} else if (key === 'recommended_for') {
// 				const checkbox = document.querySelector(`input[name="recommended_for[]"][value="${value}"]`);
// 				if (checkbox) checkbox.checked = false;
// 			} else if (key === 'resort_type') {
// 				const allOption =
// 					document.querySelector('input[name="resort_type"][value=""]') ||
// 					document.querySelector('input[name="resort_type"]');
// 				if (allOption) allOption.checked = true;
// 				toggleRoomFilterVisibility('');
// 			} else if (key === 'sort_by') {
// 				const selectEl = document.querySelector('select[name="sort_by"]');
// 				if (selectEl) selectEl.selectedIndex = 0;
// 			} else if (key === 'price_min' || key === 'price_max') {
// 				if (priceRangeController) priceRangeController.reset();
// 			} else if (key === 'room_number') {
// 				if (roomController) roomController.reset();
// 			} else if (key === 'adults' || key === 'children' || key === 'total_guest') {
// 				if (guestController) guestController.reset();
// 			} else if (key === 'search') {
// 				const searchInput = document.querySelector('#property-search');
// 				if (searchInput) searchInput.value = '';
// 			}
// 		}
// 		fetchResorts(filters) {
// 			if (typeof jQuery === 'undefined' || typeof filter_ajax_obj === 'undefined') {
// 				return;
// 			}
// 			// Abort previous request if still running
// 			if (this.currentRequest) {
// 				this.currentRequest.abort();
// 			}
// 			// Prevent multiple simultaneous fetches
// 			if (this._isFetching) {
// 				console.log('Already fetching, skipping...');
// 				return;
// 			}
// 			this._isFetching = true;
// 			// Cache jQuery selectors
// 			const $gridList = jQuery('#grid-resorts .grid-resorts-list');
// 			const $postCount = jQuery('#grid-resorts #post-count');
// 			const $completeCount = jQuery('#complete-count');
// 			const $completeButton = jQuery('#complete-button'); // Add your complete button selector
// 			this.currentRequest = jQuery.ajax({
// 				url: filter_ajax_obj.ajax_url,
// 				type: 'POST',
// 				data: {
// 					action: 'filter_resorts',
// 					filters: filters,
// 					nonce: filter_ajax_obj.nonce,
// 					page: filters.page || 1,
// 				},
// 				beforeSend: function () {
// 					if ($gridList.length) {
// 						$gridList.html('<li class="loading-item">Loading resorts...</li>');
// 					}
// 					if ($completeButton.length) {
// 						$completeButton.prop('disabled', true);
// 						$completeButton.data('original-text', $completeButton.text());
// 						$completeButton.html('<span class="loading-spinner"></span> Loading...');
// 					}
// 					if ($postCount.length) {
// 						$postCount.html('<span>Searching...</span>');
// 					}
// 					if ($completeCount.length) {
// 						$completeCount.html('Loading...');
// 					}
// 				},
// 				success: function (response) {
// 					if ($gridList.length) {
// 						// Inject the HTML
// 						$gridList.html(response);
// 						// Smooth scroll to top
// 						window.scrollTo({
// 							top: document.querySelector('#grid-resorts').offsetTop - 100,
// 							behavior: 'smooth',
// 						});
// 						// Grab visible posts
// 						const $gridListItems = $gridList.find('.single-resort-card');
// 						const visibleCount = $gridListItems.length;
// 						// Extract total post & page counts from meta div
// 						const $meta = $gridList.find('.ajax-meta');
// 						const totalPosts = parseInt($meta.data('total-posts'), 10) || 0;
// 						const totalPages = parseInt($meta.data('total-pages'), 10) || 1;
// 						// Update post counter
// 						if ($postCount.length) {
// 							const pluralText = totalPosts !== 1 ? 'curated stays found' : 'curated stay found';
// 							$postCount.html(`<span>${totalPosts} ${pluralText}</span>`);
// 						}
// 						// Update the "complete" counter or button
// 						if ($completeCount.length) {
// 							$completeCount.html(`Showing ${visibleCount} of ${totalPosts}`);
// 						}
// 						// Example for updating a "Load More" button
// 						if ($completeButton.length) {
// 							if (totalPages > 1) {
// 								$completeButton.show();
// 								$completeButton.text(`Show More (${visibleCount} of ${totalPosts})`);
// 							} else {
// 								$completeButton.hide();
// 							}
// 						}
// 						// Handle no results
// 						if (visibleCount === 0 && !$gridList.find('.no-results').length) {
// 							$gridList.html(`<li class="no-results" style="text-wrap: nowrap;">No stays fit your selected criteria.<br>
// 								Adjust your filters — or contact a travel designer for guidance.</li>`);
// 						}
// 					}
// 				},
// 				error: function (xhr, status, error) {
// 					if (status === 'abort') {
// 						return;
// 					}
// 					console.error('AJAX error:', status, error);
// 					if ($gridList.length) {
// 						$gridList.html('<li class="error-item">Failed to load resorts. Please try again.</li>');
// 					}
// 					if ($postCount.length) {
// 						$postCount.html('<span>Error loading results</span>');
// 					}
// 					if ($completeCount.length) {
// 						$completeCount.html('Error');
// 					}
// 				},
// 				complete: function () {
// 					// console.log('AJAX complete');
// 					this._isFetching = false;
// 					this.currentRequest = null;
// 					if ($completeButton.length) {
// 						$completeButton.prop('disabled', false);
// 					}
// 				}.bind(this),
// 			});
// 			filters.page = 1;
// 		}
// 		getCurrentFilters() {
// 			const filters = {};
// 			// Safe jQuery checks
// 			const resortType = jQuery('input[name="resort_type"]:checked').val();
// 			if (typeof jQuery !== 'undefined') {
// 				const totalGuestInput = jQuery('input[name="total_guest"]').val();
// 				const sortBy = jQuery('select[name="sort_by"]').val();
// 				const priceMin = jQuery('input[name="input-min"]').val();
// 				const priceMax = jQuery('input[name="input-max"]').val();
// 				if (resortType) filters.resort_type = resortType;
// 				if (sortBy) filters.sort_by = sortBy;
// 				if (priceRangeController) {
// 					const defaultMin = priceRangeController.rangeMin;
// 					const defaultMax = priceRangeController.rangeMax;
// 					if (parseInt(priceMin) !== defaultMin) {
// 						filters.price_min = priceMin;
// 					}
// 					if (parseInt(priceMax) !== defaultMax) {
// 						filters.price_max = priceMax;
// 					}
// 				}
// 				if (resortType === 'villa') {
// 					if (guestController) {
// 						const totalGuests = guestController.calcTotalGuests();
// 						if (totalGuests > 1) {
// 							filters.total_guest = totalGuests;
// 						}
// 					} else if (totalGuestInput) {
// 						filters.total_guest = totalGuestInput;
// 					}
// 				} else {
// 					// For non-villas: get adults, children, ages
// 					if (guestController) {
// 						if (guestController.adultsCount > 1) {
// 							filters.adults = guestController.adultsCount;
// 						}
// 						if (guestController.childrenCount > 0) {
// 							filters.children = guestController.childrenCount;
// 							if (guestController.elements.childAgeWrapper) {
// 								const ageSpans =
// 									guestController.elements.childAgeWrapper.querySelectorAll('.child-age');
// 								if (ageSpans.length > 0) {
// 									const ages = Array.from(ageSpans).map((span) => span.textContent.trim());
// 									filters.children_ages = ages.join(',');
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 			// const resortType = jQuery('input[name="resort_type"]:checked').val();
// 			if (
// 				roomController &&
// 				roomController.roomsCount > 1 &&
// 				(resortType === '' || resortType === 'villa' || !resortType)
// 			) {
// 				filters.room_number = roomController.roomsCount;
// 			}
// 			// if (guestController) {
// 			// 	// Always include adults if more than 1
// 			// 	if (guestController.adultsCount > 1) {
// 			// 		filters.adults = guestController.adultsCount;
// 			// 	}
// 			// 	if (
// 			// 		guestController.totalGuestCount > 1 &&
// 			// 		(resortType === '' || resortType === 'villa' || !resortType)
// 			// 	) {
// 			// 		filters.total_guest = guestController.totalGuestCount;
// 			// 	}
// 			// 	// Always include children if any
// 			// 	if (guestController.childrenCount > 0) {
// 			// 		filters.children = guestController.childrenCount;
// 			// 		// Include children ages if any children
// 			// 		if (guestController.elements.childAgeWrapper) {
// 			// 			const ageSpans = guestController.elements.childAgeWrapper.querySelectorAll('.child-age');
// 			// 			if (ageSpans.length > 0) {
// 			// 				const ages = Array.from(ageSpans).map((span) => span.textContent.trim());
// 			// 				filters.children_ages = ages.join(',');
// 			// 			}
// 			// 		}
// 			// 	}
// 			// }
// 			// Safe vanilla JS checks
// 			const checkedDestinations = Array.from(
// 				document.querySelectorAll('input[name="filter_dest[]"]:checked') || [],
// 			).map((cb) => cb.value);
// 			const checkedPropertyTypes = Array.from(
// 				document.querySelectorAll('input[name="property_type[]"]:checked') || [],
// 			).map((cb) => cb.value);
// 			const checkedRecommended = Array.from(
// 				document.querySelectorAll('input[name="recommended_for[]"]:checked') || [],
// 			).map((cb) => cb.value);
// 			if (checkedDestinations.length > 0) filters.filter_dest = checkedDestinations.join(',');
// 			if (checkedPropertyTypes.length > 0) filters.property_type = checkedPropertyTypes.join(',');
// 			if (checkedRecommended.length > 0) filters.recommended_for = checkedRecommended.join(',');
// 			const searchValue = document.querySelector('#property-search')?.value.trim();
// 			if (searchValue) {
// 				filters.search = searchValue;
// 			}
// 			return filters;
// 		}
// 		getFiltersFromURL() {
// 			const filters = {};
// 			const params = new URLSearchParams(window.location.search);
// 			// Resort type
// 			if (params.has('resort_type') && typeof jQuery !== 'undefined') {
// 				filters.resort_type = params.get('resort_type');
// 				jQuery(`input[name="resort_type"][value="${filters.resort_type}"]`).prop('checked', true);
// 			}
// 			// Sort by
// 			if (params.has('sort_by') && typeof jQuery !== 'undefined') {
// 				filters.sort_by = params.get('sort_by');
// 				jQuery(`select[name="sort_by"]`).val(filters.sort_by);
// 			}
// 			// Price range - Fix for URL sync
// 			if (params.has('price_min') && priceRangeController) {
// 				const minPrice = params.get('price_min');
// 				const minInput = document.querySelector('input[name="input-min"]');
// 				const minRange = document.querySelector('.range-min');
// 				if (minInput) minInput.value = minPrice;
// 				if (minRange) minRange.value = minPrice;
// 				filters.price_min = minPrice;
// 			}
// 			if (params.has('price_max') && priceRangeController) {
// 				const maxPrice = params.get('price_max');
// 				const maxInput = document.querySelector('input[name="input-max"]');
// 				const maxRange = document.querySelector('.range-max');
// 				if (maxInput) maxInput.value = maxPrice;
// 				if (maxRange) maxRange.value = maxPrice;
// 				filters.price_max = maxPrice;
// 			}
// 			// Update progress bar after setting values
// 			if (priceRangeController && (params.has('price_min') || params.has('price_max'))) {
// 				setTimeout(() => priceRangeController.updateProgressBar(), 100);
// 			}
// 			// Room number
// 			if (params.has('room_number') && roomController) {
// 				roomController.roomsCount = parseInt(params.get('room_number')) || 1;
// 				roomController.updateValues();
// 				filters.room_number = roomController.roomsCount;
// 			}
// 			if (params.has('total_guest') && guestController) {
// 				guestController.totalGuestCount = parseInt(params.get('total_guest')) || 1;
// 				// check again
// 				// guestController.updateValues();
// 				filters.total_guest = guestController.totalGuestCount;
// 			}
// 			if (params.has('adults') && guestController) {
// 				guestController.adultsCount = parseInt(params.get('adults')) || 1;
// 				filters.adults = guestController.adultsCount; // Add to filters
// 			}
// 			if (params.has('children') && guestController) {
// 				guestController.childrenCount = parseInt(params.get('children')) || 0;
// 				filters.children = guestController.childrenCount; // Add to filters
// 				// Create age inputs for each child
// 				for (let i = 1; i <= guestController.childrenCount; i++) {
// 					guestController.createAgeInput(i);
// 				}
// 			}
// 			if (params.has('children_ages') && guestController && guestController.elements.childAgeWrapper) {
// 				const ageArray = params.get('children_ages').split(',');
// 				filters.children_ages = params.get('children_ages'); // Add to filters
// 				// Use setTimeout to ensure DOM elements are created first
// 				setTimeout(() => {
// 					const ageSpans = guestController.elements.childAgeWrapper.querySelectorAll('.child-age');
// 					const ageWrappers = guestController.elements.childAgeWrapper.querySelectorAll('.age-wrapper');
// 					ageArray.forEach((age, index) => {
// 						if (ageSpans[index] && ageWrappers[index]) {
// 							// Update the displayed age
// 							ageSpans[index].textContent = age.trim();
// 							// Update the label
// 							const label = ageSpans[index].nextElementSibling;
// 							if (label) {
// 								label.textContent = parseInt(age.trim()) > 1 ? 'Years old' : 'Year old';
// 							}
// 							// Update button states
// 							const wrapper = ageWrappers[index];
// 							const minusBtn = wrapper.querySelector('.child_age-input__ctrl.minus');
// 							const plusBtn = wrapper.querySelector('.child_age-input__ctrl.plus');
// 							const ageValue = parseInt(age.trim());
// 							if (minusBtn) minusBtn.disabled = ageValue === 1;
// 							if (plusBtn) plusBtn.disabled = ageValue === 17;
// 						}
// 					});
// 					// Update the hidden input after setting all ages
// 					guestController.updateHiddenAgeInput();
// 				}, 50);
// 			}
// 			if (params.has('filter_dest')) {
// 				const selectedDestinations = params.get('filter_dest').split(',');
// 				selectedDestinations.forEach((slug) => {
// 					const checkbox = document.querySelector(`input[name="filter_dest[]"][value="${slug}"]`);
// 					if (checkbox) checkbox.checked = true;
// 				});
// 				filters.filter_dest = selectedDestinations.join(',');
// 			}
// 			// Property types
// 			if (params.has('property_type')) {
// 				const selectedPropertyTypes = params.get('property_type').split(',');
// 				selectedPropertyTypes.forEach((slug) => {
// 					const checkbox = document.querySelector(`input[name="property_type[]"][value="${slug}"]`);
// 					if (checkbox) checkbox.checked = true;
// 				});
// 				filters.property_type = selectedPropertyTypes.join(',');
// 			}
// 			// Recommended for
// 			if (params.has('recommended_for')) {
// 				const selectedRecommended = params.get('recommended_for').split(',');
// 				selectedRecommended.forEach((slug) => {
// 					const checkbox = document.querySelector(`input[name="recommended_for[]"][value="${slug}"]`);
// 					if (checkbox) checkbox.checked = true;
// 				});
// 				filters.recommended_for = selectedRecommended.join(',');
// 			}
// 			// Search
// 			if (params.has('search')) {
// 				filters.search = params.get('search');
// 				const searchInput = document.querySelector('#property-search');
// 				if (searchInput) searchInput.value = filters.search;
// 			}
// 			if (guestController && (params.has('adults') || params.has('children') || params.has('total_guest'))) {
// 				setTimeout(() => {
// 					guestController.updateValues();
// 				}, 100);
// 			}
// 			return filters;
// 		}
// 		initializeFromURL() {
// 			const filters = this.getFiltersFromURL();
// 			// console.log(filters);
// 			if (Object.keys(filters).length > 0) {
// 				this.fetchResorts(filters);
// 			}
// 			if (filters.resort_type !== undefined) {
// 				toggleRoomFilterVisibility(filters.resort_type);
// 			}
// 			this.createChips(filters);
// 		}
// 		syncAll() {
// 			this.updateURL();
// 		}
// 		clearFilterByKey(key) {
// 			const inputs = document.querySelectorAll(`[data-filter-key="${key}"]`);
// 			inputs.forEach((input) => {
// 				if (input.type === 'checkbox' || input.type === 'radio') {
// 					input.checked = false;
// 				} else {
// 					input.value = '';
// 				}
// 			});
// 			// Custom components
// 			if (key === 'adults' || key === 'children' || key === 'children_ages' || key === 'total_guest') {
// 				guestController?.reset();
// 			}
// 			if (key === 'room_number') {
// 				roomController?.reset();
// 			}
// 			if (key === 'price_min' || key === 'price_max') {
// 				priceRangeController?.reset();
// 			}
// 		}
// 	}
// 	jQuery(document).on('click', '.pagination a.page-numbers', function (e) {
// 		e.preventDefault();
// 		const page = jQuery(this).data('page') || parseInt(jQuery(this).text(), 10) || 1;
// 		const filters = filterController.getCurrentFilters();
// 		filters.page = page; // store page in filters
// 		filterController.fetchResorts(filters);
// 	});
// 	function toggleRoomFilterVisibility(selectedType) {
// 		const roomWrapper = document.querySelector('.room-wrapper');
// 		const totalGuestWrapper = document.querySelector('.guest-total-number-wrapper');
// 		if (!roomWrapper || !totalGuestWrapper) return;
// 		// selectedType === undefined || selectedType === "" ||
// 		if (selectedType === 'villa') {
// 			roomWrapper.style.display = '';
// 			totalGuestWrapper.style.display = '';
// 		} else {
// 			roomWrapper.style.display = 'none';
// 			totalGuestWrapper.style.display = 'none';
// 		}
// 	}
// 	let guestController, priceRangeController, filterController, roomController;
// 	// DOM Ready initialization
// 	document.addEventListener('DOMContentLoaded', () => {
// 		guestController = new GuestController();
// 		priceRangeController = new PriceRangeController();
// 		roomController = new RoomController();
// 		filterController = new FilterController();
// 	});
// 	document.querySelectorAll("[id^='clear-dialog-filters']").forEach((btn) => {
// 		btn.addEventListener('click', () => {
// 			// Reset all inputs
// 			document.querySelectorAll('[data-filter-key]').forEach((input) => {
// 				if (input.type === 'checkbox' || input.type === 'radio') {
// 					input.checked = false;
// 				} else {
// 					input.value = '';
// 				}
// 			});
// 			document.querySelectorAll("input[name='resort_type']").forEach((input) => {
// 				if (input.type === 'radio') {
// 					input.checked = input.id === 'resort-type-all';
// 				}
// 			});
// 			document.querySelector("select[name='sort_by']").selectedIndex = 0;
// 			// Reset special filter controllers
// 			if (guestController) guestController.reset();
// 			if (roomController) roomController.reset();
// 			if (priceRangeController) priceRangeController.reset();
// 			filterController.syncAll();
// 		});
// 	});
// 	document.querySelector('#property-search')?.addEventListener(
// 		'input',
// 		debounce(function (e) {
// 			const filters = filterController.getCurrentFilters();
// 			filters.search = e.target.value;
// 			filterController.updateURL(filters);
// 			filterController.fetchResorts(filters);
// 		}, 300),
// 	);
// }
// function capitalizeFirstLetter(str) {
// 	if (!str) return '';
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }
// function debounce(func, wait) {
// 	let timeout;
// 	return function executedFunction(...args) {
// 		const later = () => {
// 			clearTimeout(timeout);
// 			func(...args);
// 		};
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 	};
// }

/***/ }),

/***/ "./assets/js/src/modules/map/mapalex.js":
/*!**********************************************!*\
  !*** ./assets/js/src/modules/map/mapalex.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mapStyle = [{
  featureType: 'administrative',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#444444'
  }]
}, {
  featureType: 'landscape',
  elementType: 'all',
  stylers: [{
    color: '#f2f2f2'
  }]
}, {
  featureType: 'poi',
  elementType: 'all',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'road',
  elementType: 'all',
  stylers: [{
    saturation: -100
  }, {
    lightness: 45
  }]
}, {
  featureType: 'road.highway',
  elementType: 'all',
  stylers: [{
    visibility: 'simplified'
  }]
}, {
  featureType: 'road.arterial',
  elementType: 'labels.icon',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'transit',
  elementType: 'all',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'water',
  elementType: 'all',
  stylers: [{
    color: '#bc9d76'
  }, {
    visibility: 'on'
  }]
}];

function initAllMaps() {
  if (document.querySelectorAll("[id^='single-map']").length > 0) {
    initializeMaps();
  }

  if (document.querySelectorAll('.multiple_single_map').length > 0) {
    initializeMultiMaps();
  }
} // Initialize when Google Maps is ready


if (window.googleMapsReady) {
  // Already loaded
  initAllMaps();
} else {
  // Wait for it
  window.addEventListener('google-maps-ready', initAllMaps);
} // For AJAX calls


jQuery(document).ajaxComplete(function () {
  if (typeof google !== 'undefined' && google.maps) {
    initializeMaps();
    initializeMultiMaps();
  }
});

function initializeMaps() {
  var mapElements = document.querySelectorAll("[id^='single-map']");
  mapElements.forEach(function (mapElement) {
    var coordsDynamic = mapElement.getAttribute('data-coords');
    var zoomLevel = Number(mapElement.dataset.zoom);
    if (Number.isNaN(zoomLevel)) zoomLevel = 10;
    if (!coordsDynamic) return;
    var splittedCoords = coordsDynamic.split(',');
    var myLatLng = {
      lat: parseFloat(splittedCoords[0]),
      lng: parseFloat(splittedCoords[1])
    };
    var mapOptions = {
      zoom: zoomLevel,
      gestureHandling: 'cooperative',
      center: myLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: mapStyle,
      scrollwheel: false
    };
    var map = new google.maps.Map(mapElement, mapOptions);
    var iconSource = window.location.origin + '/wp-content/themes/snami/assets/images/map-pin.svg'; // let iconSize = new google.maps.Size(40, 40);

    var iconSize = {
      width: 40,
      height: 40
    };

    if (window.innerWidth < 450) {
      iconSize = {
        width: 32,
        height: 32
      };
    }

    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      icon: {
        url: iconSource,
        scaledSize: iconSize
      }
    });
  });
}

var previousUrl = '';
var observer = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    setTimeout(function () {
      if (typeof google !== 'undefined' && google.maps) {
        initializeMaps();
      }

      ScrollTrigger.refresh();
    }, 100);
  }
});
var config = {
  subtree: true,
  childList: true
};
observer.observe(document, config); // /* SNAMI: CUSTOM MULTIDAY MAPS */
// jQuery(document).ajaxComplete(function () {
// 	if (typeof google !== 'undefined' && google.maps) {
// 		initializeMaps();
// 		initializeMultiMaps();
// 	}
// });

function initializeMultiMaps() {
  var mapElements = document.querySelectorAll('.multiple_single_map');
  mapElements.forEach(function (mapCanvas) {
    var coordsJson = mapCanvas.getAttribute('data-coords');
    if (!coordsJson) return;
    var coordsArray;

    try {
      coordsArray = JSON.parse(coordsJson);
    } catch (e) {
      console.error('Invalid JSON in data-coords:', e);
      return;
    }

    if (!Array.isArray(coordsArray) || coordsArray.length === 0) return;
    var mapCenter = {
      lat: coordsArray[0].lat,
      lng: coordsArray[0].lng
    };
    var mapOptions = {
      zoom: 11,
      gestureHandling: 'cooperative',
      center: mapCenter,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: typeof mapStyle !== 'undefined' ? mapStyle : [],
      scrollwheel: false
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var bounds = {
      north: -90,
      south: 90,
      east: -180,
      west: 180
    };
    var iconSource = window.location.origin + '/wp-content/themes/snami/assets/images/map-pin.svg';
    var iconSize = {
      width: 40,
      height: 40
    };

    if (window.innerWidth < 450) {
      iconSize = {
        width: 32,
        height: 32
      };
    }

    coordsArray.forEach(function (coord) {
      if (!coord.lat || !coord.lng) return;
      var position = {
        lat: coord.lat,
        lng: coord.lng
      };
      new google.maps.Marker({
        map: map,
        position: position,
        icon: {
          url: iconSource,
          scaledSize: iconSize
        }
      });
      bounds.north = Math.max(bounds.north, position.lat);
      bounds.south = Math.min(bounds.south, position.lat);
      bounds.east = Math.max(bounds.east, position.lng);
      bounds.west = Math.min(bounds.west, position.lng);
    });
    map.fitBounds(bounds);
  });
} // if ($("#single-map").length > 0) {
// 	window.addEventListener("load", initializeMap);
// }
// function initializeMap() {
// 	const mapCanvas = document.getElementById("single-map");
// 	const coordsDynamic = mapCanvas.getAttribute("data-coords");
// 	const splittedCoords = coordsDynamic.split(",");
// 	const myLatLng = new google.maps.LatLng(splittedCoords[0], splittedCoords[1]);
// 	const mapOptions = {
// 		zoom: 12,
// 		gestureHandling: "cooperative",
// 		center: myLatLng,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
// 		styles: mapStyle,
// 		scrollwheel: false,
// 	};
// 	const map = new google.maps.Map(mapCanvas, mapOptions);
// 	const iconSource = window.location.origin + "/wp-content/themes/snami/assets/images/map-pin.svg";
// 	const marker = new google.maps.Marker({
// 		map: map,
// 		position: myLatLng,
// 		icon: {
// 			url: iconSource,
// 		},
// 	});
// 	marker.setAnimation(google.maps.Animation.BOUNCE);
// 	setTimeout(() => {
// 		marker.setAnimation(null);
// 	}, 1000);
// }
// if (document.querySelectorAll("[id^='single-map']").length > 0) {
// 	window.addEventListener('load', () => {
// 		initializeMaps();
// 	});
// }
// if (document.querySelectorAll('.multiple_single_map').length > 0) {
// 	window.addEventListener('load', initializeMultiMaps);
// }
// async function initMaps() {
// 	const mapElements = document.querySelectorAll(".map");
// 	mapElements.forEach(mapElement => {
// 		const mapId = mapElement.id.split("-")[2];
// 		initSingleMap(mapElement, mapId);
// 	});
// }
// function initSingleMap(mapElement, mapId) {
// 	const startSelect = document.getElementById(`start-${mapId}`);
// 	const [startLat, startLng] = startSelect.value.split(",").map(coord => parseFloat(coord.trim()));
// 	const mapProp = {
// 		zoom: 15,
// 		center: { lat: startLat, lng: startLng }, // Center the map on the start coordinates
// 		styles: mapStyle,
// 		disableDefaultUI: true,
// 		zoomControl: true, // Explicitly enable zoom control
// 	};
// 	const map = new google.maps.Map(mapElement, mapProp);
// 	const image = new google.maps.MarkerImage(
// 		window.location.origin + "/wp-content/themes/snami/assets/images/map-pin.svg",
// 	);
// 	// console.log(image.url);
// 	let iconSize = new google.maps.Size(40, 40);
// 	if (window.innerWidth < 450) {
// 		iconSize = new google.maps.Size(32, 32); // smaller marker
// 	}
// 	const markerOption = {
// 		clickable: false,
// 		flat: true,
// 		icon: {
// 			url: image.url,
// 			scaledSize: iconSize,
// 		},
// 		visible: true,
// 		map: map,
// 	};
// 	const polylineOptions = {
// 		strokeColor: "transparent",
// 	};
// 	const directionsService = new google.maps.DirectionsService();
// 	const directionsRenderer = new google.maps.DirectionsRenderer({
// 		markerOptions: markerOption,
// 		polylineOptions: polylineOptions,
// 		// preserveViewport: false,
// 	});
// 	directionsRenderer.setMap(map);
// 	// Calculate and display the route
// 	calculateAndDisplayRoute(directionsService, directionsRenderer, mapId);
// }
// function calculateAndDisplayRoute(directionsService, directionsRenderer, mapId) {
// 	const waypts = [];
// 	const startPoint = document.getElementById(`start-${mapId}`);
// 	const endPoint = document.getElementById(`end-${mapId}`);
// 	const waypointsArray = document.querySelectorAll(`#waypoints-${mapId} option`);
// 	const start = startPoint ? startPoint.value : null;
// 	const end = endPoint ? endPoint.value : null;
// 	if (waypointsArray.length === 0) {
// 		if (start) waypts.push({ location: start, stopover: true });
// 		if (end) waypts.push({ location: end, stopover: true });
// 	} else {
// 		waypointsArray.forEach(option => {
// 			waypts.push({
// 				location: option.value,
// 				stopover: true,
// 			});
// 		});
// 	}
// 	directionsService
// 		.route({
// 			origin: start,
// 			destination: end,
// 			waypoints: waypts,
// 			optimizeWaypoints: true,
// 			travelMode: google.maps.TravelMode.DRIVING,
// 		})
// 		.then(response => {
// 			directionsRenderer.setDirections(response);
// 		})
// 		.catch(e => window.alert("Directions request failed due to " + e + "Please refresh the page."));
// }
// document.addEventListener("DOMContentLoaded", initMaps);
// document.addEventListener("DOMContentLoaded", () => {
// 	if (window.google && window.google.maps) {
// 		initMaps();
// 	}
// });

/***/ }),

/***/ "./assets/js/src/modules/script.js":
/*!*****************************************!*\
  !*** ./assets/js/src/modules/script.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _Swiper;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/*Header */
// jQuery(document).ready(function($) {
//   // Cache the image element and the current image source
//   var $changeImage = $('#changeimage');
//   var currentImageSrc = '';
//
//   // Handle hover on menu items
//   $('.headermenu li').hover(function() {
//     var dataImage = $(this).data('image');
//     if (dataImage !== currentImageSrc) {
//       $changeImage.attr('src', dataImage);
//       currentImageSrc = dataImage;
//     }
//   }, function() {
//     // Clear the image source when the mouse leaves the menu item
//     if (currentImageSrc !== '') {
//       $changeImage.attr('src', currentImageSrc);
//     }
//   });
//
//   // Initialize variables for animation
//   var mouseX = 0;
//   var mouseY = 0;
//   var imageX = 0;
//   var imageY = 0;
//   var imageWidth = $changeImage.width();
//   var imageHeight = $changeImage.height();
//   // Function to update mouse position
//   function updateMousePosition(e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//   }
//
//   // Function to smoothly move the image
//   function moveImage() {
//     var dx = (mouseX - imageX) * 0.05 - imageWidth/2;
//     var dy = (mouseY - imageY) * 0.05 - imageHeight/2;
//
//     imageX += dx;
//     imageY += dy;
//
//     $changeImage.css({
//       transform: `translate(${imageX}px, ${imageY}px)`,
//     });
//
//     requestAnimationFrame(moveImage);
//   }
//
//   // Attach mousemove event listener to update the mouse position
//   $(document).on('mousemove', updateMousePosition);
//
//   // Start the animation
//   requestAnimationFrame(moveImage);
// });

/**/
// jQuery(document).ready(function($) {
// $( "#menu-main-menu li").each(function( index ) {
//     var img_src=$(this).find('a').find('img').attr('src');
//     if(index==1){
//       $('#changeimage').attr('src',img_src);
//     }
// });
// });
// $( "#menu-main-menu li").each(function( index ) {
//       var img_src=$(this).find('a').find('img').attr('src');
//       $(this).attr('data-image',img_src);
// });
// $(".menu-item a").on("mouseover", function () {
// 	var item_image = $(this).find(".item_image").data("image");
// 	if ($(".headermenu .menu-image-container").hasClass("image_animation")) {
// 		$(".headermenu .menu-image-container").removeClass("image_animation");
// 		$(".headermenu .menu-image-container").addClass("remove_image_animation");
// 	} else {
// 		$(".headermenu .menu-image-container").addClass("image_animation");
// 		$(".headermenu .menu-image-container").removeClass("remove_image_animation");
// 	}
// 	// if($('.header_menu_image_outter').hasClass('image_animation')){
// 	//   $('.header_menu_image_outter').removeClass('image_animation');
// 	//   $('.header_menu_image_outter').addClass('remove_image_animation');
// 	// }else{
// 	//   $('.header_menu_image_outter').addClass('image_animation');
// 	//   $('.header_menu_image_outter').removeClass('remove_image_animation');
// 	// }
// 	$(".menu-image-container").find("img").attr("src", item_image);
// });
if (window.matchMedia('(max-width: 1024px)').matches) {
  $(document).on('click', '.select2-search__field', function () {
    $(this).removeAttr('readonly');
  }); // Add disabled when input is created

  $(document).on('select2:open', function () {
    setTimeout(function () {
      $('.select2-search__field').attr('disabled', true);
      $('.select2-search__field').attr('readonly', true);
    }, 0);
  });
} // $(document).on('select2:open', function (e) {
// 	setTimeout(() => {
// 		$('.select2-search input').prop('focus', false);
// 		$('.select2-search input').prop('readonly', true);
// 		$('.select2-search input').attr('inputmode', 'none');
// 	}, 0);
// });
// CLOSE OPEN FORM MODALS


$(function () {
  // Open dialog based on button ID
  $("#inspire-BtnOpen, [id^='request-BtnOpen'], #inquiry-BtnOpen").click(function () {
    var targetId = this.id.replace('-BtnOpen', '');
    $('#dialog-' + targetId).addClass('active');
    $('body').addClass('modal-open'); // $("body").attr("inert", "");

    if ('dialog[open]') {
      $('dialog[open]').each(function () {
        this.close();
      });
      $('body').removeAttr('inert');
    }
  }); // Close dialog with close button inside

  $('.close-dialog').click(function () {
    closeModal($(this).closest('.modal-form'));
  }); // Close dialog with Escape key

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('body').removeClass('modal-open');
      $('.modal-form.active').each(function () {
        closeModal($(this));
      });
    }
  }); // Reusable modal close function

  function closeModal($modal) {
    $modal.removeClass('active'); // Remove body scroll lock if no modals are active

    if ($('.modal-form.active').length === 0) {
      $('body').removeClass('modal-open');
      $('body').removeAttr('inert');
    }
  }
});
/*scroll header*/
function syncBodyScrollLockSafe() {
  if (typeof window.syncBodyScrollLock === 'function') {
    window.syncBodyScrollLock();
    return;
  }

  var isModeSelectorOpen = document.body.classList.contains('mode-selector-open');
  var isMainMenuOpen = !!document.querySelector('.headermenu.is-active');
  document.body.style.overflowY = isModeSelectorOpen || isMainMenuOpen ? 'hidden' : '';
}

$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    $('.site-header').addClass('scrolled');
  } else {
    $('.site-header').removeClass('scrolled');
  }

  if ($('.scroll-image').length) {
    // if the user scrolled even a little from the top of the page
    // if ($(document).scrollTop() > 1) {
    if (!$('.scroll-image').hasClass('scrolled')) {
      // set window top to 0
      $(window).scrollTop(0);
      $('.scroll-image').addClass('scrolled');
      $('#landing.default .title h1').addClass('scrolled');
      document.body.style.overflowY = 'hidden';
      setTimeout(function () {
        syncBodyScrollLockSafe();
      }, 1000); // }
    } // else {
    //   $('.scroll-image').removeClass('scrolled');
    // }

  }
});
/*Detect Direction*/

var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();

  if (st > lastScrollTop && st != 0) {
    $('.site-header').addClass('down');
    $('#global-share').addClass('appear');
  } else {
    $('.site-header').removeClass('down');
  }

  lastScrollTop = st;
});
/*Language Switcher*/

$('.language.is-active').on('click', function () {
  return false;
});
/*Open Menu*/
// $('.menu_button').on('click', function () {
// 	if ($(this).hasClass('is-active')) {
// 		$('body').css('overflow-y', 'scroll');
// 		$(this).removeClass('is-active');
// 		$('.menu_button').removeClass('is-active');
// 		$('.site-header').removeClass('openmenu');
// 		$('.header_menu_controls .menu_button').addClass('is-active');
// 		$('.headermenu').removeClass('is-active');
// 		// $('.menu li').removeClass('aos-animate');
// 	} else {
// 		$(this).addClass('is-active');
// 		$('.header_menu_controls .menu_button').addClass('is-active');
// 		jQuery('body').css('overflow-y', 'hidden');
// 		$('.headermenu').addClass('is-active');
// 		$('.site-header').addClass('openmenu');
// 		$('.site-header').removeClass('scrolled');
// 		// setTimeout(function () {
// 		// 	$('.menu li').each(function (index) {
// 		// 		$(this).addClass('aos-animate');
// 		// 		$(this).addClass('aos-init');
// 		// 	});
// 		// }, 1000);
// 	}
// 	$(this).prop('disabled', true);
// 	setTimeout(() => {
// 		$(this).prop('disabled', false);
// 	}, 700);
// });

/*Menu Animation*/
// $(document).ready(function () {
// 	$("header ul.menu").each(function (menuIndex) {
// 		$(this)
// 			.find("> li")
// 			.each(function (index) {
// 				$(this).attr("data-aos", "fade-up");
// 				$(this).attr("data-aos-duration", "1200");
// 				$(this).attr("data-aos-easing", "menu-easing");
// 				$(this).addClass("aos-init");
// 				let menuIndexTime = menuIndex * 300;
// 				setTimeout(function () {
// 					$(this).removeClass("aos-animate");
// 				}, 300);
// 				if (index === 0) {
// 					$(this).attr("data-aos-delay", menuIndexTime);
// 				} else {
// 					$(this).attr("data-aos-delay", index * 100 + menuIndexTime);
// 				}
// 			});
// 	});
// });
// $(document).ready(function () {
// 	const $menuItems = $('header ul.menu > li'); // grab all menu items across all menus
// 	$menuItems.each(function (index) {
// 		$(this).attr({
// 			'data-aos': 'fade-up',
// 			'data-aos-duration': '1200',
// 			'data-aos-easing': 'menu-easing',
// 			'data-aos-delay': index * 50, // smooth global stagger
// 		});
// 		$(this).addClass('aos-init');
// 		// optional reset animation
// 		setTimeout(() => {
// 			$(this).removeClass('aos-animate');
// 		}, 300);
// 	});
// });

$(document).ready(function () {
  var menuBtn = $('.menu_button');
  var menuItems = $('#menu-navigation-main-menu.menu .menu-item, #menu-navigation-secondary-menu.menu .menu-item');
  var menuBottom = $('.menu-right .menu-right-bottom');
  var headerMenu = $('.headermenu');
  var menuOpen = false; // MatchMedia for responsive menu items

  var mm = gsap.matchMedia();
  mm.add('(max-width: 1024px)', function () {
    menuItems = $('#menu-navigation-main-menu-1.menu .menu-item, #menu-navigation-secondary-menu.menu .menu-item');
  }); // Initial states

  gsap.set(menuItems, {
    opacity: 0,
    y: 50
  });
  gsap.set(menuBottom, {
    opacity: 0,
    x: '-100%'
  });
  gsap.set(headerMenu, {
    y: '100%'
  });
  menuBtn.on('click', function () {
    // Kill all ongoing animations on these elements
    gsap.killTweensOf([menuItems, menuBottom, headerMenu]);

    if (!menuOpen) {
      $(this).addClass('is-active'); // $('.header_menu_controls .menu_button').addClass('is-active');
      headerMenu.addClass('is-active');
      $('.site-header').addClass('openmenu').removeClass('scrolled');
      syncBodyScrollLockSafe();
      var tlOpen = gsap.timeline();
      tlOpen.to(headerMenu, {
        duration: 1.4,
        y: 0,
        ease: 'power4.inOut'
      }, 0).to(menuItems, {
        duration: 1.2,
        opacity: 1,
        y: 0,
        stagger: 0.06,
        ease: 'power4.out'
      }, '<1').to(menuBottom, {
        duration: 1.2,
        x: 0,
        opacity: 1,
        ease: 'power4.out'
      }, '<0.5');
      menuOpen = true;
    } else {
      menuBtn.removeClass('is-active');
      var tlClose = gsap.timeline({
        onComplete: function onComplete() {
          // $('.header_menu_controls .menu_button').removeClass('is-active');
          $('.site-header').removeClass('openmenu');
          headerMenu.removeClass('is-active');
          syncBodyScrollLockSafe();
        }
      });
      tlClose.to(menuItems, {
        duration: 0.5,
        opacity: 0,
        y: 50,
        stagger: 0.04,
        ease: 'power4.in'
      }, 0).to(menuBottom, {
        duration: 0.5,
        opacity: 0,
        x: '-100%',
        ease: 'power4.in'
      }, '<0.5').to(headerMenu, {
        duration: 0.8,
        y: '100%',
        ease: 'power4.in'
      }, '<0.4');
      menuOpen = false;
    }
  });
}); // Hotel & Villas Page
// $(document).on("click", ".wpc-filter-layout-submit-button > a", function () {
// 	window.wpcExpectingUrlChange = true;
// });
// setInterval(function () {
// 	if (window.wpcExpectingUrlChange && window.wpcLastUrl !== location.href) {
// 		window.wpcLastUrl = location.href;
// 		window.wpcExpectingUrlChange = false;
// 		const dialog = $("#dialog-filter");
// 		if (dialog && dialog[0] && dialog[0].open) {
// 			dialog[0].close();
// 		}
// 	}
// }, 200);
// window.wpcLastUrl = location.href;

var viewMoreSwiper = new Swiper('.view-also-swiper', {
  // loop: true,
  spaceBetween: 0,
  grabCursor: false,
  slidesPerView: 1,
  centeredSlides: true,
  allowTouchMove: false,
  speed: 500,
  effect: 'fade',
  on: {
    slideChange: function slideChange() {
      updateNavButtons(this);
    },
    reachEnd: function reachEnd() {
      updateNavButtons(this);
    },
    reachBeginning: function reachBeginning() {
      updateNavButtons(this);
    }
  }
}); // Select all buttons inside slides

var nextButtons = document.querySelectorAll('.view-also-swiper .button-next');
var prevButtons = document.querySelectorAll('.view-also-swiper .button-prev'); // Select all buttons inside slides

nextButtons.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    return viewMoreSwiper.slideNext();
  });
});
prevButtons.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    return viewMoreSwiper.slidePrev();
  });
});

function updateNavButtons(swiper) {
  if (swiper.isBeginning) {
    prevButtons.forEach(function (btn) {
      return btn.classList.add('disabled');
    });
  } else {
    prevButtons.forEach(function (btn) {
      return btn.classList.remove('disabled');
    });
  }

  if (swiper.isEnd) {
    nextButtons.forEach(function (btn) {
      return btn.classList.add('disabled');
    });
  } else {
    nextButtons.forEach(function (btn) {
      return btn.classList.remove('disabled');
    });
  }
} // initialize state


updateNavButtons(viewMoreSwiper); // const locationSightsSwiper = new Swiper('.location_sights_swiper', {
// 	slidesPerView: 1,
// 	grabCursor: true,
// 	spaceBetween: 12,
// 	breakpoints: {
// 		450: {
// 			slidesPerView: 'auto',
// 		},
// 	},
// });
// check if current page has villainfoswiper
// if (document.querySelector('.location_sights_swiper') != null) {
// 	locationSightsSwiper.on('slideChange', function () {
// 		document.querySelector('.current-index-sights').textContent = locationSightsSwiper.activeIndex + 1;
// 	});
// 	// Update swiper amount and title
// 	document.querySelector('.swiper-amount-sights').textContent = locationSightsSwiper.slides.length;
// }
// const villaInfoSwiper = new Swiper('.villa_info_swiper', {
// 	slidesPerView: 1,
// 	grabCursor: true,
// 	spaceBetween: 12,
// });
// // check if current page has villainfoswiper
// if (document.querySelector('.villa_info_swiper') != null) {
// 	villaInfoSwiper.on('slideChange', function () {
// 		document.querySelector('.current-index').textContent = villaInfoSwiper.activeIndex + 1;
// 	});
// 	// Update swiper amount and title
// 	document.querySelector('.swiper-amount').textContent = villaInfoSwiper.slides.length;
// 	document.querySelector('.swiper-title').textContent =
// 		villaInfoSwiper.slides[villaInfoSwiper.activeIndex].querySelector('.swiper-slide-caption').textContent;
// 	// Update swiper title
// 	villaInfoSwiper.on('slideChange', function () {
// 		var currentSlide = villaInfoSwiper.slides[villaInfoSwiper.activeIndex];
// 		var caption = currentSlide.querySelector('.swiper-slide-caption').textContent;
// 		document.querySelector('.swiper-title').textContent = caption;
// 	});
// }
// check if current page has locationBeachesSwiper
// if (document.querySelector('.beaches_info_swiper') != null) {
// 	locationBeachesSwiper.on('slideChange', function () {
// 		document.querySelector('.current-index').textContent = locationBeachesSwiper.activeIndex + 1;
// 	});
// 	// Update swiper amount and title
// 	const beachTitle = document.querySelector('.beach-title');
// 	const swiperTitle = document.querySelector('.swiper-title');
// 	const beachText1 = document.querySelector('.beach-text1');
// 	const beachText2 = document.querySelector('.beach-text2');
// 	document.querySelector('.swiper-amount').textContent = locationBeachesSwiper.slides.length;
// 	beachTitle.textContent =
// 		locationBeachesSwiper.slides[locationBeachesSwiper.activeIndex].querySelector(
// 			'.swiper-slide-title',
// 		).textContent;
// 	swiperTitle.textContent =
// 		locationBeachesSwiper.slides[locationBeachesSwiper.activeIndex].querySelector(
// 			'.swiper-slide-title',
// 		).textContent;
// 	beachText1.textContent =
// 		locationBeachesSwiper.slides[locationBeachesSwiper.activeIndex].querySelector(
// 			'.swiper-slide-text1',
// 		).textContent;
// 	beachText2.textContent =
// 		locationBeachesSwiper.slides[locationBeachesSwiper.activeIndex].querySelector(
// 			'.swiper-slide-text2',
// 		).textContent;
// 	// Update swiper details
// 	locationBeachesSwiper.on('slideChange', function () {
// 		const currentSlide = locationBeachesSwiper.slides[locationBeachesSwiper.activeIndex];
// 		gsap.to(beachTitle, {
// 			duration: 0.1,
// 			opacity: 0,
// 			onComplete: function () {
// 				beachTitle.textContent = currentSlide.querySelector('.swiper-slide-title').textContent;
// 				gsap.to(beachTitle, { duration: 0.1, opacity: 1 });
// 			},
// 		});
// 		gsap.to(swiperTitle, {
// 			duration: 0.1,
// 			opacity: 0,
// 			onComplete: function () {
// 				swiperTitle.textContent = currentSlide.querySelector('.swiper-slide-title').textContent;
// 				gsap.to(swiperTitle, { duration: 0.1, opacity: 1 });
// 			},
// 		});
// 		gsap.to(beachText1, {
// 			duration: 0.1,
// 			opacity: 0,
// 			onComplete: function () {
// 				beachText1.textContent = currentSlide.querySelector('.swiper-slide-text1').textContent;
// 				gsap.to(beachText1, { duration: 0.1, opacity: 1 });
// 			},
// 		});
// 		gsap.to(beachText2, {
// 			duration: 0.1,
// 			opacity: 0,
// 			onComplete: function () {
// 				beachText2.textContent = currentSlide.querySelector('.swiper-slide-text2').textContent;
// 				gsap.to(beachText2, { duration: 0.1, opacity: 1 });
// 			},
// 		});
// 	});
// }
// add numbers in publications

var publications = document.querySelectorAll('.publication');

if (publications.length > 0) {
  publications.forEach(function (item, index) {
    var numberElement = document.createElement('span');
    numberElement.classList.add('publication-counter');
    var number = index + 1;

    if (number < 10) {
      numberElement.textContent = '0' + number;
    } else {
      numberElement.textContent = number;
    } // insert number under item's .title-wrapper > .title


    var titleWrapper = item.querySelector('.title-wrapper');
    var title = item.querySelector('.title');
    titleWrapper.insertBefore(numberElement, title);
  });
}

publications.forEach(function (el) {
  var publicationContent = el.querySelector('.content-wrapper');
  var publicationContentHeight = publicationContent.scrollHeight;
  publicationContent.style.maxHeight = '0px';
  el.addEventListener('click', function () {
    if (!publicationContent.classList.contains('active')) {
      publicationContent.style.maxHeight = publicationContentHeight + 'px';
      publicationContent.classList.add('active');
      el.querySelector('.publication-img').classList.add('active');
    } else {
      publicationContent.style.maxHeight = '0px';
      publicationContent.classList.remove('active');
      el.querySelector('.publication-img').classList.remove('active');
    }
  });
}); // filter partners that have a child element with class .partner-image

var gsapPublications = Array.from(publications).filter(function (el) {
  return el.querySelector('.publication-img');
});
var winWidth = window.innerWidth;

var enablePublicationsGSAP = function enablePublicationsGSAP() {
  if (winWidth < 789) {} else {
    gsapPublications.forEach(addMouseEnter);
    gsapPublications.forEach(addMouseLeave);
    gsapPublications.forEach(addMouseMove);
  }
};

var addMouseEnter = function addMouseEnter(el) {
  el.addEventListener('mouseenter', enterHandler);
};

var addMouseLeave = function addMouseLeave(el) {
  el.addEventListener('mouseleave', leaveHandler);
};

var addMouseMove = function addMouseMove(el) {
  el.addEventListener('mousemove', moveHandler);
};

var removeMouseEvents = function removeMouseEvents(el) {
  el.removeEventListener('mouseenter', enterHandler);
  el.removeEventListener('mouseleave', leaveHandler);
  el.removeEventListener('mousemove', moveHandler);
};

var enterHandler = function enterHandler(e) {
  var image = e.currentTarget.querySelector('.publication-img img');
  gsap.to(image, {
    autoAlpha: 1
  });
};

var leaveHandler = function leaveHandler(e) {
  var image = e.currentTarget.querySelector('.publication-img img');
  gsap.to(image, {
    autoAlpha: 0
  });
};

var moveHandler = function moveHandler(e) {
  var image = e.currentTarget.querySelector('.publication-img img');
  var rect = image.getBoundingClientRect();
  var imageCenterX = rect.left + rect.width / 2;
  var imageCenterY = rect.top - 30;
  gsap.to(image, {
    x: e.clientX - imageCenterX,
    y: e.clientY - imageCenterY,
    duration: 1,
    ease: 'power2.out'
  });
};

enablePublicationsGSAP();

if ($(window).width() > 768) {
  $('.element').click(function () {
    $(this).addClass('hover');
    $(this).removeClass('non-hover');
    $('.element').not(this).removeClass('hover');
    $('.element').not(this).addClass('non-hover');
  });
  $('.element').first().click();
}

if (window.innerWidth > 768) {
  var homeServicesListItems = document.querySelectorAll('.home-services-list-item');
  var homeServicesImageWrappers = document.querySelectorAll('.home-services-image-wrapper');

  if (homeServicesListItems.length > 0) {
    var div = document.querySelector("[data-item=\"".concat(homeServicesListItems[0].textContent, "\"]"));
    div.classList.add('active');
  }

  homeServicesListItems.forEach(function (item) {
    item.addEventListener('mouseenter', function (e) {
      var div = document.querySelector("[data-item=\"".concat(e.target.textContent, "\"]"));
      div.classList.add('active'); //remove active from other items

      homeServicesImageWrappers.forEach(function (item) {
        if (item !== div) {
          item.classList.remove('active');
        }
      });
    });
  });
} // ****************************
// ****************************
// Swipers
// ****************************
// Tour and Experience Swiper Options


var destinationSection = document.querySelector('#destination_page_slider');

if (destinationSection) {
  new Swiper(destinationSection.querySelector('.destination_swiper'), {
    effect: 'fade',
    speed: 1500,
    navigation: {
      nextEl: destinationSection.querySelector('.button-next'),
      prevEl: destinationSection.querySelector('.button-prev')
    },
    pagination: {
      el: destinationSection.querySelector('.swiper-pagination'),
      type: 'custom',
      renderCustom: function renderCustom(swiper, current, total) {
        var progressPercentage = current / total * 100;
        return "\n\t\t  <div class=\"pagination-wrapper\">\n\t\t\t <div class=\"spans-wrapper\">\n\t\t\t\t<span class=\"current\">".concat(('0' + current).slice(-2), "</span>\n\t\t\t\t / \n\t\t\t\t<span class=\"total\">").concat(('0' + total).slice(-2), "</span>\n\t\t\t </div>\n\t\t\t <div class=\"progressbar-background\">\n\t\t\t\t<div class=\"progressbar-fill\" style=\"width: ").concat(progressPercentage, "%;\"></div>\n\t\t\t </div>\n\t\t  </div>");
      }
    },
    on: {
      init: function init() {
        var activeIndex = this.realIndex;
        updateActiveClass(this, activeIndex);
      },
      slideChange: function slideChange() {
        var activeIndex = this.realIndex;
        updateActiveClass(this, activeIndex);
      }
    }
  });
}

function initializeSwiper(selector, options) {
  document.addEventListener('DOMContentLoaded', function () {
    var swiperEl = document.querySelector(selector);
    if (!swiperEl) return;
    var slides = swiperEl.querySelectorAll('.swiper-slide');
    var slideCount = slides.length; // Disable loop/autoplay if fewer than 3 slides

    if (slideCount < 3) {
      options.loop = false;

      if (options.autoplay) {
        options.autoplay = false;
      }
    }

    var swiper = new Swiper(selector, options);
    return swiper;
  });
}

function updateActiveClass(swiper, activeIndex) {
  var swiperSection = swiper.el.closest('section');
  if (!swiperSection) return;
  swiperSection.querySelectorAll('[data-swiper-index]').forEach(function (el) {
    el.classList.toggle('active', parseInt(el.dataset.swiperIndex) === activeIndex);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var reasonSection = document.querySelector('#choose_snami_about');
  if (!reasonSection) return;
  var reasonsSwiper = new Swiper(reasonSection.querySelector('.reasonsSwiper'), {
    effect: 'fade',
    speed: 3500,
    navigation: {
      nextEl: reasonSection.querySelector('.button-next'),
      prevEl: reasonSection.querySelector('.button-prev')
    },
    pagination: {
      el: reasonSection.querySelector('.swiper-pagination'),
      type: 'custom',
      renderCustom: function renderCustom(swiper, current, total) {
        var progressPercentage = current / total * 100;
        return "\n\t\t  <div class=\"pagination-wrapper\">\n\t\t\t <div class=\"spans-wrapper\">\n\t\t\t\t<span class=\"current\">".concat(('0' + current).slice(-2), "</span>\n\t\t\t\t / \n\t\t\t\t<span class=\"total\">").concat(('0' + total).slice(-2), "</span>\n\t\t\t </div>\n\t\t\t <div class=\"progressbar-background\">\n\t\t\t\t<div class=\"progressbar-fill\" style=\"width: ").concat(progressPercentage, "%;\"></div>\n\t\t\t\t</div>\n\t\t\t\t</div>");
      }
    },
    on: {
      init: function init() {
        updateActiveClass(this, this.realIndex);
      },
      slideChange: function slideChange() {
        updateActiveClass(this, this.realIndex);
      }
    }
  }); // Add also EventListener on list tabs items to control the swiper

  reasonSection.querySelector('ul.tabs').addEventListener('click', function (e) {
    var button = e.target.closest('button');
    if (!button) return;
    var parentOfButton = button.parentElement;
    var swiperIndex = parentOfButton.getAttribute('data-swiper-index');
    reasonsSwiper.slideTo(swiperIndex);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var itineraryItem = document.querySelectorAll('.itinerary-item');
  if (itineraryItem.length === 0) return;
  itineraryItem.forEach(function (item, i) {
    var isDialogOpen = _toConsumableArray(item.querySelectorAll('dialog')).some(function (d) {
      return d.open;
    });

    var accom = item.querySelector(".itinerary-swiper-container.accommodation-".concat(i));
    var exp = item.querySelector(".itinerary-swiper-container.experiences-".concat(i));
    var accomGalleries = accom ? accom.querySelectorAll('.swiper-pop-gallery') : [];
    var expGalleries = exp ? exp.querySelectorAll('.swiper-pop-gallery') : [];
    [].concat(_toConsumableArray(expGalleries), _toConsumableArray(accomGalleries)).forEach(function (gallery, index) {
      if (gallery.classList.contains('swiper-initialized')) return;
      var isAccom = Array.from(accomGalleries).includes(gallery);
      var type = isAccom ? 'accom' : 'exp';
      var uniqueClass = "swiper-".concat(type, "-").concat(i, "-pop-gallery-").concat(index);
      var prevClass = "button-".concat(type, "-").concat(i, "-prev-").concat(index);
      var nextClass = "button-".concat(type, "-").concat(i, "-next-").concat(index);
      gallery.classList.add(uniqueClass);
      var newGallery = document.querySelector(".".concat(uniqueClass));
      var prevButton = newGallery.querySelector('.swiper-button-prev');
      var nextButton = newGallery.querySelector('.swiper-button-next'); // // Give buttons unique classes

      if (prevButton) prevButton.classList.add(prevClass);
      if (nextButton) nextButton.classList.add(nextClass);
      setTimeout(function () {
        initGallery(newGallery, ".".concat(prevClass), ".".concat(nextClass));
      }, 500);
    });
  });

  function initGallery(galleryEl, prevSelector, nextSelector) {
    var swiper = new Swiper(galleryEl, {
      slidesPerView: 1,
      // speed: 1000,
      centeredSlides: false,
      loop: false,
      navigation: {
        nextEl: galleryEl.querySelector(nextSelector),
        prevEl: galleryEl.querySelector(prevSelector)
      },
      on: {
        init: function init() {
          // Handle initial state
          updateButtonStates(this, galleryEl, prevSelector, nextSelector);
        },
        slideChange: function slideChange() {
          // Update button states on slide change
          updateButtonStates(this, galleryEl, prevSelector, nextSelector);
        }
      }
    });
    return swiper;
  }

  function updateButtonStates(swiper, galleryEl, prevSelector, nextSelector) {
    var prevBtn = galleryEl.querySelector(prevSelector);
    var nextBtn = galleryEl.querySelector(nextSelector);

    if (prevBtn) {
      if (swiper.isBeginning) {
        prevBtn.classList.add('swiper-button-disabled');
      } else {
        prevBtn.classList.remove('swiper-button-disabled');
      }
    }

    if (nextBtn) {
      if (swiper.isEnd) {
        nextBtn.classList.add('swiper-button-disabled');
      } else {
        nextBtn.classList.remove('swiper-button-disabled');
      }
    }
  }
});
var reviewsSwiperOptions = {
  loop: true,
  grabCursor: false,
  slidesPerView: 1,
  speed: 1000,
  centeredSlides: false,
  allowTouchMove: true,
  breakpoints: {
    0: {
      pagination: {
        enabled: true,
        el: '.swiper-pagination'
      }
    },
    991: {
      navigation: {
        enabled: true,
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev'
      },
      pagination: {
        enabled: false,
        el: '.swiper-pagination'
      }
    }
  }
}; // Category Swiper
// const agentSwiper = initializeSwiper('.agents-swiper', agentsSwiperOptions);

var reviewsSwiper = initializeSwiper('.reviews-swiper', reviewsSwiperOptions); // reviews background svg animation

document.addEventListener('DOMContentLoaded', function () {
  var svgIcon = document.querySelector('#svg-icon');

  if (!svgIcon) {
    return;
  }

  var svgPaths = svgIcon.querySelectorAll('path');
  svgPaths.forEach(function (element) {
    element.style.setProperty('--path', element.getTotalLength());
  });
}); // Discover More Destination Section

document.addEventListener('DOMContentLoaded', function () {
  var defaultDestination = document.getElementById('default_destination');
  if (!defaultDestination) return;
  var wrapper = defaultDestination.querySelector('.wrapper');
  var defaultBg = wrapper.querySelector('.default-bg');
  var postHeadings = gsap.utils.toArray('.post-title a', defaultDestination);
  var images = gsap.utils.toArray('.image-container', defaultDestination);
  var isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.matchMedia('(hover: none)').matches;

  if (!isMobile) {
    var activeIndex = null; // Last hovered image

    var backgroundRemoved = false; // Track first hover
    // Initially hide all images

    gsap.set(images, {
      autoAlpha: 0
    });
    postHeadings.forEach(function (heading, i) {
      var targetImg = images[i];

      var showImage = function showImage() {
        // Fade out default background on first hover
        if (!backgroundRemoved && defaultBg) {
          gsap.to(defaultBg, {
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power2.inOut'
          });
          backgroundRemoved = true;
        } // Hide previous active image


        if (activeIndex !== null && activeIndex !== i) {
          gsap.to(images[activeIndex], {
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power2.inOut'
          });
        } // Show current image


        gsap.to(targetImg, {
          autoAlpha: 1,
          duration: 0.6,
          ease: 'power2.inOut'
        });
        activeIndex = i; // Update active
      };

      heading.addEventListener('mouseenter', showImage);
      heading.addEventListener('focus', showImage);
    });
  } else {
    // Mobile: auto-cycle images
    var currentIndex = 0;

    var cycleImages = function cycleImages() {
      gsap.to(images, {
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.inOut'
      });
      var targetImg = images[currentIndex];
      gsap.set(targetImg, {
        zIndex: 2
      });
      gsap.to(targetImg, {
        autoAlpha: 1,
        duration: 1,
        ease: 'power2.inOut'
      });
      currentIndex = (currentIndex + 1) % images.length;
      gsap.delayedCall(3, cycleImages);
    };

    cycleImages();
  }
}); // document.addEventListener("DOMContentLoaded", () => {
// 	const defaultDestination = document.getElementById("default_destination");
// 	if (!defaultDestination) return;
// 	let postHeadings = gsap.utils.toArray(".post-title a", defaultDestination);
// 	let images = gsap.utils.toArray(".image-container", defaultDestination);
// 	postHeadings.forEach((heading, i) => {
// 		let targetImg = images[i];
// 		// Function to show image
// 		const showImage = () => {
// 			gsap.set(targetImg, { zIndex: 2 });
// 			gsap.to(targetImg, {
// 				autoAlpha: 1,
// 				opacity: 1,
// 				duration: 1,
// 				ease: "power2.inOut",
// 			});
// 		};
// 		// Function to hide image
// 		const hideImage = () => {
// 			gsap.set(targetImg, { zIndex: 1 });
// 			gsap.to(images, {
// 				autoAlpha: 0,
// 				opacity: 0,
// 				duration: 1,
// 				ease: "power2.inOut",
// 			});
// 		};
// 		// Mouse events
// 		heading.addEventListener("mouseenter", showImage);
// 		heading.addEventListener("mouseleave", hideImage);
// 		// Keyboard focus events
// 		heading.addEventListener("focus", showImage);
// 		heading.addEventListener("blur", hideImage);
// 	});
// });
// document.addEventListener("DOMContentLoaded", () => {
// 	function initAccordion() {
// 		const togglers = document.querySelectorAll(".accordion__header");
// 		if (!togglers.length) return;
// 		togglers.forEach(btn => {
// 			btn.addEventListener("click", e => {
// 				const selector = e.currentTarget.dataset.toggle;
// 				const block = document.querySelector(`${selector}`);
// 				// Remove active class from all other togglers and reset their maxHeight
// 				togglers.forEach(otherBtn => {
// 					if (otherBtn !== e.currentTarget) {
// 						const otherSelector = otherBtn.dataset.toggle;
// 						const otherBlock = document.querySelector(`${otherSelector}`);
// 						otherBtn.classList.remove("active");
// 						otherBlock.style.maxHeight = "";
// 					}
// 				});
// 				if (e.currentTarget.classList.contains("active")) {
// 					block.style.maxHeight = "";
// 				} else {
// 					block.style.maxHeight = block.scrollHeight + "px";
// 				}
// 				e.currentTarget.classList.toggle("active");
// 			});
// 		});
// 	}
// 	initAccordion();
// });
// FAQ Dropdowns
// document.addEventListener("DOMContentLoaded", function () {
// 	const questionWrappers = document.querySelectorAll(".faq-question-wrapper");
// 	if (!questionWrappers.length) {
// 		return;
// 	}
// 	function toggleAnswer(event) {
// 		event.currentTarget.classList.toggle("active");
// 		const answerWrapper = event.currentTarget.nextElementSibling;
// 		if (answerWrapper.style.height && answerWrapper.style.height !== "0px") {
// 			answerWrapper.style.height = "0";
// 		} else {
// 			answerWrapper.style.height = answerWrapper.scrollHeight + "px";
// 		}
// 	}
// 	questionWrappers.forEach(function (wrapper) {
// 		wrapper.addEventListener("click", toggleAnswer);
// 	});
// });
// Accordions
// document.addEventListener("DOMContentLoaded", function () {
// 	const accordionWrappers = document.querySelectorAll(".accordion-title-wrapper");
// 	if (accordionWrappers.length > 0) {
// 		function toggleAccordion(event) {
// 			event.currentTarget.classList.toggle("active");
// 			const textWrapper = event.currentTarget.nextElementSibling;
// 			if (textWrapper.style.height && textWrapper.style.height !== "0px") {
// 				textWrapper.style.height = "0";
// 			} else {
// 				textWrapper.style.height = textWrapper.scrollHeight + "px";
// 			}
// 		}
// 		accordionWrappers.forEach(function (wrapper) {
// 			wrapper.addEventListener("click", toggleAccordion);
// 		});
// 	}
// });
// const galleryTop = new Swiper('.gallery_top', {
// 	slidesPerView: 'auto',
// 	spaceBetween: 40,
// 	grabCursor: true,
// 	direction: 'horizontal',
// 	breakpoints: {
// 		0: {
// 			spaceBetween: 20,
// 		},
// 		768: {
// 			spaceBetween: 40,
// 		},
// 	},
// 	loop: true,
// 	speed: 8000,
// 	autoplay: {
// 		// delay: 100,
// 		disableOnInteraction: true,
// 	},
// });
// const galleryBottom = new Swiper('.gallery_bottom', {
// 	slidesPerView: 'auto',
// 	spaceBetween: 40,
// 	grabCursor: true,
// 	direction: 'horizontal',
// 	breakpoints: {
// 		0: {
// 			spaceBetween: 20,
// 		},
// 		768: {
// 			spaceBetween: 40,
// 		},
// 	},
// 	loop: true,
// 	speed: 8000,
// 	autoplay: {
// 		// delay: 100,
// 		reverseDirection: true,
// 		disableOnInteraction: true,
// 	},
// });

document.querySelectorAll('.itinerary-swiper').forEach(function (el) {
  var itinerarySwiper = new Swiper(el, {
    spaceBetween: 40,
    grabCursor: true,
    direction: 'horizontal',
    slidesPerView: 1,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.1,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 1.8,
        spaceBetween: 20
      },
      1120: {
        slidesPerView: 1.8,
        spaceBetween: 20
      },
      1240: {
        slidesPerView: 2.3,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: el.querySelector('.itinerary-swiper-next'),
      prevEl: el.querySelector('.itinerary-swiper-prev')
    }
  });
});
var destinationsSwiper = new Swiper('.destinations-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  grabCursor: true,
  direction: 'horizontal'
}); //pin map on custom multiday inner page

var multidayMap = document.querySelector('.itinerary-map');
var itineraryContent = document.querySelector('.itinerary-content');

if (multidayMap) {
  var st = ScrollTrigger.create({
    trigger: itineraryContent,
    pin: multidayMap,
    start: 'top 0',
    end: 'bottom bottom' // markers: true,

  });
}

var itineraryWrapper = document.querySelector('.itinerary-items-wrapper'); // Function to update the scroll percentage CSS variable

function updateScrollPercentage() {
  var scrollTop = window.scrollY;
  var elementTop = itineraryWrapper.getBoundingClientRect().top + scrollTop;
  var elementHeight = itineraryWrapper.offsetHeight;
  var items = document.querySelectorAll('.itinerary-items-wrapper .itinerary-item>div');
  var lastItem = items[items.length - 1]; // Get the last element

  if (scrollTop >= elementTop + elementHeight - lastItem.offsetHeight) {
    return; // Stop updating the scroll percentage
  } // Calculate the percentage scrolled


  var scrolledPercentage = Math.min(Math.max((scrollTop - elementTop + 250) / elementHeight * 100, 0), 100); // Set CSS variable with the scroll percentage (0 to 1)

  itineraryWrapper.style.setProperty('--scroll-percentage', "".concat(Math.round(scrolledPercentage), "%"));
}

if (itineraryWrapper) {
  window.addEventListener('scroll', updateScrollPercentage);
}

var SELECTORS = {
  openBtn: '.openDialogBtn[data-dialog]',
  closeBtn: '.closeDialogBtn[data-dialog]'
}; // Modal / Dialog Transition

function withViewTransition(callback) {
  if (!document.startViewTransition) {
    callback();
    return;
  }

  document.startViewTransition(callback);
}

function getDialog(button) {
  var _button$dataset = button.dataset,
      id = _button$dataset.dialog,
      experience = _button$dataset.experience;
  var selector = experience ? "dialog[data-dialog=\"".concat(id, "\"][data-experience=\"").concat(experience, "\"]") : "dialog[data-dialog=\"".concat(id, "\"]");
  return document.querySelector(selector);
}

function openDialog(dialog) {
  if (!dialog || dialog.open) return;
  document.body.classList.add('modal-open');
  withViewTransition(function () {
    return dialog.showModal();
  });
}

function closeDialog(dialog) {
  if (!dialog || !dialog.open) return;
  withViewTransition(function () {
    return dialog.close();
  });
}

function closeAllDialogs() {
  document.querySelectorAll('dialog[open]').forEach(closeDialog);
}

function handleClick(e) {
  // Open button
  var openBtn = e.target.closest(SELECTORS.openBtn);

  if (openBtn) {
    e.preventDefault();
    openDialog(getDialog(openBtn));
    return;
  } // Close button


  var closeBtn = e.target.closest(SELECTORS.closeBtn);

  if (closeBtn) {
    closeDialog(getDialog(closeBtn));
    return;
  } // Backdrop click


  var dialog = e.target.closest('dialog');

  if (dialog !== null && dialog !== void 0 && dialog.open && e.target === dialog) {
    closeDialog(dialog);
    return;
  } // Table request close


  if (e.target.closest('.tablerequest')) {
    closeAllDialogs();
  }
}

function handleKeydown(e) {
  if (e.key === 'Escape') {
    e.preventDefault();
    closeAllDialogs();
  }
}

function handleDialogClose() {
  if (!document.querySelector('dialog[open]')) {
    document.body.classList.remove('modal-open');
  }
}

document.addEventListener('click', handleClick);
document.addEventListener('keydown', handleKeydown);
document.addEventListener('close', handleDialogClose, true); // function closeAllDialogs() {
// 	document.body.classList.remove('modal-open');
// 	document.querySelectorAll('dialog[open]').forEach((d) =>
// 		withViewTransition(() => {
// 			d.close();
// 		}),
// 	);
// }
// document.addEventListener('click', (e) => {
// 	const button = e.target.closest("[data-dialog][class*='DialogBtn']");
// 	if (!button) return;
// 	console.log(button);
// 	const buttonID = button.dataset.dialog;
// 	const experience = button.dataset.experience;
// 	let currentDialog = document.querySelector(`dialog[data-dialog="${buttonID}"]`);
// 	console.log(currentDialog);
// 	if (experience) {
// 		currentDialog = document.querySelector(`dialog[data-dialog="${buttonID}"][data-experience="${experience}"]`);
// 	}
// 	if (!currentDialog) return;
// 	if (button.classList.contains('openDialogBtn')) {
// 		e.preventDefault();
// 		e.stopPropagation();
// 		document.body.classList.add('modal-open');
// 		withViewTransition(() => {
// 			currentDialog.showModal();
// 		});
// 		currentDialog.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
// 		currentDialog.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });
// 		currentDialog.addEventListener('pointerdown', (e) => e.stopPropagation(), { passive: true });
// 		currentDialog.addEventListener('pointermove', (e) => e.stopPropagation(), { passive: true });
// 	} else if (button.classList.contains('closeDialogBtn')) {
// 		document.body.classList.remove('modal-open');
// 		withViewTransition(() => {
// 			currentDialog.close();
// 		});
// 	}
// 	const dialog = e.target.closest('dialog');
// 	if (dialog && e.target === dialog) {
// 		withViewTransition(() => {
// 			dialog.close();
// 		});
// 		document.body.classList.remove('modal-open');
// 		return;
// 	}
// 	if (e.target.closest('.tablerequest')) {
// 		closeAllDialogs();
// 	}
// });
// document.addEventListener('keydown', (e) => {
// 	if (e.key === 'Escape') {
// 		closeAllDialogs();
// 	}
// });

/* 
	SNAMI: ACCORDION COMPONENT
*/

$("[data-component='accordion']").each(function () {
  var $accordion = $(this);
  $accordion.find('[data-accordion-header]').on('click', function (e) {
    var $item = $(this).closest('[data-accordion-item]');
    var $cross = $item.find('.arrow');
    var $inner = $item.find('[data-accordion-inner]');
    var $header = $(this);

    if ($inner.is(':hidden')) {
      $inner.slideDown('slow');
      $cross.addClass('rotate');
      $header.addClass('active');
    } else {
      $inner.slideUp('slow');
      $cross.removeClass('rotate');
      $header.removeClass('active');
    }
  });
});

function initCursorTracking(wrapperSelector, hoverItemSelector) {
  var imageCursorPreview = $('.image-cursor-preview');
  var followingImages = $('.following-image');
  $(wrapperSelector).mousemove(function (e) {
    var relX = e.pageX;
    var relY = e.pageY;
    imageCursorPreview.css({
      left: relX,
      top: relY
    }).addClass('active');
  });
  $(hoverItemSelector).hover(function () {
    var index = $(this).data('index');
    followingImages.removeClass('active');
    followingImages.filter("[data-index='" + index + "']").addClass('active');
  }, function () {
    followingImages.removeClass('active');
  });
  $(wrapperSelector).mouseleave(function () {
    imageCursorPreview.removeClass('active');
    followingImages.removeClass('active');
  });
} // if (window.innerWidth > 768) {


initCursorTracking('.list-wrapper', '.highlight-list_item'); // }
// ------------------------------
// new Swiper('.grid-swiper-resorts', {
// 	centeredSlides: false,
// 	loop: false,
// 	speed: 1500,
// 	slidesPerView: 3,
// 	spaceBetween: 120,
// 	autoplay: {
// 		delay: 5000,
// 		disableOnInteraction: false,
// 		pauseOnMouseEnter: true,
// 		waitForTransition: true,
// 	},
// 	breakpoints: {
// 		0: {
// 			slidesPerView: 1.1,
// 			spaceBetween: 15,
// 		},
// 		768: {
// 			slidesPerView: 1.5,
// 			spaceBetween: 20,
// 		},
// 		1024: {
// 			slidesPerView: 2.2,
// 			spaceBetween: 30,
// 		},
// 		1250: {
// 			slidesPerView: 3,
// 			spaceBetween: 40,
// 		},
// 		1440: {
// 			slidesPerView: 3,
// 			spaceBetween: 80,
// 		},
// 	},
// });
// new Swiper('.travel_swipe', {
// 	loop: true,
// 	grabCursor: true,
// 	slidesPerView: 1,
// 	centeredSlides: false,
// 	allowTouchMove: true,
// 	speed: 1500,
// 	autoplay: {
// 		delay: 5000,
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// });
// new Swiper('.accommodation_swipe', {
// 	loop: true,
// 	grabCursor: true,
// 	slidesPerView: 1,
// 	speed: 1000,
// 	centeredSlides: false,
// 	speed: 1000,
// 	spaceBetween: 20,
// 	navigation: {
// 		nextEl: document.querySelector('.swiper-button-next.acc-nav'),
// 		prevEl: document.querySelector('.swiper-button-prev.acc-nav'),
// 	},
// });
// new Swiper('.experiences_home_swipe', {
// 	loop: true,
// 	grabCursor: true,
// 	slidesPerView: 1,
// 	speed: 1000,
// 	centeredSlides: false,
// 	speed: 1000,
// 	navigation: {
// 		nextEl: document.querySelector('.swiper-button-next.tour-nav'),
// 		prevEl: document.querySelector('.swiper-button-prev.tour-nav'),
// 	},
// 	pagination: {
// 		el: '.pagination',
// 		type: 'custom',
// 		renderCustom: function (swiper, current, total) {
// 			const progressPercentage = (current / total) * 100;
// 			return `
//            <div class="pagination-wrapper">
//              <div class="spans-wrapper">
//                <span class="current">${('0' + current).slice(-2)}</span>
//                 /
//                <span class="total">${('0' + total).slice(-2)}</span>
//              </div>
//              <div class="progressbar-background">
//                <div class="progressbar-fill" style="width: ${progressPercentage}%;"></div>
//              </div>
//            </div>`;
// 		},
// 	},
// });

new Swiper('.other-stories-swiper', (_Swiper = {
  loop: true,
  grabCursor: true,
  slidesPerView: 2,
  speed: 1000,
  centeredSlides: false
}, _defineProperty(_Swiper, "speed", 2000), _defineProperty(_Swiper, "spaceBetween", 100), _defineProperty(_Swiper, "autoplay", {
  disableOnInteraction: false,
  delay: 4000
}), _defineProperty(_Swiper, "navigation", {
  nextEl: '.stories-button-next',
  prevEl: '.stories-button-prev'
}), _defineProperty(_Swiper, "breakpoints", {
  0: {
    slidesPerView: 1
  },
  768: {
    slidesPerView: 2
  }
}), _Swiper));
new Swiper('.instagram-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  freeMode: true,
  allowTouchMove: true,
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  loop: true,
  speed: 18000,
  direction: 'horizontal',
  grabCursor: true,
  breakpoints: {
    0: {
      spaceBetween: 20,
      speed: 14000
    },
    768: {
      spaceBetween: 40,
      speed: 18000
    }
  }
}); // select all a tags with class has-children inside #featured-stories .filters. When clicked, prevent default, and add toggle class active to their sibling ul element

document.querySelectorAll('.category-filters a.has-children').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    var siblingUl = el.nextElementSibling;
    siblingUl.classList.toggle('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var buttonsComponent = document.querySelector('#global-share.share-icon-wrapper');
  if (!buttonsComponent) return;
  buttonsComponent.style.visibility = 'hidden';
  var childElement = buttonsComponent.querySelector('.addtoany_list');

  if (childElement) {
    childElement.classList.add('share__buttons');
    var links = childElement.querySelectorAll('a');
    links.forEach(function (element, index) {
      var div = document.createElement('div');
      div.classList.add('share__button');
      element.classList.add('share__link');
      var transitionTime = ((index + 1) * 0.05).toFixed(2);
      div.setAttribute('style', "--trans: ".concat(transitionTime, "s; --i: ").concat(index + 1));
      div.appendChild(element);
      childElement.appendChild(div);
    });
  }

  buttonsComponent.style.visibility = 'visible';
  var buttonsToggle = buttonsComponent.querySelector('.share__toggle');
  if (!buttonsToggle) return;
  buttonsToggle.addEventListener('click', function (e) {
    e.preventDefault();
    buttonsToggle.classList.toggle('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var excursionsSwiper = document.querySelectorAll('.excursions-swiper');
  if (excursionsSwiper.length === 0) return;
  var categorySection = document.querySelector('.tours-experiences-filters');
  var contentItems = document.querySelectorAll('#tours_experiences_page_about .content');
  var categoryList = document.querySelector('.tours-experiences-filters .category-list');
  var categoryListWrapper = document.querySelector('.tours-experiences-filters');
  var select = document.getElementById('choose-category');
  var allButton = categoryList === null || categoryList === void 0 ? void 0 : categoryList.querySelector('.category-list__item.all');
  var allContent = document.querySelector('.content.all-content');
  var activeSubfilter = null;
  var filterButton = document.querySelector('.tours-experiences-filter-button');
  var closeFilterButton = document.querySelector('.close-tours-experiences-filters');
  var applyFilterButton = document.querySelector('#apply_filters');
  var swiperInstances = [];

  function updateCenteredSlides(swiper) {
    var wrapper = swiper.el.querySelector('.swiper-wrapper');
    if (!wrapper) return;

    var visibleSlides = _toConsumableArray(swiper.slides).filter(function (slide) {
      return slide.style.display !== 'none';
    }).length;

    var slidesPerView = swiper.params.slidesPerView;

    if (typeof slidesPerView === 'function') {
      slidesPerView = slidesPerView();
    } // Handle breakpoints


    if (swiper.currentBreakpoint && swiper.originalParams.breakpoints) {
      var bpVal = swiper.originalParams.breakpoints[swiper.currentBreakpoint];

      if (bpVal && bpVal.slidesPerView !== undefined) {
        slidesPerView = bpVal.slidesPerView;
      }
    }

    if (visibleSlides < slidesPerView) {
      wrapper.classList.add('centered-slides');
    } else {
      wrapper.classList.remove('centered-slides');
    }
  }

  function initializeSwipers() {
    excursionsSwiper.forEach(function (excursion, index) {
      var swiperParent = excursion.closest('section');
      var excursionType = swiperParent ? swiperParent.getAttribute('data-post') : '';
      var uniqueClass = "excursions-".concat(excursionType, "-swiper-").concat(index);
      excursion.classList.add(uniqueClass); // const lessSlides =
      // excursion.querySelectorAll(".swiper-slide").forEach(slide => (slide.style.maxWidth = "460px"));
      // excursion.querySelectorAll(".swiper-wrapper").forEach(wrapper => (wrapper.style.justifyContent = "center"));

      if (!swiperInstances[index]) {
        var newSwiper = new Swiper(".".concat(uniqueClass), {
          loop: false,
          spaceBetween: 100,
          slidesPerView: 3,
          speed: 1500,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true
          },
          breakpoints: {
            0: {
              slidesPerView: 1.1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 2.4,
              spaceBetween: 40
            },
            1240: {
              slidesPerView: 2.5,
              spaceBetween: 40
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 60
            },
            1680: {
              slidesPerView: 3.5,
              spaceBetween: 100
            }
          },
          on: {
            init: function init() {
              var swiper = this;
              var swiperContainer = swiper.el;
              swiperContainer.addEventListener('mouseenter', function () {
                swiper.params.speed = 400;
              });
              swiperContainer.addEventListener('mouseleave', function () {
                swiper.params.speed = 1500;
              });
            }
          }
        });
        swiperInstances[index] = newSwiper;
        updateCenteredSlides(newSwiper);
      }
    });
  }

  function checkAndHideSwipers() {
    document.querySelectorAll('.excursions-swiper').forEach(function (swiperContainer) {
      var slides = swiperContainer.querySelectorAll('.swiper-slide');

      var allHidden = _toConsumableArray(slides).every(function (slide) {
        return slide.style.display === 'none';
      });

      var parentSection = swiperContainer.closest('section');

      if (parentSection) {
        parentSection.style.display = allHidden ? 'none' : 'block';
      }
    });
    ScrollTrigger.refresh();
  }

  function resetAllSlides() {
    swiperInstances.forEach(function (swiper) {
      if (swiper !== null && swiper !== void 0 && swiper.slides) {
        // Show all slides again
        swiper.slides.forEach(function (slide) {
          return slide.style.display = '';
        });
        swiper.update();
        swiper.slideTo(0, 0, false);
        updateCenteredSlides(swiper);
      }
    }); // Force-show all parent sections of swipers

    document.querySelectorAll('.excursions-swiper').forEach(function (swiperContainer) {
      var parentSection = swiperContainer.closest('section');

      if (parentSection) {
        parentSection.style.display = 'block'; // parentSection.removeAttribute("data-color"); // optional, clears hidden state
      }
    }); // Re-run the hide check so only truly empty ones remain hidden

    checkAndHideSwipers();
  }

  initializeSwipers();
  ScrollTrigger.refresh();

  if (categorySection) {
    var toggleFilterDialog = function toggleFilterDialog(open) {
      if (!categoryListWrapper) return;

      if (open) {
        categoryListWrapper.classList.add('active');
      } else {
        categoryListWrapper.classList.remove('active');
      }
    };

    var pageScrollUp = function pageScrollUp() {
      if (window.scrollY > 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    if (filterButton) {
      filterButton.addEventListener('click', function () {
        if (window.innerWidth < 1366) {
          categoryListWrapper.classList.toggle('active');
        }
      });
    }

    if (closeFilterButton) {
      closeFilterButton.addEventListener('click', function () {
        toggleFilterDialog(false);
      });
    }

    if (applyFilterButton && window.innerWidth < 1366) {
      applyFilterButton.addEventListener('click', function () {
        toggleFilterDialog(false);
        setTimeout(function () {
          pageScrollUp();
        }, 200);
      });
    }

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.tours-experiences-filters') && !e.target.closest('.tours-experiences-filter-button')) {
        toggleFilterDialog(false);
      }
    });
    var footer = document.querySelector('footer');
    window.addEventListener('scroll', function () {
      var footerInView = (footer === null || footer === void 0 ? void 0 : footer.getBoundingClientRect().top) < window.innerHeight;

      if (footerInView) {
        filterButton === null || filterButton === void 0 || filterButton.classList.add('hidden-footer');
      } else {
        filterButton === null || filterButton === void 0 || filterButton.classList.remove('hidden-footer');
      }

      if (window.scrollY === 0) {
        filterButton === null || filterButton === void 0 || filterButton.classList.remove('scrolled');
      } else {
        filterButton === null || filterButton === void 0 || filterButton.classList.add('scrolled');
      }

      if (categorySection) {
        if (window.scrollY < 200 || footerInView) {
          categorySection.classList.remove('scrolled');
        } else {
          categorySection.classList.add('scrolled');
        }
      }
    });

    if (select) {
      var resetDestinationTexts = function resetDestinationTexts() {
        var _select$options$selec;

        // If no destination selected yet, do nothing
        if (select.selectedIndex === 0) return;
        var selectedIndex = (_select$options$selec = select.options[select.selectedIndex]) === null || _select$options$selec === void 0 ? void 0 : _select$options$selec.dataset.index;
        if (!selectedIndex) return; // Find currently active category item

        var activeItem = categoryList.querySelector('.category-list__item.active');
        if (!activeItem) return; // Find matching general-text item for this destination

        var generalTextItem = categoryList.querySelector(".category-list__item.general-text[data-index=\"".concat(selectedIndex, "\"]"));
        if (!generalTextItem || activeItem === generalTextItem) return; // Swap active class (UI only)

        activeItem.classList.remove('active');
        generalTextItem.classList.add('active'); // Swap visible content (UI only)

        contentItems.forEach(function (content) {
          var isActive = content.dataset.index === selectedIndex && content.dataset.item === generalTextItem.dataset.item;
          content.classList.toggle('active', isActive);
          content.style.opacity = isActive ? '1' : '0';
          content.style.pointerEvents = isActive ? 'auto' : 'none';
        }); // Reset subfilter state

        activeSubfilter = null;
      };

      select.addEventListener('change', function () {
        var _this$options$this$se;

        var selectedIndex = (_this$options$this$se = this.options[this.selectedIndex]) === null || _this$options$this$se === void 0 ? void 0 : _this$options$this$se.dataset.index;

        if (!selectedIndex || selectedIndex === '') {
          // RESET: no destination selected
          resetAllSlides();
          categoryList === null || categoryList === void 0 || categoryList.querySelectorAll('.category-list__item').forEach(function (item) {
            if (!item.classList.contains('all')) {
              item.style.display = 'none';
            }
          });
          allButton.querySelector('button').textContent = 'ALL';
          activeSubfilter = null;
          contentItems.forEach(function (content) {
            return content.classList.remove('active');
          });
          if (allContent) allContent.classList.add('active');
          history.replaceState(null, '', window.location.pathname);

          if (window.innerWidth < 1024) {
            toggleFilterDialog(true);
          }

          return;
        } // Destination selected → show/reset categories


        allButton.querySelector('button').textContent = 'RESET ALL';
        categoryList.querySelectorAll('.category-list__item').forEach(function (item) {
          item.style.display = item.classList.contains('all') || item.dataset.index === selectedIndex ? 'block' : 'none';
        });
        var handled = false; // 1. If there's an active subfilter, try to reapply it under the new destination
        // if (activeSubfilter) {
        // 	const matchItem = [...categoryList.querySelectorAll(".category-list__item")].find(
        // 		item =>
        // 			item.dataset.index === selectedIndex &&
        // 			item.textContent.trim().toUpperCase() === activeSubfilter.toUpperCase()
        // 	);
        // 	if (matchItem) {
        // 		matchItem.click();
        // 		handled = true;
        // 	} else {
        // 		console.log(activeSubfilter);
        // 		// → fallback to allContent and clear active
        // 		contentItems.forEach(content => {
        // 			if (content.classList.contains("active")) {
        // 				content.classList.remove("active");
        // 				content.style.opacity = "0";
        // 				content.style.pointerEvents = "none";
        // 			}
        // 		});
        // 		allContent.classList.add("active");
        // 		allContent.style.opacity = "1";
        // 		allContent.style.pointerEvents = "auto";
        // 		activeSubfilter = null; // reset state
        // 	}
        // 	checkAndHideSwipers();
        // }
        // When select changes, always reset to "general text" filter

        var generalTextItem = categoryList.querySelector(".category-list__item.general-text[data-index=\"".concat(selectedIndex, "\"]"));

        if (generalTextItem) {
          generalTextItem.click();
        } else {
          // fallback → show allContent
          contentItems.forEach(function (content) {
            if (content.classList.contains('active')) {
              content.classList.remove('active');
              content.style.opacity = '0';
              content.style.pointerEvents = 'none';
            }
          });
          allContent.classList.add('active');
          allContent.style.opacity = '1';
          allContent.style.pointerEvents = 'auto';
        } // 2. If no active subfilter:


        if (!handled) {
          var _generalTextItem = categoryList.querySelector(".category-list__item.general-text[data-index=\"".concat(selectedIndex, "\"]"));

          if (_generalTextItem) {
            _generalTextItem.click();
          } else {
            // fallback → show allContent
            contentItems.forEach(function (content) {
              return content.classList.remove('active');
            });
            if (allContent) allContent.classList.add('active');
          }
        } // Update hash for history


        var selectedValue = this.value.toLowerCase();
        history.replaceState(null, '', "#".concat(selectedValue)); // Filter slides

        swiperInstances.forEach(function (swiper) {
          if (swiper.slides) {
            var currentIndex = swiper.activeIndex;
            swiper.slides.forEach(function (slide) {
              var destinations = slide.dataset.destination.split(',').map(function (s) {
                return s.trim();
              });
              var matchDestination = destinations.includes(selectedIndex);
              slide.style.display = matchDestination ? '' : 'none';
            });
            swiper.update();
            swiper.slideTo(currentIndex, 0, false);
            updateCenteredSlides(swiper);
          }
        });
        checkAndHideSwipers();
        ScrollTrigger.refresh();

        if (window.innerWidth < 1366) {
          toggleFilterDialog(true);
        }
      });
      select.addEventListener('mousedown', resetDestinationTexts);
      select.addEventListener('focus', resetDestinationTexts);
    }

    if (categoryList) {
      categoryList.addEventListener('click', function (event) {
        var item = event.target.closest('.category-list__item');
        if (!item) return;
        var isAll = item.classList.contains('all');
        var itemIndex = item.dataset.item;
        var itemDataIndex = item.dataset.index;
        var itemText = item.textContent.trim();

        if (isAll) {
          allButton.querySelector('button').textContent = 'ALL';
          select.selectedIndex = 0;
          select.dispatchEvent(new Event('change', {
            bubbles: true
          }));
          activeSubfilter = null;
          contentItems.forEach(function (content) {
            var isActive = content.dataset.item === '0';
            content.style.opacity = isActive ? '1' : '0';
            content.style.pointerEvents = isActive ? 'auto' : 'none';
            content.classList.toggle('active', isActive);
          }); // if (window.innerWidth < 1366) {
          // 	toggleFilterDialog(false);
          // }

          return;
        }

        activeSubfilter = itemText;
        contentItems.forEach(function (content) {
          var isActive = content.dataset.item === itemIndex && content.dataset.index === itemDataIndex;
          content.style.opacity = isActive ? '1' : '0';
          content.style.pointerEvents = isActive ? 'auto' : 'none';
          content.classList.toggle('active', isActive);
        });
        categoryList.querySelectorAll('.category-list__item').forEach(function (catItem) {
          return catItem.classList.remove('active');
        });
        item.classList.add('active');
        var selectedDestination = select.options[select.selectedIndex].dataset.index;
        var selectedValue = select.value.toLowerCase();
        var subfilterHash = itemText.toLowerCase();

        if (subfilterHash) {
          history.replaceState(null, '', "#".concat(selectedValue, "#").concat(subfilterHash));
        } else {
          history.replaceState(null, '', "#".concat(selectedValue));
        }

        swiperInstances.forEach(function (swiper) {
          if (swiper.slides) {
            var currentIndex = swiper.activeIndex;
            swiper.slides.forEach(function (slide) {
              var destinations = slide.dataset.destination.split(',').map(function (s) {
                return s.trim();
              });
              var matchDestination = destinations.includes(selectedDestination);
              var slideSubfilters = slide.dataset.subfilter ? slide.dataset.subfilter.split(',').map(function (s) {
                return s.trim();
              }) : [];
              var matchSubfilter = slideSubfilters.includes(itemText);
              slide.style.display = matchDestination && matchSubfilter ? '' : 'none';
            });
            swiper.update();
            swiper.slideTo(currentIndex, 0, false);
            updateCenteredSlides(swiper);
          }
        });
        checkAndHideSwipers(); // if (window.innerWidth < 1366) {
        // 	toggleFilterDialog(false);
        // }
      });
    }

    if ($('.page-template-tmpl_tours-experiences').length) {
      var handleHashFiltering = function handleHashFiltering() {
        var hash = decodeURIComponent(location.hash).substring(1);
        if (!hash) return;
        var parts = hash.split('#').map(function (p) {
          return p.trim();
        });
        if (parts.length === 0) return;

        var _parts = _slicedToArray(parts, 2),
            destination = _parts[0],
            subfilter = _parts[1];

        if (select) {
          var matchOption = _toConsumableArray(select.options).find(function (opt) {
            return opt.value.toLowerCase() === destination.toLowerCase();
          });

          if (matchOption) {
            select.selectedIndex = matchOption.index;
            select.dispatchEvent(new Event('change', {
              bubbles: true
            }));
          }
        }

        if (subfilter) {
          setTimeout(function () {
            var visibleCategoryItems = _toConsumableArray(categoryList.querySelectorAll('.category-list__item')).filter(function (item) {
              return getComputedStyle(item).display !== 'none';
            });

            var matchItem = visibleCategoryItems.find(function (item) {
              return item.textContent.trim().toLowerCase() === subfilter.toLowerCase();
            });

            if (matchItem) {
              matchItem.click();
            }
          }, 100);
        }
      };

      handleHashFiltering();
    }

    if (window.innerWidth < 1366) {
      categoryListWrapper.classList.add('hidden');
      setTimeout(function () {
        categoryListWrapper.classList.remove('hidden');
      }, 100);
    }
  }

  if (categoryList) {
    var isScrolling = false;
    var targetScroll = 0;
    var currentScroll = 0;

    var smoothScroll = function smoothScroll() {
      var distance = targetScroll - currentScroll;

      if (Math.abs(distance) < 1) {
        isScrolling = false;
        return;
      }

      currentScroll += distance * 0.2; // easing factor

      categoryList.scrollLeft = currentScroll;
      requestAnimationFrame(smoothScroll);
    };

    categoryList.addEventListener('wheel', function (event) {
      if (event.deltaY !== 0) {
        event.preventDefault(); // Cancel current animation if already scrolling

        if (!isScrolling) {
          currentScroll = categoryList.scrollLeft;
        }

        targetScroll += event.deltaY;
        isScrolling = true;
        smoothScroll();
      }
    });
  }
}); // document.addEventListener("DOMContentLoaded", function () {
// 	if (document.querySelector(".page-template-tmpl_transportation")) {
// 		document.querySelectorAll(".info-btn").forEach(btn => {
// 			btn.addEventListener("click", () => {
// 				const targetSelector = btn.getAttribute("data-target");
// 				const popup = document.querySelector(targetSelector);
// 				const popupMessage = popup.querySelector("#popup-message");
// 				popupMessage.innerHTML = btn.getAttribute("data-popup");
// 				popup.style.display = "block";
// 				const closeBtn = popup.querySelector(".popup-close");
// 				closeBtn.addEventListener("click", () => {
// 					popup.style.display = "none";
// 				});
// 				window.addEventListener("click", function outsideClick(e) {
// 					if (e.target === popup) {
// 						popup.style.display = "none";
// 						window.removeEventListener("click", outsideClick);
// 					}
// 				});
// 			});
// 		});
// 	}
// });
// const section = document.querySelector("#tours_experiences_page_about");
// if (!section) return;
// const contentItems = section.querySelectorAll(".content");
// const categoryList = section.querySelector(".category-list");
// const select = document.getElementById("choose-category");
// // function checkAndHideSwipers() {
// // 	document.querySelectorAll(".excursions-swiper").forEach(swiperContainer => {
// // 		const slides = swiperContainer.querySelectorAll(".swiper-slide");
// // 		const allHidden = [...slides].every(slide => slide.style.display === "none");
// // 		const parentSection = swiperContainer.closest("section");
// // 		parentSection.style.display = allHidden ? "none" : "block";
// // 	});
// // }
// if (select) {
// 	select.addEventListener("change", function () {
// 		const selectedIndex = this.options[this.selectedIndex]?.dataset.index;
// 		if (selectedIndex !== undefined) {
// 			// Update category visibility
// 			section.querySelectorAll(".category-list__item").forEach(item => {
// 				item.style.display =
// 					item.classList.contains("all") || item.dataset.index === selectedIndex ? "block" : "none";
// 			});
// 			// Filter Swiper slides based on selection
// 			// document.querySelectorAll(".excursions-swiper .swiper-slide").forEach(element => {
// 			// 	element.style.display = element.dataset.destination === selectedIndex ? "" : "none";
// 			// });
// 			// checkAndHideSwipers();
// 			// Update Swiper instances
// 			// document.querySelectorAll(".excursions-swiper").forEach(swiperContainer => {
// 			// 	if (swiperContainer.swiper) {
// 			// 		swiperContainer.swiper.update();
// 			// 	}
// 			// });
// 		}
// 	});
// }
// if (categoryList) {
// 	categoryList.addEventListener("click", function (event) {
// 		const item = event.target.closest(".category-list__item");
// 		if (!item) return;
// 		const itemIndex = item.dataset.item;
// 		const itemDataIndex = item.dataset.index;
// 		contentItems.forEach(content => {
// 			const isActive =
// 				(item.classList.contains("all") && content.dataset.item === "0") ||
// 				(content.dataset.item === itemIndex && content.dataset.index === itemDataIndex);
// 			content.style.opacity = isActive ? "1" : "0";
// 			content.classList.toggle("active", isActive);
// 		});
// 		categoryList.querySelectorAll(".category-list__item").forEach(catItem => catItem.classList.remove("active"));
// 		item.classList.add("active");
// 	});
// }

if (document.querySelector('.experience_details_swipe')) {
  // Fade-in Animation Function
  var fadeInSlide = function fadeInSlide(index) {
    gsap.fromTo(swiper.slides[index], {
      autoAlpha: 0,
      opacity: 0,
      y: 50
    }, // Start invisible and slightly below
    {
      autoAlpha: 1,
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: 'power2.out'
    });
  }; // ScrollTrigger for slide changes


  gsap.registerPlugin(ScrollTrigger);
  var swiper = new Swiper('.experience_details_swipe', {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    allowTouchMove: false,
    // Prevent manual swiping, only scroll-controlled
    speed: 500,
    // Instant slide change
    pagination: {
      el: '.swiper-pagination' // clickable: true,

    }
  });
  var totalSlides = swiper.slides.length;
  ScrollTrigger.create({
    trigger: '.experience_details_swipe',
    start: window.innerWidth > 768 ? 'center 50%' : 'center 40%',
    // end: `+=${totalSlides * window.innerHeight}`,
    // end: () => `+=${totalSlides * window.innerHeight + 200}`,
    end: function end() {
      return "+=".concat(totalSlides * 300);
    },
    pin: true,
    scrub: 1,
    // Instant snap
    snap: {
      snapTo: 1 / (totalSlides - 1),
      delay: 0
    },
    onUpdate: function onUpdate(self) {
      var progressIndex = Math.round(self.progress * (totalSlides - 1));

      if (swiper.activeIndex !== progressIndex) {
        swiper.slideTo(progressIndex); // Jump to the correct slide

        fadeInSlide(progressIndex); // Apply fade-in effect
      }
    }
  }); // Handle overflow-y scroll within slides

  swiper.slides.forEach(function (slide) {
    var innerDiv = slide.querySelector('.content.flow');

    if (innerDiv) {
      innerDiv.style.overflowY = 'auto'; // Make it scrollable

      innerDiv.style.maxHeight = '80vh'; // Limit height for better usability
      // innerDiv.style.paddingRight = "10px"; // Avoid scrollbar cut-off
    }
  });
} // Mobile Details section
// document.addEventListener('DOMContentLoaded', function () {
// 	if (window.innerWidth > 992) {
// 		return;
// 	}
// 	const mobileDetailsSwiper = new Swiper('.experience_details_swipe_mobile', {
// 		slidesPerView: 1,
// 		spaceBetween: 40,
// 		loop: true,
// 		autoplay: {
// 			delay: 5000,
// 		},
// 		pagination: {
// 			el: '.mobile-details-pagination',
// 			type: 'custom',
// 			renderCustom: function (swiper, current, total) {
// 				const real = swiper.realIndex + 1; // 1-based like your old current
// 				const progressPercentage = (real / total) * 100;
// 				return `
// 					<div class="pagination-wrapper">
// 						<div class="spans-wrapper">
// 							<span class="current">${('0' + real).slice(-2)}</span>
// 								/
// 							<span class="total">${('0' + total).slice(-2)}</span>
// 						</div>
// 						<div class="progressbar-background">
// 							<div class="progressbar-fill" style="width: ${progressPercentage}%;"></div>
// 						</div>
// 					</div>
// 				`;
// 			},
// 		},
// 		navigation: {
// 			nextEl: '.mobile-details-navigation .swiper-button-next',
// 			prevEl: '.mobile-details-navigation .swiper-button-prev',
// 		},
// 	});
// });
// hotels/villas form guests handling


document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.accommodation-featured-form-wrapper') === null) return; // document.querySelector(".featured-form-btn").addEventListener("click", function (e) {
  // 	e.preventDefault();
  // 	const href = e.target.getAttribute("href");
  // 	if (href) {
  // 		gsap.to(window, { scrollTo: href });
  // 	}
  // });

  var guestsWrapper = document.querySelector('.guests-wrapper');
  if (guestsWrapper === null) return;
  var guestsInput = guestsWrapper.querySelector('.guests-input');
  var popup = guestsWrapper.querySelector('.guests-popup');
  if (popup === null) return;
  var adultsSelect = popup.querySelector('#adults');
  var childrenSelect = popup.querySelector('#children');
  var infantsSelect = popup.querySelector('#infants'); // Set initial values

  adultsSelect.value = '1';
  childrenSelect.value = '0';
  infantsSelect.value = '0';
  guestsInput.value = '1 adult';

  function updateGuestsInput() {
    var adults = parseInt(adultsSelect.value, 10);
    var children = parseInt(childrenSelect.value, 10);
    var infants = parseInt(infantsSelect.value, 10);
    var parts = [];
    if (adults > 0) parts.push("".concat(adults, " adult").concat(adults > 1 ? 's' : ''));
    if (children > 0) parts.push("".concat(children, " child").concat(children > 1 ? 'ren' : ''));
    if (infants > 0) parts.push("".concat(infants, " infant").concat(infants > 1 ? 's' : ''));
    guestsInput.value = parts.join(', ');
  } // Toggle popup on input click


  guestsInput.addEventListener('click', function (e) {
    e.stopPropagation(); // prevent doc listener from firing

    guestsWrapper.classList.toggle('active');
  }); // Prevent closing when clicking inside the popup

  popup.addEventListener('click', function (e) {
    e.stopPropagation();
  }); // Close popup when clicking anywhere else

  document.addEventListener('click', function () {
    guestsWrapper.classList.remove('active');
  }); // Update input on change

  adultsSelect.addEventListener('change', updateGuestsInput);
  childrenSelect.addEventListener('change', updateGuestsInput);
  infantsSelect.addEventListener('change', updateGuestsInput);
});
var formWrapper = document.querySelector('.accommodation-featured-form-wrapper');

if (formWrapper) {
  //populate datalist with resort destinations
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      var destinationLinks = document.querySelectorAll('.destination-list.checklist li label');
      var destinationOptionsList = document.querySelector('.destination-options');
      if (!destinationOptionsList || destinationLinks.length === 0) return;
      var added = new Set();
      destinationOptionsList.innerHTML = '';
      destinationLinks.forEach(function (link) {
        var destinationID = link.querySelector('input').value;
        var text = link.textContent.trim();

        if (text && !added.has(text)) {
          var li = document.createElement('li');
          li.textContent = text;
          li.id = destinationID;
          destinationOptionsList.appendChild(li);
          added.add(text);
        }
      });
    }, 500); // Destination popup behavior

    var destinationWrapper = document.querySelector('.destination-wrapper');
    var destinationInput = destinationWrapper.querySelector('.destination-input');
    var destinationPopup = destinationWrapper.querySelector('.destination-popup');
    var destinationOptionsList = destinationWrapper.querySelector('.destination-options');
    destinationInput.addEventListener('click', function () {
      destinationPopup.classList.toggle('active');
    });
    destinationOptionsList.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
        destinationInput.dataset.postId = e.target.id;
        destinationInput.value = e.target.textContent.trim();
        destinationPopup.classList.remove('active');
      }
    }); // Close popup when clicking outside

    document.addEventListener('click', function (e) {
      if (!destinationWrapper.contains(e.target)) {
        destinationPopup.classList.remove('active');
      }
    });
    var checkinInput = document.querySelector('.accommodation-checkin');
    var checkoutInput = document.querySelector('.accommodation-checkout');
    var isMobile = window.innerWidth < 768;
    var datePickerOptions = {
      dateFormat: 'F j',
      minDate: 'today',
      position: isMobile ? 'below auto' : 'auto',
      disableMobile: true,
      "static": true,
      clickOpens: false
    };
    var checkoutPicker = flatpickr(checkoutInput, _objectSpread({}, datePickerOptions));
    var checkinPicker = flatpickr(checkinInput, _objectSpread(_objectSpread({}, datePickerOptions), {}, {
      onChange: function onChange(selectedDates) {
        if (selectedDates.length === 1) {
          var checkinDate = selectedDates[0];
          var nextDay = new Date(checkinDate);
          nextDay.setDate(checkinDate.getDate() + 1);
          checkoutPicker.set('minDate', nextDay);
          var currentCheckout = checkoutPicker.selectedDates[0];

          if (currentCheckout && currentCheckout <= checkinDate) {
            checkoutPicker.clear();
          }
        }
      }
    }));
    checkinInput.addEventListener('click', function () {
      checkinPicker.open();
    });
    checkoutInput.addEventListener('click', function () {
      checkoutPicker.open();
    }); // Search button logic

    var searchBtn = document.querySelector('.featured-form-btn'); // const formWrapper = document.querySelector(".accommodation-featured-form-wrapper");
    // searchBtn.addEventListener("click", function (e) {
    // 	e.preventDefault();
    // 	const destinationValue = destinationInput.dataset.postId;
    // 	let basePath = window.location.pathname;
    // 	let url = basePath;
    // 	// const baseUrl = formWrapper.dataset.url;
    // 	// if (!destinationValue || !baseUrl) return;
    // 	if (!destinationValue) return;
    // 	const redirectUrl = `${url}?filter_dest=${destinationValue}`;
    // 	// window.history.replaceState(null, "", redirectUrl);
    // 	window.location.href = redirectUrl;
    // 	const href = e.target.getAttribute("data-scroll");
    // 	if (href) {
    // 		gsap.to(window, { scrollTo: href });
    // 	}
    // });

    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var destinationValue = destinationInput.dataset.postId;
      if (!destinationValue) return;
      var href = e.target.getAttribute('data-scroll');

      if (href) {
        sessionStorage.setItem('scrollTarget', href);
      }

      var basePath = window.location.pathname;
      window.location.href = "".concat(basePath, "?filter_dest=").concat(destinationValue);
    });
  }); // document.addEventListener("DOMContentLoaded", () => {

  var scrollTarget = sessionStorage.getItem('scrollTarget');

  if (scrollTarget) {
    sessionStorage.removeItem('scrollTarget');
    gsap.to(window, {
      scrollTo: scrollTarget,
      duration: 1
    });
  } // });

} // const hideElement = (selector) => {
// 	const element = document.querySelector(selector);
// 	if (element) element.style.display = 'none';
// };


var swiperTab = new Swiper('.swiper-service', {
  grabCursor: false,
  spaceBetween: 0,
  centeredSlides: true,
  loop: false,
  speed: 500,
  slidesPerView: 1,
  allowTouchMove: false,
  // waitForTransition: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  on: {
    init: function init(swiper) {
      updateSlideButtons(swiper);
      attachSlideButtons(swiper);
      initSlideTabs === null || initSlideTabs === void 0 || initSlideTabs(swiper);
    },
    slideChange: function slideChange(swiper) {
      updateSlideButtons(swiper);
      initSlideTabs === null || initSlideTabs === void 0 || initSlideTabs(swiper);
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
    type: 'custom',
    renderCustom: function renderCustom(swiper, current, total) {
      var progressPercentage = current / total * 100;
      return "\n        <div class=\"swiper-pagination-nums\">\n\t        <span class=\"swiper-pagination-current\">".concat(('0' + current).slice(-2), "</span> / <span class=\"swiper-pagination-total\">").concat(('0' + total).slice(-2), "</span>\n\t\t\t\t <div class=\"progressbar-background\">\n\t\t\t\t\t<div class=\"progressbar-fill\" style=\"width: ").concat(progressPercentage, "%;\"></div>\n\t\t\t  </div>\n\t\t\t</div>");
    }
  }
}); // helper to bind per-slide buttons

function attachSlideButtons(swiper) {
  swiper.slides.forEach(function (slide) {
    var prevBtn = slide.querySelector('.navigation .service-swiper-button-prev');
    var nextBtn = slide.querySelector('.navigation .service-swiper-button-next');

    if (prevBtn) {
      prevBtn.onclick = function (e) {
        e.preventDefault();
        swiper.slidePrev();
      };
    }

    if (nextBtn) {
      nextBtn.onclick = function (e) {
        e.preventDefault();
        swiper.slideNext();
      };
    }
  });
}

function updateSlideButtons(swiper) {
  swiper.slides.forEach(function (slide) {
    var prevBtn = slide.querySelector('.navigation .service-swiper-button-prev');
    var nextBtn = slide.querySelector('.navigation .service-swiper-button-next');

    if (prevBtn) {
      var disabled = swiper.isBeginning;
      prevBtn.classList.toggle('swiper-button-disabled', disabled);
      prevBtn.setAttribute('aria-disabled', disabled);
      prevBtn.setAttribute('tabindex', disabled ? '-1' : '0');
    }

    if (nextBtn) {
      var _disabled = swiper.isEnd;
      nextBtn.classList.toggle('swiper-button-disabled', _disabled);
      nextBtn.setAttribute('aria-disabled', _disabled);
      nextBtn.setAttribute('tabindex', _disabled ? '-1' : '0');
    }
  });
}

function initSlideTabs(swiperInstance) {
  var activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    return btn.classList.remove('active');
  });
  document.querySelectorAll('.tab-content').forEach(function (cont) {
    return cont.classList.remove('active');
  });
  document.querySelectorAll('.image-wrapper img').forEach(function (img) {
    return img.classList.remove('active');
  });
  var firstContent = activeSlide.querySelector(".tab-content[data-index=\"".concat(swiperInstance.activeIndex, "\"]"));
  if (firstContent) firstContent.classList.add('active');
  activeSlide.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var tabIndex = btn.getAttribute('data-tab-index');
      activeSlide.querySelectorAll('.tab-btn').forEach(function (b) {
        return b.classList.remove('active');
      });
      activeSlide.querySelectorAll('.tab-content').forEach(function (c) {
        return c.classList.remove('active');
      });
      activeSlide.querySelectorAll('.image-wrapper img').forEach(function (i) {
        return i.classList.remove('active');
      });
      btn.classList.add('active');
      var targetContent = activeSlide.querySelector(".tab-content[data-tab-index=\"".concat(tabIndex, "\"]"));
      var targetImage = activeSlide.querySelector(".image-wrapper img[data-tab-index=\"".concat(tabIndex, "\"]"));
      targetContent === null || targetContent === void 0 || targetContent.classList.add('active');
      targetImage === null || targetImage === void 0 || targetImage.classList.add('active');
    }, {
      once: false
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Initialize plus/minus buttons for existing dialogs
  document.querySelectorAll('input[id*="-perHour-hours"]').forEach(function (input) {
    initPlusMinusButtons(input);
  }); // Observer for dynamically opened dialogs

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.attributeName === 'open') {
        var dialog = m.target;

        if (dialog.hasAttribute('open') && !dialog.dataset.initialized) {
          initDialog(dialog);
          dialog.dataset.initialized = 'true'; // Initialize plus/minus buttons for this dialog

          var hoursInput = dialog.querySelector('input[id*="-perHour-hours"]');

          if (hoursInput) {
            initPlusMinusButtons(hoursInput);
          }
        }
      }
    });
  });
  document.querySelectorAll('dialog').forEach(function (dialog) {
    observer.observe(dialog, {
      attributes: true
    });
  });

  function initPlusMinusButtons(input) {
    var minusBtn = input.parentElement.querySelector('.hours-minus');
    var plusBtn = input.parentElement.querySelector('.hours-plus');
    if (!minusBtn || !plusBtn) return; // Skip if already initialized

    if (input.dataset.buttonsInitialized) return;
    input.dataset.buttonsInitialized = 'true';
    var min = parseInt(input.getAttribute('min'));
    var val = parseInt(input.value) || min; // Initial state

    if (val <= min) {
      minusBtn.setAttribute('disabled', '');
    } else {
      minusBtn.removeAttribute('disabled');
    }

    minusBtn.addEventListener('click', function () {
      var min = parseInt(input.getAttribute('min')) || 1;
      var val = parseInt(input.value) || min;

      if (val > min) {
        input.value = val - 1;
      }

      input.dispatchEvent(new Event('input'));

      if (parseInt(input.value) <= min) {
        minusBtn.setAttribute('disabled', '');
      } else {
        minusBtn.removeAttribute('disabled');
      }
    });
    plusBtn.addEventListener('click', function () {
      var val = parseInt(input.value) || 1;
      input.value = val + 1;
      input.dispatchEvent(new Event('input'));

      if (parseInt(input.value) > min) {
        minusBtn.removeAttribute('disabled');
      }
    });
    input.addEventListener('input', function () {
      var min = parseInt(input.getAttribute('min')) || 1;
      var val = parseInt(input.value) || min;

      if (val <= min) {
        minusBtn.setAttribute('disabled', '');
      } else {
        minusBtn.removeAttribute('disabled');
      }
    });
  } // Helper function


  function decodeEntities(str) {
    var txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  }

  function initDialog(dialog) {
    var dataDialog = dialog.getAttribute('data-dialog');
    var perHourEl = document.getElementById("perHour-data-".concat(dataDialog));
    var perRouteEl = document.getElementById("perRoute-data-".concat(dataDialog));

    if (perHourEl) {
      var vehicles = JSON.parse(perHourEl.textContent);
      vehicles = vehicles.map(function (v) {
        return Object.fromEntries(Object.entries(v).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              k = _ref2[0],
              val = _ref2[1];

          return [k, typeof val === 'string' ? decodeEntities(val) : val];
        }));
      });
      initPerHour(dialog, vehicles);
    }

    if (perRouteEl) {
      var routes = JSON.parse(perRouteEl.textContent);
      routes = routes.map(function (r) {
        return Object.fromEntries(Object.entries(r).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              k = _ref4[0],
              val = _ref4[1];

          return [k, typeof val === 'string' ? decodeEntities(val) : val];
        }));
      });
      initPerRoute(dialog, routes);
    }

    function initPerHour(dialog, vehicles) {
      var regionSelect = dialog.querySelector('.regionSelect');
      var pickUpSelect = dialog.querySelector('.pickUpSelect');
      var hoursInput = dialog.querySelector('.hoursInput');
      var results = dialog.querySelector('.results');

      var regions = _toConsumableArray(new Set(vehicles.map(function (v) {
        return v.Region;
      })));

      regionSelect.innerHTML = "<option value=\"\">-- Select Region --</option>";
      pickUpSelect.innerHTML = "<option value=\"\">Select Pick Up</option>";
      regions.forEach(function (region) {
        var opt = document.createElement('option');
        opt.value = region;
        opt.textContent = region.charAt(0).toUpperCase() + region.slice(1).toLowerCase();
        regionSelect.appendChild(opt);
      });

      function renderPickUps() {
        var region = regionSelect.value;
        pickUpSelect.innerHTML = "<option value=\"\">Select Pick Up</option>";
        results.innerHTML = '';
        if (!region) return;

        var picks = _toConsumableArray(new Set(vehicles.filter(function (v) {
          return v.Region === region;
        }).map(function (v) {
          return v['Pick Up'];
        })));

        picks.forEach(function (p) {
          return pickUpSelect.appendChild(new Option(p, p));
        });
        results.innerHTML = '';
      }

      var absoluteMinHour = Math.min.apply(Math, _toConsumableArray(vehicles.map(function (v) {
        return parseInt(v['Min Hour']);
      })));
      hoursInput.setAttribute('min', absoluteMinHour);

      function calculatePrice(basePrice, minHour, plusPerHour, selectedHours) {
        var base = parseFloat(basePrice.replace(/[^\d.]/g, ''));
        var plus = parseFloat(plusPerHour.replace(/[^\d.]/g, ''));
        var min = parseInt(minHour);
        return selectedHours <= min ? base : base + (selectedHours - min) * plus;
      }

      function render() {
        var hours = parseInt(hoursInput.value);

        if (isNaN(hours)) {
          results.innerHTML = '';
          return;
        }

        var region = regionSelect.value;
        var pickUp = pickUpSelect.value;
        results.innerHTML = '';
        if (!region || !pickUp) return;
        var filtered = vehicles.filter(function (v) {
          return v.Region === region && v['Pick Up'] === pickUp;
        });
        filtered.forEach(function (v) {
          var vehicleMinHour = parseInt(v['Min Hour']);
          var extraHours = Math.max(0, hours - vehicleMinHour);
          var total = calculatePrice(v.Price, v['Min Hour'], v['Plus Per Hour'], hours);
          var card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = "\n            <div class=\"row\">\n               <p class=\"label-title\">Vehicle:</p>\n               <p class=\"value\">".concat(v.Vehicle, "</p>\n            </div>\n            <div class=\"row\">\n               <p class=\"label-title\">Seats:</p>\n               <p class=\"value\">").concat(v.Seater, "</p>\n            </div>\n            <div class=\"row\">       \n               <p class=\"label-title\">Base 8h Rate:</p>\n               <p class=\"value\">").concat(v.Price, "EUR (").concat(v['Min Hour'], "h)</p>\n            </div>\n            <div class=\"row\">\n               <p class=\"label-title\">Additional Hour:</p>\n               <p class=\"value\">").concat(v['Plus Per Hour'], "EUR</p>\n            </div>\n            <div class=\"row\">\n               <p class=\"label-title\">Total ").concat(hours, "h:</p>\n               <p class=\"value price\">").concat(total, "EUR").concat(extraHours > 0 ? "<span class=\"extra-hours\">(+".concat(extraHours, "h)</span>") : '', "</p>\n            </div>\n         ");
          results.appendChild(card);
        });
      }

      hoursInput.addEventListener('input', render);
      hoursInput.addEventListener('blur', function () {
        if (!hoursInput.value || parseInt(hoursInput.value) < absoluteMinHour) {
          hoursInput.value = absoluteMinHour;
        }

        render();
      });
      regionSelect.addEventListener('change', function () {
        renderPickUps();
        render();
      });
      pickUpSelect.addEventListener('change', render);
      renderPickUps();
      render();
    }

    function initPerRoute(dialog, routes) {
      var regionSelect = dialog.querySelector('.perRouteForm .regionSelect');
      var pickUpSelect = dialog.querySelector('.pickUpSelect');
      var dropOffSelect = dialog.querySelector('.dropOffSelect');
      var results = dialog.querySelector('.results');

      var regions = _toConsumableArray(new Set(routes.map(function (r) {
        return r.Region;
      })));

      regionSelect.innerHTML = "<option value=\"\">Select Region</option>";
      pickUpSelect.innerHTML = "<option value=\"\">Select Pick Up</option>";
      dropOffSelect.innerHTML = "<option value=\"\">Select Drop Off</option>";
      regions.forEach(function (r) {
        return regionSelect.appendChild(new Option(r, r));
      });

      function renderPickUps() {
        var region = regionSelect.value;
        pickUpSelect.innerHTML = "<option value=\"\">Select Pick Up</option>";
        dropOffSelect.innerHTML = "<option value=\"\">Select Drop Off</option>";
        results.innerHTML = '';
        if (!region) return;

        var picks = _toConsumableArray(new Set(routes.filter(function (r) {
          return r.Region === region;
        }).map(function (r) {
          return r['Pick Up'];
        })));

        picks.forEach(function (p) {
          return pickUpSelect.appendChild(new Option(p, p));
        });
        dropOffSelect.innerHTML = "<option value=\"\">Select Drop Off</option>";
        results.innerHTML = '';
      }

      function renderDropOffs() {
        var region = regionSelect.value;
        var pickUp = pickUpSelect.value;
        dropOffSelect.innerHTML = "<option value=\"\">Select Drop Off</option>";
        results.innerHTML = '';
        if (!region || !pickUp) return;

        var drops = _toConsumableArray(new Set(routes.filter(function (r) {
          return r.Region === region && r['Pick Up'] === pickUp;
        }).map(function (r) {
          return r['Drop Off'];
        })));

        drops.forEach(function (d) {
          return dropOffSelect.appendChild(new Option(d, d));
        });
        results.innerHTML = '';
      }

      function renderResults() {
        var region = regionSelect.value;
        var pickUp = pickUpSelect.value;
        var dropOff = dropOffSelect.value;
        results.innerHTML = '';
        if (!region || !pickUp || !dropOff) return;
        var filtered = routes.filter(function (r) {
          return r.Region === region && r['Pick Up'] === pickUp && r['Drop Off'] === dropOff;
        });
        filtered.forEach(function (r) {
          var card = document.createElement('div');
          card.className = 'card';
          var vehiclePrices = '';
          Object.keys(r).forEach(function (k) {
            if (!['Region', 'Pick Up', 'Drop Off', 'Duration', 'Inclusions'].includes(k)) {
              vehiclePrices += "<p class=\"value\">".concat(k, ": <span class=\"value price\">").concat(r[k], "</span></p>");
            }
          });
          card.innerHTML = "\n               <div class=\"row\">\n                  <p class=\"label-title\">Destination:</p>\n                  <p class=\"value\">".concat(r.Region, "</p>\n               </div>\n               <div class=\"row\">\n                  <p class=\"label-title\">Pick Up:</p>\n                  <p class=\"value\">").concat(r['Pick Up'], "</p>\n               </div>\n               <div class=\"row\">\n                  <p class=\"label-title\">Drop Off:</p>\n                  <p class=\"value\">").concat(r['Drop Off'], "</p>\n               </div>\n               <div class=\"row\">\n                  <p class=\"label-title\">Duration:</p>\n                  <p class=\"value\">").concat(r.Duration, "</p>\n               </div>\n               <div class=\"row\">\n                  <p class=\"label-title\">Inclusions:</p>\n                  <p class=\"value\">").concat(r.Inclusions, "</p>\n               </div>\n               <div class=\"row\">\n                  <p class=\"label-title\">Vehicles / Price:</p>\n                  <div class=\"grid-vehicles\">\n                  ").concat(vehiclePrices, "\n                  </div>\n               </div>\n         ");
          results.appendChild(card);
        });
      }

      regionSelect.addEventListener('change', function () {
        renderPickUps();
        renderResults();
      });
      pickUpSelect.addEventListener('change', function () {
        renderDropOffs();
        renderResults();
      });
      dropOffSelect.addEventListener('change', renderResults);
    }
  }
}); // AgentsSwiper Options
// const agentsSwiperOptions = {
// 	loop: true,
// 	grabCursor: true,
// 	spaceBetween: 40,
// 	speed: 2000,
// 	autoplay: {
// 		delay: 3000,
// 	},
// 	centeredSlides: true,
// 	allowTouchMove: true,
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1.3,
// 			spaceBetween: 15,
// 		},
// 		768: {
// 			slidesPerView: 1.5,
// 			spaceBetween: 20,
// 		},
// 		960: {
// 			slidesPerView: 2,
// 			spaceBetween: 40,
// 		},
// 		1024: {
// 			slidesPerView: 3,
// 			spaceBetween: 40,
// 		},
// 	},
// };
// ReviewsSwiper Options
// const galleryPopSwiperOptions = {
// 	// loop: true,
// 	grabCursor: false,
// 	slidesPerView: 1,
// 	speed: 1000,
// 	centeredSlides: false,
// 	allowTouchMove: true,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// };
// swiperResorts must be first initialize before the swiper-inner-gallery
// const swiperResortsOptions = {
// 	loop: false,
// 	spaceBetween: 40,
// 	grabCursor: true,
// 	slidesPerView: 3,
// 	centeredSlides: false,
// 	speed: 1500,
// 	autoplay: {
// 		delay: 5000,
// 		disableOnInteraction: false,
// 		pauseOnMouseEnter: true,
// 		waitForTransition: true,
// 	},
// 	breakpoints: {
// 		0: {
// 			slidesPerView: 1.1,
// 			spaceBetween: 20,
// 		},
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 30,
// 		},
// 		1024: {
// 			slidesPerView: 2.3,
// 			spaceBetween: 40,
// 		},
// 		1240: {
// 			slidesPerView: 3,
// 			spaceBetween: 40,
// 		},
// 	},
// 	on: {
// 		slideChange: function () {
// 			this.update();
// 		},
// 	},
// };
// const swiperResort = initializeSwiper('.swiper-resorts', swiperResortsOptions);
// document.addEventListener("DOMContentLoaded", () => {
// 	const galleries = document.querySelectorAll(".swiper-inner-gallery");
// 	if (galleries.length === 0) return;
// 	galleries.forEach((gallery, index) => {
// 		// Add a unique class to each gallery swiper
// 		const uniqueClass = `swiper-inner-gallery-${index}`;
// 		gallery.classList.add(uniqueClass);
// 		// Select navigation and pagination elements
// 		const prevButton = gallery.querySelector(".swiper-button-prev-custom");
// 		const nextButton = gallery.querySelector(".swiper-button-next-custom");
// 		const pagination = gallery.querySelector(".swiper-inner-gallery-pagination");
// 		// Add unique class names only if elements exist
// 		if (prevButton) prevButton.classList.add(`button-prev-${index}`);
// 		if (nextButton) nextButton.classList.add(`button-next-${index}`);
// 		if (pagination) pagination.classList.add(`pagination-${index}`);
// 		const swiper = new Swiper(`.${uniqueClass}`, {
// 			effect: "fade",
// 			loop: false,
// 			slidesPerView: 1,
// 			centeredSlides: true,
// 			allowTouchMove: false,
// 			speed: 1500,
// 			autoplay: {
// 				delay: 5000,
// 			},
// 			navigation: {
// 				nextEl: `.button-next-${index}`,
// 				prevEl: `.button-prev-${index}`,
// 			},
// 			pagination: {
// 				el: `.pagination-${index}`,
// 				clickable: false,
// 			},
// 		});
// 	});
// });
// document.addEventListener('DOMContentLoaded', function () {
// 	if (window.innerWidth <= 1024) {
// 		new Swiper('.about_howitworks_swiper', {
// 			slidesPerView: 'auto',
// 			grabCursor: true,
// 			spaceBetween: 12,
// 			breakpoints: {
// 				0: {
// 					spaceBetween: 12,
// 				},
// 				450: {
// 					spaceBetween: 20,
// 				},
// 			},
// 		});
// 	}
// });
// const servicesSwiper = document.querySelector(".servicesSwiper");
// if (servicesSwiper) {
// 	const swiperSection = servicesSwiper.closest("section");
// 	new Swiper(".servicesSwiper", {
// 		spaceBetween: 0,
// 		grabCursor: false,
// 		slidesPerView: 1,
// 		centeredSlides: true,
// 		allowTouchMove: false,
// 		effect: "fade",
// 		navigation: {
// 			nextEl: swiperSection.querySelector(".button-next"),
// 			prevEl: swiperSection.querySelector(".button-prev"),
// 		},
// 		on: {
// 			init: function () {
// 				const activeIndex = this.realIndex;
// 				updateActiveClass(this, activeIndex);
// 			},
// 			slideChange: function () {
// 				const activeIndex = this.realIndex;
// 				updateActiveClass(this, activeIndex);
// 			},
// 		},
// 		pagination: {
// 			el: swiperSection.querySelector(".swiper-pagination"),
// 			type: "custom",
// 			renderCustom: function (swiper, current, total) {
// 				const progressPercentage = (current / total) * 100;
// 				return `
// 			  <div class="pagination-wrapper">
// 				 <div class="spans-wrapper">
// 					<span class="current">${("0" + current).slice(-2)}</span>
// 					 /
// 					<span class="total">${("0" + total).slice(-2)}</span>
// 				 </div>
// 				 <div class="progressbar-background">
// 					<div class="progressbar-fill" style="width: ${progressPercentage}%;"></div>
// 				 </div>
// 			  </div>`;
// 			},
// 		},
// 	});
// }
// new Swiper('.home_accommodation_swiper', {
// 	slidesPerView: 4,
// 	grabCursor: true,
// 	spaceBetween: 12,
// 	breakpoints: {
// 		1024: {
// 			slidesPerView: 4,
// 		},
// 		768: {
// 			slidesPerView: 3,
// 		},
// 		640: {
// 			slidesPerView: 2.5,
// 		},
// 		320: {
// 			slidesPerView: 1.2,
// 		},
// 	},
// });
// document.addEventListener('DOMContentLoaded', () => {
// 	const galleries = document.querySelectorAll('.swiper-inner-gallery');
// 	if (galleries.length === 0) return;
// 	galleries.forEach((gallery, index) => {
// 		const uniqueClass = `swiper-inner-gallery-${index}`;
// 		gallery.classList.add(uniqueClass);
// 		const prevButton = gallery.querySelector('.swiper-button-prev-custom');
// 		const nextButton = gallery.querySelector('.swiper-button-next-custom');
// 		const pagination = gallery.querySelector('.swiper-inner-gallery-pagination');
// 		if (prevButton) prevButton.classList.add(`button-prev-${index}`);
// 		if (nextButton) nextButton.classList.add(`button-next-${index}`);
// 		if (pagination) pagination.classList.add(`pagination-${index}`);
// 		const navigationConfig = {};
// 		if (nextButton) navigationConfig.nextEl = `.button-next-${index}`;
// 		if (prevButton) navigationConfig.prevEl = `.button-prev-${index}`;
// 		const paginationConfig = pagination
// 			? {
// 					el: `.pagination-${index}`,
// 					clickable: false,
// 			  }
// 			: false;
// 		const swiper = new Swiper(`.${uniqueClass}`, {
// 			effect: 'fade',
// 			loop: true,
// 			slidesPerView: 1,
// 			centeredSlides: true,
// 			allowTouchMove: false,
// 			speed: 1500,
// 			autoplay: {
// 				delay: 5000,
// 			},
// 			navigation: Object.keys(navigationConfig).length > 0 ? navigationConfig : false,
// 			pagination: paginationConfig,
// 		});
// 	});
// });
// const portfolioSwiper = new Swiper('.portfolioswiper', {
// 	spaceBetween: 0,
// 	grabCursor: false,
// 	slidesPerView: 1,
// 	loop: true,
// 	centeredSlides: true,
// 	allowTouchMove: false,
// 	effect: 'fade',
// 	autoplay: {
// 		speed: 1500,
// 		delay: 3000,
// 		disableOnInteraction: false,
// 		pauseOnMouseEnter: true,
// 		waitForTransition: true,
// 	},
// 	navigation: {
// 		nextEl: document.querySelector('.button-next'),
// 		prevEl: document.querySelector('.button-prev'),
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 		type: 'custom',
// 		renderCustom: function (swiper, current, total) {
// 			const progressPercentage = (current / total) * 100;
// 			return `
// 			<div class="swiper-pagination-nums">
// 	        <span class="swiper-pagination-current">${('0' + current).slice(
// 				-2,
// 			)}</span> / <span class="swiper-pagination-total">${('0' + total).slice(-2)}</span>
// 				 <div class="progressbar-background">
// 					<div class="progressbar-fill" style="width: ${progressPercentage}%;"></div>
// 			  </div>
// 			</div>`;
// 		},
// 	},
// });
// new Swiper('.about_villa_swiper', {
// 	slidesPerView: 'auto',
// 	grabCursor: true,
// 	spaceBetween: 12,
// });
// new Swiper('.villa_swiper', {
// 	slidesPerView: 4,
// 	grabCursor: true,
// 	spaceBetween: 12,
// 	breakpoints: {
// 		1024: {
// 			slidesPerView: 4,
// 		},
// 		768: {
// 			slidesPerView: 3,
// 		},
// 		640: {
// 			slidesPerView: 2.5,
// 		},
// 		320: {
// 			slidesPerView: 1.2,
// 		},
// 	},
// });
// new Swiper('.villa_amenity_swiper', {
// 	grabCursor: true,
// 	breakpoints: {
// 		1440: {
// 			spaceBetween: 180,
// 		},
// 		1024: {
// 			spaceBetween: 100,
// 			slidesPerView: 1.2,
// 		},
// 		320: {
// 			slidesPerView: 1,
// 		},
// 	},
// });
// const locationBeachesSwiper = new Swiper('.beaches_info_swiper', {
// 	slidesPerView: 1,
// 	grabCursor: true,
// 	spaceBetween: 12,
// });
// if (window.innerWidth < 769) {
// 	const gridRestaurant = new Swiper('.restaurant-swiper', {
// 		slidesPerView: 1,
// 		grabCursor: true,
// 		spaceBetween: 20,
// 		breakpoints: {
// 			0: {
// 				slidesPerView: 1.2,
// 				centeredSlides: true,
// 			},
// 		},
// 	});
// }
// function hideRoomsNumberIfHotel() {
// 	if (window.location.href.indexOf('resort_types_filter-hotel') > -1) {
// 		hideElement('.wpc-filter-group_filtering_rooms_number');
// 	}
// }
// // Run on initial load
// hideRoomsNumberIfHotel();
// // Run on every AJAX complete (jQuery required)
// $(document).ajaxComplete(function () {
// 	hideRoomsNumberIfHotel();
// });
// const runSectionAnimation = el => {
// 	const parentWrapper = el.querySelector(".image-holder");
// 	const centerImage = el.querySelector(".centered-image.second img");
// 	let targets = gsap.utils.toArray([
// 		".image-holder .image-list.first",
// 		".image-holder .image-list.centered-image.second",
// 		".image-holder .image-list.third",
// 		".image-holder .image-list.forth",
// 		".image-holder .image-list.fifth",
// 	]);
// 	const calculateCenterOffset = () => {
// 		const imageRect = centerImage.getBoundingClientRect();
// 		const viewportCenter = {
// 			x: window.innerWidth / 2,
// 			y: window.innerHeight / 2,
// 		};
// 		const imageCenter = {
// 			x: imageRect.left + imageRect.width / 2,
// 			y: imageRect.top + imageRect.height / 2,
// 		};
// 		const offset = {
// 			x: viewportCenter.x - imageCenter.x,
// 			y: viewportCenter.y - imageCenter.y,
// 		};
// 		return offset;
// 	};
// 	let tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: parentWrapper,
// 			pin: el,
// 			start: "center center",
// 			end: "+=1000px",
// 			scrub: 2,
// 			// markers: true,
// 			// pinSpacing: false,
// 			// anticipatePin: 1,
// 			// invalidateOnRefresh: true,
// 			// markers: true,
// 			// onRefresh: () => {
// 			// 	newOffset = calculateCenterOffset();
// 			// },
// 		},
// 	});
// 	const config = [
// 		{
// 			selector: targets[0],
// 			x: "-100vw",
// 			y: "-20vw",
// 		},
// 		{
// 			selector: targets[2],
// 			x: "100vw",
// 			y: "-20vw",
// 		},
// 		{
// 			selector: targets[3],
// 			x: "-100vw",
// 			y: "20vw",
// 		},
// 		{
// 			selector: targets[4],
// 			x: "100vw",
// 			y: "20vw",
// 		},
// 	];
// 	let mm = gsap.matchMedia();
// 	mm.add("(min-width: 800px)", () => {
// 		tl.from(parentWrapper, {
// 			scaleX: 0.5,
// 			scaleY: 0.5,
// 		});
// 	});
// 	mm.add("(max-width: 799px)", () => {
// 		tl.from(parentWrapper, {
// 			scaleX: 0.65,
// 			scaleY: 0.65,
// 		});
// 	});
// 	tl.to(
// 		parentWrapper,
// 		{
// 			x: () => calculateCenterOffset().x,
// 			y: () => calculateCenterOffset().y,
// 		},
// 		"<",
// 	);
// 	config.forEach(item => {
// 		const itemImage = item.selector.querySelector("img");
// 		tl.to(
// 			item.selector,
// 			{
// 				x: item.x,
// 				y: item.y,
// 				opacity: 0.3,
// 				scale: 2,
// 			},
// 			"<",
// 		);
// 	});
// };
// document.addEventListener("DOMContentLoaded", function () {
// 	const privateSection = document.querySelector("#private_transportation_middle-section");
// 	if (privateSection) {
// 		runSectionAnimation(privateSection);
// 	}
// });

/***/ }),

/***/ "./assets/js/src/modules/swiper/swipers.js":
/*!*************************************************!*\
  !*** ./assets/js/src/modules/swiper/swipers.js ***!
  \*************************************************/
/*! exports provided: initSwipers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSwipers", function() { return initSwipers; });
var _excluded = ["selector"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initializedSwipers = new WeakSet();
function initSwipers() {
  var _createSwiper;

  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  if (window.innerWidth < 992) {
    createSwiper('.experience_details_swipe_mobile', {
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 5000
      },
      pagination: {
        el: '.mobile-details-pagination',
        type: 'custom',
        renderCustom: function renderCustom(swiper, current, total) {
          var real = swiper.realIndex + 1; // 1-based like your old current

          var progressPercentage = real / total * 100;
          return "\n                        <div class=\"pagination-wrapper\">\n                            <div class=\"spans-wrapper\">\n                                <span class=\"current\">".concat(('0' + real).slice(-2), "</span>\n                                    /\n                                <span class=\"total\">").concat(('0' + total).slice(-2), "</span>\n                            </div>\n                            <div class=\"progressbar-background\">\n                                <div class=\"progressbar-fill\" style=\"width: ").concat(progressPercentage, "%;\"></div>\n                            </div>\n                        </div>\n\t\t\t\t        ");
        }
      },
      navigation: {
        nextEl: '.mobile-details-navigation .swiper-button-next',
        prevEl: '.mobile-details-navigation .swiper-button-prev'
      }
    }, container);
  } // Portfolio Swiper Concierge page


  createSwiper('.portfolioswiper', {
    effect: 'fade',
    loop: true,
    spaceBetween: 0,
    grabCursor: false,
    slidesPerView: 1,
    centeredSlides: true,
    allowTouchMove: false,
    autoplay: {
      speed: 1500,
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true
    },
    navigation: {
      nextEl: document.querySelector('.button-next'),
      prevEl: document.querySelector('.button-prev')
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'custom',
      renderCustom: function renderCustom(swiper, current, total) {
        var progressPercentage = current / total * 100;
        return "\n                    <div class=\"swiper-pagination-nums\">\n                    <span class=\"swiper-pagination-current\">".concat(('0' + current).slice(-2), "</span> / <span class=\"swiper-pagination-total\">").concat(('0' + total).slice(-2), "</span>\n                        <div class=\"progressbar-background\">\n                            <div class=\"progressbar-fill\" style=\"width: ").concat(progressPercentage, "%;\"></div>\n                    </div>\n                    </div>");
      }
    }
  }, container); // Travel Vibes Repeated Swiper

  createSwiper('.travel_swipe', {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    centeredSlides: false,
    allowTouchMove: true,
    speed: 1500,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }, container); // Homepage experience Swiper

  createSwiper('.experiences_home_swipe', {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    centeredSlides: false,
    speed: 1000,
    navigation: {
      nextEl: document.querySelector('.swiper-button-next.tour-nav'),
      prevEl: document.querySelector('.swiper-button-prev.tour-nav')
    },
    pagination: {
      el: '.pagination',
      type: 'custom',
      renderCustom: function renderCustom(swiper, current, total) {
        var progressPercentage = current / total * 100;
        return "\n           <div class=\"pagination-wrapper\">\n             <div class=\"spans-wrapper\">\n               <span class=\"current\">".concat(('0' + current).slice(-2), "</span>\n                /\n               <span class=\"total\">").concat(('0' + total).slice(-2), "</span>\n             </div>\n             <div class=\"progressbar-background\">\n               <div class=\"progressbar-fill\" style=\"width: ").concat(progressPercentage, "%;\"></div>\n             </div>\n           </div>");
      }
    }
  }, container); // Homepage accommodation Swiper

  createSwiper('.accommodation_swipe', (_createSwiper = {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    speed: 1000,
    centeredSlides: false
  }, _defineProperty(_createSwiper, "speed", 1000), _defineProperty(_createSwiper, "spaceBetween", 20), _defineProperty(_createSwiper, "navigation", {
    nextEl: document.querySelector('.swiper-button-next.acc-nav'),
    prevEl: document.querySelector('.swiper-button-prev.acc-nav')
  }), _createSwiper), container); // Agent Repeated Swiper

  createSwiper('.agents-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 40,
    speed: 2000,
    centeredSlides: true,
    allowTouchMove: true,
    autoplay: {
      delay: 3000
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      960: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  }, container); // Hotel Restaurant mobile swiper

  if (window.innerWidth <= 769) {
    createSwiper('.restaurant-swiper', {
      slidesPerView: 1,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          centeredSlides: true
        }
      }
    }, container);
  } // Gallery Top - Bottom Repeated Swiper


  var baseGalleryConfig = {
    loop: true,
    slidesPerView: 'auto',
    direction: 'horizontal',
    grabCursor: true,
    speed: 8000,
    breakpoints: {
      0: {
        spaceBetween: 20
      },
      768: {
        spaceBetween: 40
      }
    }
  };
  var galleries = [{
    selector: '.gallery_bottom',
    autoplay: {
      reverseDirection: true,
      disableOnInteraction: true
    }
  }, {
    selector: '.gallery_top',
    autoplay: {
      disableOnInteraction: true
    }
  }];
  galleries.forEach(function (_ref) {
    var selector = _ref.selector,
        options = _objectWithoutProperties(_ref, _excluded);

    createSwiper(selector, _objectSpread(_objectSpread({}, baseGalleryConfig), options));
  }); // View Also Swiper

  createSwiper('.grid-swiper-resorts', {
    centeredSlides: false,
    loop: false,
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 120,
    // autoplay: {
    // 	delay: 5000,
    // 	disableOnInteraction: false,
    // 	pauseOnMouseEnter: true,
    // 	waitForTransition: true,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 1.7,
        spaceBetween: 20
      },
      956: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 2.3,
        spaceBetween: 35
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 80
      }
    }
  }, container); // swiperResorts must be first initialize before the swiper-inner-gallery

  createSwiper('.swiper-resorts', {
    loop: false,
    spaceBetween: 40,
    grabCursor: true,
    slidesPerView: 3,
    centeredSlides: false,
    speed: 1500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 2.3,
        spaceBetween: 40
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    on: {
      slideChange: function slideChange() {
        this.update();
      }
    }
  }, container);
  var nestedGalleries = document.querySelectorAll('.swiper-inner-gallery');
  if (!nestedGalleries.length) return;
  nestedGalleries.forEach(function (gallery, index) {
    var uniqueClass = "swiper-inner-gallery-".concat(index);
    gallery.classList.add(uniqueClass);
    var prevButton = gallery.querySelector('.swiper-button-prev-custom');
    var nextButton = gallery.querySelector('.swiper-button-next-custom');
    var pagination = gallery.querySelector('.swiper-inner-gallery-pagination');
    prevButton === null || prevButton === void 0 || prevButton.classList.add("button-prev-".concat(index));
    nextButton === null || nextButton === void 0 || nextButton.classList.add("button-next-".concat(index));
    pagination === null || pagination === void 0 || pagination.classList.add("pagination-".concat(index));
    var swiperOptions = {
      effect: 'fade',
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      allowTouchMove: false,
      speed: 1500,
      autoplay: {
        delay: 5000
      },
      navigation: prevButton || nextButton ? {
        prevEl: prevButton ? ".button-prev-".concat(index) : undefined,
        nextEl: nextButton ? ".button-next-".concat(index) : undefined
      } : false,
      pagination: pagination ? {
        el: ".pagination-".concat(index),
        clickable: false
      } : false
    };
    createSwiper(".".concat(uniqueClass), swiperOptions, container);
  });

  if (window.innerWidth <= 1024) {
    createSwiper('.about_howitworks_swiper', {
      slidesPerView: 'auto',
      grabCursor: true,
      spaceBetween: 12,
      breakpoints: {
        0: {
          spaceBetween: 12
        },
        450: {
          spaceBetween: 20
        }
      }
    }, container);
  } // new Swiper('.about_villa_swiper', {
  // 	slidesPerView: 'auto',
  // 	grabCursor: true,
  // 	spaceBetween: 12,
  // });
  // new Swiper('.villa_amenity_swiper', {
  // 	grabCursor: true,
  // 	breakpoints: {
  // 		1440: {
  // 			spaceBetween: 180,
  // 		},
  // 		1024: {
  // 			spaceBetween: 100,
  // 			slidesPerView: 1.2,
  // 		},
  // 		320: {
  // 			slidesPerView: 1,
  // 		},
  // 	},
  // });
  // const locationBeachesSwiper = new Swiper('.beaches_info_swiper', {
  // 	slidesPerView: 1,
  // 	grabCursor: true,
  // 	spaceBetween: 12,
  // });
  // new Swiper('.villa_swiper', {
  // 	slidesPerView: 4,
  // 	grabCursor: true,
  // 	spaceBetween: 12,
  // 	breakpoints: {
  // 		1024: {
  // 			slidesPerView: 4,
  // 		},
  // 		768: {
  // 			slidesPerView: 3,
  // 		},
  // 		640: {
  // 			slidesPerView: 2.5,
  // 		},
  // 		320: {
  // 			slidesPerView: 1.2,
  // 		},
  // 	},
  // });

}

function createSwiper(selector, options) {
  var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var elements = container.querySelectorAll(selector);
  elements.forEach(function (el) {
    if (initializedSwipers.has(el)) return;
    initializedSwipers.add(el);
    new Swiper(el, options);
  });
}

/***/ }),

/***/ "./assets/scss/theme.scss":
/*!********************************!*\
  !*** ./assets/scss/theme.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./assets/js/src/index.js ./assets/scss/theme.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/js/src/index.js */"./assets/js/src/index.js");
module.exports = __webpack_require__(/*! ./assets/scss/theme.scss */"./assets/scss/theme.scss");


/***/ })

/******/ });
