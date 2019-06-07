console.log("hello")


const signUpBtn = document.getElementById("nav-signup")
const formWind = document.getElementById("form")


const displayForm = function(e) {
  console.log("yolo", formWind)
  console.log("yala", this)
  const closeFormBtn = document.getElementById("close-form")
  console.log(closeFormBtn) 
  closeFormBtn.onclick = hideForm
  formWind.classList.add("activeForm")
}

const hideForm = (e) => {

  formWind.classList.remove("activeForm")
}
 
// const navColor = (e) => {
//   console.log(e)
// }

// document.onscroll = navColor

signUpBtn.onclick = displayForm