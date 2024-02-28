const anything = document.querySelectorAll('.menuItem');
const oneEl = document.querySelector('.active')

const menuClicked = (curEl) => {
    for (let i = 0; i < anything.length; i++){
        anything[i].classList.remove('active')
    }
    curEl.classList.add('active')
}

