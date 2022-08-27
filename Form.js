const generateForm = () => {

    const form = document.createElement('form');
    form.setAttribute('class', 'form');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('class', 'label');
    emailLabel.innerHTML = "Email: ";
    const emailInput = document.createElement('input');
    emailInput.setAttribute('class', 'input');
    emailInput.setAttribute('id', 'emailInput');
    emailInput.setAttribute('minlength', '1');
    emailInput.setAttribute('maxlength', '20');
    emailInput.setAttribute('required', 'truea');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.addEventListener('mouseleave', ()=>{
        console.log(emailInput.value.length);
        console.log("too short is: " + emailInput.validity.tooShort);
        console.log("too long is: " + emailInput.validity.tooLong);
        if(emailInput.validity.tooShort || emailInput.validity.tooLong || emailInput.validity.valueMissing){
            emailInput.setCustomValidity("Please enter a valid email!");
            emailInput.reportValidity();
            console.log('firstCheck');
        } else {
            emailInput.setCustomValidity('that works!');
            
            console.log('checked');
            console.log(emailInput.minLength);
        };
    })
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    
    const countryLabel = document.createElement('label');
    countryLabel.setAttribute('class', 'label');
    countryLabel.innerHTML = "Country: ";
    const countryInput = document.createElement('input');
    countryInput.setAttribute('class', 'input');
    countryInput.setAttribute('id', 'countryInput');
    form.appendChild(countryLabel);
    form.appendChild(countryInput);





    const submit = document.createElement('button')
    submit.setAttribute('id', 'submit');
    submit.innerHTML = "Submit";
    form.appendChild(submit);

    return form;

}

export {generateForm};

