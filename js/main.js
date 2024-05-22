import { initNav } from "./module/nav.js";
import { initSlider } from "./module/sliders.js";
import { initCurrentYear } from "./module/current-year.js";
import { initScrollToTop } from "./module/scroll-to-top.js";
import { initScroll } from "./module/scroll.js";
import { initAccordions } from "./module/accordions.js";
import { initArrowClass } from "./module/arrow-class-menu.js";

window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initAccordions();
    initArrowClass();
    // initSlider();
    // initCurrentYear();
    // initScrollToTop();
    // initScroll();
    // baguetteBox.run('.gallery-wrapper');

    // DOMContentLoaded..

});
