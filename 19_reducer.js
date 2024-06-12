const myNums =[1,2,3]

let myTotal=myNums.reduce((acc, currval)=>{
    console.log(`accumulator : ${acc}, currval : ${currval}`);
    return acc + currval
},0)
console.log(myTotal); 