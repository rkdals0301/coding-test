const solution = (num_list) => {
    let odd = 0
    num_list.forEach((num, index) => {
        if ((index + 1) % 2 === 1) odd += num
    })
    let even = 0
    num_list.forEach((num, index) => {
        if ((index + 1) % 2 === 0) even += num
    })
    
    return Math.max(odd, even)
}