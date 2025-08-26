/* ===================================
   Part 1: Variables & Conditionals
=================================== */
let age = 20;
let message = "";

if (age >= 18) {
  message = "You are an adult.";
} else {
  message = "You are a minor.";
}
document.getElementById("part1-output").textContent = message;


/* ===================================
   Part 2: Functions
=================================== */

// Function 1: Greet user
function greetUser(name) {
    document.getElementById("part2-output").textContent = "hello, " + name + "!";
}

// Function 2: Sum numbers
function sumNumbers(a, b) {
  let sum = a + b;
   document.getElementById("part2-output").textContent =
    "The sum of " + a + " and " + b + " is " + sum;
}


/* ===================================
   Part 3: Loops
=================================== */

// Example 1: For loop
function showNumbers() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  document.getElementById("part3-output").innerHTML =
    "<li>" + output.trim() + "</li>";
}

// Example 2: forEach loop with array
function listFruits() {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let list = document.getElementById("part3-output");
  list.innerHTML = ""; // Clear before adding
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}


/* ===================================
   Part 4: DOM Manipulation
=================================== */

// Example 1: Change text
function changeText() {
  document.getElementById("dom-text").textContent = "The text has been changed!";
}

// Example 2: Toggle color class
function toggleColor() {
  document.getElementById("dom-text").classList.toggle("colored");
}

// Example 3: Add new list item
function addNewItem() {
  let li = document.createElement("li");
  li.textContent = "New Item added!";
  document.getElementById("dom-list").appendChild(li);
}
