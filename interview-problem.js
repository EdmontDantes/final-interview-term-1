//write a function check if a string a palandrome

//palandrome backwards and forwards like racecar backwrads is racecar


// aba === aba is a palandrome
// abaa !== aba or is aaba
const secondEpicFunc = (str) => str.split('').reverse().join('') === str;

console.log(secondEpicFunc('aba'));

const testForPalandrome = function(str) {
    // if(palandrone return true otherwise return fase)
    return str.split('').reverse().join('') === str;

    //example aba = true
    //example aaba = false
    // let reversedStr = str.split('').reverse().join('');

    // for( let i = str.length -1; i >= 0; i--) {
    //     reversedStr += str[i];
    // }

    // if (reversedStr === str) {
    //     return true;
    // } else if (reversedStr !== str) {
    //     return false;
    // }
};

console.log(testForPalandrome('aba'));

//instead palndrome turn into palandrome example 'mmada' into 'madam' 'aabbababc' into 'aabbcbbaa' into 'aabbcbbaa';
