const signupForm = document.querySelector("#signup_form");
const userName = document.querySelector("#name");
const mail = document.querySelector("#mail");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#re_password");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (password.value !== rePassword.value) {
    rePassword.style.borderBottom = "1px solid red";
    password.value = "";
    rePassword.value = "";
  } else {
    try {
      let res = await axios.get(
        `http://localhost:5000/signup/authenticate?name=${userName.value}&mail=${mail.value}&password=${password.value}`
      );

      if (res.status === 200) {
        window.location.replace("http://localhost:5000/userHome");
      }
    } catch (error) {
      console.log(error);
      userName.value = "";
      mail.value = "";

      userName.style.borderBottom = "1px solid red";
      mail.style.borderBottom = "1px solid red";
    }
  }
});
