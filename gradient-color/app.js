const body = document.querySelector('body')
const container = document.getElementsByClassName('container')
const colorText = document.querySelector('.color-text')

const values = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

function getGraident() {
    let color ='#'
    for(let i=0; i<6; i++){
        const num = Math.trunc(Math.random()*values.length)
        color+=values[num]
    }
    return color
}

function setGradient() {
    const color1 = getGraident()
    const color2 = getGraident()
    const randomdeg = Math.trunc(Math.random()*360)
    const bgColor = `linear-gradient(
        ${randomdeg}deg, ${color1},${color2}
    )`
    body.style.background = bgColor
    colorText.textContent = bgColor
}

container.addEventListener('click', setGradient)