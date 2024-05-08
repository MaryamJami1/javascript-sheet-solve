var a = 1;   //2 1 2
var b = 2;
var c = 0;  //1

var result = ++a - --a + ++c + c - a++ + --b;
              //2 - 1  +  1   + 1 - 1   + 1
              //  1    +  1   + 1 - 1   + 1
              //       2   + 1  - 1 + 1
              //          3  - 1  +  1
              //          2    +  1
              // answer is     3


console.log(result);