// - Builder Pattern is used mostly to simplify object creation with steps.
// - Mostly used to build objects where constructor expects lots of arguements.

// <Example>
class Car {
    constructor(make, model, engine,
        color, seatsColor, hasLeather,
        drive, hasSunRoof, isPetrol
    )
}
let car = new Car('Mercedes', 'S Class', '3500CC', 'Black', 'Red', true, '4-Wheels', true, true);
// </Example>

// In the above car Example one solution would be to use an object instead of all the paramets.
// But still with Object users will have to look for documentation.

class carBuilder {
    mainSpec(make, model, engine) {
        this.make = make;
        this.model = model;
        this.engine = engine;
        return this;
    }
    options(color, seatsColor, hasLeather) {
        this.color = color;
        this.seatsColor = seatsColor;
        this.hasLeather = hasLeather;
        return this;
    }
    extras(drive, hasSunRoof, isPetrol) {
        this.drive = drive;
        this.hasSunRoof = hasSunRoof;
        this.isPetrol = isPetrol;
        return this;
    }
    build() {
        return new Car({
            make: this.make,
            model: this.model,
            engine: this.engine,
            color: this.color,
            seatsColor: this.seatsColor,
            hasLeather: this.hasLeather,
            drive: this.drive,
            hasSunRoof: this.hasSunRoof,
            isPetrol: this.isPetrol
        })
    }
}

const myCar = new carBuilder()
    .mainSpec('Mercedes', 'S Class', '3500CC')
    .options('Black', 'Red', true)
    .extras('4 Wheels', true, true)
    .build()