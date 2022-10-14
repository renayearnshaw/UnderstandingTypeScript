// Decorator function that's called on an instance property and receives the arguments:
//   1. The prototype of the class containing the property
//   2. The name of the property
// It will run when the class definition is registered by JavaScript
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

// Decorator function that's called on an accessor of an instance property and receives the arguments:
//   1. The prototype of the class containing the accessor
//   2. The name of the accessor
//   3. The property descriptor
// It will run when the class definition is registered by JavaScript
function Log2(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Decorator function that's called on an instance method and receives the arguments:
//   1. The prototype of the class containing the method
//   2. The name of the method
//   3. The property descriptor
// It will run when the class definition is registered by JavaScript
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Decorator function that's called on a parameter of an instance method and receives the arguments:
//   1. The prototype of the class containing the method
//   2. The name of the method
//   3. The index of the argument
// It will run when the class definition is registered by JavaScript
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Price must be positive');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

class Course {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  console.log(createdCourse);
});
