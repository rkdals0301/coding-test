// const solution = (myString) => [...myString].map((string) => string.toLowerCase() === 'a' ? string.toUpperCase() : string.toLowerCase()).join('')

const solution = (myString) => myString.toLowerCase().replaceAll('a', 'A');