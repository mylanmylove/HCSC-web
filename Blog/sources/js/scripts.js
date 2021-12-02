$.get('sources/blog/blog4/title.txt', function(data) {
    $('.title').text(data)
}, 'text');

$.get('sources/blog/blog4/content.txt', function(data) {
    var new_data = '';
    var i = 0;
    while (i < 200 || data[i] != '.') {
        new_data += data[i];
        i++;
    }

    new_data += '.';

    $('.summary').text(new_data)
}, 'text');

$.get('sources/blog/blog4/content.txt', function(data) {
    $('.content').text(data)
}, 'text');

// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = 30;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        $('.nav').removeClass('sticky');
    }
}




$(document).ready(function() {
    $('#menu').click(function() {
        if (document.getElementById('menu-list').style.visibility === "visible") {
            document.getElementById('menu-list').style.visibility = "hidden";
        } else {
            document.getElementById('menu-list').style.visibility = "visible";
        }
    });
});