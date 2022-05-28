// sum zero

const sumZero = (arr) => {
    let bool = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                bool = true;
            }
        }
    }
    return bool;
}
// console.log(sumZero([1, 2, 3, 4, -2]))
// runtime complexity is O(n^2) because there is a nested for loop, and as the array gets bigger, the time it takes to run will increase exponentially (this is the quadratic runtime equation)
// space complexity is O(n) because the array is an unknown size

// unique chars

const unique = (str) => {
    const string = new Set(str.split(''))
    return str.split('').length === Array.from(string).length
}
// console.log(unique('hello'))
// runtime complexity will be O(n) because the function time depends on the size of the string you give it
// space complexity is O(n) because the size of the set object will change depending on the length of the string passed in


// pangram sentence

const pangram = (s) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
 }
// console.log(pangram(`The quick browr the lazy dog`))
// runtime complexity will be O(n) because the function time depends on the size of the string put in
// space complexity is O(n) because the sring passed in is an unknown size

// longest word

const longestWord = (arr) => {
    let word = ``;
    let index = 0;

    arr.forEach((elem, i, arr) => {
        if (elem.length > word.length) {
            word = elem;
            index = arr[i];
        }
    });

    return word.length;
}

// console.log(longestWord([`hello`, `happpiness`, `mongolian barbeque`, `avada kadavra`, `mice`]))
// time complexity is O(n) because the function time depends on the size of the array and the strings in the array
// space complexity is O(n) because the arr passed in is unknown length

