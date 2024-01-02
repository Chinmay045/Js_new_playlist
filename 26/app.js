// DOM Manipulation

// Event Delegation



document.querySelector('#sports').addEventListener('click', function (e) {

    console.log(e.target.id + " is clicked");

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
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

ul.innerText = "X-Menn";
ul.setAttribute("id", "main-heading");
ul.classList.remove("list-items");
console.log(ul.classList.contains("list-items"));
ul.removeAttribute("id")

const heading = document.getElementById("main-heading");
console.log(heading.getAttribute('id'));
// heading.style.color = "red";
// console.log(heading);

const query = document.querySelector("div");
// console.log(query);

// const list = document.querySelector(".list-items");
// console.log(list.innerHTML);
// console.log(list.innerText);
// console.log(list.textContent);



