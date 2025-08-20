const css = document.querySelector('h3')
const colorInputs = document.querySelectorAll('input[type=color]')
const body = document.getElementById('gradient')

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${colorInputs[0].value}, ${colorInputs[1].value})`
    css.textContent = body.style.background
}

colorInputs.forEach(input => {
    input.addEventListener('input', setGradient)
})

setGradient()