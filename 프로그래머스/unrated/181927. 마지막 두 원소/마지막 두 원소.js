const solution = (num_list) => {
    const num1 = num_list[num_list.length - 1]
    const num2 = num_list[num_list.length - 2]
    num_list.push(num1 > num2 ? num1 - num2 : num1 * 2)
    
    return num_list
}

// const solution = (num_list) => {
//     const [a, b] = [...num_list].reverse();
//     return [...num_list, a > b ? (a - b) : a * 2];
// }
