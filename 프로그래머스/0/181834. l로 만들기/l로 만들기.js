const solution = (myString) => [...myString].map((v) => v = v <= "l" ? "l" : v).join("");

// const solution = (myString) => myString.replace(/[a-k]/g,'l')