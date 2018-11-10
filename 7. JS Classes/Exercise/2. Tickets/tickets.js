function solve(ticketDescriptions, sortingCriteria) {
    class Ticket {
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = +price;
            this.status = status;
        }
    }

    let array = [];

    ticketDescriptions.forEach((el) => {
        let [destinationName, price, status] = el.split("|");

        array.push(new Ticket(destinationName, price, status));
    });

    return array.sort((a, b) => a[sortingCriteria] > b[sortingCriteria]);
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));