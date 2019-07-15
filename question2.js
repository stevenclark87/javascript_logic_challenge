
var answer = (x,y) => {
    do {
        Array.prototype.randomElement = function () {
            return this[Math.floor(Math.random() * this.length)]
        }
        var ran1 = x.randomElement();
        var ran2 = x.randomElement();
        var elementSum = ran1 + ran2;
    }
    while (y != elementSum);
    return [ran1,ran2]
}

answer([1,2,3], 4);