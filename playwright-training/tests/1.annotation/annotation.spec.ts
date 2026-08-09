//Annotations-set of keywords and default methods that will help us to run all our test cases

//test=>refers independent test method to be executed by playwright


//test.describe=>group of test cases to be executed by playwright together

//test.only()
//test.skip()
//test.fixmc()
//test.slow()
//test.fail()


import{test} from '@playwright/test';

//independent test case
test ('Independent Test case',async({page})=>{
console.log("This is an independent test case");
});

//group of test cases
test.describe('Group 1',()=>{

 test(' Test case 1',async({page})=>{
console.log("This is test case 1 from group 1");
});
test(' Test case 2',async({page})=>{
console.log("This is test case 2 from group 1");
});
});

test.describe('Group 2',()=>{

 test(' Test case 1',async({page})=>{
console.log("This is test case 1 from group 2");
});
test(' Test case 2',async({page})=>{
console.log("This is test case 2 from group 2");
});
});