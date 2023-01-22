let spring = document.querySelector('#spring');
let summer = document.querySelector('#summer');
let autumn = document.querySelector('#autumn');
let winter = document.querySelector('#winter');

spring.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/spring.jpg')";
});

summer.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/summer.jpg')";
});

autumn.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/autumn.gif')";
});

winter.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/winter.jpg')";
});
