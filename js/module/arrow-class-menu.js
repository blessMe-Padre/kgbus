export const initArrowClass = () => {
    const addAccordionArrowClass = () => {
        const liElements = document.querySelectorAll('.header-nav ul li');
        const liElementsMobile = document.querySelectorAll('.services-menu--mobile ul li');

        liElements.forEach(li => {
            const hasUlChild = li.querySelector('ul') !== null;

            if (hasUlChild) {
                const link = li.querySelector('a');
                if (link) {
                    link.classList.add('accordion-arrow');
                }
            }
        });

        liElementsMobile.forEach(li => {
            const hasUlChild = li.querySelector('ul') !== null;

            if (hasUlChild) {
                const link = li.querySelector('a');
                if (link) {
                    link.classList.add('accordion-arrow');
                }
            }
        });
    }

    addAccordionArrowClass();
}