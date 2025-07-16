document.addEventListener("DOMContentLoaded", function(){
    //form
    const form = document.getElementById("registration-form");
    // button
    const feedbackDiv = document.getElementById("form-feedback");

    //adding form to event listener  and pass an anonymous function
    form.addEventListener("submit", (event)=>{
        // calling the event.preventDefault() to prevent the browser from loading/submiting
        event.preventDefault();


        
        //Use document.getElementById to select each input field by its respective ID: username, email, and password
        //username
        const username = document.getElementById("username").input .trim();
        const email = document.getElementById("email").input .trim();
        const password = document.getElementById("password").input .trim();
        //validation 
        isValid =true;
        const messages = [];
        // username
        if(username.length< 3){
            isvalid = false;
            messages.push("username must be 3 characters and above");
        }

      //email
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }
        if(password.length< 8){
            isvalid = false;
            messages.push("your password is not lengthy enough!");
        }

        // Show feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // green
            feedbackDiv.style.backgroundColor = "#d4edda"; // light green bg
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // red
            feedbackDiv.style.backgroundColor = "#ffbaba"; // light red bg
        }
    
    });


});