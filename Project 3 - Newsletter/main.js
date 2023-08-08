document.getElementById('redirect-btn').addEventListener('click',function(event)
  {
       const emailInput = document.getElementById('Email');
       const emailValue = emailInput.value.trim(); // trim() is to clean the user's input
      
       
      if (!isValidEmail(emailValue)) {
        event.preventDefault();//prevent default behavior(submission)
        alert('Valid email required !');
        emailInput.focus();
      }
      else
        {  
            window.location.href = "page2.html";
            const confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.innerHTML = `<p>An email has been sent to <strong>${emailValue}</strong></p>`; // message not showing 
    }});

    document.getElementById('dismiss-btn').addEventListener('click',function(event){
      window.location.href = "index.html";

    }); // btn not working 

//REPETITIVE CODE AND NESTED LOOP I KNOW -_- :
document.getElementById('Email').addEventListener('keydown',function(event){
  if (event.key === "Enter"){ 
  const emailInput = document.getElementById('Email');
  const emailValue = emailInput.value.trim(); // trim() is to clean the user's input
  if (!isValidEmail(emailValue)) {
    event.preventDefault();//prevent default behavior(submission)
    alert('Valid email required !');
    emailInput.focus();
  }
  else
  {window.location.href = "page2.html";}}
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // checks if email consists of 2 parts first for username and second for domain part
  return emailRegex.test(email);
}

