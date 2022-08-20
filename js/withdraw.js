// console.log('withdraw.js')

// step 01: 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('Button withdraw click');
    // step: 02 start
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    // step: 07 
    withdrawField.value = '';


    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number');
        return;
    }
    // step: 02 end

    // step 03

    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal)

    // step 05

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Taka Nai');
        return;
    }
    // step 04 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal;


    // step :06
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


});