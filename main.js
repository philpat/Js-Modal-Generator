const modal = document.querySelector(".modal")
const close = document.querySelector(".close")
const buttonElement = document.querySelector(".test-btn")

buttonElement.addEventListener("click", openModal)
close.addEventListener("click", closeModal)
modal.addEventListener("click", closeModal)

//open modal
function openModal(e){
    e.preventDefault()
    modal.style.display = "block"
}

//close modal
function closeModal(){
    modal.style.display = "none"
}

