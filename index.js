function validateForm() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var mobile = document.getElementById("mobile");
    var email = document.getElementById("email");
    var msg = document.getElementById("msg");
    
    
    var fnameError=document.getElementById("fname-error");
    var lnameError=document.getElementById("lname-error");
    var mobileError = document.getElementById("mobile-error");
    var emailError = document.getElementById("email-error");
    var msgError = document.getElementById("msg-error");
    
    
    var isValid = true;
    
    
    var mobileRegex = /^\d{10}$/;
    
    fnameError.innerHTML= "";
    lnameError.innerHTML= "";
    mobileError.innerHTML = "";
    emailError.innerHTML = "";
    msgError.innerHTML = "";
    
    
    if (!mobile.value.match(mobileRegex)) {
    
    mobileError.innerHTML = "Please enter a valid mobile number";
    
    isValid = false;
    }
    
    
    if (!email.value) {
    
    emailError.innerHTML = "Please enter an email address";
    
    isValid = false;
    }
    
    
    if (!msg.value) {
    
    msgError.innerHTML = "Please enter a message";
    
    isValid = false;
    }
   
    if (!fname.value) {
    
        fnameError.innerHTML = "Please enter a first name";
        
        isValid = false;
        }
        if (!lname.value) {
    
            lnameError.innerHTML = "Please enter a last name";
            
            isValid = false;
            }

    return isValid;
    
    }