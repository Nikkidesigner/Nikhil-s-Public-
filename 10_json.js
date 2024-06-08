const obj ={
    name:"Nikhil",
    age:20,
    price :100,
    marks:95,
    salary:50000,
    rating:{
        stars:4,
        reviews:15
    }
}
// console.log(typeof obj );
// console.log(obj);
let str = JSON.stringify(obj);// convert object into string 
// console.log(typeof str)
// console.log(str);
let str2=JSON.parse(str);
console.log(str2);
console.log(typeof str2);
