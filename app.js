function getPassword(){
    const chars ="0123456789ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyz@#$%^&*()_+?><:{}[]'";

    let passwordLength = 16;
    let password = '';

    for(let i=0; i <= passwordLength; i++){
        let randomNumber = Math.floor(Math.random()* chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}
function copy() {
    let copyText = document.getElementById("password");

    if(copyText.value == "") alert("Please create password");
    else{
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text");
}
}