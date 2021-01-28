function login(){
    var email = document.getElementById('email_login').value;
    var password = document.getElementById('pass_login').value;
    
    if(email == ''){
        alert("Please fill your email!");
    }else if(password == ''){
        alert("Please input your password!");
    }else{
        alert("Login Success!");
        location.reload();
    }
}

function register(){
    var name = document.getElementById('name_reg').value;
    var email = document.getElementById('email_reg').value;
    var email_pattern = /.+@\w+\.\w+/gm;
    var gender = '';
    var valid = true;
    if(document.getElementById('male').checked==true){
        gender = 'male';
    }else if(document.getElementById('female').checked==true){
        gender = 'female';
    }
    var address = document.getElementById('address').value;
    var address_pattern = /Street/gm;
    
    if(name == ''){
        document.getElementById('name_error').innerHTML = "Name must be filled!";
        valid = false;
    }else{
        document.getElementById('name_error').innerHTML = "";
    }
    
    if(email == ''){
        document.getElementById('email_error').innerHTML = "Email must be filled!";
        valid = false;
    }else if(!email_pattern.test(email)){
        document.getElementById('email_error').innerHTML = "Please enter a valid email address";
        valid = false;
    }else{
        document.getElementById('email_error').innerHTML = "";
    }

    if(gender == ''){
        document.getElementById('gender_error').innerHTML = "Please select your gender!";
        valid = false;
    }else{
        document.getElementById('gender_error').innerHTML = "";
    }

    if(address == ''){
        document.getElementById('address_error').innerHTML = "Please fill your address!";
        valid = false;
    }else if(!address_pattern.test(address)){
        document.getElementById('address_error').innerHTML = "Please provide a valid address!";
        valid = false;
    }else{
        document.getElementById('address_error').innerHTML = "";

    }

    if(valid){
        alert("Register Success!");
        location.reload();
    }
}