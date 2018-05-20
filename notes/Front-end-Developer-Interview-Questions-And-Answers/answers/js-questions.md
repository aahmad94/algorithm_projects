# JS Questions

#### Explain event delegation

When an event is fired from an element, the event will be bubbled up to its
parent nodes. However, the original element where the event occurs, called
'target', stays the same in the event object. Using the `target` property, we
can always keep tracking which element actually causes an event captured by
its parent, and it can help use reduce the number of event handlers as we
sometimes don't need to add event listeners for every element.

#### Explain how `this` works in JavaScript

ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).

In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

##### Simple call

Because the value of this is not set by the call, this will default to the global object, which is window in a browser.

In strict mode, however, the value of **this remains at whatever it was set to when entering the execution context**, so, in the following case, this will default to undefined.

To pass the value of this from one context to another, use call, apply, or bind (ES6).

```javascript
function f1() {
  return this; // not strict
}

// In a browser:
f1() === window; // true
```

##### Arrow functions

In arrow functions, **this retains the value of the enclosing lexical context's this**. In global code, it will be set to the global object:

```javascript
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

Note: if this arg is passed to call, bind, or apply on invocation of an arrow function it will be ignored. You can still prepend arguments to the call, but the first argument (thisArg) should be set to null.

##### As an object method

When a function is called as a method of an object, its this is set to the object the method is called on.

```javascript
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37
```

Since f is called as a method of p, its this refers to p. This is an interesting feature of JavaScript's prototype inheritance.

Note: if a non-arrow function is created within a function, a new context is created for which this is not defined -- it does not inherit the parent function's this via the constructor (a function within an object, however, does inherit the this as shown here).

##### As a constructor

When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed.

##### As a DOM event handler

When a function is used as an event handler, its this is set to the element the event fired (e.currentTarget).

##### In an inline event handler

When the code is called from an inline on-event handler, its this is set to the DOM element on which the listener is placed:

```html
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
```

The above alert shows button. Note however that only the outer code has its this set this way:

```html
<button onclick="alert((function() { return this; })());">
  Show inner this
</button>
```

In this case, the inner function's this isn't set so it returns the global/window object (i.e. the default object in non–strict mode where this isn't set by the call).

#### Explain how prototypal inheritance works

By default every function has an empty prototype property to which properties or methods may be added.

When an object is created from a function, it inherits the properties and methods from the function's prototype.

In Js, a constructor function is used to create an object via the kyword new -- the object gets the constructor's properties and methods.

An object has a proto property that points to the function prototype's which contains a pointer to the constructor.

It's redundant for objects to inherit methods from constructor functions because each instance of the object would contain it's own set of methods, we just want each instance to have a unique set of properties.

As such, methods are created on that function's prototype.

The object will look for a property/method from the function's constructor, then the prototype itself, if the property/method is not found in either the object's constructor or prototype, it will look for the property/method through the function's proto to the function's constructor, the parent function and in that parent function's prototype (ultimately the Object.prototype (the keyword *new*, for instance is defined here)).

This is how prototypal inheritance works. The keyword *super* may be used with ES6 classes to adopt an *extended* constructor's properties/methods via *this*. In ES6 *extends* may be used to designate a class' parent.

#### What do you think of AMD vs CommonJS?

*Not answered yet*

#### Explain why the following doesn't work as an IIFE: `function foo(){ }();`.

*Not answered yet*

###### What needs to be changed to properly make it an IIFE?

```js
(function foo() { })(); // or
(function foo() { }());
```

#### What's the difference between a variable that is: `null`, `undefined` or undeclared?
###### How would you go about checking for any of these states?

*Not answered yet*

#### What is a closure, and how/why would you use one?

*Not answered yet*

#### What's a typical use case for anonymous functions?

*Not answered yet*

#### How do you organize your code? (module pattern, classical inheritance?)

*Not answered yet*

#### What's the difference between host objects and native objects?

- Host objects: what an environment(browser, Node.js, etc) provides
- Native objects: what JavaScript provides


#### Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

*Not answered yet*

#### What's the difference between `.call` and `.apply`?

*Not answered yet*

#### Explain `Function.prototype.bind`.

*Not answered yet*

#### When would you use `document.write()`?

When someone gives me one million dollar for doing it.

#### What's the difference between feature detection, feature inference, and using the UA string?

- Feature detection: directly check if a feature is implemented

```js
if (Promise) {
  let a = Promise.resolve('hello');
}
```

- Feature inference: infer if a feature is implemented by checking other properties

```js
if (MozSmsMessage) {
  // guess it must be Firefox...
}
```

- UA string: UA stands for UserAgent, which a browser natively exposes to
  scripts and HTTP header

```js
console.log(navigator.userAgent); // "Mozilla/5.0 (Macintosh; ..."
```

#### Explain AJAX in as much detail as possible.

*Not answered yet*

#### Explain how JSONP works (and how it's not really AJAX).

A JSONP response contains a callback function usually written in JavaScript,
and when the response is flushed, the callback will be launched. It's more like
script tag injection, rather than AJAX.

#### Have you ever used JavaScript templating?

Yes.

###### If so, what libraries have you used?

Handlebars, Mustache, etc.

#### Explain "hoisting".

*Not answered yet*

#### Describe event bubbling.

It's when an event is bubbled into container elements, in the higher level of a
DOM tree.

#### What's the difference between an "attribute" and a "property"?

- Attribute: specified in HTML, always in the form of string
- Property: specified in DOM object, can have any type of JavaScript

#### Why is extending built-in JavaScript objects not a good idea?

*Not answered yet*

#### Difference between document load event and document ready event?

- document ready: when a HTML document is loaded and rendered
- document load: when a HTML document and assets in the document are all loaded
  and rendered

#### What is the difference between `==` and `===`?

*Not answered yet*

#### Explain the same-origin policy with regards to JavaScript.

Same-origin means having same host, port and protocol(HTTP or HTTPS). If a
script in the different origin should be accessed, we can consider using CORS.

#### Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

```js
let duplicate = (arr) => arr.concat(arr);
```

#### Why is it called a Ternary expression, what does the word "Ternary" indicate?

*Not answered yet*

#### What is `"use strict";`? what are the advantages and disadvantages to using it?

Advantages

- Cannot assign a value to an undefined global variable
- Fire TypeError for not-allowed assignments
- `this` in a normal function refers to `undefined`, instead of `global`

In short, it secures JavaScript.

Disadvantage

- When using global strict mode and concatenating the script with other scripts
  not using strict mode, the other scripts can be broken.

#### Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`

*Not answered yet*

#### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

*Not answered yet*

#### Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

*Not answered yet*

#### Explain what a single page app is and how to make one SEO-friendly.

*Not answered yet*

#### What is the extent of your experience with Promises and/or their polyfills?

*Not answered yet*

#### What are the pros and cons of using Promises instead of callbacks?

*Not answered yet*

#### What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

*Not answered yet*

#### What tools and techniques do you use debugging JavaScript code?

*Not answered yet*

#### What language constructions do you use for iterating over object properties and array items?

*Not answered yet*

#### Explain the difference between mutable and immutable objects.
###### What is an example of an immutable object in JavaScript?
###### What are the pros and cons of immutability?
###### How can you achieve immutability in your own code?

*Not answered yet*

#### Explain the difference between synchronous and asynchronous functions.

*Not answered yet*

#### What is event loop?
###### What is the difference between call stack and task queue?

*Not answered yet*

