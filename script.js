$(document).ready(function () {
    //adding the current date
    $('#bday-title').before(`<p id="todays-date">${weekday} ${day} ${months[month]} ${year}</p>`);

    // sets the title of the website
    setTitle();

    console.log(wishlist)

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
    {description:"Stranger things izlemek", done: 'no', doneOn: 'NaN',},
    {description:"Interstellar izlemek", done: 'no', doneOn: 'NaN',}, 
    {description:"Dondurmalı kavun yemek", done: 'no', doneOn: 'NaN',}, 
    {description:"Çilek tarlasına gitmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Buz patenine gitmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Malmöye gitmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Dondurma yemek", done: 'no', doneOn: 'NaN',}, 
    {description:"Cheesecake yemek", done: 'no', doneOn: 'NaN',}, 
    {description:"Çiçek bahçesine gitmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Bilardo oynamak", done: 'no', doneOn: 'NaN',}, 
    {description:"Karayip Korsanlarını izlemek", done: 'no', doneOn: 'NaN',},
    {description:"Yıldızları seyretmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Venedik'e gitmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Suşi yemek", done: 'no', doneOn: 'NaN',}, 
    {description:"Bowlinge gitmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Kahvaltıya gitmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Havai fişekleri seyretmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Ata binmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Bubble tea içmek", done: 'no', doneOn: 'NaN',}, 
    {description:"Arabayla dolaşmak", done: 'no', doneOn: 'NaN',}, 
    {description:"Tiramisu yemek", done: 'no', doneOn: 'NaN',}, 
    {description:"EP çıkarmak", done: 'no', doneOn: 'NaN',}, 
    {description:"Sahil kenarında gün batımını seyretmek", done: 'no', doneOn: 'NaN',}
];

/**
 * sets the input and label elements for the wishlist in HTML.
 */
function setWishlist() {
    for (let i = 0; i < wishlist.length; i++) {
        // to see if the wish is met
        let checked = wishlist[i].done === "yes" ? 'checked': '';
        $('#wishlist-container').append(`<input class="wish-boxes" name="wish${i}" type="checkbox" ${checked}>
        <label class="wish-labels" for="wish${i}">${wishlist[i].description}</label><br>`);
    }
}
