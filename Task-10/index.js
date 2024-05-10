console.log(undefined && true);              //undefined
console.log(true && false);                  //false
console.log(true && undefined);             //undefined
console.log(undefined && undefined);        //undefined
console.log('undefined' || 'true');        //undefined
console.log(null || 'true');               //true
console.log(null || undefined);            //undefined
console.log(null && true || false)          //false
console.log(null && true || false && true);  //false
console.log(null && true || true && true)    //true
console.log((null && true) || (true && 1))    //1
 