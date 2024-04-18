// Question 22
let city = ["Jhang", "Karachi", "Lahore", "Faisalabad"];
// console.log(city{4});
console.log(city[3]);
// Question 23
let car = 'subaru';
console.log("Is car =='subaru'?I predict True.");
console.log(car == 'subaru');
console.log("Is car !='hondaa'?I predict True.");
console.log(car != 'hondaa');
console.log("Is car >='hondaa'?I predict True.");
console.log(car >= 'hondaa');
console.log("Is car <='urabus'?I predict True.");
console.log(car <= 'urabus');
console.log("Is car ==='subaru'?I predict True.");
console.log(car === 'subaru');
console.log("Is car =='hondaa'?I predict False.");
console.log(car == 'hondaa');
console.log("Is car <'hondaa city'?I predict False.");
console.log(car < 'hondaa');
console.log("Is car <='hondaa'?I predict False.");
console.log(car <= 'hondaa');
console.log("Is car >='urabus'?I predict False.");
console.log(car >= 'urabus');
console.log("Is car !='subaru'?I predict False.");
console.log(car != 'subaru');
// Question 24
// Test for equality and inequality with string
let name = "Maham";
console.log("Test for equality", name == "Maham");
console.log("Test for inequality", name == "maham");
// Test using the lower case function
if (name == "maham") {
    console.log("Name is equal.");
}
else {
    console.log("Name is not equal.");
}
// Numerical testing
let age1 = 15;
let age2 = 19;
if (age1 > age2) {
    console.log(`${age1} is greater than ${age2}`);
}
else {
    console.log(`${age1} is less than ${age2}`);
}
if (age1 <= age2) {
    console.log(`${age1} is less than or equal to ${age2}`);
}
else {
    console.log(`${age1} is greater than or equal to ${age2}`);
}
if (age1 == 15 && age2 == 19) {
    console.log("Result is true in and operator.");
}
if (age1 <= 17 || age2 == 15) {
    console.log("Result is true in or operator.");
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (let i = 0; i < days.length; i++) {
    if (days[i] == "Friday") {
        console.log("Day is found in week.");
    }
}
if (days[2] != "Maham") {
    console.log("Day is not found in week.");
}
export {};
