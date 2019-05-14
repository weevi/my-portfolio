// navbar

var nav = document.getElementById("nav-slide");
var burger = document.getElementById("burger-slide");

nav.addEventListener('click', navHide);
burger.addEventListener('click', burgerHide);

function navHide() {
    nav.style.top="-250px";
    burger.style.right="0";
}

function burgerHide() {
    nav.style.top="0";
    burger.style.right="-100px";
}

// easter egg


var desctopPopup = document.getElementById("easteregg");
var resizedPopup = document.getElementById("easteregg2");
var width = screen.width;
var showing = false;



window.addEventListener("resize", function (event) {
    getWidth(document.body.clientWidth);
})


function getWidth(currentWidth) {
    if (currentWidth <= 650 && currentWidth >= 485) {
        resizedPopup.style.display = "block";
        desctopPopup.style.display = "none";
    }
}


setTimeout(function () {
    document.getElementById('easteregg2').className = 'hide';
}, 5000);



function showPopup() {
    if (width >= 1200) {
        desctopPopup.style.display = "block";
        showing = true;
    } else {
        desctopPopup.style.display = "none";
        var showing = false;
    }
}

showPopup();

$(document).ready(function () {

    $(".icon-wrap").click(function () {
        $(this).parent().hide();
    });

    $("#home").click(function () {
        $('html, body').animate({
            scrollTop: $("#home-section").offset().top
        }, 1000);
    });

    $("#about").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 1000);
    });

    $("#work").click(function () {
        $('html, body').animate({
            scrollTop: $("#my-work").offset().top
        }, 1000);
    });

    $("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact-me").offset().top
        }, 1000);
    });




    // header animation 

    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "flipInX",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
});

