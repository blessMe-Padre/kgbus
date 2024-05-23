import { initNav } from "./module/nav.js";
import { initSlider } from "./module/sliders.js";
import { initCurrentYear } from "./module/current-year.js";
import { initScrollToTop } from "./module/scroll-to-top.js";
import { initScroll } from "./module/scroll.js";
import { initAccordions } from "./module/accordions.js";
import { initArrowClass } from "./module/arrow-class-menu.js";
import { initAnimateClass } from "./module/add_class_for_animation.js";
import { initAppend } from "./module/appendElement.js";
import { initPopup } from "./module/popup.js";
import { initScrollAnimation } from "./module/scroll-animation.js";
import { runRoachedRun } from "./module/run-roached.js";

window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initAccordions();
    initArrowClass();
    initAppend();
    initPopup();
    initScrollAnimation();
    runRoachedRun();
    // initSlider();
    // initCurrentYear();
    // initScrollToTop();
    // initScroll();
    // baguetteBox.run('.gallery-wrapper');

    initAnimateClass();

    // DOMContentLoaded..

});
