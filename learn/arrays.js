const arr = [];
const arr2 = [
    "Irina",
    "Ellie",
    "Oliver"
];

const print_array = (arr) => {
    if (!Array.isArray(arr)) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return true;
}

console.log(arr2);

/*
    Arrays are kind of like tuples and can hold different types
    brackets access can't understand negative numbers, but you 
    can select from the end using array.at(-1)
*/

const multi = [10, "hello", 15, "world"];
console.log(multi);

console.log(multi.at(-2));

const someArrray = [1,2,3,4,5];
print_array(someArrray);
print_array(someArrray.shift());
print_array(someArrray.shift());
print_array(someArrray);
console.log(someArrray.shift())

for(let shit of someArrray) {
    console.log(`Shit: ${shit}`);
};

/**
 * Array Methods:
 *  
 * 
 */