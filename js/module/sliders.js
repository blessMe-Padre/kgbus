export const initSlider = () => {
    
    // слайдер "Отзывы"
    const feedback = document.querySelector('.feedback');
    if (feedback) {
        const feedback = new Swiper('.feedback', {
            loop: true,
            spaceBetween: 30,
            breakpoints: {
                374: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2,
                },
                1023: {
                    slidesPerView: 3,
                    spaceBetween: 30,
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
}