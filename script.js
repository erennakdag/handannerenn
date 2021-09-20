$(document).ready(function () {
    //adding the current date
    $('#bday-title').before(`<p id="todays-date">${weekday} ${day} ${months[month]} ${year}</p>`);

    // sets the title of the website
    // setTitle();

    // sets the wishlist
    setWishlist();
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

// list of the things we want to do
let wishlist = [
    {description:"Stranger things izlemek", done: false, doneOn: 'NaN',},
    {description:"Interstellar izlemek", done: false, doneOn: 'NaN',}, 
    {description:"Dondurmalı kavun yemek", done: false, doneOn: 'NaN',}, 
    {description:"Çilek tarlasına gitmek", done: false, doneOn: 'NaN',}, 
    {description:"Buz patenine gitmek", done: false, doneOn: 'NaN',}, 
    {description:"Malmöye gitmek", done: false, doneOn: 'NaN',}, 
    {description:"Dondurma yemek", done: false, doneOn: 'NaN',}, 
    {description:"Cheesecake yemek", done: false, doneOn: 'NaN',}, 
    {description:"Çiçek bahçesine gitmek", done: false, doneOn: 'NaN',}, 
    {description:"Bilardo oynamak", done: false, doneOn: 'NaN',}, 
    {description:"Karayip Korsanlarını izlemek", done: false, doneOn: 'NaN',},
    {description:"Yıldızları seyretmek", done: false, doneOn: 'NaN',}, 
    {description:"Venedik'e gitmek", done: false, doneOn: 'NaN',}, 
    {description:"Suşi yemek", done: false, doneOn: 'NaN',}, 
    {description:"Bowlinge gitmek", done: false, doneOn: 'NaN',}, 
    {description:"Kahvaltıya gitmek", done: false, doneOn: 'NaN',}, 
    {description:"Havai fişekleri seyretmek", done: false, doneOn: 'NaN',}, 
    {description:"Ata binmek", done: false, doneOn: 'NaN',}, 
    {description:"Bubble tea içmek", done: false, doneOn: 'NaN',}, 
    {description:"Arabayla dolaşmak", done: false, doneOn: 'NaN',}, 
    {description:"Tiramisu yemek", done: false, doneOn: 'NaN',}, 
    {description:"EP çıkarmak", done: false, doneOn: 'NaN',}, 
    {description:"Sahil kenarında gün batımını seyretmek", done: false, doneOn: 'NaN',},
    {description:"Rulo dondurma yemek", done: false, doneOn: 'NaN'},
];

/**
 * sets the input and label elements for the wishlist in HTML.
 */
function setWishlist() {
    for (let i = 0; i < wishlist.length; i++) {
        // to see if the wish is met
        let checked = wishlist[i].done === true ? 'checked': '';
        $('#wishlist-inner').append(`<p class="wish-labels">${wishlist[i].description}</p>`);
    }
}
