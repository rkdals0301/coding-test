const solution = (num_list, n) => {
    const num = num_list.find((num) => num === n)
    return num ? 1 : 0
}

// const solution = (num_list, n) => +num_list.includes(n)