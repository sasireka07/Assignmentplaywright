

//test.only()--run only specific test cases
//test.skip()--skip that particular test case(skip the test case permanently)
//test.fixme()--mark specific test case need to be fixed (temprory skip tc)
//test.slow()--increase wait time into 3x --3times
//test.fail()--annotation to be expected to be failed

import{test,expect} from '@playwright/test';


test('Test case 1',{tag:'@smoke'},async({page})=>{
console.log("This is test case 1");

});

test ('Test case 2',{tag:['@smoke','@regression']},async({page})=>{
    test.slow();
console.log("This is test case 2");
await new Promise(resolve=>setTimeout(resolve,32000)); //wait for 32sec
console.log("execution completed after waiting 32 seconds")
});

test ('Test case 3',{tag:'@regression'},async({page})=>{
console.log("This is test case 3");
});

test ('Test case 4',{tag:'@smoke'},async({page})=>{
console.log("This is test case 4");
});