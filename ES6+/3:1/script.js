function generateArray() {
    const n = document.getElementById("number-input").value;
    
    if (n <= 2) {
      alert("Please enter a number greater than 2.");
      return;
    }
    
    const array = [2];
    let sum = 0;
    let product = 1;
    
    for (let i = 1; i < n - 1; i++) {
      if (i === 1) {
        sum = 2 + array[i - 1];
        array.push(sum);
      } else {
        product *= i + 1;
        array.push(product);
      }
    }
    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Generated array: ${array}</p>`;
  }
  