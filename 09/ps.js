let marks = {
    harry: 90,
    Shubham: 89,
    lovish: 90,
    Monika: 4
}

// for (let i = 0; i < Object.keys(marks).length; i++) {
//     // console.log("Marks " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key])
}