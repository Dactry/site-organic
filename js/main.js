const papaya = document.querySelector('.header__papaya')

document.addEventListener('mousemove', function (evt){
    papaya.style.right = -evt.clientX / 30 + 'px';
    papaya.style.top = (-evt.clientY / 30) + 150 + 'px';
    
})

const logo = document.querySelector('.header__logo')

document.addEventListener('mousemove', function (evt){
    logo.style.left = -evt.clientX / 30 + 'px';
    logo.style.top = (evt.clientY / 30) - 580 + 'px';
    
})