export const initAppend = () => {
    const headerContact = document.querySelector('.header-contact');
    const headerGroup = document.querySelector('.header-group');

    // при ширине экрана < 769px 
    if (window.innerWidth < 769) {
        headerGroup.append(headerContact);
    }
}