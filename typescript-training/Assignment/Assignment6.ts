let n:number=7;
let count:number=0;
for(let i=1;i<=n;i++)
if(n%i==0){
count++;
}

 if (count==2){
    console.log(true);
 }
    else{
        console.log(false);
 }
