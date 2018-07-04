const counter = arr => {
    console.log(arr.length + " elements in this array");
}

const adder = ( a, b ) => {
    console.log( "sum of the numbers is: " + a + b );
}

const pi = 3.142;

// module.exports.counter = counter; 
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = { counter, adder, pi };