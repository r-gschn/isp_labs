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

