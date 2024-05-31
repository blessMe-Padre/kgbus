import { initAnimateClass } from "./add_class_for_animation.js";
export const initIntersectionObservers = () => {
    const callback = (entries, observer) => {
        // Перебор секций
        entries.forEach((entry) => {
            // Если секция попала в поле наблидения
            if(entry.isIntersecting) {
                // Действия для секции "#history_box"
                if(entry.target.id == 'history_box') {
                    // Запуск анимации
                    initAnimateClass();
                    // Прекращаем следить за секцией "#history_box" чтобы анимация больше не срабатывала
                    observer.unobserve(entry.target)
                }
            }
        });
    }

    const options = {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
    }

    // Получаем секции
    const sections = document.querySelectorAll('section');

    // Запуск наблюдения за секциями
    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));
}