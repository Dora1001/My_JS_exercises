document.addEventListener('DOMContentLoaded', () => {

    const section = document.querySelectorAll("section")


    for (let el of section) {
        const btn = el.querySelector(".btn");
        const counter = el.querySelector(".counter");

        let nr = 0;

        btn.addEventListener("click", e => {
            nr++;

            counter.innerHTML = nr;

        });
    }


});