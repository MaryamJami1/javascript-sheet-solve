var a = 2; //3
var b = 4; //3  4
var c = 6;  //5  6

var result = a++ - --b + c-- + b++ - ++c;
            //2  -  3  +  6  +  3  -  6
            //   -1    +  6  +  3  -  6
            //     5   +    3  - 6
            //      8    -   6
            //          2


 console.log(result);