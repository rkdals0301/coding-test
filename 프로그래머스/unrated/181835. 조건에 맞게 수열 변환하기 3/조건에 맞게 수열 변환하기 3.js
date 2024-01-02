const solution = (arr, k) => k % 2 === 0 ? arr.map((item) => item + k) : arr.map((item) => item * k)

// const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)