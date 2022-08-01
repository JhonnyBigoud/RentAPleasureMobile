// THE GOOD ONE !

function changeHeaderImage() {

    const images = [

        'url("./images/bg0.jpg")',
        'url("./images/bg1.jpg")',
        'url("./images/bg2.jpg")',
        'url("./images/bg3.jpg")',
        'url("./images/bg4.jpg")',
        'url("./images/bg5.jpg")',
        'url("./images/bg6.jpg")',
        'url("./images/bg7.jpg")',
        'url("./images/bg8.jpg")',
        'url("./images/bg9.jpg")',
        'url("./images/bg10.jpg")',
        'url("./images/bg11.jpg")',
        'url("./images/bg12.jpg")',
        'url("./images/bg13.jpg")',
        'url("./images/bg14.jpg")',
        'url("./images/bg15.jpg")',
        'url("./images/bg16.jpg")',
    ]

    const header =  document.getElementById('header');
    const bg = images[Math.floor(Math.random()*images.length)];
    header.style.backgroundImage = bg;
}

setInterval(changeHeaderImage, 3000);

// SLIDER

const items = document.querySelectorAll('img.eleanor');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');

let count = 0;

function nextSlide() {
    items[count].classList.remove('active');
    
    if (count < nbSlide -1) {
        count++;
    }
    else {
        count = 0;
    }
    
    items[count].classList.add('active');
    console.log(count);
}

suivant.addEventListener('click', nextSlide)

function previousSlide() {
    items[count].classList.remove('active');

    if (count >0) {
        count--;
        console.log(count);

    }
    else {
        count = nbSlide -1;
        console.log(count);
    }

    items[count].classList.add('active');
}

precedent.addEventListener('click', previousSlide)

//Changement input = date au clic

function changeInputType(input) {
    input.type = "date";
}

let inputs = document.getElementsByClassName("inputana");
for(let i = 0; i<inputs.length; i++) {
    inputs[i].addEventListener("focus",function(){changeInputType(this);});
}

changeInputType();