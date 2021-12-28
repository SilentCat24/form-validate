let id= (id) =>document.getElementById(id);
let classes=(classes) =>document.getElementsByClassName(classes)


let userName=id('username'),
email=id('email'),
form=id('form'),
 password=id('password'),
 
errorMsg = classes('error'),
successIcon=classes('success-icon'),
failureIcon=classes('failure-icon');

// errorMsg[1].innerHTML='sadasdwc';
// form.addEventListener('submit',(e)=>{
//   e.preventDefault();

//   if(userName.value === ''){
//     errorMsg[0].innerHTML='user name cannot be empty';
//     failureIcon[0].style.opacity='1';
//     successIcon[0].style.opacity='0';
  
//   }else{
// errorMsg[0].innerHTML='';
// successIcon[0].style.opacity='1';
// failureIcon[0].style.opacity='0';



//   }

// });





form.addEventListener('submit',(e)=>{
  e.preventDefault();
// errorMsg[0].innerHTML='user name cant be empty';

// if(userName.value === ''){
// errorMsg[0].innerHTML='username cant be empty';
// failureIcon[0].style.opacity='1'
// successIcon[0].style.opacity='0';


// }else{
// errorMsg[0].innerHTML='';
// failureIcon[0].style.opacity='0'
// successIcon[0].style.opacity='1';


// }

engine(userName,0,'Username cannot be empty');
engine(email,1,'Email cant be empty');
engine(password,2,'Password is required');

})


let engine=(id,serial,message)=>{
  if(id.value .trim() === ''){
    errorMsg[serial].innerHTML=message;
    failureIcon[serial].style.opacity='1'
    successIcon[serial].style.opacity='0';
    
    
    }else{
    errorMsg[serial].innerHTML='';
    failureIcon[serial].style.opacity='0'
    successIcon[serial].style.opacity='1';
    
    
    }
    

}


