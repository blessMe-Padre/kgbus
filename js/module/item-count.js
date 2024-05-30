export const initItemsCount = () => {
    const items = document.querySelectorAll('.bacteria-services__count span');


    let count = 0;
    items.forEach((item) => {
        count += 1;
        // if (count <= 9) {
        //     item.innerText = `0${count}`;
        // } else {
        //     item.innerText = `${count}`;
        // }
        item.innerText = count < 9 ? `0${count}` : count;
    });
}