const n1 = prompt("Введите первое число: ");
const n2 = prompt("Введите второе число: ");

const n1Number = Number(n1);
const n2Number = Number(n2);

const isNotInteger = !Number.isInteger(n1Number) || !Number.isInteger(n2Number);

if (isNotInteger) {
    console.error("Error");
} else {
    for (let i = n1Number; i <= n2Number; i++) {
        console.log(i);
    }
}


