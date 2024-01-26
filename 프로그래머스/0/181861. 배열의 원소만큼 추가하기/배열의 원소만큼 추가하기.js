const solution = (arr) => {
    var answer = [];
    arr.forEach((a) => {
        for(let i = 0 ; i < a ; i++){
            answer.push(a)
        }
    })

    return answer;
}

// const solution = (arr) => {
//     return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
// }