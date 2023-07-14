var img = document.getElementById("hero");
var hamburguer = document.getElementById("hmg");
var hamburguer_close = document.getElementById("hmg_close");
var navegacao = document.getElementById("navegacao");
var login_register = document.getElementById("login_register");
var menu_position = document.getElementById("menu_position");
var hamburguer_content_device = document.getElementById("hamburguer_content_device");
var overlay = document.getElementById("overlay");

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


function n_sei(){
    
}