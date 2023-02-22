// function Validation(){
//     //Username 
//     var Username=document.getElementById("us").value;
//     if (Username==""){
//         alert("Username Can't be NULL");
//         return false;
//     }
//     else if(Username.length<5 || Username.length>12)   {
//         alert("Length of username must be Grater than 5 and less than 12")
//         return false
//     }
//     return true;
//   }
  
//   function CheckPassword() 
//   { 
//     var Password=document.getElementById("psw").value;
//     if(Password.length<8){
//         alert("Password must be greater than 8");
//         return false;
//     }
   
//     if(Password.match(Pssw)) 
//     { 
//     return true;
//     }
//     else
//     { 
//     alert('Password must contain atleast a number,a capital letter and a small letter')
//     return false;
//     }
//   }
  
//   function Checkphone()
//   {
//     var PhoneNo=document.getElementById("ph").value;
//     if(PhoneNo.length>10 || PhoneNo.length<10 ){
//         alert("Phone No. must contain 10 digits");
//         return false;
//     }
  
//     var pho= / / ;
//     if(PhoneNo.match(pho)) 
//     { 
//     return true;
//     }
//     else
//      { 
//     alert("Phone no. must contain all digits")
//     return false;
//      }
//   }
  
//   // function checkemail()
//   // {
//   //     var EmailID=document.getElementById("em").value;
//   //     if(EmailID.length)
//   // }





var nameFlag = false, emailFlag = false, phoneFlag = false, passFlag = false;

function Validation() 
{
    var name = document.getElementById('us');
    var localCheck1 = false;

    if(name.value.length > 0){
        localCheck1 = true;
    }

    if(localCheck1 == true){
        name.classList.remove('errorInput');
        nameFlag = true;
        

    } else{
        nameFlag = false;
        alert("Username Can't be NULL");
       
    }
}

function Checkemail() 
{
    var email = document.getElementById('em');
    var localCheck1 = false;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        email.classList.remove('errorInput');
        localCheck1 = true;
        emailFlag = true;
        
    } else{
        email.classList.add('errorInput');
        localCheck1 = false;
        emailFlag = false;
        alert("Email should contain special symbol");
    }

}

function Checkphone() 
{
    var phone = document.getElementById('ph');
    var localCheck1= false;

    if(phone.value.length < 10 || phone.value.length > 10){
        phone.classList.add('errorInput');
        phoneFlag = false;
        alert("Phone No. should contain 10 digits");
        localCheck1 = false;
    } else{
        phone.classList.remove('errorInput');
        localCheck1 = true;
        phoneFlag = true;
    }

}


function CheckPassword() 
{
    var password = document.getElementById('psw');
    var localCheck1 = false, localCheck2 = false;

    if(password.value.length < 7){
        localCheck1 = false;
    } else{
        localCheck1 = true;
    }

    for(let i=0;i<password.value.length; i++){
        if(password.value.charCodeAt(i) >= 33 && password.value.charCodeAt(i) <= 64){
            localCheck2 = true;
        }
    }

    if(localCheck1 == false || localCheck2 == false){
        password.classList.add('errorInput');
        passFlag = false;
        alert("Password must be more than 7 characters and must have a special character.");
    } else if(localCheck1 == true && localCheck2 == true){
        password.classList.remove('errorInput');
        passFlag = false;
    }
}



function afterSubmit(e)
{
    e.preventDefault();
    Validation();
    Checkphone();
    Checkemail();
    CheckPassword();
    

    if(nameFlag == true && emailFlag == true && phoneFlag == true && passFlag == true ){
        console.log("Form Submitted");
    } else{
        console.log('Form Not Submitted');
    }
}
