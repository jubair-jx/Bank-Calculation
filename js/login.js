// login Part With JS
//  step1 : add click event handler in button

let button = document.getElementById("btn-submit");
let mail = document.getElementById("user-mail");
let password = document.getElementById("user-pass");

// step 2 : add event lisntener
button.addEventListener("click", () => {
  // always remember to use .value when we pic a value from another way
  let getMail = mail.value;
  //get the password with .value
  let getPass = password.value;

  //Password & mail condition here
  //This is the Bad case. we won't this use. just sample period
  if (getMail === "jubair@.com" && getPass === "123") {
    window.location.href = "bank.html";
  } else {
    alert("Oops! Wrong : Please Enter a Valid Information");
  }
});
