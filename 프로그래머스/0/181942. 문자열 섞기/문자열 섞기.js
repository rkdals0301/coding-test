const solution = (str1, str2) => {
    let result =[]
    
    for(i=0; i<str1.length; i++){
        result.push(str1[i] + str2[i])
    }
    
    return result.join('')
}