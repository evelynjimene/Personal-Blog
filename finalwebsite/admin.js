// when the doc is ready
//ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
$(function () {
    // get saved form data out of session using key
    let f = sessionStorage.getItem("form-data");
    // convert data to json
    let fdata = JSON.parse(f);

    console.log(fdata, 'form...');
    // passing in the json data to the form fields
    $('#first').val(fdata.firstName);
    $('#last').val(fdata.lastName);
    $('#email').val(fdata.email);
    $('#phone').val(fdata.phone);
    $('#message').val(fdata.message);
    // remove saved data from session
    sessionStorage.removeItem("form-data");
});

/*
Evelyn Jimenez
02/26/23
9:20pm
admin.js
*/