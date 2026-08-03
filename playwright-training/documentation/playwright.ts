/*what is playwright?
https://plawright.dev/ (official website)
is a end to end web automation framework created by microsoft.

difference between seleniuma nd playwright
Architecture-->selenium will use webdriver shareProtocol,whereas playwright will use direct browser communication.
synchronization issue-->in selenium use manual wait ,playwright use in built auto-wait

Language:--->Selenium supportJava,c#,JS,Ts,Ruby etc..
Playwright-->JS,TS,Java,python,.NET

Parallel execution-->selenium no parallel execution by default,playwright is default parallel execution configuration

API testing:Selenium no default API testing related library.Playwright is have defult API TO SUPPORT 

Video recording: selenium doesnt have video record feature,playwright have

Treeviewer: selenium doesnot have any trace viewer,playwright will capture frame by frame screenshot

code generator /CLI/MCP==>Selenium dont have the feature,playwright support these
codegenerator-genearte code
MCP-To automate website
CLI-To help you automate processs with limited tockens

***default folder structure
1.node_modules--> all the libraries downloaded in local computer to work with Playwright and supporting libraries.
2.tests--->maintance all out test script or test cases it will craete one spec.ts
3. .gitignore-->all unneccessary files and folders generate by playwright when u r going to push the code
4. package.json-->contain JS libraries and additional libraries installed with the project folder all the dependencies
5.package-lock.json-->Additional libraries downloaded when we are downloaded the playwright and other necessary utility related
library.
6.Playwright.config.ts: all the playwright config to controlsthe test execution will be added under it.



*/