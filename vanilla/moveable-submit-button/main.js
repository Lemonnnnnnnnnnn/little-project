const password = document.querySelector("input[type='password']");
const passwordLabel = document.querySelector("label[for='password']");
const submitBtn = document.querySelector("input[type='submit']");
const warning = document.querySelector("#warning");

password.addEventListener("blur", (e) => {
  const reg = /^\d+$/;
  if (!reg.test(e.target.value)) {
    passwordLabel.style.color = "red";
    submitBtn.addEventListener("mouseenter", joke);
    warning.innerHTML= "不是说只能输数字了嘛！"
  } else {
    passwordLabel.style.color = "#fff";
    submitBtn.removeEventListener("mouseenter", joke);
    warning.innerHTML= ""
  }
});

function joke() {
  if (submitBtn.style.transform === "translateX(100px)") {
    submitBtn.style.transform = "translateX(0)";
  } else {
    submitBtn.style.transform = "translateX(100px)";
  }
}
