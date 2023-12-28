const solution = (my_string, is_suffix) => my_string.slice(my_string.length - is_suffix.length) === is_suffix ? 1 : 0

// const solution = (my_string, is_suffix) => my_string.endsWith(is_suffix) ? 1 : 0