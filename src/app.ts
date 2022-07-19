// A factory that returns a decorator function
function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookElement = document.getElementById(hookId);
    if (hookElement) {
      hookElement.innerHTML = template;
    }
  };
}

// Executing the function returns a decorator
// that uses the string passed in
@WithTemplate('<h1>My Person object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();

console.log(person);
