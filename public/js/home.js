// PARALLAX

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('header__text');
let btn = document.getElementById('btn_header');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', () => {

    let value = window.scrollY;

    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
});

// WORLD HIDE

const worlds = document.querySelectorAll('.world');

worlds.forEach(world => {
    world.addEventListener('click', () => {
        world.classList.toggle('openw');
    });
});

// HOYO HIDE 

const hoyos = document.querySelectorAll('.hoyoverse');

hoyos.forEach(hoyo => {
    hoyo.addEventListener('click', () => {
        hoyo.classList.toggle('open');
    });
});