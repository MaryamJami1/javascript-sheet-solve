var userInput = +prompt("Enter Your score");

if(userInput >= 90){
console.log(`${userInput}% congratulations you got a A Grade`);
}else if(userInput >= 80){
console.log(`${userInput}% congratulations you got a B Grade`)
}else if(userInput >= 70){
    console.log(`${userInput}%  congratulations you got a C Grade`)
}else if(userInput >= 60){
    console.log(`${userInput}%  congratulations you got a D Grade`)
}else if(userInput <= 59){
    console.log(`${userInput}% Your are failed`);
}else{
    console.log(`${userInput}`);
}