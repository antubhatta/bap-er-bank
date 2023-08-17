// add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // get the withdraw amount from the withdraw input field
    const withdrawField =document.getElementById('withdraw-field')
    const newAmountString=withdrawField.value 
    // also make sure convert the input into a number the by using parse float
    const newAmount = parseFloat(newAmountString)

     // clear the withdraw value
     withdrawField.value=''

    if(isNaN(newAmount)){
        alert('please provide a valid number')
        return
    }

    // get previous withdraw total
    const previousWithdraw= document.getElementById('withdraw-total')
    const previousWithdrawAmountString= previousWithdraw.innerText
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString)

   
    // calculate total withdraw amount
   
    // get the previous balance total

    const balanceTotalElement=document.getElementById('balance-total')
    const previousBalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString)

   

    if(newAmount>previousBalanceTotal){
        alert('bap er bank e eto taka nai')
        return
    }
    const totalWithdrawAmount = newAmount+previousWithdrawAmount
    previousWithdraw.innerText=totalWithdrawAmount
    // calculate new balance toatal
    const newBalanceTotal=previousBalanceTotal-newAmount
    balanceTotalElement.innerText=newBalanceTotal
    // clear the withdraw value
    withdrawField.value=''

})