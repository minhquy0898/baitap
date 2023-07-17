function reverseString(str) {

    var arr = str.split('');

    var reversedArr = arr.reverse();

    var reversedStr = reversedArr.join('');

    return reversedStr;
}


var inputString = "abcdef";
var reversedString = reverseString(inputString);
console.log(reversedString); 
