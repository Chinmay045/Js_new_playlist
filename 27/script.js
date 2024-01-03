let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

let quotes = [
    {
        quote: " I can only lead you to the truth. ",
        person: "Raymond Reddington"
    },

    {
        quote: " That's A Man I Understand ",
        person: "Katirona Rastova"
    },
    {
        quote: " That's A Man I Understand ",
        person: "Katirona Rastova"
    },
    {
        quote: " A man who's willing to burn the world down to protect the one person they care about, that's a man I understand. ",
        person: "Raymond Reddington"
    }
];

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})