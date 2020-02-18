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
