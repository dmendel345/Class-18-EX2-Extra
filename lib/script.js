// script is here.

//1 - sum of an array.
var arrNum = [23, 34, 12, 99, -88, 32];
var sum = 0;
var i = 0;

while (i < arrNum.length) {
    console.log("adding to sum: " + arrNum[i]);
    sum += arrNum[i];

    i++;
}
console.log("sum of an array : " + sum);


// 2 - Max array (find the maximum item in an array).
var maxNum = 0;
var i = 0;

while (i < arrNum.length) {
    if (arrNum[i] > maxNum) {
         maxNum = arrNum[i];
        i++;
    }
    else {
        // console.log("next number: " + arrNum[i]);
        i++;
    }

}
console.log("maximum item in an array: " + maxNum);


//3 - Count array (count the number of even numbers in an array)
var i = 0;
var j = 0;

while (i < arrNum.length) {
    if (arrNum[i] % 2 == 0) {
        i++;
        j++;
    }
    else {
        // console.log("next number: " + arrNum[i]);
        i++;
    }
}
console.log("number of even numbers: " + j);


// 4 - Find array (find the index of a given item in an array).
// need to fix !!!
function myFunction() {
    var x = arrNum.toString();
    document.getElementById("arr1").innerHTML = x;
    console.log(x);
  }
  function myFunction1() {
    var idx = arrNum.indexOf(num2);
    console.log(num2);
    console.log(idx);
    document.getElementById("arr2").innerHTML = idx;
  }
