// module.exports.array_counter = function(array){
//     return 'Array length ' + array.length + ' elements'
// }

// module.exports.multiply = function(x,y){
//     return `$(x) multiply $(y) equal ${x*y})`
// }

// module.exports.some_value = 451;

// module.exports.array_counter = array_counter;
// module.exports.multiply = multiply;
// module.exports.some_value = some_value;

// console.log(array_counter([1,43,654,32]));


var array_counter = function(array){
    return 'Array length ' + array.length + ' elements'
}

var multiply = function(x,y){
    return `$(x) multiply $(y) equal ${x*y})`
}

var some_value = 451;

module.exports = {
    array_counter: array_counter,
    multiply: multiply,
    some_value: some_value
}