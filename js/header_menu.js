const header_menu_btn = document.getElementById("header_menu_btn");
const mobil_menu_close_btn= document.getElementById("mobil_menu_close_btn")
const mobil_menu = document.querySelector('.mobil_menu')
let header_menu_open = false;

function open_and_close_mob_menu(){
    if(!header_menu_open) {
        mobil_menu.style.display = 'block';
        header_menu_open = true;
    } else {
        mobil_menu.style.display = 'none';
        header_menu_open = false;
    }
}

header_menu_btn.addEventListener('click', open_and_close_mob_menu)
mobil_menu_close_btn.addEventListener('click', open_and_close_mob_menu)

  