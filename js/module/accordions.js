export const initAccordions = () => {
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
}