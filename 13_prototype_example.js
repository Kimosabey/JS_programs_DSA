const vehicle = {
  first: 'Kimosabey',
  dirve: function () {
    console.log('first', this.first);
  },
};

const car = {
  make: 'honda',
};

Object.setPrototypeOf(car, vehicle);
console.log('()->', car.dirve());
console.log('->', car.first);
F;
