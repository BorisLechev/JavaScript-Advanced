function extract() {
    let data = document.getElementById("content").textContent;
    let pattern = /\((.+)\)/g;
    let match = pattern.exec(data);
    let output = [];

    while (match) {
        output.push(match[1]);

        match = pattern.exec(data);
    }

    return output.join("; ");
}