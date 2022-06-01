const nameRegex = /^[\p{L} ,.'-]+$/u
const phoneRegex = /^\s*\+?\s*([0-9][\s-]*){8,}$/
const emailRegex = /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/


function formValidation(formInput){

    if (!formInput.name.value.match(nameRegex)){
        showError(formInput.name)
    }

    if(!formInput.phonenumber.value.match(phoneRegex)){
        showError(formInput.phonenumber, "Telefonnummer er for kort eller har bogstaver")
    }

    if(!formInput.email.value.match(emailRegex)){
        showError(formInput.email, "Du har indtastet din email forkert")
    }

    else{
        console.log("Formen er godkendt")
    }
}


function showError(error){
    error.classList.add('border-error')
        if (!error.nextElementSibling) {
                error.addEventListener("keypress", function(){
                    error.classList.remove('border-error')
                    if(error.nextElementSibling){
                        error.nextElementSibling.remove();
                    }
                })
        }

}