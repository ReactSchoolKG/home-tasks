const input = [1, [2, 3, -1], [[2, 5], [[8], 9]], -3];
let bigger = -Infinity; // The smolest
let biggerIndex = 0;

function find(input, index = -1) {
  if (Array.isArray(input)) {
    index += 1;
    input.forEach(element => {
      if (Array.isArray(element)) {
        find(element, index);
      } else {
        if (element >= bigger) {
          bigger = element;
          biggerIndex = index;
        }
      }
    });
  }
}

find(input);
console.log(bigger, biggerIndex);
