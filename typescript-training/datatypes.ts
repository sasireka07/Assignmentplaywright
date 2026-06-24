let empName:string="sasi";
let empId:number=123;
let age:undefined;
console.log(empName);
console.log(empId);
console.log(age);

//union-->more than one data type
let empAddress:string|number|boolean;
empAddress="Chennai";
empAddress=12345;
empAddress=true;

//any-->any data type
let empData:any;
empData=1234;
empData="sasi";
empData="true";



interface empinfo{
    "empName":string,
    "empId":number,
    "address":{
        "city":string;
        "State":string;
    }
}
let empDetails:empinfo={
    "empName":"sasi",
    "empId":123,
    "address":{
        "city":"chennai",
        "State":"TN"
    }
}


//Array--store list of values
let fruits:string[] =["apple","banana"];
console.log(fruits);
let prices:number[]=[1,2,3];
console.log(prices);
let fruitsAndPrices:(string|number)[] =["apple",1,"banana",2];
console.log(fruitsAndPrices[2]);

//Tuple--ordered array list of value in specific order
let empdets:[string,number,boolean] =["apple",1,true];

