const solution = (n, k) => Array.from({length: n}, (_, i) => i + 1).filter((num) => num % k === 0)

// const solution = (n, k) => Array(~~(n/k)).fill(k).map((v, i) => v * (i + 1))