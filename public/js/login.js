const loginForm = document.querySelector("#login_form");
const mail = document.querySelector("#mail");
const password = document.querySelector("#password");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    let res = await axios.get(
      `http://localhost:5000/login/authenticate?mail=${mail.value}&password=${password.value}`
    );

    console.log(res);

    if (res.status === 200) {
      window.location.replace("http://localhost:5000/userHome");
    }
  } catch (error) {
    console.log(error);
    password.value = "";
    mail.value = "";
    password.style.borderBottom = "1px solid red";
    mail.style.borderBottom = "1px solid red";
  }
});
