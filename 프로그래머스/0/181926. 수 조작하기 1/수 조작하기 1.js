const solution = (n, control) => {
    [...control].forEach((char) => {
        if (char === 'w') {
            n = n + 1
        } else if (char === 's') {
            n = n - 1
        } else if (char === 'd') {
            n = n + 10
        } else if (char === 'a') {
            n = n - 10
        }
    })
    
    return n
}