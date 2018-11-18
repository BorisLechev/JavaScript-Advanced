function makeReservation(containerId) {
    let fullName = $("#fullName");
    let mail = $('#email');
    let phone = $('#phoneNumber');
    let address = $('#address');
    let postalCode = $('#postalCode');

    if ($("#fullName") && $("#email")) {
        $("#submit").on("click", (event) => {
            // event.preventDefault();
            // event.stopPropagation();

            $("#infoPreview")
                .append(`<li>Name: ${fullName.val()}</li>`)
                .append(`<li>E-mail: ${mail.val()}</li>`)
                .append(`<li>Phone: ${phone.val()}</li>`)
                .append(`<li>Address: ${address.val()}</li>`)
                .append(`<li>Postal Code: ${postalCode.val()}</li>`);

            $('input').val('');
            $("#submit").attr("disabled", true);
            $("#edit").removeAttr("disabled");
            $("#continue").removeAttr("disabled");
        });

        $("#edit").on("click", (event) => {
            // event.preventDefault();
            // event.stopPropagation();

            let li = $("li");

            $("#fullName").val(li[0].textContent.substring(6));
            $("#email").val(li[1].textContent.substring(8));
            $("#phoneNumber").val(li[2].textContent.substring(7));
            $("#address").val(li[3].textContent.substring(9));
            $("#postalCode").val(li[4].textContent.substring(13));

            $("#infoPreview").text("");
            $("#submit").removeAttr("disabled");
            $("#edit").attr("disabled", true);
            $("#continue").attr("disabled", true);
        });

        $("#continue").on("click", (event) => {
            // event.preventDefault();
            // event.stopPropagation();

            $("#container")
                .append(`<h2>Payment details</h2>`)
                .append($(`<select id="paymentOptions" class="custom-select">`)
                    .append(`<option selected disabled hidden>Choose</option>`)
                    .append($(`<option value="creditCard">Credit Card</option>`))
                    .append($(`<option value="bankTransfer">Bank Transfer</option>`)))
                .append(`<div id="extraDetails"></div>`);

            $("#submit").attr("disabled", true);
            $("#edit").attr("disabled", true);
            $("#continue").attr("disabled", true);
            $('#paymentOptions').on('change', appendExtraDetails);

            function appendExtraDetails() {
                let selected = $("#paymentOptions").val();
                $('#extraDetails').empty();

                if (selected === "creditCard") {
                    $("#extraDetails")
                        .append($(`<div class="inputLabel">Card Number<input></div></br>`))
                        .append($(`<div class="inputLabel">Expiration Date<input></div></br>`))
                        .append($(`<div class="inputLabel">Security Numbers<input></div></br>`));
                } else {
                    $("#extraDetails")
                        .append($(`<p>You have 48 hours to transfer the amount to:</br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`));
                }

                $("#extraDetails")
                    .append($(`<button id="checkOut">Check Out</button>`));

                $("#checkOut").on("click", (event) => {
                    // event.preventDefault();
                    // event.stopPropagation();

                    $('#wrapper').empty();
                    $('#wrapper').append($(`<h4>Thank you for your reservation!</h4>`));
                });
            }
        });
    }
}