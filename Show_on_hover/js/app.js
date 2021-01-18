document.addEventListener('DOMContentLoaded', () => {
    const parents = document.querySelectorAll(".parent");
    for (let el of parents) {
        el.addEventListener("mouseover", e => {
            el.querySelector(".children").style.display = "block";
        });
        el.addEventListener("mouseout", e => {
            el.querySelector(".children").style.display = "";
        });
    }
});