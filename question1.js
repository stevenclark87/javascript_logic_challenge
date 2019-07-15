var array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
var uniqueSet = new Set(array);
var uniqueArray = [...uniqueSet];
var sortUniqueArray = uniqueArray.sort(function(a, b){return a - b});
var finalArray = [];

uniqueArray.forEach(function(element) {
    var filteredArray = array.filter(x => x === element);
    if (filteredArray.length === 1) {
        finalArray.push(filteredArray[0]);
    } else {
        finalArray.push(filteredArray);
    } console.log(finalArray);
  });

finalArray;