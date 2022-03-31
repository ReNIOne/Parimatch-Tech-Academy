function Calculator() {

    this.read = function() {
        this.a = +prompt('Enter number a:', 0);
        this.b = +prompt('Enter number b:', 0);
    };

    this.mul = function() {
        return this.a * this.b;
    };

    this.div = function() {
        return this.a / this.b;
    };

}

let calculator = new Calculator();
calculator.read();

alert( "Mul=" + calculator.mul() );
alert( "Div=" + calculator.div() );