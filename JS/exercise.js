/**
 * 1. Write a One liner JavaScript function to create an array of objects from an array of strings in the format:
 */
const input = ['Dirk', 'Plato', 'Gwen'];

const createArrayOfObjects = (input) => input.map((item, idx) => ({ index: idx, name: item }));

console.log("#1 Create Array Of Objects", createArrayOfObjects(input));

/**
 * 2. Write a one liner function to calculate the total amount donated to a charity by all donors.
 * The data is presented in an array of objects:
 */
const donorsInfo = [
    {
        name: 'Donor1',
        amount: 500,
    },
    {
        name: 'Donor1',
        amount: 500,
    },
    {
        name: 'Donor1',
        amount: 500,
    },
];

const getTotalDonation = (donors) => donors.reduce((prev, cur) => prev + cur.amount, 0);

console.log("\n\n#2 Get Total Donations\n", getTotalDonation(donorsInfo));

/**
 * 3. Write a one liner Function in JS to get all the keys of an object in an array in lowercase.
 */
const object = {
    firstName: 'val',
    lastName: 'val',
};

const getKeyInLowerCase = (obj) => Object.keys(obj).map(key => key.toLowerCase());

console.log("\n\n#3 Get Keys in Lower Case\n", getKeyInLowerCase(object));

/**
 * 4. Write a JS Function to get the first index of the nth largest element in an array that satisfies a condition.
 * EG:
 * In an array of donors as below:
 */
const donorsInfo2 = [
    {
        name: 'Donor1',
        amount: 1500,
    },
    {
        name: 'Donor1',
        amount: 2500,
    },
    {
        name: 'Donor1',
        amount: 5500,
    },
    {
        name: 'Donor1',
        amount: 5200,
    },
    {
        name: 'Donor1',
        amount: 5500,
    },
];

const nThLargestWithCondition = (array = [], nthIndex = 0, conditionCallback = () => { }) => {
    const newArray = array.filter(conditionCallback);
    newArray.sort((a, b) => b.amount - a.amount);

    const sortedSet = new Set(newArray.map(elem => elem.amount));

    const sortedArray = Array.from(sortedSet);
    const element = sortedArray[nthIndex - 1];


    const amountArray = array.map(elem => elem.amount);
    return [amountArray.indexOf(element), amountArray.lastIndexOf(element)];
}

const condition = (elem) => elem.amount > 5000;
console.log("\n\n#4 Get Nth largest index with condition\n", nThLargestWithCondition(donorsInfo2, 1, condition));

/**
 * 6. Write a JavaScript program to get the index of the function in an array of functions
 * which executed the fastest.
 * You cannot run a function more than once.
 */

const arrayOfFunctions = [
    () => {
        for (let i = 0; i < 300000; i++) { }
    }, 
    () => {
        for (let i = 0; i < 100000; i++) { }
    },
    () => {
        for (let i = 0; i < 200000; i++) { }
    },
]

const getExectionTime = (func) => {
    const start = performance.now();
    func();
    const duration = performance.now() - start;
    return duration;
}

const findFastest = (array = []) => {
    const exectionTimes =
        array.map(func => getExectionTime(func));

    let fastest = exectionTimes[0];

    exectionTimes.forEach((time) => {
        fastest = time < fastest ? time : fastest;
    });

    return exectionTimes.indexOf(fastest);
}
console.log("\n\n#6 Fastest Execution Index:\n", findFastest(arrayOfFunctions));

/**
 * 7. Write a JS Function (2 liner??) to get the the nth largest element
 * in an array of objects based on a sort function. This index must be only among those
 * elements that satisfy a condition as provided by a callbackFn
 * Where the sortfunction, the `n` and the condition are params.
 */
const donorsInfo3 = [
    {
        name: 'Donor1',
        amount: 1500,
    },
    {
        name: 'Donor1',
        amount: 2500,
    },
    {
        name: 'Donor1',
        amount: 5500,
    },
    {
        name: 'Donor1',
        amount: 5200,
    },
];

const getNthIndex = (array, n, sortFunction, conditionCallBack) => {
    const newArray = array.filter(conditionCallBack);

    const sortedArray = newArray.sort(sortFunction);

    return sortedArray[n - 1];
};

const sortFunction = (a, b) => a.amount - b.amount;
const condition2 = (elem) => elem.amount > 2000;
console.log("\n\n#7 Nth with sort function and condition\n", getNthIndex(donorsInfo3, 1, sortFunction, condition2));
