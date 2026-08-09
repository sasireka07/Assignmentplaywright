//Array: 

let fruits:string[]=["Apple","orange","Grapes","banana"];
console.log(fruits[0]);
console.log(fruits);
console.log(fruits.length);

//addind additional -push -to add value to external 
fruits.push("silver");
console.log(fruits);

//addind additional -pop -to remove value at last
 fruits.pop();
console.log(fruits);

//Add in beginning
 fruits.unshift();
console.log(fruits);
 fruits.shift();
 console.log(fruits);

 //add in middle -specific index
  fruits.splice(2,3,"melon");
 console.log(fruits);

 //create new array from existing
 //arrayName.slice(starting-indexed,ending-index+1);
 let newfruits:string[]=fruits.slice(1,3);
  console.log(newfruits);

   //create new array by merging existing array
    let mergefruits:string[]=["carrot","potato","tomato"];
      let fruitsandVEggies:string[]=fruits.concat(mergefruits);
  console.log(fruitsandVEggies);


  //find the index  of a specific  value within an array
  let index:number=fruits.indexOf("Banana");
    console.log(index);


    //iteration all the vlaues in array
    for(let fruit of fruits){
         console.log(fruit);
    }

    //reverse
    fruits.reverse();
   console.log(fruits);
   for(let i:number=fruits.length-1;i>=0;i++){
     console.log(fruits[i]);
   }


   //sort
   fruits.sort();
   console.log(fruits);
   fruits.sort((a,b)=>b-a);//desc order
    console.log(fruits);
