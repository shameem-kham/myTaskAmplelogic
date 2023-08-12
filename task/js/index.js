const dangerButton = document.getElementById("danger");
const successButton = document.getElementById("success");
const primaryButton = document.getElementById("primary");
const darkButton = document.getElementById("dark");
const divpara = document.getElementById("para");

dangerButton.addEventListener("click", function () {
  divpara.style.backgroundColor = "red";
  // console.log("worked for red");
});
successButton.addEventListener("click", function () {
  divpara.style.backgroundColor = "green";
  // console.log("worked for success");
});
primaryButton.addEventListener("click", function () {
  divpara.style.backgroundColor = "blue";
  // console.log("worked for primary");
});
darkButton.addEventListener("click", function () {
  divpara.style.backgroundColor = "Yellow";
  // console.log("worked worked for dark");
});