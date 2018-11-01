function orderRectangles(input) {
    let container = [];

    input.forEach((nestedArray) => {
        container.push(createRectangle(nestedArray[0], nestedArray[1]));
    });

    container.sort((a, b) => a.compareTo(b));
    return container;

    function createRectangle(width, height) {
        let rectangle = {
            width: width,
            height: height,
            area: () => rectangle.width * rectangle.height,
            compareTo: function (other) {
                let areaDiff = other.area() - rectangle.area();

                return areaDiff || other.width - rectangle.width;  // if areaDiff !== 0 return areaDiff
            }
        };

        return rectangle;
    }
}

console.log(orderRectangles([[10, 5], [5, 12]]));