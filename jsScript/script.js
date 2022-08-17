// Assignment Code
var generateBtn = document.querySelector(`#generate`);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(`#password`);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener(`click`, writePassword);

var userAddingcriteria = [];
var userSelectedlength =null ;



// Add function generatePassword to set the stage to create password
function generatePassword(){
  var criteriaList=['lowercase', 'uppercase', 'numeric', 'special characters'];
  var alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric="0123456789";
  var speciaCharacters="~!@#$%^&*()_-+|";
  var passwordCharacters = null;
  var randPasswordArray=Array(userSelectedlength);

  passwordCriteria(criteriaList);
  console.log(`selectd item(s) will be added ${userAddingcriteria}`);

  passwordlength();
  console.log(`user set length of the password to be ${userSelectedlength}`);

  if(userAddingcriteria.length==4){
    console.log(`user only wants ${userAddingcriteria} and length of ${userSelectedlength}`);
    passwordCharacters = alphabet.toLowerCase() + alphabet + numeric + speciaCharacters;
    return shuffleArray(passwordCharacters,userSelectedlength);
  }else if(userAddingcriteria.includes('lowercase') && userAddingcriteria.includes('uppercase') && userAddingcriteria.includes('numeric')){
    console.log(`user want password with ${userAddingcriteria} and length of ${userSelectedlength}`);
    passwordCharacters = alphabet.toLowerCase() + alphabet + numeric;
    return shuffleArray(passwordCharacters,userSelectedlength);

  }  else if(userAddingcriteria.includes('lowercase') && userAddingcriteria.includes('uppercase') && userAddingcriteria.includes('special characters')){
    console.log(`user want password with ${userAddingcriteria} and length of ${userSelectedlength} `);
    passwordCharacters = alphabet.toLowerCase() + alphabet + speciaCharacters;
    return shuffleArray(passwordCharacters,userSelectedlength);

  }else{
    console.log("did not meet this Criteria");
    return  this,"Did not meet this Criteria, try to add following combination: \n1.lowercase, uppercase, numeric, special characters.\n2. lowercase, uppercase, numeric \n3.lowercase, uppercase, special characters";
  
  }
}


function passwordCriteria(criteriaList){
  var i=0;
  
  while(i<criteriaList.length){
    var answer = confirm(`Do you want your password to have ${criteriaList[i]} \nclick Cancel=no and click Ok=yes`);
    console.log(`for criteria ${criteriaList[i]} user selected ${answer}`)
    if(answer == true){
      userAddingcriteria.push(criteriaList[i]);
    }
     i++;
  }
}

function passwordlength(){
  var min = 8;
  var max = 128;
  userSelectedlength = parseInt(prompt(`Input the length of your password between 8 to 128`));
  while(userSelectedlength<min || userSelectedlength>max || userSelectedlength == null){
    userSelectedlength = parseInt(prompt(`You entered ${userSelectedlength} is out of rang. Input the length of your password between 8 to 128`));
  }
}

function shuffleArray(passwordCharacters,userSelectedlength){
  var i=0; 
  var result ='';
  console.log("inside shuffleArray");
  while(i<userSelectedlength)
  {
    result += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    i++
  }
  return result;
}