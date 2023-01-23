let spring = document.querySelector('#spring');
let summer = document.querySelector('#summer');
let autumn = document.querySelector('#autumn');
let winter = document.querySelector('#winter');

spring.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/spring-flowers.gif')";
});

summer.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/sea.gif')";
});

autumn.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/fall-leaves.gif')";
});

winter.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/snow.gif')";
});
