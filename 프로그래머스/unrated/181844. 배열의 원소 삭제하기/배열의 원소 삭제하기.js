const solution = (arr, delete_list) => arr.filter((item) => !delete_list.find((deleteItem) => deleteItem === item))


// const solution = (arr, delete_list) => arr.filter((item) => !delete_list.includes(item))