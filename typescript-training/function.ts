//function without parameter withour return type
function login(){
    console.log("launch the chrome browser");
console.log("enter the url");
console.log("Enter username and password");
console.log("click on login button");
}
//function with parameter withour return type
login();

function loginwith(username:string,password:string):void{
    console.log("launch the chrome browser");
console.log("enter the url");
console.log(`Enter username ${username} and password ${password}`);
console.log("click on login button");
}

//calling function
loginwith("sasi","sasi123");
loginwith("karthi","karthi123");

//3.function with parameters with return type
function getAccount(username:string,password:string):number{
    console.log("launch the chrome browser");
console.log("enter the icici url");
console.log(`Enter username ${username} and password ${password}`);
console.log("click on account link");
const accountBalance:number=1000;
return accountBalance;
}
//print acc balance
console.log(getAccount("karthi","karthi123"));

//4.function without parameterwith return type
function getYear():number{
    let date=new Date();
    return date.getFullYear();
}

//calling function
console.log(getYear());

//function with optional parameter
function printDetails(empName:string,empId:number,empAge?:number):void{
console.log(`Enter name ${empName} `);
console.log(`Enter id ${empId} `);
if(empAge)
console.log(`Enter age ${empAge} `);
}
printDetails("sasi",123);

//function with default parameter
function printEmpInfo(empName:string,empId:number,comingToMovie:boolean=false):void{
console.log(`Enter name ${empName} `);
console.log(`Enter id ${empId} `);
console.log(`Enter interested to join ${comingToMovie} `);
}
printEmpInfo("sasi",123);
printEmpInfo("sasi",123,true);


//function with rest parameter
function sum(...numbers:number[]){
    let sum:number=0;
for(let num of numbers){
    sum=num;
}
return sum;
}
console.log(sum(1,2,3));