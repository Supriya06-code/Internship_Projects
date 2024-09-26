// scripts.js

// Initial balance
let balance = 1000;

// Function to deposit money
function deposit() {
  const depositAmount = parseFloat(document.getElementById("depositAmount").value);

  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Please enter a valid deposit amount.");
    return;
  }

  // Update balance
  balance += depositAmount;

  // Update balance on the page
  document.getElementById("balance").innerText = balance;

  // Clear the input field
  document.getElementById("depositAmount").value = '';
}

// Function to withdraw money
function withdraw() {
  const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);

  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Please enter a valid withdrawal amount.");
    return;
  }

  if (withdrawAmount > balance) {
    alert("Insufficient funds. Your balance is: $" + balance);
    return;
  }

  // Update balance
  balance -= withdrawAmount;

  // Update balance on the page
  document.getElementById("balance").innerText = balance;

  // Clear the input field
  document.getElementById("withdrawAmount").value = '';
}
