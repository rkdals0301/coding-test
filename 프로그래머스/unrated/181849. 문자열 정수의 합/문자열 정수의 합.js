const solution = (num_str) => {
    const numArray = num_str.split("")
    return numArray.reduce((acc, cur) => {
        return Number(acc) + Number(cur);
    }, 0)
}

// const solution = (num_str) => {
//     return [...num_str].reduce((acc, cur) =>  acc + +cur, 0)
// }