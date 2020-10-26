// Proxy is an object which controls access to another object called Subject.
// Both Proxy and Subject have similar interface.

// Proxy intercepts the intended operations on the subject by augmenting or modifying their behaviour.

// Division by 0 in Javascript gives inifinity.
// In this example a proxy calculator is created which gived error instead of infinti.

class StackCalc {
    constructor() {
        this.stack = [];
    }
    putValue(val) {
        this.stack.push(val)
    }
    getValue(val) {
        return this.stack.pop(val)
    }
    peekValue() {
        return this.stack[this.stack.length - 1]
    }
    clear() {
        this.stack = []
    }
    divide() {
        const divisor = this.getValue();
        const divident = this.getValue();
        const result = divisor / divident;
        this.putValue(result)
        return result;
    }
}

class ProxyCalc {
    constructor(calc) {
        this.calc = calc;
    }
    divide() {
        const divisor = this.calc.peekValue();
        if (divisor === 0) {
            throw Error('Divided By 0')
        }
        return this.calc.divide()
    }
    putValue(value) {
        return this.calc.putValue(value)
    }
    getValue() {
        return this.calc.getValue()
    }
    peekValue() {
        return this.calc.peekValue()
    }
    clear() {
        return this.calc.clear()
    }
}
let calc = new StackCalc();
let pCalc = new ProxyCalc(calc)
calc.putValue(1);
calc.putValue(0);
// console.log(calc.divide()) // Infinity.

pCalc.putValue(1);
pCalc.putValue(0)
console.log(pCalc.divide()) // Error Divided by 0.
