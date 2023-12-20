const solution = (num_list) => {
    let oddSum = '';
    let evenSum = '';
    num_list.forEach((num, index) => {
        num % 2 === 0 ? evenSum += num : oddSum += num
    });
    
    return Number(oddSum) + Number(evenSum);
}

// const solution = (num_list) => {
//     const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
//         if (num % 2 === 0) {
//             evens.push(num)
//         } else {
//             odds.push(num)
//         }
//         return { odds, evens }
//     }, { odds: [], evens: [] });
    
//     return Number(odds.join('')) + Number(evens.join(''));
// }