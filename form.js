class User {
    constructor(firstName, lastName, email, password) {
      this.firstName = firstName
      this.lastName = lastName
      this.email = email
      this.password = password
    }
  }
  
  var form = document.querySelector("#form")
  var userTableBody = document.querySelector("#userTableBody")
  var users = []
  
  function saveData(event) {
    event.preventDefault()
    var name = document.querySelector("#name").value.trim()
    var lname = document.querySelector("#lname").value.trim()
    var email = document.querySelector("#email").value.trim()
    var password = document.querySelector("#password").value
    var password2 = document.querySelector("#password2").value
  
    if(name=="" || lname=="" || email==""|| password==""){
      alert ("required")
      
    }
    else if (password !== password2) {
      alert("Passwords do not match")
      
    }
  
   else if (password.length < 8 ) {
      alert("Password must be at least 8 characters")
      
    }
    else if(!email.includes("@")){
      alert ("email must include @")
      
    }

    else if(password === password.toLowerCase()){
    alert ("password must include at least one upper case character")
    
    }
    else{
        var existingUser = ""
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        existingUser = users[i]
        alert("Email address is already registered!")
      }
    }
  
    var newUser = new User(name, lname, email, password)
    users.push(newUser)
    form.reset()
  
    var newRow = document.createElement("tr")
    var firstNameCell = document.createElement("td")
    var lastNameCell = document.createElement("td")
    var emailCell = document.createElement("td")
  
    firstNameCell.textContent = newUser.firstName
    lastNameCell.textContent = newUser.lastName
    emailCell.textContent = newUser.email
  
    newRow.appendChild(firstNameCell)
    newRow.appendChild(lastNameCell)
    newRow.appendChild(emailCell)
    userTableBody.appendChild(newRow)
  }
}
function searchUser(){
  var search= document.querySelector("#Semail")
  for(i=0; i<users.length; i++){
    if (users[i].email === search) {
      alert("User Found" + "Email:" + users[i].email)
  }
}
alert("User not found");
}


  form.addEventListener("submit", saveData)
  