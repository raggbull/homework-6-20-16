function addNumbers(numberA, numberB) {
    console.log(numberA + numberB);
    return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2);

 console.assert(twoPlusTwo === 4);





    var myVarOne = [10, 20, 30, 40][1];
    var myVarTwo = [10, 20, 30, 40][3];
    console.assert(myVarOne === 20);
    console.assert(myVarTwo === 40);


    function vectorLength(vector){

  // points
  var point1 = vector[0];
  var point2 = vector[1];

  // x,y coords
  var point1x = point1[0];
  var point1y = point1[1];
  var point2x = point2[0];
  var point2y = point2[1];
  var vectorLength = Math.sqrt( Math.pow(point2x-point1x, 2) + Math.pow(point2y-point1y, 2) );
  return vectorLength;
}

console.assert(vectorLength([[0, 1],[0, 0]]) === 1);
console.assert(vectorLength([[0, 3],[4, 0]]) === 5);
console.assert(vectorLength([[1, -1],[1, -1]]) === 0);