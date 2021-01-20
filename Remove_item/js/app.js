document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector("#orders");
    const links = table.querySelectorAll(".deleteBtn");


    for (let btn of links) {
        btn.addEventListener("click", e => {
            btn.closest("tr").remove();
        });
    }
});