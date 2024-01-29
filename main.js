"use script"

var input_name = document.querySelector(".name");
var input_email = document.querySelector(".email");
var input_mobile_no = document.querySelector(".mobileno");
var input_username = document.querySelector(".username");
var input_password = document.querySelector(".password");
var input_display_none=document.querySelector(".tooltip")
var input_con_pass = document.querySelector(".con_name");
var input_btn = document.querySelector(".btn");
var input_log = document.querySelector(".log_in");

input_password.addEventListener("focusin",display_block);
function display_block(){
    input_display_none.style.display = "block";
    
}
input_password.addEventListener("focusout",display_none);
function display_none(){
    input_display_none.style.display = "none";
    
}


input_btn.addEventListener("click",check_Fun)

   function check_Fun(){
    // console.log("hello");
    var name=input_name.value;
    var mobile=input_mobile_no.value
    var email = input_email.value;   
    // var confirmPassword =input_con_pass.value;

var name_Regex = /^[A-Za-z ]{3,20}$/;
var email_Regex = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
var mobile_Regex = /^[789][0-9]{9}$/;
   
    if (!name_Regex.test(name)) {
        alert("Invalid Name.");
        return;
      }
      if (!email_Regex.test(email)) {
        alert("Invalid email address.");
        return;
      }
    if (!mobile_Regex.test(mobile)) {
        alert("Invalid Mobile number.");
        return;
      }
 

alert("form submitted")

  }











<i class="fa-solid fa-check"></i>
