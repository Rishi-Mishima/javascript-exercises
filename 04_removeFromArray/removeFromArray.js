const removeFromArray = function (arr, ...values) {

    const result = []

    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is NOT in the `values` array
        if (!values.includes(arr[i])) {
            result.push(arr[i]); // Add elements that are NOT in `values`
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
