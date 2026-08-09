//for loop
let userName: string = "Sasi";

for (let i: number = 1; i <= 10; i++) {
    console.log(userName);
}

//while loop
let j: number = 1;
let pageLoaded:boolean=false;
while(j>0){
    if(j<5||pageLoaded){
        break;
    }
    console.log("Refresh the page");
    j++;
}

//For..of loop//iteration values of an array
let fruitss:string[]=["Apple","Banana","Grapes"];
//normal loop
for(let i:number=0;i<fruitss.length;i++){
    console.log(fruitss[i]);
}
//for ..of
//syntax:for (let value of list)
for(let fruit of fruitss){
    console.log(fruit);
}


//for..in loop//iteration properties of an object-->each and every loop of the object

interface empinfo{
    empName:string,
    empId:number,
    address:{
        city:string;
        State:string;
    };
}

let empDet:empinfo={
    empName:"sasi",
    empId:123,
    address:{
        city:"chennai",
        State:"TN"
    }
}
for(let key in empDet){
    console.log(key);
    console.log(empDet[key as keyof empinfo]);
}

//do-while//exc code until the cnd satisfied
let x:number=0;
while(x>0)
    do{
     console.log("refresh tha page");
     x++;
}while(x>0);