const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const regLink = document.querySelector(".register-link");
const btnClick = document.querySelector(".pop");
const eyeicon = document.getElementById("eyeicon")
const password = document.getElementById("password")
const eyeicon2 = document.getElementById("eyeicon2")
const password2 = document.getElementById("password2")


eyeicon.onclick=function()
{
    if(password.type == "password")
    {
    password.type = "text";
    eyeicon.src="images/eye.svg"
    }
    else
    {
        password.type = "password"
        eyeicon.src="images/eye-off.svg"
    }
}

eyeicon2.onclick=function()
{
    if(password2.type == "password")
    {
    password2.type = "text";
    eyeicon2.src="images/eye.svg"
    }
    else
    {
        password2.type = "password"
        eyeicon2.src="images/eye-off.svg"
    }
}


regLink.addEventListener('click',()=>{
 wrapper.classList.add('active')
}); 
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
}); 
btnClick.addEventListener('click',()=>{
wrapper.classList.add('active-popup')
}); 