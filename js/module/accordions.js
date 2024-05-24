export const initAccordions = () => {
    // Это для меню
    const MobileAccordion = document.querySelectorAll('.mobile-menu-accordion li');

    MobileAccordion.forEach((el) => {
        const button = el.querySelector('a');
        const content = el.querySelector('ul');

        button.addEventListener('click', (evt) => {

            if (content) {
                evt.preventDefault();

                const currentButton = evt.currentTarget;
                currentButton.classList.toggle('is-active');
                content.classList.toggle('is-active');

                if (currentButton.classList.contains('is-active')) {
                    // content.style.maxHeight = 'max-content';
                } else {
                    // content.style.maxHeight = null;
                }
            }
        });
    });

    // Это не для меню
    const openContainer = document.querySelectorAll('.open_container');

    openContainer.forEach(function (container) {
        const list = container.querySelectorAll('li');

        list.forEach(function (li) {
            const button = li.querySelector('.title');
            const content = li.querySelector('.content');

            button.addEventListener('click', (evt) => {
                if (content) {
                    const currentButton = evt.currentTarget;
                    currentButton.classList.toggle('is-active');
                    content.classList.toggle('is-active');

                    if (currentButton.classList.contains('is-active')) {
                        content.style.maxHeight = 'max-content';
                        // content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        content.style.maxHeight = null;
                    }
                }
            });

        });
    });
}