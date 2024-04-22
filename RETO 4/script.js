function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function isFibonacci(number) {
    return isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4);
}

function isPerfectSquare(number) {
    const sqrt = Math.sqrt(number);
    return sqrt * sqrt === number;
}

function checkNumber() {
    const number = parseInt(document.getElementById('numberInput').value);
    let result = `${number} `;
    if (isPrime(number)) result += 'es primo';
    else result += 'no es primo';
    if (isFibonacci(number)) result += ', es fibonacci';
    else result += ', no es fibonacci';
    if (number % 2 === 0) result += ', es par';
    else result += ', es impar';
    document.getElementById('result').innerText = result;
}
