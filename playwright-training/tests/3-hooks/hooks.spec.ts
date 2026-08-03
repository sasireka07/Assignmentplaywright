//Hooks-default function provided by playwright will run after and before test cases

//beforeAll()-Before execute our the test cases repeatedly what actions we need to do 1 time
//afterAll()-after execute our the test cases repeatedly what actions we need to do 1 time
//beforeEach()-each and every test case based on the test case count it will execute
//afterEach()
//outside of the loop
import{test,expect} from '@playwright/test';

test.describe('Group 1',()=>{

test('Test case 1',async({page})=>{
console.log("This is test case 1");
});

test ('Test case 2',async({page})=>{
    test.slow();
console.log("This is test case 2");
});

test ('Test case 3',async({page})=>{
console.log("This is test case 3");
});


test.describe('Group 2',()=>{

test.beforeAll('Test case 1',async({page})=>{
console.log("This is test case 1");
});

test.afterAll ('Test case 2',async({page})=>{
    test.slow();
console.log("This is test case 2");
});

test.beforeEach ('Test case 3',async({page})=>{
console.log("This is test case 3");
});
test.afterEach ('Test case 3',async({page})=>{
console.log("This is test case 3");
});
});
});