const repeatString = function (string, num) {
    // note: the if should be put b4 the for loop
    if (num < 0) {

        return 'ERROR'
    }

    let result = '';
    for (let i = 0; i < num; i++) {

        result = result + string
    }
    return result


};



// Do not edit below this line
module.exports = repeatString;
