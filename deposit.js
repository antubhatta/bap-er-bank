// add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){

    // get the deposit amount from the deposit input field
    const depositField =document.getElementById('deposit-field')
        const newDepositAmountString= depositField.value;
        const newDepositAmount =parseFloat(newDepositAmountString)

        // step-7: create the deposit value
    depositField.value='';

     if(isNaN(newDepositAmount)){
         alert('please provide a valid number')
         return
     }
        
        
    // get the deposit total amount
    const depositTotalELEMENT = document.getElementById('deposit-total')
    const previousDepositAmountString= depositTotalELEMENT.innerText;
    const previousDepositAmount =parseFloat(previousDepositAmountString)
    // add numbers to set the total deposit
    const currentDepositTotal = newDepositAmount+previousDepositAmount
    // set the deposit total
    depositTotalELEMENT.innerText= currentDepositTotal
    // get balance current Total
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString=balanceTotalElement.innerText
    const previousBalanceTotal= parseFloat(previousBalanceTotalString)
    // calculate current total balance
    const currentBalanceTotal = previousBalanceTotal+newDepositAmount
    // set the balance total
    balanceTotalElement.innerText=currentBalanceTotal

    
})