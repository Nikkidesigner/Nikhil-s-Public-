// function add( a, b)
// {
// return a+b
// }
// result = add(4,65);
// console.log(result);
//===========================================
// function login(username){
//     if(username===undefined)
//         console.log("Please enter valid username");
//     else
//    return `${username} just logged in`;

// }
// const result1= login("Nikhil");
// console.log(result1);
//=====================================================

// function calculateprice(val1 , val2 ,...num1 )// rest operator
// {
//     return num1;
// }
// console.log(calculateprice(100,200,300,400,500,600))
//=======================================================
// const user ={
//     name:"Nikhil",
//     price:100
// }
// function handleobject(objname)
// {
//     console.log(`The username is ${objname.name} and its price is ${objname.price}`);
// }
// handleobject(user) 
// //or another alternate method 
// handleobject({
//     name:"Prathamesh",
//     price:200
// })
//========================================
newarr=[200,300,400,500]
function  returnsecondvalue(getarr)
{
 return getarr[3]
}
console.log(returnsecondvalue(newarr))
// or anothe option of passing array directly 
console.log(returnsecondvalue([200,300,400,500,600]))
//==================================================