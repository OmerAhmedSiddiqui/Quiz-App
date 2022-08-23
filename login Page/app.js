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
var button1 = document.querySelector("#button1")
var button2 = document.querySelector("#button2")


function signin() {
    emailInput.value = "";
    usernameInput.value = "";
    passwordInput.value = "";
    // mesage.innerHTML = ''
    emailInput.placeholder = "Email"
    usernameInput.placeholder = "UserName ";
    passwordInput.placeholder = " Password ";
    email.innerHTML = "Email : " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    pasword.innerHTML = "Password : &nbsp;&nbsp;&nbsp;"
    UserName.innerHTML = "UserName : &nbsp;"
    login.innerHTML = "Log In "
    // login1 = 
    usernameInput.type = "text"
    // login.onclick =function() {loginSignIn()}
    // console.log(login)
    button1.style.backgroundColor  = "#10266b";
    button1.style.color  = "#ffffff";
    button2.style.backgroundColor  = "#0c319e";
    button2.style.color  = "#ffffff";


}
function signup() {
    emailInput.value = "";
    usernameInput.value = "";
    passwordInput.value = "";
    // mesage.innerHTML = ''
    emailInput.placeholder = "Email"

    usernameInput.placeholder = " Password ";
    passwordInput.placeholder = "ReType Password ";
    email.innerHTML = "Email  &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "
    pasword.innerHTML = "Retype Password : "
    UserName.innerHTML = " Password &nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    login.innerHTML = "Sign Up "
    usernameInput.type = "password"
    // login.onclick = "loginSignUp()"
    // passwordInput.style(width:"20%";)
    // console.log(login)
    button1.style.backgroundColor  = "#0c319e";
    button1.style.color  = "#ffffff";
    button2.style.backgroundColor  = "#10266b";
    button2.style.color  = "#ffffff";
}
function Userdetails(username, password) {
    // this.email = Email;
    this.username = username;
    this.password = password;
}
// function loginSignIn() {
//     var olduser = new Userdetails(emailInput.value, usernameInput.value, passwordInput.value)
//     localStorage.setItem("userdetail", JSON.stringify(olduser))
//     signin()
//     emailInput.value = "";
//     usernameInput.value = "";
//     passwordInput.value = "";

// }
var emailIsTrue = true;
// var paswordIsTrue = false;
function loginSignUp() {
    if (emailIsTrue) {

        if (usernameInput.value === passwordInput.value) {
            var newuser = new Userdetails(emailInput.value, usernameInput.value)
            localStorage.setItem("userdetail", JSON.stringify(newuser))

            signin()
            emailInput.value = "";
            usernameInput.value = "";
            passwordInput.value = "";
            emailIsTrue = false;
            // paswordIsTrue = true;
            // usernameInput.placeholder = "ReChk Password ";
            // passwordInput.placeholder = "ReChk Password ";

            //  = "You Have Successfully Created The Account"
        }
        else {
            // mesage.innerHTML = 'ReChk Password'
            emailInput.value = "";
            usernameInput.value = "";
            passwordInput.value = "";
            usernameInput.placeholder = "ReChk Password ";
            passwordInput.placeholder = "ReChk Password ";

        }
    }
   else if (emailIsTrue === false) {
        var retriefItem = JSON.parse(localStorage.getItem('userdetail'));
        console.log(retriefItem)
        if (retriefItem.username === usernameInput.value && retriefItem.password === passwordInput.value) {
            alert("You Have Succesfylly Login")
            emailInput.value = "";
            usernameInput.value = "";
            passwordInput.value = "";
        }
        else {
            alert("You SignUp Details Was Not Found")
            emailInput.value = "";
            usernameInput.value = "";
            passwordInput.value = "";
        }
    }
}