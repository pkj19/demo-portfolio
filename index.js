const moon = document.getElementById('moon')
const sun = document.getElementById('sun')
const background = document.getElementById('landing-section')
const text = document.getElementById('text-container')

moon.addEventListener('click', () => {
    background.classList.toggle('dark-bg')
    text.classList.toggle('text-container-dark')
    moon.classList.toggle('hide')
    sun.classList.toggle('hide')
})

sun.addEventListener('click', () => {
    background.classList.toggle('dark-bg')
    text.classList.toggle('text-container-dark')
    moon.classList.toggle('hide')
    sun.classList.toggle('hide')
})