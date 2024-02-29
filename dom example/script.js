

const anyThing = document.querySelectorAll('.menuItem');
const oneEl = document.querySelector(".active");
const heading = document.createElement('h2');
const body = document.querySelector('body')

const menuClicked = (curEl) => {

    for(let i = 0; i < anyThing.length; i++) {
        anyThing[i].classList.remove('active')
    }

   event.target.classList.add('active')
};


body.appendChild(heading);
heading.innerHTML = "We can be going home"