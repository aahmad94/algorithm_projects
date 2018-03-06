const add = () => {
  let counter = 0;
  // this anonymous function represents a closure;
  return function() {
    counter += 1;
    if (counter >= 3) {
      console.log('Hmmm...');
    }
  };
};

const sum = add();
console.log(sum); // --> [Function]
sum(); // undefined
sum(); // undefine
sum(); // Hmmm...


