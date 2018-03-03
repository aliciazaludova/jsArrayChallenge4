console.log("testing123");

// Challenge #4: Lost Without a Map
// Given an array of any number of integers display the array with each value doubled.

// var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
// var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]

// NOTE: needs to be condensed / more DRY

var challengeFourInputA = [ 1, 2, 3 ]; 
for(var i=0; i<challengeFourInputA.length; i++) {
	challengeFourInputA[i] = challengeFourInputA[i] * 2;
}
console.log(challengeFourInputA); // output [2, 4, 6]
var doubledNums = document.getElementById(challengeFourA);
challengeFourA.innerHTML = challengeFourInputA;

var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ]; 
for(var i=0; i<challengeFourInputB.length; i++) {
	challengeFourInputB[i] = challengeFourInputB[i] * 2;
}
console.log(challengeFourInputB); // output [ 6, 16, 2, 4, 8, 24 ]
var doubledNumsB = document.getElementById(challengeFourB);
challengeFourB.innerHTML = challengeFourInputB;
