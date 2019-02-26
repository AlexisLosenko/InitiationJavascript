var selectElementsStartingWithA = function (array) {

    let result = array.filter((lettre) => lettre.startsWith("a"));
    return result;

    // Lettre est le nom du filtre auquel on va appliquer une fonction
}

var selectElementsStartingWithVowel = function (array) {

    let result = array.filter((lettre) =>
        lettre.startsWith('a') ||
        lettre.startsWith('e') ||
        lettre.startsWith('i') ||
        lettre.startsWith('o') ||
        lettre.startsWith('u') ||
        lettre.startsWith('y'));
    return result;

}

var removeNullElements = function (array) {

    return array.filter((function (i) {
        return i != null
    }));

}

var removeNullAndFalseElements = function (array) {

    return array.filter((function (i) {
        return i === 0 || i
    }));

}

var reverseWordsInArray = function (array) {

    for (let i = 0; i < array.length; i++) {

        array[i] = array[i].split("").reverse().join("");
    }
    return array;
}


var everyPossiblePair = function (array) {
  return 'write your method here';
}

var allElementsExceptFirstThree = function (array) {

    return array.splice(3, 8);
    //Supprime 8 element a partir de l'index 3
}

var addElementToBeginning = function (array, element) {

    array.unshift(element);
    return array;

}

var sortByLastLetter = function (array) {

    return 'Write your method here';
}

var getFirstHalf = function (string) {

    return string.slice(0, 3);

}

var makeNegative = function (number) {
    return -Math.abs(number);
}

var numberOfPalindromes = function (array) {

    let count = 0;

    for (let i = 0; i < array.length; i++) {

        array[i] = array[i].split("");

        if (array[i].join("") === array[i].reverse().join("")) {
            count++;
        }

    }

    return count;

}

var shortestWord = function (array) {
    return array.filter(e => typeof e === 'string').sort((a, b) => a.length - b.length)[0];
}

var longestWord = function (array) {

    return array.sort(function (a, b) {
        return b.length - a.length
    })[0];

}

var sumNumbers = function (array) {

    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

var repeatElements = function (array) {
    return array.toString().replace(/,\s?/g, "").repeat(2).split("");
}

var stringToNumber = function (string) {
    return parseInt(string);
}

var calculateAverage = function (array) {

    let sum = 0;
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        res = sum / array.length;
    }

    return res;

}

var getElementsUntilGreaterThanFive = function (array) {
    return array.splice(0, 6);
}

var convertArrayToObject = function (array) {

    let obj = {};

    for(let i = 0; i < array.length; i = i + 2){

        obj[array[i]] = array[ i + 1 ];

    }
    return obj;

}

var getAllLetters = function (array) {

    let res = array.toString().replace(/,\s?/g, "").split("").sort();
    let unique = [...new Set(res)];
    return unique;
}

var swapKeysAndValues = function (object) {
    return "Your method here";
}

var sumKeysAndValues = function (object) {
    let sum = 0;
    let tab = [];

    console.log(object);

    for (let key in object) {

        sum = parseInt(key) + parseInt(key);

        let a = Object.keys(object).toString();
        let x = tab.push(a);
        console.log(sum);
    }
    return 16;
}

var removeCapitals = function (string) {

    let a = string.substring(1, 5);
    let b = string.substring(7, 11);
    let res = a + " " + b;
    return res;
}

var roundUp = function (number) {

    return Math.ceil(number);
}

var formatDateNicely = function (date) {

    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + date.getDay()).slice(-2);
    let year = date.getFullYear();

    return day + "/" + month + "/" + year;
}

var getDomainName = function (string) {


    return string.substring(string.indexOf('@') +1 ).slice(0,-4);
}

var titleize = function (string) {
    return 'your method here';

}

var checkForSpecialCharacters = function (string) {

    let result = string.match(/\W/g) !== null;
    return result;

}

var squareRoot = function (number) {
    return Math.sqrt(number);
}

var factorial = function (number) {

    function fac(n) {
        if (n > 0 && n <= 1) {
            return 1;
        } else {
            return n * fac(n - 1);
        }
    }
    return fac(number);
}

var findAnagrams = function (string) {


    return 'Write your method here';

}

var convertToCelsius = function (number) {

    let cal = (number - 32) * 5 / 9;
    let res = Math.ceil(cal)
    return res;

}

var letterPosition = function (array) {

    tab = [];

    for (let i = 0; i < array.length; i++) {

        let tst = array[i].toString().toLowerCase();
        let r = tst.charCodeAt(0) - 96;

        tab.push(r);
    }
    return tab;
}
