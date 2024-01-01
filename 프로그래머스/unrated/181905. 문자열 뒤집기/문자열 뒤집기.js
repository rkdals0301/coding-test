const solution = (my_string, s, e ) => {
    const string1 = my_string.slice(0, s);
    const string2 = [...my_string.slice(s, e + 1)].reverse().join('');
    const string3 = my_string.slice(e + 1);

    return `${string1}${string2}${string3}`
}

// const solution = (my_string, s, e ) => {
//     const str = my_string.substring(s, e+1);
//     const newStr = str.split('').reverse().join('');

//     return my_string.replace(str, newStr);
// }