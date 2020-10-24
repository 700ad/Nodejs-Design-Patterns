
// - With factory objects can be created without 'new' Keyword, it can be more pleasing. 
// - It Decouples Object Creation and Implementaion.

const { get } = require("http");

carFactory = name => new Car(name);
const car = createCar('car');

// - With 'new' Only Specific Type of objects can be created.
// - With Factory object creation can be much more flexible.

carFactory = name => {
    if (name === 'Mercedes') {
        return new Car('Mercedes');
    } else if (name === 'Porsche') {
        return new Car('Porsche');
    } else if (name === 'BMW') {
        return new Car('BMW');
    } else {
        throw new Error('Car Not Supported.');
    }
}

// - Factory can provide Encapsulation as well.

carFactory = (name) => {
    const prps = {};
    const car = {
        setName(name) {
            if (!name) {
                throw new Error('A person must have a name')
            }
            prps.name = name
        },
        getName() {
            return prps.name;
        }
    }
    car.setName(name);
    return car;
}