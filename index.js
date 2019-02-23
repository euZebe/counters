function toStyledDigit(digit) {
    return `<span class="number">${digit}</span>`;
}

function splitNumber(number) {
    return number
        .toString()
        .split("")
        .map(toStyledDigit)
        .join("");
}

function updateValue(value) {
    document.getElementById("counter").innerHTML = splitNumber(value);
}

let NUMBER = 1;

updateValue(NUMBER);

const randomNumber = () => Math.floor(Math.random() * 20);

setInterval(() => updateValue(NUMBER += randomNumber()), 200);
