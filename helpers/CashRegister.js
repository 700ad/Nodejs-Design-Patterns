let cash = 0;

const CashRegister = {
    credit(amount) {
        cash = cash + amount;
        return cash;
    },
    debit(amount) {
        return cash <= amount ? cash = cash - amount : 0;
    },
    total() {
        return cash;
    }
}

module.exports = CashRegister;