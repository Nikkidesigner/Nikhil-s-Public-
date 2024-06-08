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
let str = JSON.stringify(obj);
// console.log(typeof str)
console.log(str);
