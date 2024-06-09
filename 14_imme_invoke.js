// syntax for immediately invoked function : (here we define)(this is for executing it)
( ()=> {console.log("db updated");})();// if you want to write two iife you need to give a semicolon
((name)=>{console.log(name);})("Nikhil");
(function chai(name){console.log("Named iife ");})("chai") 