// DOM Manipulation

// Event Delegation



document.querySelector('#sports').addEventListener('click', function (e) {

    console.log(e.target.id + " is clicked");

    const target = e.target.style.backgroundColor = 'lightgrey';

    // if (target.matches('li')) {
    //     target.style.backgroundColor = 'lightgrey'
    // }
});


const sports = document.querySelector('#sports');
const newSport = document.createElement('li');


newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport)

const listItems = document.querySelectorAll(".list-items")
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = "2rem";
}

const li = document.querySelector("ul")
const ul = document.createElement("div");
li.appendChild(ul);
// console.log(li)

// ul.innerText = "X-Menn";
// ul.setAttribute("id", "main-heading");
// ul.classList.remove("list-items");
// console.log(ul.classList.contains("list-items"));
// ul.removeAttribute("id")
// ul.remove();

// const heading = document.getElementById("main-heading");
// console.log(heading.getAttribute('id'));
// // heading.style.color = "red";
// console.log(heading);

// const query = document.querySelector("ul");
// console.log(query.childNodes[3].style.backgroundColor = "red");
// console.log(query.parentElement.parentElement);
// console.log(query.children[2].style.backgroundColor = "blue");
// console.log(query.previousElementSibling);
// console.log(query.nextElementSibling);


// const list = document.querySelector(".list-items");
// console.log(list.innerHTML);
// console.log(list.innerText);
// console.log(list.textContent);

document.querySelector("#football").addEventListener("click", function (e) {
    console.log("football is clicked");

    const target = e.target;

    if (target.matches("li")) {
        target.style.backgroundColor = "yellow";
    }
})

document.querySelector('#basketball').addEventListener("click", function (e) {
    console.log("basketball is clicked");

    const target = e.target.style.backgroundColor = "red";
    // if (target.matches("li")) {
    //     target.style.backgroundColor = "red";
    // }
});

const sport = document.querySelector("#sports");
const newSpor = document.createElement("li");

newSpor.innerText = 'rughby';
newSpor.setAttribute('id', 'rughby');

sport.appendChild(newSpor);

