const solution = (arr, n) => arr.map((item, index) => arr.length % 2 === 0 ? index % 2 !== 0 ? item + n : item : index % 2 === 0 ? item + n : item)


// const solution = (arr, n) => arr.map((num, idx) => arr.length % 2 !== idx % 2 ? num + n : num)