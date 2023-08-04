const palindromeV1 = (string) => {
    const reverse = string.split('').reverse().join('')
    console.log(reverse===string)
}
palindromeV1('level')

const palindromeV2 = (string) => {
    const array = []
    for (let i = string.length -1; i >= 0; i--){
        array.push(string[i])
    }
    const palindrome = array.join('') === string
    console.log(palindrome)
}
palindromeV2('reverse')
