// step-1: add click even handler with the submit btn
document.getElementById('btn-submit').addEventListener('click',function(){
//    step-2: get the email address inside the email input field
    // always remember to use .value to text get from an input field
    const userEmail= document.getElementById('user-email');
    const email= userEmail.value
    // step-3: get password
    // step-3-a:set id on the html Element
    // step-3-2:get the element
    // 3-c: get the value from the element
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value
    
    // Do not verify email password on the client side
    // step-4: verify email and password
    if(email==='antubhatta09@gmail.com' && password==='antu'){
        window.location.href='bank-inside.html'
    }
    else{
        alert('Tui password vulsos kn toke teijjo goshona korlam gadha')
    }
})