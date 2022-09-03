//program to find a square of a diognal
function square(a) {
  return a * a;
}

console.log(square(9));
// program to find area of a Triangle
function triangle(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

console.log(triangle(5, 6, 7));

// area of a circumference and surface area
const circumference = (r) => {
  const PI = Math.PI;
  let circumference = 2 * PI * r;
  return circumference;
};

console.log(circumference(4));

// Assigment conditional

// Write a JavaScript program that accepts two integers and displays the larger of the two.
const justifyer = (a, b) => {
  if (a > b) {
    console.log(`a: ${a} is greater than b: ${b}`);
  } else {
    console.log(`b:${b} is greater than a: ${a}`);
  }
};

console.log(justifyer(1, 6));

const number = prompt("Enter a number: ");

//check if the number is even
if (number % 2 == 0) {
  console.log("The number is even.");
}

// if the number is odd
else if (number) {
  console.log("The number is odd.");
}
