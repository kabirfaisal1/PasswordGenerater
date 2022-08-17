# PasswordGenerater
Working on a application that generated a random password based user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered by your JavaScript code. It has a clean and polished user interface and is responsive, which ensures that it adapts to multiple screen sizes.

# Application criteria
1. User will have empty container with a place holder text 'your secure password' which will be populated after user picks all the criteria thats needed.
2. a button which is the starting point of creating genrateing password
3. a pop up screen with list of checkbox criteria
    a. Add numerical vaules
    b. Add aplhabet vaules
    c. Add special character vaules
4. User will have to input length vaule between 8 to 128 characters
6. If users missed to slelect a criteria or input length of characters error message will be displayed 

# Folder structure 
1. root will have 'index.html' file which will be the main application
2. cssStyle will have 'style.css' file which will controll style and layout web pages
3. jsScript will have 'script.js' file which will controll user interaction and validate the workflow of the application

# How to Open the app
### Key Note
Everytime you run the application, you would need to refresh the screen before clicking on "Generate Password" button. 
 ### URL: 
 ```
 https://kabirfaisal1.github.io/PasswordGenerater/
 ```

 ### local
 ```
 1. Open terminal
 2. Run `git clone https://github.com/kabirfaisal1/PasswordGenerater.git`
 3. After clone is done run 
    ` [ open -a 'google chrome' <filepath>/PasswordGenerated/index.html ]`
 ```
## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Test case
```
 1. User by clicking all criteria
 2. User by clicking lowercase, uppercase with criteria numeric only
 3. User by clicking lowercase, uppercase with special characters only
 4. User by clicking cancel for lowercase, uppercase and add numeric or special characters only 
 5. User by clicking cancel on all criteria
 6. User by clicking any three (use TC 3 or 2) or more criteria (TC 1) with length <8
 7. User by clicking any three or more criteria with length >128
 8. User by clicking any three or more criteria with length between 8 to 128
 9. User by clicking any three (use TC 3 or 2) or more criteria (TC 1) and hit cancel on lenght 
 10. User by clicking any three (use TC 3 or 2) or more criteria (TC 1) with alphabet vaule as the length
```
