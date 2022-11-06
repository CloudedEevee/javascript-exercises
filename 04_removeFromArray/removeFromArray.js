
const removeFromArray = function(add, ...remove) {
    const myArray = [];

    // add elements
    for (const each of add) {
        myArray.push(each);
    }

    // remove elements
    for (const each of remove) {
        if (myArray.indexOf(each) === -1) {
            continue;
        }
        else if (myArray.indexOf(each) !== -1) {
            myArray.splice(myArray.indexOf(each), 1);
        }
    }
        // console.log(myArray);
    return myArray;
};



// Do not edit below this line
module.exports = removeFromArray;


        // console.log(myArray);