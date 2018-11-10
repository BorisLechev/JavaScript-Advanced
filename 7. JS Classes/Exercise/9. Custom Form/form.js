let result = (function () {
    class Textbox {
        constructor(selector, regex) {
            this._elements = $(selector);
            this.value = $(this._elements[0]).val();
            this._invalidSymbols = regex; // чрез това ще валидираме горния ред
            this.onInput();
        }

        onInput() {
            let that = this; // контекста на класа

            this.elements.on("input", function () {
                let text = $(this).val();
                that.value = text;
            });
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;

            for (let element of this.elements) {
                $(element).val(value);
            }
        }

        get elements() {
            return this._elements;
        }

        isValid() {
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form {
        constructor() {
            this._element = $("<div>").addClass("form"); // div with class form
            this._textboxes = arguments; // take different amount of textbox objects
        }

        get textboxes() {
            return this._textboxes;
        }

        set textboxes(args) {
            for (let argument of args) {
                if (!argument instanceof Textbox) {
                    throw new Error("The give parameter is not a textbox!");
                }
            }
            this._textboxes = args;

            for (let textbox of this._textboxes) {
                for (let element of textbox._elements) {
                    this._element.append($(element));
                }
            }
        }

        submit() {
            let allValid = true;

            for (let textbox of this._textboxes) {
                if (textbox.isValid()) {
                    for (let element of textbox._elements) {
                        $(element).css("border", "2px solid green");
                    }
                } else {
                    for (let element of textbox._elements) {
                        $(element).css("border", "2px solid red");
                    }

                    allValid = false;
                }
            }

            return allValid;
        }

        attach(selector) {
            $(selector).append(this._element); // attach div with all textboxes to selector
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");
