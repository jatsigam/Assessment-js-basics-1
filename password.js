let password = "xcUpc2m82Y"
let containsLetter = /[a-zA-Z]/ // check for letters
let containsNumber = /[0-9]/ // check for numbers

//Password length should be at least 10 characters long and contain at least one letter
if ((password.length >= 10) && containsLetter.test(password) && containsNumber.test(password)){
  console.log("Successful attempt! Password is valid")
}else {
  console.log("Error! Password does not meet requirements. Please try again")
}

//Additional Check 1: Password should also contain a special character. 

//Create variable called 'specialCharacters' 
let specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

//Write an if statement to check for special characters
if ((password.length >= 10) && containsLetter.test(password) && containsNumber.test(password) && specialCharacters.test(password)){
  console.log("Successful attempt! Password is valid")
}else {
  console.log("Error! Password does not meet requirements. Please try again")
}

// Check 2: Password should not contain forbidden words (12345, 11111, password)

if ((password.length >= 10) && containsLetter.test(password) && containsNumber.test(password) && specialCharacters.test(password) && password !== 123456 && password !== 11111 && password !== "password"){
  console.log("Successful attempt! Password is valid")
}else{
  console.log("Error! Password does not meet requirements. Please try again")
}

//Check 3: Password should be no more than 15 characters
if ((password.length >= 10) && (password.length <= 15) && containsLetter.test(password) && containsNumber.test(password) && specialCharacters.test(password) && password !== 123456 && password !== 11111 && password !== "password"){
    console.log("Successful attempt! Password is valid")
  }else{
    console.log("Error! Password does not meet requirements. Please try again")
  }


// ASCII - Draw a frog 

  let frogArt = `  @ __ @ \n ( ---- ) \n ( > _ < )`
  console.log(frogArt)