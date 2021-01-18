document.addEventListener('DOMContentLoaded', () => {


    const div = document.querySelectorAll("div");


    for (let el of div) {
        el.addEventListener("mouseover", e => {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

            el.style.backgroundColor = randomColor;


        });
    }
});
