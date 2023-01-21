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
    document.body.style.backgroundImage = "url('images/fall.gif')";
});

winter.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('images/winter.jpg')";
});


/*function changeBackground() {
    document.querySelector("body").style.backgroundColor = 'blue';
}

function changeBackground() {
    document.querySelector("body").style.backgroundColor = 'red';
}

function changeBackground() {
    document.querySelector("body").style.backgroundColor = 'pink';
}

function changeBackground() {
    document.querySelector("body").style.backgroundColor = 'orange';
}


function season() {
    document.getElementById("myDIV").style.backgroundImage = "url(Winter_Branch_4K_Living_Background.mp4)";
 }*/