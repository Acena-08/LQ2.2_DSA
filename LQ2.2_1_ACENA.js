let userName = prompt("Enter your username:");
let userPassword = prompt("Enter your password:");
let correctPassword = "trynafinddave";

if (userPassword === correctPassword) {
    alert(`Welcome ${userName}`);
} else {
    alert("Maybe Username or Password is Invalid or Does not Match");
}