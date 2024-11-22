// Лабораторная работа №2
function calculateSquare() {
    let a = prompt("Введите сторону квадрата:");
    if (a !== null && !isNaN(a)) {
        let S = a * a;
        alert("Площадь квадрата: " + S);
    } else {
        alert("Пожалуйста, введите числовое значение.");
    }
}

function calculateTons() {
    let M = prompt("Введите массу в килограммах:");
    if (M !== null && !isNaN(M)) {
        let tons = Math.floor(M / 1000);
        alert("Количество полных тонн: " + tons);
    } else {
        alert("Пожалуйста, введите числовое значение.");
    }
}

// Лабораторная работа №3
function checkNumber() {
    let A = parseInt(document.getElementById('number1').value);

    if (isNaN(A) && A !== null) {
        document.getElementById('result1').innerText = "Пожалуйста, введите целое число.";
    } else if (A % 2 !== 0 && A >= 10 && A <= 99) {
        document.getElementById('result1').innerText = `TRUE`;
    } else {
        document.getElementById('result1').innerText = `FALSE`;
    }
}

function modifyNumber() {
    let number2 = parseInt(document.getElementById('number2').value);

    if (isNaN(number2) && number2 !== null) {
        document.getElementById('result2').innerText = "Пожалуйста, введите целое число.";
    } else if (number2 > 0 && number2 % 2 !== 0) {
        document.getElementById('result2').innerText = number2 + 1;
    } else {
        document.getElementById('result2').innerText = number2 - 2;
    }
}

function calculateFunction() {
    let x = parseFloat(document.getElementById('numberX1').value);
    let a = 7.1;
    let b = 3.2;

    if (isNaN(x) && x !== null) {
        document.getElementById('result3').innerText = "Пожалуйста, введите число для x.";
    } else {
        if (x <= 0) {
            document.getElementById('result3').innerText = a + 0.5 * Math.exp(-x);
        } else if (x > 0 && x < 4) {
            document.getElementById('result3').innerText = Math.sin(b ** 2 * x);
        } else if (x >= 4) {
            document.getElementById('result3').innerText = Math.sqrt(x ** 2 + 2 * a);
        }
    }
}

function calculateSwitchFunction() {
    let x = parseFloat(document.getElementById('numberX2').value);
    let a = 7.1;
    let b = 3.2;

    if (isNaN(x) && x !== null) {
        document.getElementById('result4').innerText = "Пожалуйста, введите число для x.";
    } else {
        switch (x) {
            case -1:
                document.getElementById('result4').innerText = a + 0.5 * Math.exp(-x);
                break;
            case 3:
                document.getElementById('result4').innerText = Math.sin(b ** 2 * x);
                break;
            case 4:
                document.getElementById('result4').innerText = Math.sqrt(x ** 2 + 2 * a);
                break;
            default:
                document.getElementById('result4').innerText = "Неверное значение x.";
                break;
        }
    }
}

// Лабораторная работа №4
let negativeSum = 0;
let negativeCount = 0;
let totalCount = 0;

function calculateAverage() {
    let input = parseFloat(document.getElementById('number3').value);

    if (isNaN(input)) {
        document.getElementById('result5').innerText = "Пожалуйста, введите число.";
        return;
    }

    totalCount++;

    if (input < 0) {
        negativeSum += input;
        negativeCount++;
    }

    if (totalCount < 10) {
        document.getElementById('result5').innerText = `Число добавлено. Введено чисел: ${totalCount}/10.`;
    } else {
        if (negativeCount == 0) {
            document.getElementById('result5').innerText = "Отрицательные числа отсутствуют.";
        } else {
            const average = negativeSum / negativeCount;
            document.getElementById('result5').innerText = `Среднее арифметическое отрицательных чисел: ${average}`;
        }

        negativeSum = 0;
        negativeCount = 0;
        totalCount = 0;
    }
}

function printNumbers() {
    let numberA = parseInt(document.getElementById('numberA').value);
    let numberB = parseInt(document.getElementById('numberB').value);
    
    if (isNaN(numberA) || isNaN(numberB)) {
        document.getElementById('result6').innerText = "Пожалуйста, введите целые числа.";
        return;
    }

    if (numberA >= numberB) {
        document.getElementById('result6').innerText = "Число A должно быть меньше числа B.";
        return;
    }

    let output = "";
    let count = 0;

    for (let i = numberA; i <= numberB; i++) {
        output += i + " "
        count++;
    }

    document.getElementById('result6').innerText = `Числа: ${output}\nКоличество чисел: ${count}`;
}
