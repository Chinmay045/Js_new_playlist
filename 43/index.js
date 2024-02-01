let submit = document.getElementById('submit');
let deletee = document.getElementById('delete');
let todo = document.getElementById('todo');

submit.addEventListener('click', (e) => {
    let titleC = title.value;
    let descC = desc.value;
    localStorage.setItem('todo', [titleC, descC])
    console.log(e)
    todo.innerHTML = `
    <h1>${titleC}</h1>
    <p>${descC}</p>
    `
});

deletee.addEventListener('click', (e) => {

    localStorage.removeItem('todo');
    todo.innerHTML = "";
});