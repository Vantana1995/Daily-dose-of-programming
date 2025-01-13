const form = document.getElementById("currency-converter");

const resultSpan = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;

  // Validate the amount
  if (isNaN(amount) || amount <= 0) {
    resultSpan.textContent = "Please enter a valid amount greater than 0.";
    return;
  }

  if (!fromCurrency || !toCurrency) {
    resultSpan.textContent = "Please select both currencies.";
    return;
  }

  try {
    const apiKey = "6c35ed2e2df9268f1ad93ec2";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data || !data.conversion_rates) {
      throw new Error("Error fetching exchange rates.");
    }

    const rate = data.conversion_rates[toCurrency];
    if (!rate) {
      throw new Error("Currency not supported.");
    }

    const convertedAmount = (amount * rate).toFixed(2);
    resultSpan.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    console.error("Error:", error);
    resultSpan.textContent = "Failed to fetch exchange rates!";
  }
});
