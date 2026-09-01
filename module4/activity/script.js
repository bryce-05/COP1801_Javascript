// Verify that the user entered one of the accepted service-quality values.
function isValidServiceQuality(serviceQuality) {
  return serviceQuality === "great" ||
         serviceQuality === "ok" ||
         serviceQuality === "poor";
}

// Verify that the service amount is a number from $5.00 through $500.00.
function isValidServiceAmount(serviceAmount) {
  return Number.isFinite(serviceAmount) &&
         serviceAmount >= 5 &&
         serviceAmount <= 500;
}

// Calculate and return the recommended tip for the selected service quality.
function calculateTip(serviceAmount, serviceQuality) {
  let tipRate;

  if (serviceQuality === "great") {
    tipRate = 0.20;
  } else if (serviceQuality === "ok") {
    tipRate = 0.15;
  } else {
    tipRate = 0.10;
  }

  return serviceAmount * tipRate;
}

const output = document.getElementById("output");
const demoValues = new URLSearchParams(window.location.search);
const amountEntry = demoValues.has("amount")
  ? demoValues.get("amount")
  : prompt("Enter the dollar amount of the service ($5.00-$500.00):");
const qualityEntry = demoValues.has("quality")
  ? demoValues.get("quality")
  : prompt("Was the service quality great, ok, or poor?");
const serviceAmount = Number(amountEntry);
const serviceQuality = qualityEntry?.trim().toLowerCase();

// Display an error and stop processing when either entry is invalid.
if (!isValidServiceQuality(serviceQuality)) {
  output.classList.add("error");
  output.textContent = "Invalid service quality. Please enter great, ok, or poor.";
} else if (!isValidServiceAmount(serviceAmount)) {
  output.classList.add("error");
  output.textContent = "Invalid service amount. Please enter an amount between $5.00 and $500.00.";
} else {
  const tipAmount = calculateTip(serviceAmount, serviceQuality);

  output.textContent =
    `For a service amount of $${serviceAmount.toFixed(2)}, ` +
    `the recommended tip is $${tipAmount.toFixed(2)} ` +
    `based on ${serviceQuality} service.`;
}
