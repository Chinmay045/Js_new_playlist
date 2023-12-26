let b = document.body;
console.log(b.firstChild);
console.log(b.firstElementChild);

let changeBodyRed = () => {
    document.body.firstElementChild.style.color = "red";
}

