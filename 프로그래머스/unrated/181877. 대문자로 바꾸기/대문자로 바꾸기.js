const solution = (myString) => [...myString].reduce((acc, cur) => acc + cur.toUpperCase(), '')

// const solution = (myString) => [...myString].map(str => str.toUpperCase()).join('');