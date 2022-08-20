//  step 01: add eventlistener  to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button clicked');
    // step 02: get the deposit amount from the deposit input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmount);
    // step: 07 : clear the deposit field 
    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('please provide a valid number');
        return;
    }
    // step :3 : current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step : 4 add numbers to save the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // console.log(depositTotal);
    depositTotalElement.innerText = currentDepositTotal;

    // step: 05: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 06: Calculate current balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;



    // step: 07 : clear the deposit field 
    depositField.value = '';
});