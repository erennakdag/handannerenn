$(document).ready(function () {
    //adding the current date
    $('#bday-title').before(`<p id="todays-date">${weekday} ${day} ${months[month]} ${year}</p>`);

    // sets the title of the website
    setTitle();
});

// hard-coded array literals of day and month name abrevations
const days = ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let date = new Date();

// getting date and time information.
let weekday = days[date.getDay()];
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let time = date.getHours();

function setTitle() {
    /*
    displays date and time related messages as the websites title
    */
    let title = $('#bday-title');
    if (day == 21 && month == 9) {
        title.text("Heyy! Doğum günün kutlu olsun sevgilim. Seni çok seviyorum ❤️");
    }
    else if (6 < time && time < 11) {
        title.text("Günaydın hayatım ❤️");
    }
    else if (21 <= time || 6 >= time) {
        title.text("İyi geceler bebeğim ❤️");
    }
    else {
        title.text("Seni çok seviyorum bitanem ❤️");
    }
}
