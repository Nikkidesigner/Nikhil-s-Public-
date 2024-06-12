const myNums =[1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=>num>4)
console.log(newNums);
//=========using arrow functions=============
const newNums2 = myNums.filter((num)=> {
    return num>4
})
console.log(newNums2);
//============using forEach====================
const newNums1 = []
myNums.forEach((num)=>{
    if(num>4)
        {
            newNums1.push(num)
        }
    })
    console.log(newNums1);
    //=======chaining===================================
    let chainnum =   myNums
                    .map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>45)
    console.log(chainnum);