function validate() {
    if (document.myForm.email.value == "") {
        alert("Please provide your email/phone number!");
        document.myForm.email.focus();
        window.open("../error.html", "_self");
        return false;
    }
    if (document.myForm.password.value == "") {
        alert("Please enter password!");
        document.myForm.password.focus();
        window.open("../error.html", "_self");
        return false;
    }
    window.open("../mainPage.html");
    return (true);
}