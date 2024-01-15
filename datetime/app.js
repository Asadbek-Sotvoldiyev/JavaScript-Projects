let fullday = document.getElementById('full-day');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
function clock() {
    const now = new Date();
    const date = now.getDate() < 10 ? '0'+now.getDate():now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const hours = now.getHours() < 10 ? '0'+now.getHours():now.getHours();
    const minutes = now.getMinutes() < 10 ? '0'+now.getMinutes():now.getMinutes();
    const seconds = now.getSeconds() < 10 ? '0'+now.getSeconds():now.getSeconds();

    fullday.textContent = `${date} ${months[month]}, ${year}`;
    hour.textContent = `${hours}`;
    minute.textContent = `${minutes}`;
    second.textContent = `${seconds}`;
};

setInterval(()=>{
    clock();
}, 1000);