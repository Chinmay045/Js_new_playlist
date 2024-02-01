// let arr = [2, 3, 4, 5, 6, 7]

// let [a, x, ...rest] = arr;

// console.log(a,x,rest)

const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a, b)


let arr1 = [2, 3, 5, 6];
function sum(v1, v2, v3) {
    return v1 + v2 + v3;
}

console.log(sum(...arr1));