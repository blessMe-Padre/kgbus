export const initSlider = () => {
    
    // слайдер "Отзывы"
    const feedback = document.querySelector('#reviews_box');

    if (feedback) {
        const feedback = new Swiper('.reviews-swiper', {
            loop: true,
            spaceBetween: 20,
            breakpoints: {
                374: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
                1023: {
                    slidesPerView: 3,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }

    // слайдер "Последние новости"
    const news = document.querySelector('#news_box');

    if (news) {
        const feedback = new Swiper('.news-swiper', {
            loop: true,
            spaceBetween: 20,
            autoplay: true,
            breakpoints: {
                374: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
                1023: {
                    slidesPerView: 4,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }

    // слайдер "Фотогаллерея"
    const gallery = document.querySelector('#gallery_box');
    
    if (gallery && window.innerWidth <= 450) {
        let slider_box = gallery.querySelector('.gallery');
        slider_box.classList.remove('gallery');
        slider_box.classList.add('swiper-wrapper');
        slider_box.classList.add('justify-items-stretch');

        slider_box.querySelectorAll('.photo').forEach(function(photo) {
            photo.classList.add('swiper-slide');
        });

        let wrap_box = document.createElement('div');
        wrap_box.classList.add('gallery-swiper');
        wrap_box.classList.add('swiper');
        
        slider_box.parentNode.insertBefore(wrap_box, slider_box);
        wrap_box.appendChild(slider_box);

        slider_box = slider_box.parentNode;

        wrap_box = document.createElement('div');
        wrap_box.classList.add('w-0');
        wrap_box.classList.add('min-w-full');
        wrap_box.classList.add('relative');

        slider_box.parentNode.insertBefore(wrap_box, slider_box);
        wrap_box.appendChild(slider_box);

        let buttons_box = document.createElement('div');
        buttons_box.classList.add('swiper-buttons');

        let button = document.createElement('div');
        button.classList.add('swiper-button-prev');
        button.classList.add('swiper-button-prev--category');
        buttons_box.insertBefore(button, null);

        button = document.createElement('div');
        button.classList.add('swiper-button-next');
        button.classList.add('swiper-button-next--category');
        buttons_box.insertBefore(button, null);

        slider_box.parentNode.insertBefore(buttons_box, null);

        const feedback = new Swiper('.gallery-swiper', {
            loop: true,
            spaceBetween: 20,
            autoplay: true,
            breakpoints: {
                374: {
                    slidesPerView: 1,
                },
                // 767: {
                //     slidesPerView: 2,
                // },
                // 1023: {
                //     slidesPerView: 4,
                // },
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }
}