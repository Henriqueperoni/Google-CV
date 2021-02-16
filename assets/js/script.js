function startModal() {
    const modal = document.querySelector(".modal-container")

    modal.classList.add("show-modal")
   
    modal.addEventListener("click", (e) => {
        console.log(e.target.className)
         if (e.target == modal) {
            modal.classList.remove("show-modal")
        }
    });

}

const appIcon = document.querySelector(".app-image")
appIcon.addEventListener("click", () => startModal()) 

// Navbar slider
const navSlide = () => {
    const burguer = document.querySelector(".burguer");
    const slider = document.querySelector(".slider");

    burguer.addEventListener("click", () => {
        slider.classList.toggle("nav-active")
    })

    slider.addEventListener("click", () => {
        slider.classList.toggle("nav-active")
    })

}

navSlide()
// Credit - https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_modal_gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}



