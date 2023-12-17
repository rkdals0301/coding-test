const solution = (start_num, end_num) => {
    const answer = [];
    for (let i = start_num ; i <= end_num ; i++) {
        answer.push(i);
    }
    
    return answer
}

// const solution = (start, end) => Array.from({length: end - start + 1}, () => start++);
