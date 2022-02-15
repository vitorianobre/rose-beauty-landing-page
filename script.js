const menu = document.getElementById('btn-menu');

function showMenu() {
    const nav = document.getElementById('menu');
    nav.classList.add('active');
}

menu.addEventListener('click', showMenu);

const menuHidden = document.getElementById('hidden-menu');

function hiddenMenu() {
    const nav = document.getElementById('menu');
    nav.classList.remove('active');
}

menuHidden.addEventListener('click', hiddenMenu);