function sum() {
    let prices = document.querySelectorAll("td");
    let cost = 0;

    for (let i = 1; i < prices.length; i+=2) {
        cost += +prices[i].textContent;
    }

    document.getElementById("sum").textContent = cost;
}