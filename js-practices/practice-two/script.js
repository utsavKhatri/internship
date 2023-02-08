function PrintResult() {
  event.preventDefault();
  const n = document.getElementById("numberInput").value;
  function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
      return answer;
    } else if (n > 1) {
      for (let i = n; i >= 1; i--) {
        answer = answer * i;
      }
      return answer;
    } else {
      return "number has to be positive.";
    }
  }
  answer = "Factorial of " + n + " is " + factorial(n);
  console.log(answer);
  document.getElementById("result").innerHTML= answer;
}
