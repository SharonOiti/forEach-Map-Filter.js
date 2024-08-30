function doubleValues(arr) {
    // Create a new array to store the doubled values
    let doubledArr = [];
    
    // Loop through each element in the input array
    for(let i = 0; i < arr.length; i++) {
        // Double the value and push it to the new array
        doubledArr.push(arr[i] * 2);
    }
    
    // Return the new array with doubled values
    return doubledArr;
}

function onlyEvenValues(arr) {
    // Create a new array to store the even values
    let evenArr = [];
    
    // Loop through each element in the input array
    for(let i = 0; i < arr.length; i++) {
        // Check if the value is even
        if(arr[i] % 2 === 0) {
            // If it's even, push it to the new array
            evenArr.push(arr[i]);
        }
    }
    
    // Return the new array with only even values
    return evenArr;
}

function showFirstAndLast(arr) {
    // Create a new array to store the first and last characters
    let resultArr = [];
    
    // Loop through each string in the input array
    for(let i = 0; i < arr.length; i++) {
        // Get the current string
        let str = arr[i];
        
        // Concatenate the first and last character of the string
        let firstAndLast = str[0] + str[str.length - 1];
        
        // Push the concatenated result to the new array
        resultArr.push(firstAndLast);
    }
    
    // Return the new array with the first and last characters
    return resultArr;
}

function addKeyAndValue(arr, key, value) {
    // Loop through each object in the input array
    for(let i = 0; i < arr.length; i++) {
        // Add the new key and value to the current object
        arr[i][key] = value;
    }
    
    // Return the modified array
    return arr;
}

function vowelCount(str) {
    // Convert the string to lowercase to handle case insensitivity
    str = str.toLowerCase();
    
    // Define a string of vowels
    const vowels = "aeiou";
    
    // Create an object to store the count of each vowel
    let vowelCounts = {};
    
    // Loop through each character in the string
    for(let i = 0; i < str.length; i++) {
        // Check if the character is a vowel
        if(vowels.includes(str[i])) {
            // If the vowel is already in the object, increment its count
            if(vowelCounts[str[i]]) {
                vowelCounts[str[i]]++;
            } else {
                // If the vowel is not in the object, add it with a count of 1
                vowelCounts[str[i]] = 1;
            }
        }
    }
    
    // Return the object with the vowel counts
    return vowelCounts;
}

function doubleValuesWithMap(arr) {
    // Use the map function to create a new array with doubled values
    return arr.map(function(value) {
        return value * 2;
    });
}

function valTimesIndex(arr) {
    // Use the map function to create a new array with values multiplied by their indices
    return arr.map(function(value, index) {
        return value * index;
    });
}

function extractKey(arr, key) {
    // Use the map function to create a new array with the values of the specified key
    return arr.map(function(obj) {
        return obj[key];
    });
}

function extractFullName(arr) {
    // Use the map function to create a new array with the full names
    return arr.map(function(obj) {
        return obj.first + ' ' + obj.last;
    });
}

function filterByValue(arr, key) {
    // Use the filter function to create a new array with objects that contain the specified key
    return arr.filter(function(obj) {
        return obj.hasOwnProperty(key);
    });
}

function find(arr, value) {
    // Use the find method to locate the first element that matches the value
    return arr.find(function(element) {
        return element === value;
    });
}

function findInObj(arr, key, value) {
    // Use the find method to locate the first object that has the specified key with the given value
    return arr.find(function(obj) {
        return obj[key] === value;
    });
}

function removeVowels(str) {
    // Define a string of vowels in both lower and upper case
    let vowels = 'aeiouAEIOU';
    
    // Convert the input string to lower case
    str = str.toLowerCase();
    
    // Use the split method to convert the string to an array of characters
    // Use the filter method to remove vowels
    // Use the join method to convert the array back to a string
    return str.split('').filter(function(char) {
        return !vowels.includes(char);
    }).join('');
}

function doubleOddNumbers(arr) {
    // Use the filter method to select only the odd numbers
    // Use the map method to double the filtered odd numbers
    return arr.filter(function(num) {
        return num % 2 !== 0;
    }).map(function(num) {
        return num * 2;
    });
}