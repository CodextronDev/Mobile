const clock = document.querySelector('.clock');
const date_function = () => {
    const dateStr = document.querySelector('#date');
    let t = new Date();
    let d = t.getDay();
    let day = t.getDate();
    let m = t.getMonth();
    {
        if (d == 0) {
            d = 'Sun';
        }
        if (d == 1) {
            d = 'Mon';
        }
        if (d == 2) {
            d = 'Tue';
        }
        if (d == 3) {
            d = 'Wed';
        }
        if (d == 4) {
            d = 'Thu';
        }
        if (d == 5) {
            d = 'Fri';
        }
        if (d == 6) {
            d = 'Sat';
        }
    }
    {
        if (m == 0) {
            m = "January";
        }
        if (m == 1) {
            m = "February";
        }
        if (m == 2) {
            m = "March";
        }
        if (m == 3) {
            m = "April";
        }
        if (m == 4) {
            m = "May";
        }
        if (m == 5) {
            m = "June";
        }
        if (m == 6) {
            m = "July";
        }
        if (m == 7) {
            m = "August";
        }
        if (m == 8) {
            m = "September";
        }
        if (m == 9) {
            m = "October";
        }
        if (m == 10) {
            m = "November";
        }
        if (m == 10) {
            m = "December";
        }
    }
    let newDate = d + ', ' + day + ' ' + m;
    dateStr.innerText = newDate;
}
setInterval(() => {
    let d = new Date()
    let hrs = d.getHours()
    let min = d.getMinutes()
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs < 10) {
        hrs = '0' + hrs;
    }
    if (min < 10) {
        min = '0' + min;
    }
    clock.textContent = hrs + ':' + min;
    date_function()
}, 100)

const home = document.querySelector('.home');
const appBox = document.querySelector('.app-container');
const menuBtn = document.querySelector('#menu');
const backBtn = document.querySelector('#ok');

menuBtn.addEventListener('click', () => {
    home.classList.add('hide');
    appBox.classList.add('active');
})

backBtn.addEventListener('click', () => {
    home.classList.remove('hide');
    appBox.classList.remove('active');
})
