// const arr =[1,2,3,4,5,6,7,8,9];
// for(const num of arr)
//     {
//         console.log(num);
//     }
//=============================================
// const greetings = "Hello world"
// for(const greet of greetings)
//     {
//         console.log(`Each char is ${greet}`);
//     }
//===================use of maps =======================
// const map = new Map()
// map.set('IN',"India");
// map.set('AUS',"Australia");
// map.set('NZ',"New zealand");
// map.set('SA',"South Africa");
// console.log(map);
// for(const key of map)
//     {
//         console.log(key);
//     }
//     for(const [key,value] of map)// if we dont want the keys in the array as the output
//         {
//             console.log(key , ':-' , value);
//         }
//==========what if we have to iterate objects=========
const myobjects = {
    name:"Nikhil",
    age :21,
    city :"Karad",
    school:"AVMO"

} 
for (const key in myobjects)
    {
        console.log(`${key} shortcut is for ${myobjects[key]}`);
    }
//===================for each loop =======================
const coding = ["js","ruby","java", "python","cpp","html"]
coding.forEach(function (val){ console.log(val);})
 //====================================
 const mycoding =
 [
    {
        lanname:"javascript",
        filename:"js"
    },
    {
        lanname:"java",
        filename:"java"
    },
    {
        lanname:"python",
        filename:"py"
    }
 ]
 