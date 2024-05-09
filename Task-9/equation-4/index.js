var a = 10; //11
var b = 5;// 4
var c = 8;//9 10

let result = ++a + --b - c++ - ++c + b--;
//            11  + 4  - 8  -   10  + 4
//               15   -  8  -  10  +  4
//                    7     - 10   +  4
//                      -3   +   4
//                           1

console.log(result);