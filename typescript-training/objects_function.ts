//object-is a non priimtive data type that store 
interface empinfo{
    "empName":string,
    "empId":number,
    "salary"?:number,
    "address":{
        "city":string;
        "State":string;
        "country"?:"string"
    }
}
let empDetails:empinfo={
    "empName":"sasi",
    "empId":123,
    "address":{
        "city":"chennai",
        "State":"TN",
         
    }
}
//console.log(empDetails.address.city);
console.log("assess the data form property");
console.log(empDetails["empId"]);
console.log(empDetails["address"]["city"]);

//Additional properties
empDetails.salary=2000;
empDetails.address.country="India";
console.log(empDetails);

//updte existing property of an object
empDetails.salary=25000;
empDetails.address.city="Chennai";
console.log(empDetails);
//Delete existing property of an object
delete empDetails.salary;
console.log(empDetails);


//6.Imt verify particular property is existing in the object

console.log("empId" in empDetails);
console.log("salary" in empDetails);
console.log("state" in empDetails.address);


//imt get all the keys from the object
console.log(Object.keys(empDetails));//only key
console.log(Object.values(empDetails.address));//only value
console.log(Object.entries(empDetails));//both key and values

//iterate all the keys from object  and get value
for (let key in empDetails){
    console.log(key, empDetails[key as keyof empinfo]);
}

//Get the data type of  aprticular property  inside the object
console.log(typeof empDetails.empName);
console.log(typeof empDetails.address);


//merge 2 object into single
interface companyinfo{
    companyName:string,
    companyId:number,
}
let companyDetails:companyinfo={
    "companyName":"Google",
    "companyId":1234
}
let mergeObject={...empDetails,...companyDetails};
console.log(mergeObject);