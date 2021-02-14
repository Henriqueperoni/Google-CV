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





