const reverseString = function(string) {
    const splitString = string.split(``);
    splitString.reverse();
    return splitString.join(``);
};

// Do not edit below this line
module.exports = reverseString;
