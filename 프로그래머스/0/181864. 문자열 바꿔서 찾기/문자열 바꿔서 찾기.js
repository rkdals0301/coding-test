const solution = (myString, pat) => {
    const string = [...myString].map((string) => {
        if (string === 'A')
            return string.replaceAll('A', 'B')
        else if (string === 'B')
            return string.replaceAll('B', 'A')
        
        return string
    }).join('')
    
    return string.includes(pat) ? 1 : 0
}

// const solution = (myString, pat) => [...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0