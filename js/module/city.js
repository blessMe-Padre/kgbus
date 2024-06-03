export const initCityChooser = () => {


    navigator.geolocation.getCurrentPosition(function (position) {
        let userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };
        // console.log(userLocation); // Выводит локацию в консоль
    });

    const citiesCoordinates = {
        'Владивосток': { latitude: 43.1155, longitude: 131.8855 },
        'Находка': { latitude: 42.8138, longitude: 132.8735 },
        'Уссурийск': { latitude: 43.8029, longitude: 131.9458 }
    };

    navigator.geolocation.getCurrentPosition(function (position) {
        let userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };
        console.log(userLocation); // Выводит локацию в консоль

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
        }
    });

    const NAHODKA_URL = 'http://127.0.0.1:5500/404.html'; //3
    const USSURISK_URL = 'http://127.0.0.1:5500/404.html'; //1
    const VLADIVOSTOK_URL = 'http://127.0.0.1:5500/404.html'; //2
    const select = document.querySelector('.city-select');

    select.addEventListener('change', (e) => {

        if (e.target.value == 3) {
            // console.log('Выбран город НАХОДКА');
            window.location.href = NAHODKA_URL;
        }
        if (e.target.value == 1) {
            // console.log('Выбран город УССУРИЙСК');
            // window.location.href = NAHODKA_URL;
        }
        if (e.target.value == 2) {
            // console.log('Выбран город ВЛАДИВОСТОК');
            // window.location.href = NAHODKA_URL;
        }
    });
}
