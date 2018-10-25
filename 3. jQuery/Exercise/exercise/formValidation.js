function validate() {
    let usernamePattern = /^[a-zA-Z\d]{3,20}$/g;
    let passwordPattern = /^\w{5,15}$/g;
    let mailPatttern = /^.*?@.*?\..*$/g;
    let allIsValid = true;

    $("#company").on("change", (ev) => { // checkbox
        if ($(ev.target).is(":checked")) {
            $("#companyInfo").css("display", "block");

            if ($("#companyNumber").val() < 1000 && $("#companyNumber").val() > 9999) {
                $("#companyNumber").css("border", "red");
                allIsValid = false;
            } else {
                $("#companyNumber").css("border", "none");
            }
        } else {
            $("#companyInfo").css("display", "none");
        }
    });

    $("#submit").on("click", (ev) => {
        ev.preventDefault();

        let username = $("#username").val();
        let mail = $("#email").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirm-password").val();

        if (usernamePattern.test(username)) {
            $("#username").css("border", "none");
        } else {
            $("#username").css("border", "red");
            allIsValid = false;
        }

        if (mailPatttern.test(mail)) {
            $("#email").css("border", "none");
        } else {
            $("#email").css("border", "red");
            allIsValid = false;
        }

        if (passwordPattern.test(password)) {
            $("#password").css("border", "none");
        } else {
            $("#password").css("border", "red");
            allIsValid = false;
        }

        if (password === confirmPassword) {
            $("#confirm-password").css("border", "none");
        } else {
            $("#confirm-password").css("border", "red");
            allIsValid = false;
        }

        if (allIsValid) {
            $("#valid").css("display", "block");
        } else {
            $("#valid").css("display", "none");
        }
    });
}