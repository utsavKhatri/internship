function factorial(n) {
  if (n == 1 || n == 0) {
    return n;
  }
  return n * factorial(n - 1);
}

const num = prompt("Enter number to find factorial of number :");
if (num >= 0) {
  const answer = "Factorial of " + num + " is " + factorial(num);
  document.getElementById("result").innerHTML = answer;
} else {
  const error = "Enter a positive number.";
  document.getElementById("result").innerHTML = error;
}
