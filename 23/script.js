let navb = document.getElementsByClassName("nav");
navb[0].firstElementChild.style.color = "red";

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "yellow";
});