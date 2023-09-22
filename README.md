# Creating-Class-Prototype-JavaScript
This repository contains a simple JavaScript program created as part of my learning journey in the Front-end Development course on Coursera.

The code defines a Computer class that demonstrates basic object-oriented programming concepts.

# Overview
The Computer class is designed to represent a computer with properties like make, model, and price. It provides two methods:

summarise(): This method logs a summary of the computer's make, model, and price to the console.

getPrototype(): This method logs the prototype of the current instance to the console.

## Usage
To use the Computer class, follow these steps:

1. Create an instance of the Computer class, providing values for the make, model, and price parameters.
javascript
const computer1 = new Computer('Apple', 'Macbook', 1800);
2. Call the summarise() method to log a summary of the computer.
javascript
computer1.summarise(); // Example output: "This Apple Macbook costs $1800."
3. Call the getPrototype() method to log the prototype of the instance.
javascript
computer1.getPrototype(); // Example output:Computer {}
You can customize this README as needed and include additional information or explanations if you wish.
