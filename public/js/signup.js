const signupForm = document.querySelector("#signup_form");
const userName = document.querySelector("#name");
const mail = document.querySelector("#mail");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#re_password");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  // authenticate for mail and name in DB
  //password==reneterpassword
  //create a new user nd add to DB

  try {
    let res = await axios.get(
      `http://localhost:5000/signup/authenticate?name=${userName.value}&mail=${mail.value}&password=${password.value}`
    );

    console.log(res);

    if (res.status == 200) {
      window.location.replace("http://localhost:5000/userHome");
    }
  } catch (error) {
    console.log(error);
  }
});
