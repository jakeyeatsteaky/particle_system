/**
 * objects --> single entity which stores data by key
 * array --> father data into an ordered list
 * 
 * Passing these data structures to a function, you might 
 * not need the whole thing. 
 * 
 * Destructuring assignment "unpacks" items from these DS
 * 
 */

// Array dstructuring
const someArray = [
    "item 1",
    12,
    "javascript arrays are tuples",
    3.14,
];

const [first, second] = someArray;
console.log(first);
console.log(second);

const [anotherFirst, anotherSecond] = "Schweet provider".split(' ');
console.log(anotherFirst);
console.log(anotherSecond);

// throw away unwanted with a comma
const [one, , three] = someArray;
console.log(one, three);

// can do this with any iterable on the right side:
let [a, b, c] = ["shit", "ass", "poo"];
console.log(a, b, c);

// can do any assignable on the left
const user = {};
[user.shitpoo, user.fuckums] = "What the fuck do you mean".split(' ');
console.log(user);

const anotherArray = ["some", "shit"];
let [re, assign] = anotherArray;
console.log(re, assign);
[re, assign] = [assign, re];
console.log(re, assign);

// you can gather the remaining items with "..."
const arrMatey = ["this", "Was", "supposed", "to", "be", "a", "pirate", "joke"];
let [word1, word2, ...words] = arrMatey;
console.log(word1, word2);
console.log(words);

// assign default of destructured assignment to a function
const someFunction = () => {
    console.log("ass shit function");
    return "function";
}

const [var1 = someFunction(), var2 = someFunction()] = ["Shit"];
console.log(var1, var2);


// Can also do object destructuring with objects
let object = {
    ass: 19,
    dicky: {
        key: "value",
        ket2: "shit"
    },
    shit: "20",
    poo: 120

}
let {ass, dicky, shit} = object;
console.log(ass, dicky, shit);