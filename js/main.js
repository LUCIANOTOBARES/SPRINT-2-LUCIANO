let boton = document.getElementById("btn");
boton.addEventListener("click", function () {

    let titulo = document.getElementById("registro");
    titulo.innerHTML = "<h2>Se enviaron tus datos correctamente!!!</h2>";
    titulo.classList.add("verde")
    titulo.classList.remove("gracias")
    titulo.style.color = "red"


    const menuButton = document.querySelector('.boton-h');
    const menuList = document.querySelector('menu');

    menuButton.addEventListener('click', () => {
        menuList.classList.toggle('menu-active');
    });


})


