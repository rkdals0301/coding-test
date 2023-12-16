const solution = (num_list) => (num_list.sort((a, b) => a - b)).filter((num, index) => index > 4)

// const solution = (num_list) => (num_list.sort((a, b) => a - b)).slice(5)