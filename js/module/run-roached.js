export const runRoachedRun = () => {
    document.querySelectorAll(".roached-animation").forEach(function (button) {
        button.addEventListener("mouseover", function () {
            button.style.left = (Math.random() * 200) + "px";
            button.style.top = (Math.random() * 200) + "px";
            button.style.position = "absolute";
            button.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
        });
        button.addEventListener("click", function () {
            button.style.display = "none";
        });
    });
}
