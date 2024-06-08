//object literals
const sym1 = Symbol("key1");
 const jsuser=
 {
    name:"Nikhil",
    age:18,
    location:"jaipur",
    email:"helloworld@gmail.com",
    isLoggedIn:"false",
    [sym1]:"mykey1"
 }
//  console.log(jsuser.email)// one method to accces the object 
//  console.log(jsuser["email"]);
 // using symbol data type 
 
//  console.log(jsuser[sym1]);
//----------------freeze an object-------------------
jsuser.email="hiworld@gmail.com";
// Object.freeze(jsuser)
 
//===========functions-----------------------
jsuser.greeting = function()
{
    // console.log("Hello js user");
}
// console.log(jsuser.greeting());
//---------------------------------------
// const tinderuser = new Object() // singleton object
// let tinderuser1={
//     name:"Nikhil",//here name is key and Nikhil is its value 
//     Roll:15,
//     method: function()
//     {
//         console.log("This is a singleton method ");
//     }
// };// non singleton object 
// tinderuser1.method();
// console.log(tinderuser1);
//=========================================================
// let singleton = {
//     name: "SingletonInstance",
//     method: function() {
//         console.log("This is a method of the singleton.");
//     }
// };

// singleton.method();
// console.log(singleton.name);  // This is a method of the singleton.

//------------------------creating objects in another objects and accessing them ---------------------------------
// let obj =
// {
//     name:"Nikhil",
//     fullname: {
//         userfullname:{
//         firstname:"Nikhil",
//         lastname:"pawar"
//         }

//     }
// }
// console.log(obj.fullname.userfullname.firstname);
//--------------------------------Combining the objects----------------------------------
// const t1 = {a:1,b:2};
// const t2 = {c:3, d:4};
// const returntar = Object.assign(t1,t2)
// const returntar1={...t1, ...t2}// alternate combining
// // console.log(returntar);
// console.log(returntar1);
//--------------------------------------
const course ={
    c_name:"js",
    price:299,
    c_instruc:"hitesh"
}
const {c_name:name1/*which value to be taken */} = course //value to be taken from (object)
/*This line uses object destructuring to extract the c_name property from the course object and assign it to a new variable named name1.
const { property: newVariable } = object;
 This is the destructuring syntax. It means:
Take the c_name property from the course object.
Assign its value to a new variable named name1.*/
console.log(name1);
