let transactions: number[] = [50000, -2000, 3000,-15000,-200,-300,4000,-3000];
let totalAmount:number=0;
let creditTotalAmount:number=0;
let debitTotalAmount:number=0;
let creditCount:number=0;
let debitCount:number=0;
let suspiciousCount:number=0;


for (let i = 0; i < transactions.length; i++) {
    
    if (transactions[i] > 0) {
        creditTotalAmount=creditTotalAmount+transactions[i];
         creditCount++;
        
    }   
    if (transactions[i] < 0) {
         debitTotalAmount=debitTotalAmount+transactions[i];
         debitCount++;
        
    }
     totalAmount = totalAmount+transactions[i];
    if(transactions[i]>10000 ){
      console.log("Suspicious Credit Transaction with Amount: " + transactions[i]);
      suspiciousCount++;
 }
   if(transactions[i]<-10000 ){
      console.log("Suspicious debit Transaction with Amount: " + transactions[i]);
      suspiciousCount++;
 }
}
console.log("Total credit transactions:" +creditCount++);
console.log("Total debit transactions:" +debitCount++);
console.log("Total number of Credit transactions:",+creditTotalAmount);
console.log("Total number of debit transactions:",+debitTotalAmount);
  console.log("Total amount remaining at the end in Bank Account",totalAmount);
   console.log("Total suspicious transactions:",+suspiciousCount);