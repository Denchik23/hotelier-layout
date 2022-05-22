document.addEventListener('DOMContentLoaded', function() {
})

let showMenu = function () {
    burger.classList.toggle("burger_open")
    const menu = document.querySelector(".menu")
    menu.classList.toggle("menu_open")
    document.body.classList.toggle("lock")
}