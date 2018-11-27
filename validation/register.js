const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateRegisterInput(data) {
    let errors = {}

    data.firstName = !isEmpty(data.firstName) ? data.firstName : ''
    data.lastName = !isEmpty(data.lastName) ? data.lastName : ''
    data.email = !isEmpty(data.email) ? data.email : ''
    data.phone = !isEmpty(data.phone) ? data.phone : ''

    if(Validator.isEmpty(data.firstName)){
        errors.firstName = "First name field is required"
    }
    if(Validator.isEmpty(data.lastName)){
        errors.lastName = "Last name field is required"
    }
    if(Validator.isEmpty(data.phone)){
        errors.phone = "Phone number is required"
    }
    if(!Validator.isLength(data.phone, {min: 8, max: 12})){
        errors.phone = "Please enter a valid phone number"
    }
    if (!Validator.isEmail(data.email)){
        errors.email = "Email is invalid"
    }




}