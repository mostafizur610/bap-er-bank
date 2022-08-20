
// step 01: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('submit button clicked');

    //  step : 2 get the email address inside the input field. alwaays remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step : 03 get password
    // 3.a set id on the html element
    // 3.b get the value 
    // 3.c get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);
    // Danger do not check or verify email password on the client side

    //  step 04 : verify email or password
    if (email === 'sontan@baap.com' && password === 'secret') {
        // conseol.log('valid user');
        window.location.href = 'bank.html';
    }
    else {
        // conseol.log('invalid user');
        alert('you are wrong, go ahead');
    }
})