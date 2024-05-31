import { initNav } from "./module/nav.js";
import { initSlider } from "./module/sliders.js";
import { initCurrentYear } from "./module/current-year.js";
import { initScrollToTop } from "./module/scroll-to-top.js";
import { initScroll } from "./module/scroll.js";
import { initAccordions } from "./module/accordions.js";
import { initArrowClass } from "./module/arrow-class-menu.js";
// import { initAnimateClass } from "./module/add_class_for_animation.js";
import { initAppend } from "./module/appendElement.js";

import { initBaguettes } from "./module/baguette_boxes.js";

import { initPopup } from "./module/popup.js";
import { initScrollAnimation } from "./module/scroll-animation.js";
import { runRoachedRun } from "./module/run-roached.js";
import { initMask } from "./module/phone-mask.js";
import { initItemsCount } from "./module/item-count.js";
import { initIntersectionObservers } from "./module/intersection_observers.js";


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initAccordions();
    initArrowClass();
    initAppend();
    initPopup();
    initScrollAnimation();
    runRoachedRun();
    initMask();
    initSlider();
    initItemsCount();
    // initCurrentYear();
    // initScrollToTop();
    // initScroll();
    // baguetteBox.run('.gallery-wrapper');

    // initAnimateClass();
    initBaguettes();
    initIntersectionObservers();


    // DOMContentLoaded..

});
