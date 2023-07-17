function findMostFrequentElement(arr) {

    var frequencyCounter = {};

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }


    var mostFrequentElement;
    var maxFrequency = 0;

    for (var key in frequencyCounter) {
        if (frequencyCounter[key] > maxFrequency) {
            mostFrequentElement = key;
            maxFrequency = frequencyCounter[key];
        }
    }


    return {
        element: mostFrequentElement,
        frequency: maxFrequency
    };
}


var inputArray = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
var result = findMostFrequentElement(inputArray);
console.log("Value:", result.element);
console.log("Count:", result.frequency);
