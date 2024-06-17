// const promiseOne = new Promise(function(resolve,reject){
//     // do an async task
//     // db calls , cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// //=============================================
// new Promise(function(resolve, reject)
// {
//     setTimeout(function()
//     {
//         console.log("Async task 2 ");
//         resolve()
//     },1000)
// }).then(function()
// {
//     console.log("Async 2 resolved");   
// })
// //===============================================
// const PromiseThree = new Promise(function(resolve,reject)
// {
//     setTimeout(function()
//     {
//             resolve({username:"nikhil",email:"chai@gmail.com"})
//     },1000)
// })
// PromiseThree.then(function(user)
// {
// console.log(user);
// })
// //================================================
// const PromiseFour = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         let error = true
//         if(!error)
//             {
//                 resolve({username:"Nikhil",password:"12"})
//             }
//             else
//             {
//                 reject('ERROR: Something went wrong')
//             }
//     },1000)
  
// })
// PromiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{console.log("The promise is either resolved or rejected");})
//====================================================================
// // basic syntax of promises - 
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation or task
//     if (true/* condition for success */) {
//         resolve(value); // Value passed to the resolved promise
//     } else {
//         reject(error); // Error passed to the rejected promise
//     }
// });

// myPromise
//     .then((value) => {
//         // Handle resolved promise
//         console.log(value);
//     })
//     .catch((error) => {
//         // Handle rejected promise
//         console.error(error);
//     })
//     .finally(() => {
//         // Code that runs regardless of the promise's outcome
//         console.log('Promise is settled (either fulfilled or rejected).');
//     });

//===================================================================
const promiseFive = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error=true;
        if(!error)
            {
                resolve({username:"javascript",password:"123"})
            }
            else
            {
                reject('Error: js went wrong')
            }
    },1000)
})
// use of async await
async function consumePromiseFive()
{
    try{
    const response= await promiseFive 
    console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
 }
 consumePromiseFive()



 