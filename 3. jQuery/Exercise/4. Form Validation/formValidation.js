function validate() {
    let usernameForm = $("#username");
    let emailForm = $("#email");
    let passwordForm = $("#password");
    let passwordConfirm = $("#confirm-password");
    let companyNumber = $("#companyNumber");
    let checkbox = $("#company");
    let companyField = $("#companyInfo");
    let submitBtn = $("#submit");
    let validDiv = $("#valid");

    let usernamePattern = /^[a-zA-Z\d]{3,20}$/;  //?
    let mailPattern = /^(.+@.*\.+)$/;            //?
    let passwordPattern = /^\w{5,15}$/;

    checkbox.on("change", function () {
        if ($(this).is(":checked")) {
            companyField.css("display", "block");
        } else {
            companyField.css("display", "");
        }
    });

    submitBtn.on("click", function (event) {
        event.preventDefault();

        let username = usernameForm.val();
        let mail = emailForm().val();
        let password = passwordForm.val();
        let confirmPassword = passwordConfirm.val();
        let isInvalid = false;

        if (usernamePattern.test(username)) {
            usernameForm.css("border-color", "");
        } else {
            usernameForm.css("border-color", "red");
            isInvalid = true;
        }

        if (mailPattern.test(mail)) {
            emailForm.css("border-color", "");
        } else {
            emailForm.css("border-color", "red");
            isInvalid = true;
        }

        if (password !== confirmPassword) {
            passwordForm.css("border-color", "red");
            passwordConfirm.css("border-color", "red");
            isInvalid = true;
        } else {
            if (passwordPattern.test(password)) {
                passwordForm.css("border-color", "");
            } else {
                passwordForm.css("border-color", "red");
                isInvalid = true;
            }

            if (passwordPattern.test(confirmPassword)) {
                passwordConfirm.css("border-color", "");
            } else {
                passwordConfirm.css("border-color", "red");
                isInvalid = true;
            }
        }

        if (companyField.css("display") === "block") {
            let number = Number(companyNumber.val());

            if (number >= 1000 && number <= 9999) {
                companyNumber.css("border-color", "");
            } else {
                companyNumber("border-color", "red");
                isInvalid = true;
            }
        }

        if (!isInvalid) {
            validDiv.css("display", "block");
        } else {
            validDiv.css("display", "");
        }
    })
}

window.onload = function () {
    validate();
};