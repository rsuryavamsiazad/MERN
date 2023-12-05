var typed = new Typed('#typedElement', {
    strings: ['Front End Developer.', 'Graphic Desginer.', 'Web Desinger.', '&amp; Freelance Developer.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


let topMenu = document.getElementById('topMenu');
topMenu.style.display = 'none';
let check = 0;

function openMenu() {
    if (check == 0) {
        topMenu.style.display = 'block';
        check = 1;
    }
    else {
        topMenu.style.display = 'none';
        check = 0;
    }
}

// animate
let toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active');
});