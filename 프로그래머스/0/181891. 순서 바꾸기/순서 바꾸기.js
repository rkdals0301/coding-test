const solution = (num_list, n) => [...num_list.slice(n), ...num_list.slice(0, n)]

// const solution = (num_list, n) => num_list.push(...num_list.splice(0, n));