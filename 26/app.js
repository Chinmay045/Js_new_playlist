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

for(let i = 0; i<listItems.length; i++){
    listItems[i].style.fontSize = "2rem"; 
}

const heading = document.getElementById("main-heading");
heading.style.color = "red";
console.log(heading);

const query = document.querySelector("div");
console.log(query);