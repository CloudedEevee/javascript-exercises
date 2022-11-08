const leapYears = function(year) {
    // if year can be divided by 4 or 400, leap year (= true)
    //if year can be divided by 100 but NOT 400, not leap year (= false)

    if ((year % 100 === 0 && year % 400 !== 0) || year % 4 !== 0) {
        return false;
    }
    else {
        return true;
    }

};

// Do not edit below this line
module.exports = leapYears;
