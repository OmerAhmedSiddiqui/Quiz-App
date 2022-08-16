var email = document.querySelector("#emailLabel")
var pasword = document.querySelector("#paswordlabel")
var UserName = document.querySelector("#UserNamelabel")
var emailInput = document.querySelector("#email")
var usernameInput = document.querySelector("#username")
var passwordInput = document.querySelector("#password")
var login = document.querySelector("#login")
// var resetpasword = usernameInput.getAttribute(type)
// resetpasword = "password"
// var login1 = document.querySelector("#login".onclick())


function signin() {
    email.innerHTML = "Email : " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    pasword.innerHTML = "Password : &nbsp;&nbsp;&nbsp;"
    UserName.innerHTML = "UserName : &nbsp;"
    login.innerHTML = "Log In " 
    // login1 = 
    
    
}
function signup() {
    email.innerHTML = "Email  &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "
    pasword.innerHTML = "Retype Password : " 
    UserName.innerHTML = " Password &nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    login.innerHTML = "Sign Up " 
    resetpasword.type
    // passwordInput.style(width:"20%";)

}
function Userdetails(Email,username, password) {
    this.email = Email;
    this.username = username;
    this.password = password;
}
function loginSignIn() {
var olduser = new Userdetails(emailInput.value,usernameInput.value,passwordInput.value)
localStorage.setItem("userdetail",JSON.stringify(olduser) )
signin() 
emailInput.value = "";
usernameInput.value = "";
passwordInput.value = "";

}
function loginSignUp() {
    var newuser = new Userdetails(emailInput.value,usernameInput.value,passwordInput.value)
    localStorage.setItem("userdetail",JSON.stringify(newuser) )
    signin() 
    emailInput.value = "";
    usernameInput.value = "";
    passwordInput.value = "";
    
    }

