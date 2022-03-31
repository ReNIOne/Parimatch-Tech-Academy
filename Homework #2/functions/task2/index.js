const fibNumber = prompt("Введите индекс:");
let n = fibNumber;

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
alert(`Число Фибоначчи = ${fib(n)}` );// 2