class Cookie {
    constructor(name) {
        this.name = name;
    }

    get() {
        const matches = document.cookie.match(new RegExp(
            '(?:^|; )' + this.name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + '=([^;]*)'
        ));

        return matches ? decodeURIComponent(matches[1]) : false;
    }

    set(value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = this.name + '=' + (value || '') + expires + '; path=/';
    }

    destroy() {
        this.set('', -1);
    }
}

const BASE_DURATION = 30;
const cookieElement = document.querySelector('[data-cookies]');

export const cookieConsentChecker = () => {
    if (!cookieElement) {
        return;
    }

    const consentCookie = new Cookie('has_cookie_consent');

    if (!consentCookie.get('has_cookie_consent')) {
        const cookieBtnElement = cookieElement.querySelector('[data-cookies-consent]');
        cookieElement.classList.add('is-active');
        cookieBtnElement.addEventListener('click', (evt) => {
            evt.preventDefault();
            const cookieDuration = +cookieElement.dataset.cookiesDuration || BASE_DURATION;
            cookieElement.classList.remove('is-active');
            consentCookie.set('yes', cookieDuration);
        });
    }
};
