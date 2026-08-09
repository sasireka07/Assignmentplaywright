//imt is a collection of characters
//storing  astring in a variable
let firstName:string="sasi";
let lastName:string='reka';
let fullName:string='my name is ${firstName} ${lastName}';
console.log(fullName);

let origiinalString:string=" Username : Admin | Password : admin123 ";
console.log(origiinalString);

//string.length
console.log(fullName.length);
console.log(`total charater ${fullName.length}`);

//convert particular char to specific index string.charAt(Index)
let indexs:number=5;
console.log(`charater index ${indexs} :${fullName.charAt(indexs)}`);

//unwanted space from string
let trimmed:string=origiinalString.trim();
console.log(`Trimmmed string:"${trimmed}"`);


//Remove all space string.replace(/char,'')
let space:string=origiinalString.replace(/ /g,'');
console.log(`String without space:"${space}"`);
//only alphabets


//Remove alphabets
let spacesAlpha: string = origiinalString.replace(/[a-zA-Z]/g, '');
console.log(`String without alphabets: "${spacesAlpha}"`);



//Remove numbers
let spacesNumbers: string = origiinalString.replace(/[0-9]/g, '');
console.log(`String without numbers: "${spacesNumbers}"`);




//Remove regex
let spacesSpecialChar: string = origiinalString.replace(/[^a-zA-Z0-9]/g, '');
console.log(`Only special characters: "${spacesSpecialChar}"`);

//lower to upper case
let lowerString: string = origiinalString.toUpperCase();
console.log(`print upper case: "${lowerString}"`);

//Extract the string
let extractString: string = origiinalString.substring(12);
let usernameString: string = origiinalString.substring(12,18);
console.log(`origiinalString: "${origiinalString}"`);
console.log(`extractString: "${extractString}"`);
console.log(`usernameString: "${usernameString}"`);


//Extract part of the string-dynamic text
let splittedString: string[]=origiinalString.split(" ");
console.log(`splittedString: "${splittedString}"`);
let userString: string = splittedString[3];
let passwordString: string = splittedString[7];
console.log(`userString: "${userString}"`);
console.log(`passwordString: "${passwordString}"`);


//comapre two string values
//==(loose equality operator)-only compare value of the string
//===(strict equality operator)-both value and data type will compare
//includes() -
//endsWith()
//startsWith()
let String1: string|number="10";
let String2: string|number=10;
console.log(`Loose Equality(==) ${String1==String2}`);
console.log(`strict Equality(===) ${String1===String2}`);
console.log(`Includes "hara":, ${"Reka".includes("hara")}`);
console.log(`Startswith "Sas":, ${"Reka".startsWith("sasi")}`);
console.log(`Endswith "rek":, ${"Reka".endsWith("rek")}`);

//method to convert string to number or other data type
let std: number=144;
let landLine: number=12244;
let stdCode:string=String(std);
console.log(stdCode+landLine);

//string into number

let balance:string="Account balance :$9,999.99";
balance=balance.replace(/[^0-9.]/g,"");
console.log(balance);
let bal:number=parseFloat(balance);
console.log(bal<10000);