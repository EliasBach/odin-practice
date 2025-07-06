const email = document.querySelector("#email")
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("invalid email address!")
    } else {
        email.setCustomValidity("")
    }
    /* If the validity.typeMismatch property returns false, 
    we call the setCustomValidity() method with an empty string. 
    This renders the input valid, so the form will submit. 
    During validation, if any form control has a customError 
    that is not the empty string, form submission is blocked.
    */
})

const phone = document.querySelector("#phone")
phone.addEventListener("input", (event) => {
    if (phone.value === "") {
        phone.setCustomValidity("Phone number is required!")
    } else if (!/^\d{8}$/.test(phone.value)) {
        phone.setCustomValidity("Phone number must be exactly 8 digits!")
    } else {
        phone.setCustomValidity("")
    }
})

// country 
// postalcode 
// password
// password_confirm
// radio


// Input fields don't have submit events - only forms do!
const form = document.querySelector('form')
form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    if (!email.checkValidity()) {
        email.reportValidity()
    }

    if (!phone.checkValidity()) {
        phone.reportValidity()
    }
})