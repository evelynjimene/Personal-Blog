// when user leaves the input field, a function is triggered which 
// transforms the message to lowercase
function lowerCase() {
    const x = document.getElementById("message");
    x.value = x.value.toLowerCase();
}
// the function bigImg is trigerred when the user hovers mouse pointer over img
function bigImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}
// the function normalImg is triggered when the pointer is moved away from img
function normalImg(x) {
    x.style.height = "50px";
    x.style.width = "50px";
}

//when caption is clicked, slideToggle() will make table data disappear

$(document).ready(function () {
    $("caption").click(function () {
        $("td").slideToggle();
    });

    //when button is clicked, form from orlandotrip.html is loaded into div
    $("#getdata").click(function () {
        $("div").load('orlandotrip.html #myForm');
    });
});
// form javascript

// when the doc is ready, add an event handler to the submit action of the form
$(function () {
    $('form').submit((e) => {
        e.preventDefault();
        // grab the values out of the txt boxes
        let firstName = $('#first').val();
        let lastName = $('#last').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let message = $('#message').val();

        // save values as a json object
        let FormData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message

        }
        // store into session
        sessionStorage.setItem("form-data", JSON.stringify(FormData));

        //let f = sessionStorage.getItem("form-data");

        //console.log(JSON.parse(f), 'form...');
        // navigate to admin page
        document.location.href = 'admin.html';
    })
    /* alert() method displays an alert box when submit button on 
    form is clicked */
});
function myFunction() {
    alert("Form submitted!");
}
//The function is executed when the form field gets focus
$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color", "linen");
    });
    $("input").blur(function () {
        $(this).css("background-color", "Beige");
    });
});

/*
Evelyn Jimenez
03/07/23
6:55pm
myscript.js 
*/