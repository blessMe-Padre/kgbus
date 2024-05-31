export const initAccordions = () => {
    // Это для меню
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

    // Это не для меню
    // const openContainer = document.querySelectorAll('.open_container');
    
    // openContainer.forEach(function (container) {
    //     const list = container.querySelectorAll('li');

    //     list.forEach(function (li) {
    //         const button = li.querySelector('.title');
    //         const content = li.querySelector('.content');

    //         button.addEventListener('click', (event_object) => {
    //             if (content) {
    //                 const currentButton = event_object.currentTarget;
    //                 currentButton.classList.toggle('is-active');
    //                 content.classList.toggle('is-active');

    //                 if (currentButton.classList.contains('is-active')) {
    //                     // content.style.maxHeight = 'max-content';
    //                     // content.style.maxHeight = content.scrollHeight + 'px';
    //                 } else {
    //                     // content.style.maxHeight = null;
    //                 }
    //             }
    //         });

    //     });
    // });

    jQuery('.open_container').off('click')
        .on('click', '.title', function(event_object) {
            const animation_time = 500;

            const title = jQuery(event_object.currentTarget);
            const container = title.parents('li').eq(0);
            const content = container.find('.content').eq(0);

            title.toggleClass('is-active');
            content.slideToggle(animation_time, null, function() {
                jQuery(this).toggleClass('is-active');
            });

            // Закоментить, чтобы при открытии блока остальные не закрывались
            const other_containers = container.siblings('li');
            const other_titles = other_containers.find('.title');
            const other_contents = other_containers.find('.content');

            other_titles.removeClass('is-active');
            other_contents.slideUp(animation_time, null, function() {
                jQuery(this).removeClass('is-active');
            });
            // [Закоментить]
        });
}