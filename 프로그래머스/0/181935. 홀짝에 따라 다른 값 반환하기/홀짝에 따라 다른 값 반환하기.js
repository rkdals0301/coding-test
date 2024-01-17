const solution = (n) => {
    let answer = 0;
    Array.from({length: n}, (v, i) => i + 1).forEach((num, index) => {
    if (n % 2 === 0) {
        if (num % 2 === 0) answer += num * num
    } else if (n % 2 !== 0) {
        if (num % 2 !== 0) answer += num
    }
})
    
    return answer
}

// const solution = (n) => {
//     if(n%2===1)
//       return  (n+1)/2*((n + 1)/2);
//     else
//       return   n*(n+1)*(n+2)/6;
// }