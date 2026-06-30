const loginForm = document.getElementById("loginForm");

const username = document.getElementById("user");

const password = document.getElementById("password");
const message = document.getElementById("message");
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    fetch("users.json")
    .then(response => response.json())
    .then(data => {
        const validUser = data.find(user => {
            return user.username === username.value &&
             user.password === password.value;
});
if(validUser){
sessionStorage.setItem("loggedIn","true");
window.location.href="dashboard.html";
}
else{
alert("Invalid username or password");
}
    });
});