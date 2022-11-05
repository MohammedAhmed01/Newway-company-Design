function validateform() {
    var username = document.getElementById("username").value;
    var mnumber = document.getElementById("m-number").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("c-password").value;
    var regex = /^[^0-9]+$/;

    if (username == "") {
        document.getElementById("user-error").innerHTML = "*Enter your username!";
        return false;
    }
    if (username.length < 3) {
        document.getElementById("user-error").innerHTML = "*minimum 3 characters!";
        return false;
    }
    else {
        document.getElementById("user-error").innerHTML = "";
    }
    if (username.length > 8) {
        document.getElementById("user-error").innerHTML = "*maximum 8 characters!";
        return false;
    } else {
        document.getElementById("user-error").innerHTML = "";
    }
    if (!username.match(regex)) {
        document.getElementById("user-error").innerHTML = "*numbers are not allowed!";
        return false;
    } else {
        document.getElementById("user-error").innerHTML = "";
    }
    if (mnumber == "") {
        document.getElementById("num-error").innerHTML = "*Enter your mobile number!";
        return false;
    }

    if (isNaN(mnumber)) {
        document.getElementById("num-error").innerHTML = "*can only take numbers!";
        return false;
    }
    else {
        document.getElementById("num-error").innerHTML = "";
    }
    if (mnumber.length != 10) {
        document.getElementById("num-error").innerHTML = "*can only take 10 digits";
        return false;
    } else {
        document.getElementById("num-error").innerHTML = "";
    }
    if (password == "") {
        document.getElementById("pass-error").innerHTML = "*password cannot be empty!";
        return false;
    } else {
        document.getElementById("pass-error").innerHTML = "";
    }
    if (cpassword == "") {
        document.getElementById("cpass-error").innerHTML = "*confirm password cannot be empty!";
        return false;
    } else {
        document.getElementById("cpass-error").innerHTML = "";
    }
    if (cpassword != password) {
        document.getElementById("cpass-error").innerHTML = "*password and confirm password must be same!";
        return false;
    } else {
        document.getElementById("cpass-error").innerHTML = "";
    }

}
