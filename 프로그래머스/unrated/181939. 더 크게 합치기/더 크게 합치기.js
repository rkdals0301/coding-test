const solution = (a, b) => {
    const answer1 = Number(`${a}${b}`)
    const answer2 = Number(`${b}${a}`)
    if (answer1 > answer2 || answer1 === answer2)
        return answer1
    else if (answer2 > answer1)
        return answer2 
}

// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// }