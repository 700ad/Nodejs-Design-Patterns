// Used to enusre presence of only on instance of a class with centralize access.
// - Can Share State.
// - Can Optimize Resource Usage
// - To Sync Resource Access

// A very Simple Implementation of Singelton is built into Nodejs Module System.
// When a module is required it is cached.
// On requiring again same cached is used.

// CashRegister is imported.
const cr1 = require('../helpers/CashRegister')
// CashRegister is imported again but this time cached instance is referenced.
const cr2 = require('../helpers/CashRegister')


cr1.credit(100);
cr2.credit(200)


// Instead of 200 the value logged is 300.
// As same(cached) instance is referenced.
console.log(cr2.total());
// 300