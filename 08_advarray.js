const  myarray= new Array(1,2,3,4,5,6,7)
myarray.push(8);
myarray.push(9);
myarray.pop()
// console.log(myarray);

const newarr=myarray.join();
// console.log(myarray)
// console.log(newarr);;
// console.log(typeof newarr);

// \\-----------------------------------------
m_heroes =['ironman','thor','hulk'];
dc_heroes =['superman','batman','flash'];
// m_heroes.push(dc_heroes);
// console.log(m_heroes);
const new_hero = m_heroes.concat(dc_heroes);// one way to concat two arrays 
// console.log(new_hero);
// console.log(new_hero[4]);
const new_hero1 = [...m_heroes,...dc_heroes];
// console.log(new_hero1);
//-----------spread array using flat -------------------
const array1=[1,2,3,[4,5,6],4,[5,6,[7,8]]];
// console.log(array1);
const spread_arr=array1.flat(3);
// console.log(spread_arr);
//-------------------------making a string as array using 'from'
const fromarr=Array.from("Nikhil");
// console.log(fromarr);
//---------check whether it is an array or not -----------
// console.log(Array.isArray(fromarr));
// console.log(Array.isArray("Nikhil"));
//------------------creating an array from individual elements ------------------------------
let s1=5, s2=60,s3=90;
console.log(Array.of(s1,s2,s3));



