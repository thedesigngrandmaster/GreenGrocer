function showSidebar() {
    const menubtn = document.querySelector('#menubtn')
    menubtn.computedStyleMap.display = 'flex'
}

function hideSidebar() {
    const fatimes = document.querySelector('.fa-times')
    menubtn.computedStyleMap.display = 'none'
}


let countDate = new Date('October 10, 2024 00:00:00').getTime();
function CountDown() {
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % day) / (hour));
    let m = Math.floor((gap % hour) / (minute));
    let s = Math.floor((gap % minute) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function () {
    CountDown();
}, 1000);



$('.faq-header').click(function () {
    $('.faq .faq-body').slideUp();
    $(this).next('.faq-body').slideDown();
})