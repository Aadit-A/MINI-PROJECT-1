const welcome = document.getElementById("welcome");

const username = sessionStorage.getItem("user");

welcome.textContent = `Welcome ${username}`;

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function(){

    sessionStorage.clear();

    window.location.href = "index.html";

});