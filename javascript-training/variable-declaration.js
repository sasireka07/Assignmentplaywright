//declaration variable=Data;--js
//1.var(not avaiable in modern js)
//2.let(reassigned)
//3.const-cannot be reassigned

//3 diff var
//1.initialization
//2.Reassignment
//3.re-declaration
//4.scope

//1.initialization
var name="Sasi";

var a;//not mandatory to store data at begining
let b;//not mandatory to store data at begining
const c=10;// mandatory to store data at begining

//2.Reassignment=>changing the original value
a=10;//var will allow reassignment
b=20;//let will allow reassignment
//c=30;//wont allow assignment

//3.re-declaration=>declaring the same var again to store diff data
var a="sasi";//var will allow re-declaration
//let b="ram";//let wont allow re-declaration
//const c="sita";//const wont allow re-declaration

//4.scope=>where can be access the data
//var =>not block Scope-outside block can access
//let =>block Scope-inside block can access
//const=>block Scope-inside block can access

{
    let x=10;
    const y=20;
    var z=30;
    //console.log(x);
     //console.log(y);
    // console.log(z);
    


}

//console.log(x);
    // console.log(y);
     console.log(z);
    