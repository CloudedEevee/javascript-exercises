const sumAll = function(range1, range2) {
//Figure out which number is the smallest and which is largest. Put in order (first, last)
        let first;
        let last;
    //take the numbers given, and ensure number and positive
    if ((typeof range1 === "number" && typeof range2 === "number") && (range1 >= 0 && range2 >= 0)){
        //assign smallest value "first" and largest "last"
        if (range1 < range2) {
        first = range1;
        last = range2;
        }
        else if (range2 < range1) {
            first = range2;
            last = range1;
        }
    }
    else {
        return "ERROR"
    }


//Loop to sumAll, return sum
    let i = first;
    let sum = i;
    do {
        sum += ++i;
    }
      while (i < last) 
       return sum;
   };


sumAll(123, 1)
        //console.log()

// Do not edit below this line
module.exports = sumAll;