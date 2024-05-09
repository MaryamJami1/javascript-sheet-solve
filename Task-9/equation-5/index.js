let a =10; //11
let b = 5;  // 4 3
let c = 8;//  9

let result = a + --b - c - ++c + b-- + a++;
//           10+   4 - 8 -  9  + 4   +  10
//               14  -  8  - 9  + 4  +  10
//                   6   -   9  +  4  + 10
//                     -3      +   4  + 10
//                        1     +     10 
//                             11

console.log(result);