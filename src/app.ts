// A factory that returns a decorator function
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const person = new constructor();
    const hookElement = document.getElementById(hookId);
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector('h1')!.textContent += ` is ${person.name}`;
    }
  };
}

// Executing the function returns a decorator
// that uses the strings passed in
@WithTemplate('<h1>My Person object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();

console.log(person);
