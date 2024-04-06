function fun310() {
    // Get input values
    const usdAmount = parseFloat(document.getElementById('number').value);
    const cadAmountInput = document.getElementById('number1');
    
    // Validate input
    if (isNaN(usdAmount) || usdAmount <= 0) {
        alert("Please enter a valid amount in USD.");
        return;
    }
    
    // Conversion rates
    const cadToUsdRate = 0.79; // 1 CAD = 0.79 USD
    
    // Convert USD to CAD
    const cadAmount = usdAmount * cadToUsdRate;
    
    // Update CAD amount field
    cadAmountInput.value = cadAmount.toFixed(3);
}
