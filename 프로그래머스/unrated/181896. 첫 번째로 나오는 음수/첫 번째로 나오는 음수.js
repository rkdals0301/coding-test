const solution = (num_list) => {
    const index = num_list.findIndex((num, index) => num < 0)
    return index !== undefined ? index : -1 
}