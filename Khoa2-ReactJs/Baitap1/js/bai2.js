function removeDuplicates(arr) {
    var uniqueSet = new Set(arr);

    var uniqueArr = Array.from(uniqueSet);

    return uniqueArr;
}

var inputArray = [1, 2, 3, 5, 4, 2, 6, 4];
var uniqueArray = removeDuplicates(inputArray);
console.log(uniqueArray); 
