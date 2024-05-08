var a = 5; // 6
var b = 3;  //4
var c = 7; // 8 9
var result = a++ - ++c + b + ++c - b++;
               //5  - 8  + 3 + 9  - 3;
               // -3 + 3 + 9 -3
               //    0      6  
              //   Answer is 6
console.log(result);