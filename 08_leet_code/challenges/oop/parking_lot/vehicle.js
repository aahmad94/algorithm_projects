class Vehicle {
  constructor(licenseNo, color) {
    this.licenseNo = licenseNo;
    this.color = color;
  }
}

class Bike extends Vehicle {
  constructor() {
    super();
    this.size = 0.5;
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.size = 1;
  }
}

class Truck extends Vehicle {
  constructor() {
    super();
    this.size = 2;
  }
}

