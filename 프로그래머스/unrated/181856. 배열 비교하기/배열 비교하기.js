const solution = (arr1, arr2) => {
    if (arr1.length > arr2.length) {
        return 1;
    } else if (arr1.length < arr2.length) {
        return -1;
    } else if (arr1.length === arr2.length) {
        const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
        const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
        
        if (sum1 > sum2)
            return 1;
        else if (sum1 < sum2)
            return -1;
        else if (sum1 === sum2)
            return 0;
    }
};


// const solution = (arr1, arr2) => {
//     return arr1.length !== arr2.length ? compare(arr1.length, arr2.length) : compare(arr1, arr2, "reduce");
// };

// const compare = (a, b, option) => {
//     if (option === "reduce") {
//         a = a.reduce((acc, cur) => acc + cur);
//         b = b.reduce((acc, cur) => acc + cur);
//     }
//     return a > b ? 1 : a < b ? -1 : 0;
// };