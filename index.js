let input = document.querySelector('.email-field')
let btn = document.querySelector('.btn')
let error=document.querySelector('.error')
let label=document.querySelector('.hide-error-msg')

 btn.addEventListener('click',function(){
   if(input.value === ''){
      label.classList.toggle('hide-error-msg')
       label.classList.toggle('error-msg')
       error.classList.toggle('error')
       error.classList.toggle('show-error')
 
  }
  else{
     label.classList.add('hide-error-msg')
     error.classList.add('error')
  }
      
})