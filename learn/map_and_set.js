/**
 * Map and Set:
 *      Map --> an object which allows keys of any type
 *          can be multiple associations like int : string, string : string, double, int etc
 * 
 *      use Map.set(x,y) to set values
 *          Map.set() returns a map so it can be chained
 */

function print_it(str) {
    console.log(str);
    console.log("--------------------");
}
const map = new Map();
const otherMap = new Map();
otherMap.set("someString", 100);
map.set(1, 100);
map.set(2, 99);

///print_it(map);

map.set(1, 50);
//print_it(map);
map.set("1", "string")
    .set({name: "Jake"}, 2)
    .set(otherMap, "Doesitwork");

//print_it(map);

// iteration by:
// Keys (iterable of keys)
for (let item of map.keys()) {
    //print_it(item);
}

//  Values (iterable of values)
for (let item of map.values()) {
    //print_it(item);
} 

// entries (itereable of both)
for (let [key, value] of map.entries()) {
   // print_it(key);
    //print_it(value);
}

// insertion order is preserved.

// also has a for each
map.forEach((value, key, map) => {
    //console.log(value + ": " + key);
})

/**
 * Set:
 *      a collection of values where each is unique
 *      each element of the collection can be a more complex data strucutre like map or object, the entire this is 
 *      the set element
 */

let set = new Set(map);

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
console.log(set);

function unique(arr) {
  return new Set(arr);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

values.forEach((value, index, arr) => {
    unique(arr);   
})

console.log(values);

