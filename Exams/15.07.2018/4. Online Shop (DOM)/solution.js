function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    // Write your code here

    let enterProduct = $(".custom-select");
    let enterPrice = $("#price");
    let quantity = $("#quantity");
    let button = $("#submit");
    let display = $(".display");
    let capacity = $("#capacity");
    let sum = $("#sum");
    let totalQuantity = 0;
    let sumVariable = 0;

    enterProduct.on("input", (event) => {
        event.preventDefault();
        event.stopPropagation();

        button.removeAttr("disabled")
    });

    button.on("click", () => {
        let text = `Product: ${enterProduct.val()} Price: ${enterPrice.val()} Quantity: ${quantity.val()}`;

        display.append($("<li>").text(text));

        totalQuantity += +quantity.val();
        capacity.val(totalQuantity);

        sumVariable += +enterPrice.val();
        sum.val(sumVariable);

        enterProduct.val("");
        enterPrice.val(1);
        quantity.val(1);
        button.attr("disabled", true);

        checkQuantity();

        function checkQuantity() {
            if (totalQuantity >= 150) {
                capacity.addClass("fullCapacity").val("full");
                enterProduct.attr("disabled", true);
                enterPrice.attr("disabled", true);
                quantity.attr("disabled", true);
                button.attr("disabled", true);
            }
        }
    });
}