function sequence(start, step = 1) {
  let number = start;

  return function() {
    return number += step;
  }
}

let gen = sequence(10, 5);

console.log(gen());
console.log(gen());
console.log(gen());