function splitNumber(number) {
    return number
        .toString()
        .split("")
        .map(digit => `<span class="number">${digit}</span>`)
        .join("");
}

function updateValue(value) {
    document.getElementById("counter").innerHTML = splitNumber(value);
}

let NUMBER = 1;

updateValue(NUMBER);

setInterval(() => updateValue(++NUMBER), 200);
