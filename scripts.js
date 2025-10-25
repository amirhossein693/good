const items = [
  {
    title: 'Use === Comparison',
    slug: 'use-===-comparison',
    category: 'core-javascript',
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
    category: 'core-javascript',
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
    category: 'core-javascript',
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
    category: 'core-javascript',
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
    category: 'core-javascript',
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
    category: 'core-javascript',
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
    category: 'core-javascript',
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
    category: 'core-javascript',
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
    category: 'core-javascript',
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
    category: 'core-javascript',
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
    category: 'async-programming',
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
    category: 'async-programming',
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
    category: 'core-javascript',
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
    category: 'performance',
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
    category: 'code-quality',
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
    category: 'core-javascript',
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
    category: 'code-quality',
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
    category: 'performance',
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
    category: 'code-quality',
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
    category: 'performance',
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
    category: 'performance',
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
    category: 'performance',
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
    category: 'security',
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
    category: 'security',
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
    category: 'security',
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
    category: 'code-quality',
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
    category: 'code-quality',
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
    category: 'code-quality',
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
    category: 'code-quality',
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
    category: 'code-quality',
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
    category: 'code-quality',
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
  },
  {
    title: 'Use Proxies for Advanced Object Control',
    slug: 'use-proxies-for-advanced-object-control',
    category: 'core-javascript',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy'
    }],
    do: {
      description: 'Use Proxy objects for advanced object property control and validation.',
      codes: [
        'const user = new Proxy({}, {',
        '  set(target, property, value) {',
        '    if (property === "age" && value < 0) {',
        '      throw new Error("Age cannot be negative");',
        '    }',
        '    target[property] = value;',
        '    return true;',
        '  }',
        '});',
      ]
    },
    dont: {
      description: 'Avoid manual property validation without Proxy.',
      codes: [
        'const user = {};',
        'user.age = -5; // No validation',
        'console.log(user.age); // -5 (invalid)',
      ]
    }
  },
  {
    title: 'Use Symbol for Private Properties',
    slug: 'use-symbol-for-private-properties',
    category: 'core-javascript',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol'
    }],
    do: {
      description: 'Use Symbols to create truly private object properties.',
      codes: [
        'const _private = Symbol("private");',
        'class MyClass {',
        '  constructor() {',
        '    this[_private] = "secret data";',
        '  }',
        '  getPrivate() {',
        '    return this[_private];',
        '  }',
        '}',
      ]
    },
    dont: {
      description: 'Avoid using string-based private properties.',
      codes: [
        'class MyClass {',
        '  constructor() {',
        '    this._private = "secret data"; // Not truly private',
        '  }',
        '}',
        'const obj = new MyClass();',
        'console.log(obj._private); // Accessible!',
      ]
    }
  },
  {
    title: 'Use Generators for Iteration Control',
    slug: 'use-generators-for-iteration-control',
    category: 'core-javascript',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*'
    }],
    do: {
      description: 'Use generator functions for custom iteration and lazy evaluation.',
      codes: [
        'function* fibonacci() {',
        '  let [prev, curr] = [0, 1];',
        '  while (true) {',
        '    yield curr;',
        '    [prev, curr] = [curr, prev + curr];',
        '  }',
        '}',
        '',
        'const fib = fibonacci();',
        'console.log(fib.next().value); // 1',
      ]
    },
    dont: {
      description: 'Avoid creating infinite arrays for sequences.',
      codes: [
        'function fibonacci(n) {',
        '  const result = [];',
        '  for (let i = 0; i < n; i++) {',
        '    result.push(/* calculate */);',
        '  }',
        '  return result; // Memory intensive',
        '}',
      ]
    }
  },
  {
    title: 'Use Map and Set for Better Performance',
    slug: 'use-map-and-set-for-better-performance',
    category: 'performance',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map'
    }],
    do: {
      description: 'Use Map and Set for better performance with frequent additions/deletions.',
      codes: [
        'const userMap = new Map();',
        'userMap.set("john", { name: "John", age: 30 });',
        'userMap.set("jane", { name: "Jane", age: 25 });',
        '',
        'const uniqueIds = new Set();',
        'uniqueIds.add("user1");',
        'uniqueIds.add("user2");',
      ]
    },
    dont: {
      description: 'Avoid using objects for frequent key-value operations.',
      codes: [
        'const userObj = {};',
        'userObj["john"] = { name: "John", age: 30 };',
        'userObj["jane"] = { name: "Jane", age: 25 };',
        '// Slower for frequent operations',
      ]
    }
  },
  {
    title: 'Use Intersection Observer for Performance',
    slug: 'use-intersection-observer-for-performance',
    category: 'performance',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
    }],
    do: {
      description: 'Use Intersection Observer for efficient scroll-based animations and lazy loading.',
      codes: [
        'const observer = new IntersectionObserver((entries) => {',
        '  entries.forEach(entry => {',
        '    if (entry.isIntersecting) {',
        '      entry.target.classList.add("animate");',
        '    }',
        '  });',
        '});',
        '',
        'document.querySelectorAll(".animate-on-scroll").forEach(el => {',
        '  observer.observe(el);',
        '});',
      ]
    },
    dont: {
      description: 'Avoid scroll event listeners for performance-critical operations.',
      codes: [
        'window.addEventListener("scroll", () => {',
        '  // Expensive operations on every scroll',
        '  document.querySelectorAll(".element").forEach(el => {',
        '    // Check visibility manually',
        '  });',
        '});',
      ]
    }
  },
  {
    title: 'Use Web Workers for Heavy Computations',
    slug: 'use-web-workers-for-heavy-computations',
    category: 'performance',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API'
    }],
    do: {
      description: 'Use Web Workers to prevent blocking the main thread.',
      codes: [
        '// main.js',
        'const worker = new Worker("worker.js");',
        'worker.postMessage({ data: largeArray });',
        'worker.onmessage = (e) => {',
        '  console.log("Result:", e.data);',
        '};',
        '',
        '// worker.js',
        'self.onmessage = (e) => {',
        '  const result = heavyComputation(e.data.data);',
        '  self.postMessage(result);',
        '};',
      ]
    },
    dont: {
      description: 'Avoid heavy computations on the main thread.',
      codes: [
        'function processLargeData(data) {',
        '  // This blocks the UI',
        '  return data.map(item => {',
        '    // Heavy computation',
        '    return complexCalculation(item);',
        '  });',
        '}',
      ]
    }
  },
  {
    title: 'Use Service Workers for Caching',
    slug: 'use-service-workers-for-caching',
    category: 'performance',
    refs: [{
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'
    }],
    do: {
      description: 'Use Service Workers for intelligent caching and offline functionality.',
      codes: [
        '// sw.js',
        'self.addEventListener("fetch", (event) => {',
        '  if (event.request.url.includes("/api/")) {',
        '    event.respondWith(',
        '      caches.match(event.request).then(response => {',
        '        return response || fetch(event.request);',
        '      })',
        '    );',
        '  }',
        '});',
      ]
    },
    dont: {
      description: 'Avoid making unnecessary network requests without caching.',
      codes: [
        'fetch("/api/data")',
        '  .then(response => response.json())',
        '  .then(data => {',
        '    // No caching, repeated requests',
        '  });',
      ]
    }
  },
  {
    title: 'Use CSS-in-JS with Styled Components',
    slug: 'use-css-in-js-with-styled-components',
    category: 'code-quality',
    refs: [{
      title: 'Styled Components',
      url: 'https://styled-components.com/'
    }],
    do: {
      description: 'Use CSS-in-JS for component-scoped styling and dynamic themes.',
      codes: [
        'import styled from "styled-components";',
        '',
        'const Button = styled.button`',
        '  background: ${props => props.primary ? "blue" : "gray"};',
        '  color: white;',
        '  padding: 1rem 2rem;',
        '  border: none;',
        '  border-radius: 4px;',
        '`;',
      ]
    },
    dont: {
      description: 'Avoid global CSS classes for component-specific styling.',
      codes: [
        '// Global CSS',
        '.button { background: blue; }',
        '.button-primary { background: blue; }',
        '.button-secondary { background: gray; }',
      ]
    }
  },
  {
    title: 'Use TypeScript for Type Safety',
    slug: 'use-typescript-for-type-safety',
    category: 'code-quality',
    refs: [{
      title: 'TypeScript',
      url: 'https://www.typescriptlang.org/'
    }],
    do: {
      description: 'Use TypeScript for compile-time type checking and better IDE support.',
      codes: [
        'interface User {',
        '  id: number;',
        '  name: string;',
        '  email: string;',
        '}',
        '',
        'function getUser(id: number): Promise<User> {',
        '  return fetch(`/api/users/${id}`).then(res => res.json());',
        '}',
      ]
    },
    dont: {
      description: 'Avoid runtime type errors without compile-time checking.',
      codes: [
        'function getUser(id) {',
        '  return fetch(`/api/users/${id}`).then(res => res.json());',
        '}',
        '// No type safety, potential runtime errors',
      ]
    }
  },
  {
    title: 'Use ESLint for Code Quality',
    slug: 'use-eslint-for-code-quality',
    category: 'code-quality',
    refs: [{
      title: 'ESLint',
      url: 'https://eslint.org/'
    }],
    do: {
      description: 'Use ESLint to enforce coding standards and catch potential bugs.',
      codes: [
        '// .eslintrc.js',
        'module.exports = {',
        '  extends: ["eslint:recommended"],',
        '  rules: {',
        '    "no-unused-vars": "error",',
        '    "no-console": "warn",',
        '    "prefer-const": "error"',
        '  }',
        '};',
      ]
    },
    dont: {
      description: 'Avoid writing code without linting rules.',
      codes: [
        '// No linting configuration',
        'var unusedVariable = "test";',
        'console.log("Debug message");',
        '// Potential issues not caught',
      ]
    }
  },
  {
    title: 'Use Prettier for Code Formatting',
    slug: 'use-prettier-for-code-formatting',
    category: 'code-quality',
    refs: [{
      title: 'Prettier',
      url: 'https://prettier.io/'
    }],
    do: {
      description: 'Use Prettier for consistent code formatting across the team.',
      codes: [
        '// .prettierrc',
        '{',
        '  "semi": true,',
        '  "trailingComma": "es5",',
        '  "singleQuote": true,',
        '  "printWidth": 80',
        '}',
      ]
    },
    dont: {
      description: 'Avoid inconsistent formatting without automated tools.',
      codes: [
        'const obj={name:"John",age:30,email:"john@example.com"};',
        'function test(){',
        'return "inconsistent formatting";',
        '}',
      ]
    }
  },
  {
    title: 'Use Jest for Unit Testing',
    slug: 'use-jest-for-unit-testing',
    category: 'code-quality',
    refs: [{
      title: 'Jest',
      url: 'https://jestjs.io/'
    }],
    do: {
      description: 'Use Jest for comprehensive unit testing with mocking capabilities.',
      codes: [
        '// math.test.js',
        'describe("Math utilities", () => {',
        '  test("adds two numbers correctly", () => {',
        '    expect(add(2, 3)).toBe(5);',
        '  });',
        '  ',
        '  test("handles edge cases", () => {',
        '    expect(add(0, 0)).toBe(0);',
        '    expect(add(-1, 1)).toBe(0);',
        '  });',
        '});',
      ]
    },
    dont: {
      description: 'Avoid writing code without proper testing.',
      codes: [
        'function add(a, b) {',
        '  return a + b;',
        '}',
        '// No tests, potential bugs not caught',
      ]
    }
  },
  {
    title: 'Use Cypress for E2E Testing',
    slug: 'use-cypress-for-e2e-testing',
    category: 'code-quality',
    refs: [{
      title: 'Cypress',
      url: 'https://www.cypress.io/'
    }],
    do: {
      description: 'Use Cypress for end-to-end testing with real browser interactions.',
      codes: [
        '// cypress/integration/user.spec.js',
        'describe("User Registration", () => {',
        '  it("should register a new user", () => {',
        '    cy.visit("/register");',
        '    cy.get("[data-cy=email]").type("user@example.com");',
        '    cy.get("[data-cy=password]").type("password123");',
        '    cy.get("[data-cy=submit]").click();',
        '    cy.url().should("include", "/dashboard");',
        '  });',
        '});',
      ]
    },
    dont: {
      description: 'Avoid manual testing for critical user flows.',
      codes: [
        '// Manual testing only',
        '// 1. Open browser',
        '// 2. Navigate to /register',
        '// 3. Fill form manually',
        '// 4. Check result manually',
      ]
    }
  },
  {
    title: 'Use React Testing Library for Component Testing',
    slug: 'use-react-testing-library-for-component-testing',
    category: 'code-quality',
    refs: [{
      title: 'React Testing Library',
      url: 'https://testing-library.com/docs/react-testing-library/intro/'
    }],
    do: {
      description: 'Use React Testing Library for testing components from user perspective.',
      codes: [
        'import { render, screen, fireEvent } from "@testing-library/react";',
        'import Button from "./Button";',
        '',
        'test("button calls onClick when clicked", () => {',
        '  const handleClick = jest.fn();',
        '  render(<Button onClick={handleClick}>Click me</Button>);',
        '  ',
        '  fireEvent.click(screen.getByText("Click me"));',
        '  expect(handleClick).toHaveBeenCalledTimes(1);',
        '});',
      ]
    },
    dont: {
      description: 'Avoid testing implementation details instead of behavior.',
      codes: [
        '// Testing implementation details',
        'test("button has correct class", () => {',
        '  const { container } = render(<Button />);',
        '  expect(container.querySelector(".btn-primary")).toBeInTheDocument();',
        '});',
      ]
    }
  },
  {
    title: 'Use Webpack for Module Bundling',
    slug: 'use-webpack-for-module-bundling',
    category: 'code-quality',
    refs: [{
      title: 'Webpack',
      url: 'https://webpack.js.org/'
    }],
    do: {
      description: 'Use Webpack for efficient module bundling and asset optimization.',
      codes: [
        '// webpack.config.js',
        'module.exports = {',
        '  entry: "./src/index.js",',
        '  output: {',
        '    filename: "bundle.js",',
        '    path: path.resolve(__dirname, "dist"),',
        '  },',
        '  module: {',
        '    rules: [',
        '      { test: /\\.js$/, use: "babel-loader" },',
        '      { test: /\\.css$/, use: ["style-loader", "css-loader"] }',
        '    ],',
        '  },',
        '};',
      ]
    },
    dont: {
      description: 'Avoid loading all scripts separately without bundling.',
      codes: [
        '<!-- Multiple script tags, no optimization -->',
        '<script src="jquery.js"></script>',
        '<script src="lodash.js"></script>',
        '<script src="app.js"></script>',
      ]
    }
  },
  {
    title: 'Use Babel for JavaScript Transpilation',
    slug: 'use-babel-for-javascript-transpilation',
    category: 'code-quality',
    refs: [{
      title: 'Babel',
      url: 'https://babeljs.io/'
    }],
    do: {
      description: 'Use Babel to transpile modern JavaScript for broader browser support.',
      codes: [
        '// .babelrc',
        '{',
        '  "presets": [',
        '    ["@babel/preset-env", {',
        '      "targets": {',
        '        "browsers": ["> 1%", "last 2 versions"]',
        '      }',
        '    }]',
        '  ]',
        '}',
      ]
    },
    dont: {
      description: 'Avoid using modern JavaScript without transpilation.',
      codes: [
        '// Modern JavaScript without transpilation',
        'const arrow = () => "modern syntax";',
        'class MyClass {}',
        '// May not work in older browsers',
      ]
    }
  },
  {
    title: 'Use npm Scripts for Task Automation',
    slug: 'use-npm-scripts-for-task-automation',
    category: 'code-quality',
    refs: [{
      title: 'npm Scripts',
      url: 'https://docs.npmjs.com/cli/v7/using-npm/scripts'
    }],
    do: {
      description: 'Use npm scripts for consistent development and build tasks.',
      codes: [
        '// package.json',
        '{',
        '  "scripts": {',
        '    "start": "webpack serve --mode development",',
        '    "build": "webpack --mode production",',
        '    "test": "jest",',
        '    "lint": "eslint src/",',
        '    "format": "prettier --write src/"',
        '  }',
        '}',
      ]
    },
    dont: {
      description: 'Avoid manual task execution without automation.',
      codes: [
        '// Manual commands every time',
        '// webpack --mode production',
        '// eslint src/',
        '// prettier --write src/',
        '// jest',
      ]
    }
  },
  {
    title: 'Use Git Hooks for Code Quality',
    slug: 'use-git-hooks-for-code-quality',
    category: 'code-quality',
    refs: [{
      title: 'Git Hooks',
      url: 'https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks'
    }],
    do: {
      description: 'Use Git hooks to enforce code quality before commits.',
      codes: [
        '// .git/hooks/pre-commit',
        '#!/bin/sh',
        'npm run lint',
        'npm run test',
        'npm run build',
        '',
        'if [ $? -ne 0 ]; then',
        '  echo "Pre-commit checks failed"',
        '  exit 1',
        'fi',
      ]
    },
    dont: {
      description: 'Avoid committing code without quality checks.',
      codes: [
        '// No pre-commit checks',
        'git add .',
        'git commit -m "Add feature"',
        '// Potentially broken code committed',
      ]
    }
  },
  {
    title: 'Use Docker for Consistent Environments',
    slug: 'use-docker-for-consistent-environments',
    category: 'code-quality',
    refs: [{
      title: 'Docker',
      url: 'https://www.docker.com/'
    }],
    do: {
      description: 'Use Docker to ensure consistent development and deployment environments.',
      codes: [
        '// Dockerfile',
        'FROM node:16-alpine',
        'WORKDIR /app',
        'COPY package*.json ./',
        'RUN npm ci --only=production',
        'COPY . .',
        'EXPOSE 3000',
        'CMD ["npm", "start"]',
      ]
    },
    dont: {
      description: 'Avoid environment-specific issues without containerization.',
      codes: [
        '// "Works on my machine" problems',
        '// Different Node versions',
        '// Different OS dependencies',
        '// Inconsistent environments',
      ]
    }
  },
  {
    title: 'Use Environment-Specific Configuration',
    slug: 'use-environment-specific-configuration',
    category: 'code-quality',
    refs: [{
      title: '12-Factor App',
      url: 'https://12factor.net/config'
    }],
    do: {
      description: 'Use environment-specific configuration for different deployment stages.',
      codes: [
        '// config/development.js',
        'module.exports = {',
        '  database: "mongodb://localhost:27017/dev",',
        '  apiUrl: "http://localhost:3000",',
        '  debug: true',
        '};',
        '',
        '// config/production.js',
        'module.exports = {',
        '  database: process.env.DATABASE_URL,',
        '  apiUrl: process.env.API_URL,',
        '  debug: false',
        '};',
      ]
    },
    dont: {
      description: 'Avoid hardcoded configuration for different environments.',
      codes: [
        '// Hardcoded configuration',
        'const config = {',
        '  database: "mongodb://localhost:27017/myapp",',
        '  apiUrl: "http://localhost:3000",',
        '  debug: true',
        '};',
      ]
    }
  },
  {
    title: 'Use API Versioning for Backward Compatibility',
    slug: 'use-api-versioning-for-backward-compatibility',
    category: 'code-quality',
    refs: [{
      title: 'API Versioning',
      url: 'https://restfulapi.net/versioning/'
    }],
    do: {
      description: 'Use API versioning to maintain backward compatibility.',
      codes: [
        '// Version 1 API',
        'app.get("/api/v1/users", (req, res) => {',
        '  res.json({ users: [] });',
        '});',
        '',
        '// Version 2 API',
        'app.get("/api/v2/users", (req, res) => {',
        '  res.json({',
        '    data: [],',
        '    meta: { version: "2.0" }',
        '  });',
        '});',
      ]
    },
    dont: {
      description: 'Avoid breaking changes without versioning.',
      codes: [
        '// Breaking change without versioning',
        'app.get("/api/users", (req, res) => {',
        '  // Changed response format - breaks existing clients',
        '  res.json({ data: [] });',
        '});',
      ]
    }
  },
  {
    title: 'Use Rate Limiting for API Protection',
    slug: 'use-rate-limiting-for-api-protection',
    category: 'security',
    refs: [{
      title: 'Express Rate Limit',
      url: 'https://expressjs.com/en/resources/middleware/rate-limit.html'
    }],
    do: {
      description: 'Use rate limiting to protect APIs from abuse and DoS attacks.',
      codes: [
        'const rateLimit = require("express-rate-limit");',
        '',
        'const limiter = rateLimit({',
        '  windowMs: 15 * 60 * 1000, // 15 minutes',
        '  max: 100, // limit each IP to 100 requests per windowMs',
        '  message: "Too many requests from this IP"',
        '});',
        '',
        'app.use("/api/", limiter);',
      ]
    },
    dont: {
      description: 'Avoid unprotected APIs without rate limiting.',
      codes: [
        '// No rate limiting',
        'app.get("/api/data", (req, res) => {',
        '  // Vulnerable to abuse',
        '  res.json(expensiveData);',
        '});',
      ]
    }
  },
  {
    title: 'Use CORS for Cross-Origin Requests',
    slug: 'use-cors-for-cross-origin-requests',
    category: 'security',
    refs: [{
      title: 'MDN CORS',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS'
    }],
    do: {
      description: 'Use CORS to control cross-origin requests securely.',
      codes: [
        'const cors = require("cors");',
        '',
        'const corsOptions = {',
        '  origin: ["https://myapp.com", "https://admin.myapp.com"],',
        '  credentials: true,',
        '  optionsSuccessStatus: 200',
        '};',
        '',
        'app.use(cors(corsOptions));',
      ]
    },
    dont: {
      description: 'Avoid overly permissive CORS settings.',
      codes: [
        '// Too permissive',
        'app.use(cors({',
        '  origin: "*", // Allows any origin',
        '  credentials: true // Security risk',
        '}));',
      ]
    }
  },
  {
    title: 'Use Helmet for Security Headers',
    slug: 'use-helmet-for-security-headers',
    category: 'security',
    refs: [{
      title: 'Helmet.js',
      url: 'https://helmetjs.github.io/'
    }],
    do: {
      description: 'Use Helmet to set security headers and protect against common vulnerabilities.',
      codes: [
        'const helmet = require("helmet");',
        '',
        'app.use(helmet({',
        '  contentSecurityPolicy: {',
        '    directives: {',
        '      defaultSrc: ["\'self\'"],',
        '      styleSrc: ["\'self\'", "\'unsafe-inline\'"]',
        '    }',
        '  }',
        '}));',
      ]
    },
    dont: {
      description: 'Avoid missing security headers.',
      codes: [
        '// No security headers',
        'app.get("/", (req, res) => {',
        '  res.send("Hello World");',
        '  // Missing X-Frame-Options, X-Content-Type-Options, etc.',
        '});',
      ]
    }
  },
  {
    title: 'Use bcrypt for Password Hashing',
    slug: 'use-bcrypt-for-password-hashing',
    category: 'security',
    refs: [{
      title: 'bcrypt',
      url: 'https://www.npmjs.com/package/bcrypt'
    }],
    do: {
      description: 'Use bcrypt for secure password hashing with salt.',
      codes: [
        'const bcrypt = require("bcrypt");',
        '',
        'async function hashPassword(password) {',
        '  const saltRounds = 12;',
        '  return await bcrypt.hash(password, saltRounds);',
        '}',
        '',
        'async function verifyPassword(password, hash) {',
        '  return await bcrypt.compare(password, hash);',
        '}',
      ]
    },
    dont: {
      description: 'Avoid storing passwords in plain text or using weak hashing.',
      codes: [
        '// Never do this',
        'const user = {',
        '  username: "john",',
        '  password: "password123" // Plain text!',
        '};',
        '',
        '// Or weak hashing',
        'const hash = crypto.createHash("md5").update(password).digest("hex");',
      ]
    }
  },
  {
    title: 'Use JWT for Stateless Authentication',
    slug: 'use-jwt-for-stateless-authentication',
    category: 'security',
    refs: [{
      title: 'JWT.io',
      url: 'https://jwt.io/'
    }],
    do: {
      description: 'Use JWT for stateless authentication with proper expiration.',
      codes: [
        'const jwt = require("jsonwebtoken");',
        '',
        'function generateToken(user) {',
        '  return jwt.sign(',
        '    { userId: user.id, email: user.email },',
        '    process.env.JWT_SECRET,',
        '    { expiresIn: "1h" }',
        '  );',
        '}',
        '',
        'function verifyToken(token) {',
        '  return jwt.verify(token, process.env.JWT_SECRET);',
        '}',
      ]
    },
    dont: {
      description: 'Avoid storing sensitive data in JWT or using weak secrets.',
      codes: [
        '// Don\'t store sensitive data',
        'const token = jwt.sign({',
        '  password: user.password, // Never!',
        '  secret: "weak-secret" // Use strong secret',
        '});',
      ]
    }
  },
  {
    title: 'Use Input Validation with Joi',
    slug: 'use-input-validation-with-joi',
    category: 'security',
    refs: [{
      title: 'Joi',
      url: 'https://joi.dev/'
    }],
    do: {
      description: 'Use Joi for comprehensive input validation and sanitization.',
      codes: [
        'const Joi = require("joi");',
        '',
        'const userSchema = Joi.object({',
        '  name: Joi.string().min(2).max(50).required(),',
        '  email: Joi.string().email().required(),',
        '  age: Joi.number().integer().min(0).max(120)',
        '});',
        '',
        'function validateUser(userData) {',
        '  const { error, value } = userSchema.validate(userData);',
        '  if (error) throw new Error(error.details[0].message);',
        '  return value;',
        '}',
      ]
    },
    dont: {
      description: 'Avoid accepting user input without validation.',
      codes: [
        '// No validation',
        'app.post("/users", (req, res) => {',
        '  const { name, email, age } = req.body;',
        '  // Direct use without validation',
        '  createUser({ name, email, age });',
        '});',
      ]
    }
  }
];

// Categories for organizing practices
const categories = [
  { id: 'core-javascript', name: 'Core JavaScript', description: 'Fundamental JavaScript syntax and modern ES6+ features' },
  { id: 'async-programming', name: 'Async Programming', description: 'Asynchronous JavaScript patterns and error handling' },
  { id: 'performance', name: 'Performance & Memory', description: 'Optimization techniques and memory management' },
  { id: 'security', name: 'Security & Validation', description: 'Security best practices and input validation' },
  { id: 'code-quality', name: 'Code Quality', description: 'Clean code principles and development practices' }
];

(function () {
  "use strict";

  const list = new Vue({
    el: '#list',
    data: {
      items,
      categories
    },
    methods: {
      getItemsByCategory(categoryId) {
        return this.items.filter(item => item.category === categoryId);
      }
    }
  });

})();
