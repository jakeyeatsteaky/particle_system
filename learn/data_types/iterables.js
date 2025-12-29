/**
 * Iterables:
 *      Generlaisations of arrays.
 *      Can make any object useable in a for..of loop
 * 
 *      
 */

const range = {
    from: 1,
    to: 10
};


// above doesnt work
// to make it an iterable:
//      Add method name Symbol.iterator
//          it must return an iterator (an object with the method: next)
//  1. call for of to call the symbol.iterator function
//  2. Iterator is returned on each loop.  it takes the iterator
//  3. an iterator next() is called
//  4. it should return the value as this object: {done: boolean, value: ...};
//          

range[Symbol.iterator] = function() {
    return {
        
        current: this.from,
        last: this.to,
        
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
}
for (let num of range) {
    console.log(num);
}

let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};

// return an object with 2 properties:
// 1. value: the next value in the iteration sequence
// 2. done: boolean, true if the last value of the sequence has aalreadu been consumed
arrayLike[Symbol.iterator] = function () {
  let index = 0;               // internal state
  const self = this;           // reference to arrayLike

  return {
    next() {
      if (index < self.length) {
        return {
          value: self[index++],
          done: false
        };
      } else {
        return {
          value: undefined,
          done: true
        };
      }
    }
  };
};

for (let item of arrayLike) {
    console.log(item);
}


const arrayLike1 = {
  0: "alpha",
  1: "beta",
  2: "gamma",
  length: 3
};

arrayLike1[Symbol.iterator] = function() {
    let index = 0;
    const self = this;
    return {
        next() {
            if (index < self.length) {
                return {done: false, value: self[index++]};
            } else {
                return {done: true, value: undefined}
            }
            
        }
    }
}

for (let item of arrayLike1) {
    console.log(item);
}

let realArray = Array.from(arrayLike1);

for (let item of realArray) {
    console.log(item);
}