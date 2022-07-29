const obj = {};

obj.setSum = function(num) {
    this._num = num;
}

obj.add = function(num) {
    this._num += num;
}

obj.getSum = function() {
    return this._num;
}
