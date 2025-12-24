const personObject = {
    "name" : "jake",
    "dob" : "june 8",
    "age" : 34,
    "object" : {
        name: "recusion"
    }
};

const speak = () => {
    console.log("Hello from an object")
}

const objectWithMethod = {
    name : "ob",
    method: speak
}

const aDifferentObject = {
    "lastName" : "Baker",
    "birthplace" : "Germany"
};

// for an object, I dont have to put the
// key in "" because I think its automatic:

const anotherObject = {
    keyIsNotQuoted : true,
    answer: 42
};

const pooObject = {
    poo: "yes"
}

const keywordOb = {
    for: "yes",
    let: "no",
    const: "maybe"
}

const printOb = (ob) => {
    for (const [key, value] of Object.entries(ob)) {
        console.log(key + ": " + value)
    }
}

const otherPrint = (object) => {
    for (const key in object) {
        if (typeof(object[key]) === "object") {
            otherPrint(object[key]);
        } else {
            console.log(key + ": " + object[key])
        }
    }
}

const printPersonObject = (po) => {
    console.log(po.name);
    console.log(po.dob);
    console.log(po.age);
    console.log("But im gonna attempt to change the values of this fucker.  go ahead\n print it again");
    po.name = "NEW NAME BITCHES";
    po.age = 400

};

function checkIfObjectHasPoo(ob) {
    if ("poo" in ob) return true;
    return false
}

otherPrint(personObject);


objectWithMethod.method()
objectWithMethod.otherMethod = (x) => {
    msg = `${this.name} passed ${x} into the method`;
    console.log(msg);
}

objectWithMethod.otherMethod(10);