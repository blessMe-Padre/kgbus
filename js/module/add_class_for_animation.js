export const initAnimateClass = () => {
    // Время срабатывания шага (в миллисекундах)
    // Должно быть столько же, сколько в CSS-переменной --duration-add-animate-class
    const animate_time = 2000;
    // Класс для анимации
    const animate_class = 'animate';
    // Поиск списков
    const lists = document.querySelectorAll('ul.animate');

    // Перебор списков
    lists.forEach(function(ul, i) {
        // Получаем пункты списка
        const list = ul.querySelectorAll('li');
        // Начальное время анимации (в миллисекундах)
        let timer = 0;

        //  Перебор пунктов списка
        list.forEach(function(li, i) {
            if(i == 0) { // Действия для первого пунка в списке
                setTimeout(function() {
                    li.classList.add(animate_class);
                }, timer);

                timer += animate_time / 2;
            }
            else if(i == list.length - 1) { // Действия для последнего пунка в списке
                setTimeout(function() {
                    li.classList.add(animate_class);
                }, timer);
            }
            else {
                setTimeout(function() { // Действия для всех остальных пунктов в списке
                    li.classList.add(animate_class);
                }, timer);

                timer += animate_time;
            }
        });
    });
}