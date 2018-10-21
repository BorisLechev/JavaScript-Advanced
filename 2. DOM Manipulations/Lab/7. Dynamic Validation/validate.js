function validate() {
    let mailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;
    let inputMail = document.getElementById("email");

    inputMail.addEventListener("change", () => {
        if (mailPattern.test(inputMail.value)) {
            inputMail.removeAttribute("class");
        } else {
            inputMail.className = "error";
        }
    });
}