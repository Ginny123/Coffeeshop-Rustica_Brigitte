/*eslint-disable*/
console.log("Run!");

function formValid() {
    const conForm = document.querySelector(".contact__formular");
    
    const btnMail = document.querySelector("#btnmail")
        
    conForm.addEventListener("submit", (e) => {        
        e.preventDefault();

        checkInputs();

        console.log("Event?");
    });
    console.log("Event?");
}



function checkInputs() {
    // get the values from the inputs
    console.log("Läuft!");
    const inputName = document.querySelector(".input-name");
    const inputMail = document.querySelector(".input-mail");
    const inputPhone = document.querySelector(".input-phone");

    const inputNameValue = inputName.value;
    const inputMailValue = inputMail.value;
    const inputPhoneValue = inputPhone.value;

    console.log(inputNameValue);
    

    if ((inputNameValue === "") || (!isName(inputNameValue))) {
        console.log("Fülle bitte die Felder aus!")
        // show error
        // add error class        
        inputName.classList.add("check-valid");        
    }
    
    if ((inputMailValue === "") || (!isMail(inputMailValue))) {
        console.log("Fülle bitte die Felder aus!")
        // show error
        // add error class        
        inputName.classList.add("check-valid");
    }

    if ((inputPhoneValue === "") || (!isPhoneNumber(inputPhoneValue))) {
        console.log("Fülle bitte die Felder aus!")
        // show error
        // add error class        
        inputName.classList.add("check-valid");
    }
}

function isName(inputName) {
    return /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.text(inputName);
}

function isMail(inputMail) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.text(inputMail);
}

function isPhoneNumber(inputPhone) {
    return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.text(inputPhone);
}
console.log("???");
formValid();

export default formValid;