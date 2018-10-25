function validate() {
    $('#company').on('change', showHideCompany);

    $('#submit').on('click', function (ev) {
        ev.preventDefault();

        let usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
        let passwordPattern = /^\w{5,15}$/;
        let emailPattern = /@.*\./;
        let companyNumberPattern = /^[1-9]{1}[0-9]{3}$/;

        let allFieldsValid = true;

        if ($('#username').val().match(usernamePattern)) {
            $('#username').css('border', 'none');
        } else {
            $('#username').css('border', 'red');
            allFieldsValid = false;
        }

        if ($('#password').val().match(passwordPattern)) {
            $('#password').css('border', 'none');
        } else {
            $('#password').css('border', 'red');
            allFieldsValid = false;
        }

        if ($('#email').val().match(emailPattern)) {
            $('#email').css('border', 'none');
        } else {
            $('#email').css('border', 'red');
            allFieldsValid = false;
        }

        if ($('#confirm-password').val().match(passwordPattern)
            && $('#confirm-password').val().localeCompare($('#password').val()) == 0) {
            $('#confirm-password').css('border', 'none');
        } else {
            $('#confirm-password').css('border', 'red');
            allFieldsValid = false;
        }

        if ($('#company').is(':checked')) {
            if ($('#companyNumber').val().match(companyNumberPattern)) {
                $('#companyNumber').css('border', 'none');
            } else {
                $('#companyNumber').css('border', 'red');
                allFieldsValid = false;
            }
        }

        if (allFieldsValid) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }

    });

    function showHideCompany() {
        if ($(this).is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none')
        }
    }
}