document.addEventListener('DOMContentLoaded', () => {

    const article = document.querySelectorAll("article");


    for (let el of article) {

        const content = el.querySelector(".d-none");
        const btn = el.querySelector(".btn");

        btn.addEventListener("click", e => {


            content.classList.toggle("d-none");


        })
    }

})