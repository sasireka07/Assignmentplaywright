
let studNames: string[] = ["Suresh","Mahesh","Naresh"];
let studentMarks: number[] = [75, 80, 82];
let total:number=0;

console.log("Updated Marks:");
for (let i = 0; i < studentMarks.length; i++) {
    studentMarks[i]+=10;
    total = total+studentMarks[i];
    
console.log(studNames[i] + " : " + studentMarks[i]);
}
let average:number;
 average = total / studentMarks.length;
console.log("Average marks:",average);
