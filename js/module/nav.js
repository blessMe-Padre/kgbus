export const initNav = () => {
    const body = document.querySelector('body');
    // Меню
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuButton = document.querySelector('.btn-close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    const servicesMenu = document.querySelector('.services-menu');
    const menuButtonMobile = document.querySelector('.btn-close-menu-mobile');
    const servicesMenuMobile = document.querySelector('.services-menu--mobile');

    if (menuButton) {
        menuButton.addEventListener('click', e => {
            menuButton.classList.toggle('active');
            servicesMenu.classList.toggle('is-active');
            // body.classList.toggle('lock');
        });
    }

    if (menuButtonMobile) {
        menuButtonMobile.addEventListener('click', e => {
            menuButtonMobile.classList.toggle('active');
            servicesMenuMobile.classList.toggle('is-active');
            // body.classList.toggle('lock');
        });
    }

    if (mobileMenuLinks) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', (evt) => {
                evt.preventDefault();
                menuButton.classList.remove('active');
                mobileMenu.classList.remove('is-active');
                // body.classList.remove('lock');
            });
        });
    }
}