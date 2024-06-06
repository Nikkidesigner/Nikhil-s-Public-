const accountId=133
let acctemail="aa23@google.com"
var acctpasswd="12345"
acctcity="jaipur"
let acctstate;
// accountId=122
console.log(accountId);
/* Prefer not to use var 
because of issue in block scope and functional scope
*/ 
acctemail="adcd@google.com"
var acctpasswd="54321"
acctcity="pune"
console.table([acctstate,acctemail, accountId,acctpasswd,acctcity])