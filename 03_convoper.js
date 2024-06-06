let score = 33
let score2="hello"
// console.log(typeof 3);
let acct = Number(score2)
// console.log(typeof acct);
/*
1=> true
"" => false
"hitesh" => true
*/
let somenum=33
let strngnum = String (somenum)
console.log(strngnum);
console.log(typeof strngnum);
//-----------------------------------
console.log(null>0);
console.log(null==0);
console.log(null>=0);
/* The reason is that an equality check == and comparisons > <
>== <== work differently 
comparisions covert null  to a number , treating it as 0.
thats why (3)null>=0 is true and (1) null >0 is false.
*/