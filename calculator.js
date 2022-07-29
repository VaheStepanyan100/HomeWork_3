function Calculator(num = 0) {
    this.plus = function(plusNum) {
        num += plusNum;
    }
    this.minus = function(minNum) {
        num -= minNum;
    }
    this.multiply = function(mulNum) {
        num *= mulNum;
    }
    this.divide = function(divideNum) {
        num /= divideNum;
    }

    this.getResult = function() {
        return num;
    }
}