// A factory that returns a decorator function
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// Executing the function returns a decorator
// that uses the string passed in
@Logger('LOGGING PERSON CLASS')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();

console.log(person);
