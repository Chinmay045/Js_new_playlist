// let num = [6, 7, 8, 91, 2, 3, 4, 5];
// // delete num[3];
// // console.log(num);
// let num_more = [10, 11, 12, 13, 14, 15, 16, 17];
// console.log(num.concat(num_more));
// console.log(num.sort());

function compare(a, b) {
    return a - b;
}

let numb = [551, 22, 3, 14, 5, 6, 7, 8, 226];
numb.sort(compare);
console.log(numb);

numb.splice(2,3, 1001, 1002, 1003);
console.log(numb);
