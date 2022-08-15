//Get the string from the page
//Controller Function
function getString(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

//Reverse the string
//Logic Function
function reverseString(userString){
    let revString = [];

    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }
    return revString
}

//Display the reversed string to the user
//View Function
function displayString(revstring){
    //write message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}