const items = [
  {
    title: 'Use === Comparison',
    slug: 'use-===-comparison',
    refs: [{
      title: 'w3schools',
      url: 'https://w3schools.com/'
    }],
    do: {
      description: 'The === operator forces comparison of values and type.',
      codes: [
        '0 === "";',
        '1 === "1";',
        '1 === true;'
      ]
    },
    dont: {
      description: 'The == comparison operator always converts (to matching types) before comparison.',
      codes: [
        '0 == "";',
        '1 == "1";',
        '1 == true;'
      ]
    }
  },
  {
    title: "Don't Use new Object()",
    slug: "dont-use-new-object",
    refs: [{
      title: 'w3schools',
      url: 'https://w3schools.com/'
    }],
    do: {
      codes: [
        'var x1 = {};',
        'var x2 = "";',
        'var x3 = 0;',
        'var x4 = false;',
        'var x5 = [];',
        'var x6 = /()/;',
        'var x7 = function(){};',
      ]
    },
    dont: {
      codes: [
        'var x1 = new Object();',
        'var x2 = new String("");',
        'var x3 = new Number(0);',
        'var x4 = new Boolean(false);',
        'var x5 = new Array();',
        'var x6 = new RegExp();',
        'var x7 = new Function();',
      ]
    }
  },
  {
    title: 'Declare Variables Outside of the For Statement',
    slug: 'declare-variables-outside-of-the-for-statement',
    refs: [{
      title: 'tutsplus',
      url: 'https://code.tutsplus.com/tutorials/24-javascript-best-practices-for-beginners--net-5399'
    }],
    do: {
      description: `Notice how we must determine the length of the array for each iteration, and how we traverse the dom to find the "container" element each time -- highly inefficient!`,
      codes: [
`var container = document.getElementById('container');
for(var i = 0, len = someArray.length; i < len;  i++) {
   container.innerHtml += 'my number: ' + i;
   console.log(i);
}`
      ]
    },
    dont: {
      description: `When executing lengthy "for" statements, don't make the engine work any harder than it must`,
      codes: [
`for(var i = 0; i < someArray.length; i++) {
  var container = document.getElementById('container');
  container.innerHtml += 'my number: ' + i;
  console.log(i);
}`
      ]
    }
  },
  {
    title: 'End Your Switches with Defaults',
    slug: 'end-your-switches-with-defaults',
    description: 'Always end your switch statements with a default. Even if you think there is no need for it.',
    refs: [{
      title: 'w3schools',
      url: 'https://w3schools.com/'
    }],
    do: {
      codes: [
        `switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  default:
    day = "Unknown";
}`
      ]
    },
    dont: {
      codes: [
        `switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
}`
      ]
    }
  },
  {
    title: 'Use Array push instead of direct assignment to add items to an array.',
    slug: 'use-array-push-instead-of-direct-assignment',
    refs: [{
      title: 'airbnb',
      url: 'https://github.com/airbnb/javascript'
    }],
    do: {
      codes: [
`const someStack = [];
someStack.push('abracadabra');`
      ]
    },
    dont: {
      codes: [
`const someStack = [];
someStack[someStack.length] = 'abracadabra';`
      ]
    }
  },
  {
    title: 'Use Template Literals',
    slug: 'use-template-literals',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals'
    }],
    do: {
      description: 'Use template literals for string interpolation and concatenation.',
      codes: [
        'const name = "John";',
        'const age = 30;',
        'const sentence = `My name is ${name} and I am ${age} years old.`;',
      ]
    },
    dont: {
      description: 'Avoid using concatenation with the + operator.',
      codes: [
        'const name = "John";',
        'const age = 30;',
        'const sentence = "My name is " + name + " and I am " + age + " years old.";',
      ]
    }
  },
  {
    title: 'Use Arrow Functions',
    slug: 'use-arrow-functions',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
    }],
    do: {
      description: 'Use arrow functions for concise and readable function expressions.',
      codes: [
        'const add = (a, b) => a + b;',
      ]
    },
    dont: {
      description: 'Avoid using verbose function expressions.',
      codes: [
        'const add = function(a, b) {',
        '  return a + b;',
        '};',
      ]
    }
  },
  {
    title: 'Use Const and Let',
    slug: 'use-const-and-let',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const'
    }],
    do: {
      description: 'Use const and let for variable declarations.',
      codes: [
        'const PI = 3.14;',
        'let name = "John";',
      ]
    },
    dont: {
      description: 'Avoid using var for variable declarations.',
      codes: [
        'var PI = 3.14;',
        'var name = "John";',
      ]
    }
  },
  {
    title: 'Use Destructuring Assignment',
    slug: 'use-destructuring-assignment',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
    }],
    do: {
      description: 'Use destructuring for cleaner variable assignment from objects and arrays.',
      codes: [
        'const { name, age } = person;',
        'const [first, second] = array;',
        'const { data: userData } = response;',
      ]
    },
    dont: {
      description: 'Avoid verbose property access.',
      codes: [
        'const name = person.name;',
        'const age = person.age;',
        'const first = array[0];',
        'const second = array[1];',
      ]
    }
  },
  {
    title: 'Use Spread and Rest Operators',
    slug: 'use-spread-and-rest-operators',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'
    }],
    do: {
      description: 'Use spread operator for array/object copying and rest for function parameters.',
      codes: [
        'const newArray = [...oldArray, newItem];',
        'const newObj = { ...oldObj, newProp: value };',
        'function sum(...numbers) { return numbers.reduce((a, b) => a + b); }',
      ]
    },
    dont: {
      description: 'Avoid manual array/object copying and verbose parameter handling.',
      codes: [
        'const newArray = oldArray.slice();',
        'newArray.push(newItem);',
        'const newObj = Object.assign({}, oldObj, { newProp: value });',
        'function sum() { return Array.from(arguments).reduce((a, b) => a + b); }',
      ]
    }
  },
  {
    title: 'Use Async/Await Instead of Promises',
    slug: 'use-async-await-instead-of-promises',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function'
    }],
    do: {
      description: 'Use async/await for cleaner asynchronous code.',
      codes: [
        'async function fetchData() {',
        '  try {',
        '    const response = await fetch("/api/data");',
        '    const data = await response.json();',
        '    return data;',
        '  } catch (error) {',
        '    console.error("Error:", error);',
        '  }',
        '}',
      ]
    },
    dont: {
      description: 'Avoid complex Promise chains.',
      codes: [
        'function fetchData() {',
        '  return fetch("/api/data")',
        '    .then(response => response.json())',
        '    .then(data => data)',
        '    .catch(error => console.error("Error:", error));',
        '}',
      ]
    }
  },
  {
    title: 'Handle Errors Properly',
    slug: 'handle-errors-properly',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling'
    }],
    do: {
      description: 'Always handle errors with try-catch blocks and provide meaningful error messages.',
      codes: [
        'try {',
        '  const result = riskyOperation();',
        '  return result;',
        '} catch (error) {',
        '  console.error("Operation failed:", error.message);',
        '  throw new Error("Custom error message");',
        '}',
      ]
    },
    dont: {
      description: 'Avoid silent failures and generic error handling.',
      codes: [
        'const result = riskyOperation(); // No error handling',
        'try {',
        '  const result = riskyOperation();',
        '} catch (error) {',
        '  // Empty catch block',
        '}',
      ]
    }
  },
  {
    title: 'Use Optional Chaining and Nullish Coalescing',
    slug: 'use-optional-chaining-and-nullish-coalescing',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining'
    }],
    do: {
      description: 'Use optional chaining and nullish coalescing for safe property access.',
      codes: [
        'const name = user?.profile?.name ?? "Anonymous";',
        'const age = user?.age ?? 0;',
        'const email = user?.contact?.email?.toLowerCase();',
      ]
    },
    dont: {
      description: 'Avoid verbose null checks and unsafe property access.',
      codes: [
        'const name = user && user.profile && user.profile.name || "Anonymous";',
        'const age = user && user.age || 0;',
        'const email = user && user.contact && user.contact.email && user.contact.email.toLowerCase();',
      ]
    }
  },
  {
    title: 'Use Array Methods Instead of Loops',
    slug: 'use-array-methods-instead-of-loops',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    }],
    do: {
      description: 'Use functional array methods for cleaner, more readable code.',
      codes: [
        'const doubled = numbers.map(n => n * 2);',
        'const evens = numbers.filter(n => n % 2 === 0);',
        'const sum = numbers.reduce((acc, n) => acc + n, 0);',
        'const hasEven = numbers.some(n => n % 2 === 0);',
      ]
    },
    dont: {
      description: 'Avoid imperative loops when functional methods are more appropriate.',
      codes: [
        'const doubled = [];',
        'for (let i = 0; i < numbers.length; i++) {',
        '  doubled.push(numbers[i] * 2);',
        '}',
        'const evens = [];',
        'for (let i = 0; i < numbers.length; i++) {',
        '  if (numbers[i] % 2 === 0) {',
        '    evens.push(numbers[i]);',
        '  }',
        '}',
      ]
    }
  },
  {
    title: 'Use Object.freeze() for Immutability',
    slug: 'use-object-freeze-for-immutability',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze'
    }],
    do: {
      description: 'Use Object.freeze() to prevent accidental mutations of objects.',
      codes: [
        'const config = Object.freeze({',
        '  apiUrl: "https://api.example.com",',
        '  timeout: 5000',
        '});',
        '// config.apiUrl = "new-url"; // This will fail silently',
      ]
    },
    dont: {
      description: 'Avoid mutable objects when immutability is needed.',
      codes: [
        'const config = {',
        '  apiUrl: "https://api.example.com",',
        '  timeout: 5000',
        '};',
        '// config.apiUrl = "new-url"; // This will work and cause bugs',
      ]
    }
  },
  {
    title: 'Use Default Parameters',
    slug: 'use-default-parameters',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters'
    }],
    do: {
      description: 'Use default parameters instead of manual checks.',
      codes: [
        'function greet(name = "World", greeting = "Hello") {',
        '  return `${greeting}, ${name}!`;',
        '}',
        'function createUser(name, age = 18, isActive = true) {',
        '  return { name, age, isActive };',
        '}',
      ]
    },
    dont: {
      description: 'Avoid manual parameter checking.',
      codes: [
        'function greet(name, greeting) {',
        '  name = name || "World";',
        '  greeting = greeting || "Hello";',
        '  return greeting + ", " + name + "!";',
        '}',
        'function createUser(name, age, isActive) {',
        '  age = age || 18;',
        '  isActive = isActive !== undefined ? isActive : true;',
        '  return { name, age, isActive };',
        '}',
      ]
    }
  },
  {
    title: 'Use Modules and Import/Export',
    slug: 'use-modules-and-import-export',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules'
    }],
    do: {
      description: 'Use ES6 modules for better code organization and tree-shaking.',
      codes: [
        '// math.js',
        'export const add = (a, b) => a + b;',
        'export const multiply = (a, b) => a * b;',
        'export default class Calculator { }',
        '',
        '// main.js',
        'import Calculator, { add, multiply } from "./math.js";',
        'import * as utils from "./utils.js";',
      ]
    },
    dont: {
      description: 'Avoid global variables and script tags for code organization.',
      codes: [
        '// Global variables',
        'window.add = function(a, b) { return a + b; };',
        'window.multiply = function(a, b) { return a * b; };',
        '',
        '// Script tags in HTML',
        '<script src="math.js"></script>',
        '<script src="main.js"></script>',
      ]
    }
  },
  {
    title: 'Use WeakMap and WeakSet for Memory Management',
    slug: 'use-weakmap-and-weakset-for-memory-management',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap'
    }],
    do: {
      description: 'Use WeakMap and WeakSet for automatic garbage collection of object references.',
      codes: [
        'const privateData = new WeakMap();',
        'class User {',
        '  constructor(name) {',
        '    privateData.set(this, { name });',
        '  }',
        '  getName() {',
        '    return privateData.get(this).name;',
        '  }',
        '}',
      ]
    },
    dont: {
      description: 'Avoid using Map/Set for object references that should be garbage collected.',
      codes: [
        'const privateData = new Map();',
        'class User {',
        '  constructor(name) {',
        '    privateData.set(this, { name });',
        '  }',
        '  getName() {',
        '    return privateData.get(this).name;',
        '  }',
        '}',
        '// This prevents garbage collection of User instances',
      ]
    }
  },
  {
    title: 'Use Function Composition',
    slug: 'use-function-composition',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions'
    }],
    do: {
      description: 'Compose small, pure functions for better maintainability.',
      codes: [
        'const add = (a, b) => a + b;',
        'const multiply = (a, b) => a * b;',
        'const square = x => x * x;',
        '',
        'const calculate = (x, y) => square(add(x, y));',
        'const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);',
        'const processData = pipe(add, square, multiply.bind(null, 2));',
      ]
    },
    dont: {
      description: 'Avoid large, complex functions that do multiple things.',
      codes: [
        'function processUserData(user) {',
        '  // Validation',
        '  if (!user.name) throw new Error("Name required");',
        '  if (!user.email) throw new Error("Email required");',
        '  ',
        '  // Processing',
        '  user.name = user.name.trim().toLowerCase();',
        '  user.email = user.email.trim().toLowerCase();',
        '  ',
        '  // Formatting',
        '  user.displayName = user.name.charAt(0).toUpperCase() + user.name.slice(1);',
        '  ',
        '  // Saving',
        '  database.save(user);',
        '  ',
        '  return user;',
        '}',
      ]
    }
  },
  {
    title: 'Use Event Delegation',
    slug: 'use-event-delegation',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener'
    }],
    do: {
      description: 'Use event delegation for better performance with dynamic content.',
      codes: [
        'document.addEventListener("click", (event) => {',
        '  if (event.target.matches(".button")) {',
        '    handleButtonClick(event.target);',
        '  }',
        '});',
        '',
        '// Works for dynamically added buttons',
        'const newButton = document.createElement("button");',
        'newButton.className = "button";',
        'container.appendChild(newButton);',
      ]
    },
    dont: {
      description: 'Avoid attaching individual event listeners to each element.',
      codes: [
        'const buttons = document.querySelectorAll(".button");',
        'buttons.forEach(button => {',
        '  button.addEventListener("click", handleButtonClick);',
        '});',
        '',
        '// New buttons won\'t have event listeners',
        'const newButton = document.createElement("button");',
        'newButton.className = "button";',
        'container.appendChild(newButton);',
      ]
    }
  },
  {
    title: 'Use RequestAnimationFrame for Animations',
    slug: 'use-requestanimationframe-for-animations',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame'
    }],
    do: {
      description: 'Use requestAnimationFrame for smooth animations.',
      codes: [
        'function animate(element) {',
        '  let position = 0;',
        '  function step() {',
        '    position += 1;',
        '    element.style.left = position + "px";',
        '    if (position < 100) {',
        '      requestAnimationFrame(step);',
        '    }',
        '  }',
        '  requestAnimationFrame(step);',
        '}',
      ]
    },
    dont: {
      description: 'Avoid using setTimeout for animations.',
      codes: [
        'function animate(element) {',
        '  let position = 0;',
        '  function step() {',
        '    position += 1;',
        '    element.style.left = position + "px";',
        '    if (position < 100) {',
        '      setTimeout(step, 16); // 60fps',
        '    }',
        '  }',
        '  step();',
        '}',
      ]
    }
  },
  {
    title: 'Use Debouncing and Throttling',
    slug: 'use-debouncing-and-throttling',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener'
    }],
    do: {
      description: 'Use debouncing and throttling for performance optimization.',
      codes: [
        'function debounce(func, wait) {',
        '  let timeout;',
        '  return function executedFunction(...args) {',
        '    const later = () => {',
        '      clearTimeout(timeout);',
        '      func(...args);',
        '    };',
        '    clearTimeout(timeout);',
        '    timeout = setTimeout(later, wait);',
        '  };',
        '}',
        '',
        'const debouncedSearch = debounce(searchFunction, 300);',
        'input.addEventListener("input", debouncedSearch);',
      ]
    },
    dont: {
      description: 'Avoid calling expensive functions on every event.',
      codes: [
        'input.addEventListener("input", (event) => {',
        '  // This runs on every keystroke - expensive!',
        '  performExpensiveSearch(event.target.value);',
        '});',
      ]
    }
  },
  {
    title: 'Sanitize User Input',
    slug: 'sanitize-user-input',
    refs: [{
      title: 'OWASP',
      url: 'https://owasp.org/www-community/attacks/xss/'
    }],
    do: {
      description: 'Always sanitize user input to prevent XSS attacks.',
      codes: [
        'function sanitizeInput(input) {',
        '  return input.replace(/[<>"\']/g, "");',
        '}',
        '',
        'const userInput = sanitizeInput(userData.name);',
        'element.innerHTML = userInput;',
      ]
    },
    dont: {
      description: 'Never insert user input directly into HTML without sanitization.',
      codes: [
        '// Dangerous - can lead to XSS',
        'element.innerHTML = userData.name;',
        'document.write(userData.comment);',
      ]
    }
  },
  {
    title: 'Use HTTPS and Secure Cookies',
    slug: 'use-https-and-secure-cookies',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies'
    }],
    do: {
      description: 'Use secure cookies and HTTPS for sensitive data.',
      codes: [
        'document.cookie = "sessionId=abc123; secure; samesite=strict";',
        'fetch("https://api.example.com/data", {',
        '  credentials: "include"',
        '});',
      ]
    },
    dont: {
      description: 'Avoid insecure cookie settings and HTTP for sensitive operations.',
      codes: [
        'document.cookie = "sessionId=abc123"; // Not secure',
        'fetch("http://api.example.com/data"); // Not secure',
      ]
    }
  },
  {
    title: 'Validate Data Types and Structure',
    slug: 'validate-data-types-and-structure',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof'
    }],
    do: {
      description: 'Always validate data types and structure before processing.',
      codes: [
        'function validateUser(user) {',
        '  if (typeof user !== "object" || user === null) {',
        '    throw new Error("User must be an object");',
        '  }',
        '  if (typeof user.name !== "string" || user.name.length === 0) {',
        '    throw new Error("User name is required");',
        '  }',
        '  if (typeof user.age !== "number" || user.age < 0) {',
        '    throw new Error("User age must be a positive number");',
        '  }',
        '  return true;',
        '}',
      ]
    },
    dont: {
      description: 'Avoid assuming data structure without validation.',
      codes: [
        'function processUser(user) {',
        '  // Dangerous - no validation',
        '  return user.name.toUpperCase() + " is " + user.age + " years old";',
        '}',
      ]
    }
  },
  {
    title: 'Use Strict Mode',
    slug: 'use-strict-mode',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode'
    }],
    do: {
      description: 'Always use strict mode to catch common mistakes.',
      codes: [
        '"use strict";',
        '',
        'function myFunction() {',
        '  "use strict";',
        '  // Function code here',
        '}',
      ]
    },
    dont: {
      description: 'Avoid writing JavaScript without strict mode.',
      codes: [
        '// Without strict mode',
        'function myFunction() {',
        '  // Common mistakes won\'t be caught',
        '  undeclaredVariable = "value";',
        '  delete myFunction;',
        '}',
      ]
    }
  },
  {
    title: 'Use Meaningful Variable Names',
    slug: 'use-meaningful-variable-names',
    refs: [{
      title: 'Clean Code',
      url: 'https://cleancoders.com/'
    }],
    do: {
      description: 'Use descriptive variable and function names that explain their purpose.',
      codes: [
        'const userEmailAddress = "user@example.com";',
        'const isUserLoggedIn = checkAuthenticationStatus();',
        'const maximumRetryAttempts = 3;',
        '',
        'function calculateTotalPrice(items) {',
        '  return items.reduce((total, item) => total + item.price, 0);',
        '}',
      ]
    },
    dont: {
      description: 'Avoid cryptic abbreviations and unclear names.',
      codes: [
        'const uea = "user@example.com";',
        'const iuli = checkAuth();',
        'const mra = 3;',
        '',
        'function calc(items) {',
        '  return items.reduce((t, i) => t + i.p, 0);',
        '}',
      ]
    }
  },
  {
    title: 'Write Pure Functions',
    slug: 'write-pure-functions',
    refs: [{
      title: 'Functional Programming',
      url: 'https://en.wikipedia.org/wiki/Functional_programming'
    }],
    do: {
      description: 'Write pure functions that don\'t have side effects and always return the same output for the same input.',
      codes: [
        'function add(a, b) {',
        '  return a + b;',
        '}',
        '',
        'function capitalizeString(str) {',
        '  return str.charAt(0).toUpperCase() + str.slice(1);',
        '}',
        '',
        'const numbers = [1, 2, 3, 4, 5];',
        'const doubled = numbers.map(n => n * 2);',
      ]
    },
    dont: {
      description: 'Avoid functions with side effects and external dependencies.',
      codes: [
        'let counter = 0;',
        'function increment() {',
        '  counter++; // Side effect',
        '  console.log(counter); // Side effect',
        '  return counter;',
        '}',
        '',
        'function processUser(user) {',
        '  user.name = user.name.toUpperCase(); // Mutates input',
        '  database.save(user); // Side effect',
        '  return user;',
        '}',
      ]
    }
  },
  {
    title: 'Use Consistent Code Formatting',
    slug: 'use-consistent-code-formatting',
    refs: [{
      title: 'Prettier',
      url: 'https://prettier.io/'
    }],
    do: {
      description: 'Use consistent formatting and consider using tools like Prettier.',
      codes: [
        'const user = {',
        '  name: "John",',
        '  age: 30,',
        '  email: "john@example.com",',
        '};',
        '',
        'function greetUser(user) {',
        '  return `Hello, ${user.name}!`;',
        '}',
      ]
    },
    dont: {
      description: 'Avoid inconsistent spacing, indentation, and formatting.',
      codes: [
        'const user={name:"John",age:30,email:"john@example.com"};',
        'function greetUser(user){',
        'return `Hello, ${user.name}!`;',
        '}',
      ]
    }
  },
  {
    title: 'Use JSDoc for Documentation',
    slug: 'use-jsdoc-for-documentation',
    refs: [{
      title: 'JSDoc',
      url: 'https://jsdoc.app/'
    }],
    do: {
      description: 'Document functions and classes with JSDoc comments.',
      codes: [
        '/**',
        ' * Calculates the area of a rectangle',
        ' * @param {number} width - The width of the rectangle',
        ' * @param {number} height - The height of the rectangle',
        ' * @returns {number} The area of the rectangle',
        ' * @throws {Error} When width or height is negative',
        ' */',
        'function calculateArea(width, height) {',
        '  if (width < 0 || height < 0) {',
        '    throw new Error("Width and height must be positive");',
        '  }',
        '  return width * height;',
        '}',
      ]
    },
    dont: {
      description: 'Avoid undocumented functions, especially public APIs.',
      codes: [
        'function calc(w, h) {',
        '  return w * h;',
        '}',
      ]
    }
  },
  {
    title: 'Use Environment Variables for Configuration',
    slug: 'use-environment-variables-for-configuration',
    refs: [{
      title: '12-Factor App',
      url: 'https://12factor.net/config'
    }],
    do: {
      description: 'Use environment variables for configuration instead of hardcoded values.',
      codes: [
        'const config = {',
        '  apiUrl: process.env.API_URL || "https://api.example.com",',
        '  databaseUrl: process.env.DATABASE_URL,',
        '  port: parseInt(process.env.PORT) || 3000,',
        '  isDevelopment: process.env.NODE_ENV === "development",',
        '};',
      ]
    },
    dont: {
      description: 'Avoid hardcoding configuration values.',
      codes: [
        'const config = {',
        '  apiUrl: "https://api.example.com",',
        '  databaseUrl: "mongodb://localhost:27017/myapp",',
        '  port: 3000,',
        '  isDevelopment: true,',
        '};',
      ]
    }
  }
];

(function () {
  "use strict";

  const list = new Vue({
    el: '#list',
    data: {
      items
    }
  });

})();
