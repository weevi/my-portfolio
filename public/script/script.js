var slidingNav = document.getElementById("nav-slide");
var slidingBurger = document.getElementById("burger-slide");
var navState = "visible";
var burgerState = "hidden";
var burgerClick = false;
var navClick = false;

slidingNav.addEventListener("click", hideNav);

slidingBurger.addEventListener("click", showNav);

scrollPos = 50;
window.addEventListener("scroll", function (event) {
if (this.scrollY > scrollPos)
{
hideNav(); 
}
else
{
showNav();
}
});

function hideNav() {
navClick = true;
burgerClick = false;
slidingNav.classList.add("nav-hide");
slidingNav.addEventListener("transitionend", function(event)
{
if (burgerState == "hidden" && burgerClick === false && navClick === true) {
slidingBurger.classList.add("burger-show");
navState = "hidden";
burgerState = "visible";

}
}, false); 
}

function showNav() {
burgerClick = true;
navClick = false;
slidingBurger.classList.remove("burger-show");
slidingBurger.addEventListener("transitionend", function(event) { 
if (burgerState === "visible" && burgerClick === true && navClick === false){
slidingNav.classList.remove("nav-hide");
navState = "visible";
burgerState = "hidden";
burgerClick = false;
}
}, false); 
}

$(document).ready(function () {
    
        
    $(".icon-wrap").click(function() {
    $(this).parent().hide();
});
    
    $("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#hero").offset().top
    }, 1000);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top
    }, 1000);
});

$("#work").click(function() {
    $('html, body').animate({
        scrollTop: $("#my-work").offset().top
    }, 1000);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-me").offset().top
    }, 1000);
});

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