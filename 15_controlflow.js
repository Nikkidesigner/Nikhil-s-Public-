//if
const ifUserLoggedIn=true;
if(ifUserLoggedIn)
    {
      console.log("you are logged in");
    }
    // '===' triple equal also called as strict equal is used when we have to check the datatype also 
    if(2==="2")
        {
            console.log("Executed");
        }
        else
        console.log("The datatypes are not same ");
    //=========================================================
    //switch case
    month="feb";
    switch (month) {
        case 'jan':
            console.log("january");
            break;
            
        case 'feb':
            console.log("february");
            break;
        case 'march':
            console.log("march");
            break;
        default:
            console.log("not a valid month");
            break;
    }
    //==========================================================
    // falsy values 
    // false, 0, -0, BigInt 0n, "", null, undefined, NaN 
    // truthy values
    // "0", 'false', " ", [], {}, function(){}
    //==========================================================
    const emptyObj ={}
    if(Object.keys(emptyObj).length===0)
        {
            console.log("Object is empty");
        }
   //======================================================
   /* sometimes a variable value can be null or undefined hence the code can be stopped because of some reasons like exception hence to avoid this conflict we use the Nullish coalescin operator(??)
   in this operator it choses alternate value for a null or ud value which is given by the user */
   let val1;
   val1=null??10
   console.log(val1);// here it choses value 10 instead of null 
   //===========================
//    terniary operator 
//    condition ? true:false
