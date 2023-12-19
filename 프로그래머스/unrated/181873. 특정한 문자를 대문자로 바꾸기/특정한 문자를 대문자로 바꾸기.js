const solution = (my_string, alp) => [...my_string].map((string, index) => {
    if (string === alp) 
        return string.toUpperCase() 
    else 
        return string
}).join('')