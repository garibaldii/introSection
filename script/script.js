var img = document.getElementById("hero");
var hamburguer = document.getElementById("hmg");
var hamburguer_close = document.getElementById("hmg_close");
var navegacao = document.getElementById("navegacao");
var login_register = document.getElementById("login_register");
var menu_position = document.getElementById("menu_position");
var hamburguer_content_device = document.getElementById("hamburguer_content_device");
var overlay = document.getElementById("overlay");
var menu_dropdown = document.getElementById("menu_dropdown");
var menu_dropdown_b = document.getElementById("menu_dropdown_b");
var arrow = document.getElementById("arrow");
var arrow2 = document.getElementById("arrow2")
var menu_actived = false

window.addEventListener('load', responsive);
window.addEventListener('resize', responsive);


function responsive() {
    if (window.innerWidth < 800) {
        img.src = "images/image-hero-mobile.png"
        hamburguer.style.display = 'block'
        hamburguer_content_device.style.display = 'none'
        menu_position.style.display = 'flex'
    }
    else {
        
        img.src = "images/image-hero-desktop.png"
        hamburguer.style.display = 'none'
        hamburguer_close.style.display = 'none'
        navegacao.style.display = 'flex'
        login_register.style.display = 'flex'
    }
}

function btn_hamburguer (){
    hamburguer_content_device.style.display = 'flex'
    hamburguer_close.style.display = 'block'
    hamburguer_content_device.style.transition = 'opacity 0.3s ease-in-out'
    hamburguer_content_device.style.opacity = '1'
    overlay.style.display = 'block'
    document.body.classList.add('menu-open');
}

function btn_hamburguer_close(){
    hamburguer_content_device.style.display = 'none'
    hamburguer_close.style.display = 'none'
    overlay.style.display = 'none'
}


function menu_a(){
    if (menu_actived){
        menu_open_a()
    }
    else{
        menu_closed_a()
    }

    menu_actived = !menu_actived    
}

function menu_open_a(){
    menu_actived = true
    menu_dropdown.style.display = 'flex'
    menu_dropdown.style.flexDirection = 'column'
    menu_dropdown.style.listStyle = 'none'
    menu_dropdown.style.padding = '0'
    menu_dropdown.style.alignItems = 'flex-end  '
    menu_dropdown.style.borderRadius = '10px'
    menu_dropdown.style.backgroundColor = 'white'
    menu_dropdown.style.boxShadow = '2px 2px 35px 2px rgba(0, 0, 0, 0.2)'
    arrow.src = 'images/icon-arrow-up.svg'
}

function menu_closed_a(){
    menu_dropdown.style.display = 'none'
    arrow.src = 'images/icon-arrow-down.svg'
}


function menu_b(){
    if (menu_actived){
        menu_open_b()
    }
    else{
        menu_closed_b()
    }

    menu_actived = !menu_actived
}




function menu_open_b(){
    menu_actived = true
    menu_dropdown_b.style.display = 'flex'
    menu_dropdown_b.style.flexDirection = 'column'
    menu_dropdown_b.style.listStyle = 'none'
    menu_dropdown_b.style.padding = '6px'
    menu_dropdown_b.style.borderRadius = '10px'
    menu_dropdown_b.style.backgroundColor = 'white'
    menu_dropdown_b.style.boxShadow = '2px 2px 35px 2px rgba(0, 0, 0, 0.2)'
    arrow2.src = 'images/icon-arrow-up.svg'
}

function menu_closed_b(){
    menu_dropdown_b.style.display = 'none'
    arrow2.src = 'images/icon-arrow-down.svg'
}
