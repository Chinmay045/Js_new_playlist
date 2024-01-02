//Q1
let age = alert("what is your age");
if (age > 10 && age <= 20) {
    console.log("Print Success");
} else {
    console.log("Failed")
}

//Q2

let age = 18;
switch (age) {
    case 12:
        console.log("your age is 12");
        break;
    case 13:
        console.log("Your age is 13");
        break;
    case 14:
        console.log("Your age is 14");
        break;
    case 18:
        console.log("Your age is 18")
        break;
    default: console.log("your age is not speciall");
}

let num = 4;
if(num%2==0 && num%4==0 ){
    console.log("Your number is divisible by 2 & 4");
}else{
    console.log("your number is not divisible by 2 & 4")
}