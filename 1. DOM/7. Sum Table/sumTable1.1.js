function sum() {
    let prices = document.querySelectorAll("tbody tr td:nth-child(2)");
    let cost = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        cost += +prices[i].textContent;
    }

    document.getElementById("sum").textContent = cost;
}