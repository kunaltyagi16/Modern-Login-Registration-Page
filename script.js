const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const regLink = document.querySelector(".register-link");
const btnClick = document.querySelector(".pop");

regLink.addEventListener('click',()=>{
 wrapper.classList.add('active')
}); 
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
}); 
btnClick.addEventListener('click',()=>{
wrapper.classList.add('active-popup')
}); 