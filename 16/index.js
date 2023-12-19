let arr = [2, 4, 56, 77, 65];
let a = arr.map((element, value, index) => {
    console.log(element, value, index);
    return element + 1;
})

console.log(a);

let arr1 = [2, 4, 56, 77, 65];
let a2 = arr1.filter((value)=>{
    return value < 10;
})

console.log(a2);
