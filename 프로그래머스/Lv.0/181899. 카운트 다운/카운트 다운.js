const solution = (start, end_num) => {
    let answer = []
    for (let i = start ; i >= end_num ; i--) {
        answer.push(i)
    }
    
    return answer
}

// const solution = (start, end_num) => Array(start - end_num + 1).fill(start).map((num, index)=> num - index);