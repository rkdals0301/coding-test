const solution = (my_string, alp) => [...my_string].map((string, index) => {
    if (string === alp) 
        return string.toUpperCase() 
    else 
        return string
}).join('');

// const solution = (my_string, alp) => my_string.replaceAll(alp, alp.toUpperCase());