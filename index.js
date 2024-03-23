// Question 25
// let alien_color:string = "green";
// if(alien_color=="green"){
//     console.log("The player just earned 5 points.")
// }
let alien_color = "red";
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
// Question 26
// We use alien_color variable from question 25
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
else {
    console.log("The player just earned 10 points.");
}
// Question 27
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("The player just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("The player just earned 15 points.");
}
// Question 28
let age = 66;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 29
let favoruite_fruit = ["Mango", "Orange", "Kewi"];
if (favoruite_fruit[1] == "Orange") {
    console.log("You really like Orange.");
}
if (favoruite_fruit[2] == "orange") {
    console.log("You really like Orange.");
}
if (favoruite_fruit[0] == "Mango") {
    console.log("You really like Mango.");
}
if (favoruite_fruit.includes("Apple")) {
    console.log("You really like Apple.");
}
if (favoruite_fruit.includes("Kewi")) {
    console.log("You really like Kewi.");
}
// Question 30
let username = ["Maham", "Sabar", "admin", "Taimoor", "Daniyal"];
for (let i = 0; i < username.length; i++) {
    if (username[i] == "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username[i]},thank you for logging in again.`);
    }
}
// Question 31
if (username.length == 0) {
    console.log("We need to find some user.");
}
else {
    for (let i = 0; i < username.length; i++) {
        if (username[i] == "admin") {
            console.log("Hello admin,would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username[i]},thank you for logging in again.`);
        }
    }
}
username = [];
if (username.length == 0) {
    console.log("We need to find some user.");
}
// Qusetion 32
let current_user = ["Maham", "Sabar", "admin", "Taimoor", "Daniyal"];
let new_user = ["maham", "sabar", "Daniyal", "Taimoor", "Jabbar"];
let current_user_upper = current_user.map(user => user.toUpperCase());
for (let newuser of new_user) {
    if (current_user_upper.includes(newuser.toUpperCase())) {
        console.log(`${newuser} is already taken`);
    }
    else {
        console.log(`${newuser} is now available in the list.`);
    }
}
// Question 33
let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num = 0; num < ordinal.length; num++) {
    if (ordinal[num] === 1) {
        console.log(`${ordinal[num]}st`);
    }
    else if (ordinal[num] === 2) {
        console.log(`${ordinal[num]}nd`);
    }
    else if (ordinal[num] === 3) {
        console.log(`${ordinal[num]}rd`);
    }
    else {
        console.log(`${ordinal[num]}th`);
    }
}
// Question 34
let pizza = ["Kabab krust", "Chicken Tikka", "Fajita"];
for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like ${pizza[i]} pizza`);
}
console.log("Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. ");
// Question 35
let animal = ["lion", "tiger", "elephant"];
for (let pet of animal) {
    console.log(pet);
}
for (let pet of animal) {
    console.log(`A ${pet} would make a great pet.`);
}
console.log("All of these animals eat meat and I like tiger.");
export {};
