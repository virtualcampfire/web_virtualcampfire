window.addEventListener("scroll", function() {
    let scrollPosition = document.documentElement.scrollTop;

    let navbar = document.getElementById("navbar");

    if(scrollPosition === 0){
        navbar.style.backgroundColor = "#151818";
    } else if(scrollPosition > 0){
        navbar.style.backgroundColor = "#141414";
    }
    console.log(scrollPosition);
});

let scrollPosition = document.documentElement.scrollTop;

let navbar = document.getElementById("navbar");

if(scrollPosition === 0){
    navbar.style.backgroundColor = "#151818";
} else if(scrollPosition > 0){
    navbar.style.backgroundColor = "#141414";
}