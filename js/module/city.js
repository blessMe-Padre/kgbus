export const initCityChooser = () => {

    // TO DO: поменять url адреса на корректные
    const NAHODKA_URL = 'http://127.0.0.1:5500/404.html';
    const USSURISK_URL = 'http://127.0.0.1:5500/products.html';
    const VLADIVOSTOK_URL = 'http://127.0.0.1:5500/about.html';

    const select = document.querySelector('.city-select');
    const cityPopup = document.querySelector('.city-popup');
    const span = document.querySelector('.city-popup span');
    const yesBtn = document.querySelector('.city-popup-yes');
    const noBtn = document.querySelector('.city-popup-no');

    const citiesCoordinates = {
        'Владивосток': { latitude: 43.1155, longitude: 131.8855 },
        'Находка': { latitude: 42.8138, longitude: 132.8735 },
        'Уссурийск': { latitude: 43.8029, longitude: 131.9458 }
    };


    // получаем из хранилища значение города
    let savedCity = localStorage.getItem('closestCity');
    if (!savedCity) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let userLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };

                let closestCity = null;
                let smallestDifference = Infinity;

                for (let city in citiesCoordinates) {
                    let cityLatitude = citiesCoordinates[city].latitude;
                    let difference = Math.abs(userLocation.latitude - cityLatitude);

                    if (difference < smallestDifference) {
                        smallestDifference = difference;
                        closestCity = city;
                    }
                }
                if (closestCity) {
                    console.log(`Ближайший город по широте: ${closestCity}`);

                    localStorage.setItem('closestCity', closestCity);
                    span.innerText = closestCity;
                }

                // получаем из хранилища значение города
                let savedCity = localStorage.getItem('closestCity');
                if (!savedCity) {
                    cityPopup.classList.add('is-active');
                }

                // Слушатель нажатия на кнопку yesBtn и закрытие попапа
                yesBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    let currentCity = localStorage.getItem('closestCity');
                    if (currentCity == closestCity) {
                        select.value = closestCity;

                        window.location.href = 'http://127.0.0.1:5500/404.html';
                    }

                    cityPopup.classList.remove('is-active');
                });
                // Слушатель нажатия на кнопку noBtn и закрытие попапа
                noBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    select.value = "Уссурийск";
                    cityPopup.classList.remove('is-active');
                });

            });
        }
    }

    select.value = localStorage.getItem('closestCity');

    if (select) {
        select.addEventListener('change', (e) => {

            if (e.target.value == "Находка") {
                select.value = "Находка";
                localStorage.setItem('closestCity', "Находка");
                // window.location.href = NAHODKA_URL;
            }
            if (e.target.value == 'Уссурийск') {
                select.value = "Уссурийск";
                localStorage.setItem('closestCity', "Уссурийск");
                // window.location.href = USSURISK_URL;
            }
            if (e.target.value == 'Владивосток') {
                localStorage.setItem('closestCity', "Владивосток");
                select.value = "Владивосток";
                // window.location.href = VLADIVOSTOK_URL;
            }
        });
    }

    // export const
}
