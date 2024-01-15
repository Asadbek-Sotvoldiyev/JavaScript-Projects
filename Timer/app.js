const start = document.getElementById('start-btn')
const pause = document.getElementById('pause-btn')
const heading = document.querySelector('h1')

let interval

start.addEventListener('click', ()=>{
    heading.setAttribute('class', 'h1-color')
    let a = 0
    window.interval = setInterval(() => {
        a++
        heading.textContent = a
    }, 1000);
})

pause.addEventListener('click', ()=>{
    clearInterval(window.interval)
    heading.classList.remove('h1-color')
})