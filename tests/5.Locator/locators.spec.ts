//locator:location of the element
//Webelement: element displayed in Ui

//9types
//getByRole();;locate web element based on role
//syntax:page.getByRole('role',{name:'vale'})
//Role-weblement[button,textbox,checkbox,link,radio button]
//value-specific [textvalue,arealabel,value,label,title]
//Example:page.getByRole('role',{name:'vale'})

//Html code:<button>Submit</button>
//Locator:page.getByRole('button',{name:'Submit'})


//getByTitle()
//
//
//getByTestId()
//cssSelector
//xpath

//getByLabel();based on the label
//Syntax:page.getByLabel('label')
//Ex: htmlcode: <label for ="username">Username</label>
//locator: page.getByLabel('Username')

//getByplaceholder()-based on attribute value
//syntax:getByplaceholder('placeholder')
//ex:<input placeholder="Firstname" id="name">
//syntax:getByplaceholder('Firstname')

//getByText()-black color text value
//syntax getByText('')
//ex:<h1 class="center">Welcome</h1>
//syntax: getByText('Welcome')


//getByAltText()-img alt in your attribute
//syntax getByAltText()('')
//HTML ocde:<img src="img/logo.gif" alt="parabank">
//ex:getByAltText()('parabank')


//getByTitle()-title of the atatibute value

//HTML code<input title="search">
//getByTitle('search')


//getByTestId()-based on test-id attribute
//page.getByTestId('')-
//html code:<input test-id="mobile-app">
//Ex:getByTestId('mobile-app')


//cssSelector
//page.cssSelector('')-
//html code:<input test-id="mobile-app">
//Ex:getByTestId('mobile-app')

