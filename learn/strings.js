function printString(str) {
    console.log(str);
}

someString = "This is a string";
someString = "different now";
someString[0] = "f";
someString[2] = "A";
printString(someString);
printString(someString.toUpperCase());
printString(someString)
otherString = someString.toUpperCase();
printString(otherString);

console.log(someString.indexOf("now"));
