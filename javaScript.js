window.addEventListener("DOMContentLoaded",(event) => {

    let divElem = document.querySelector(".title")

    divElem.addEventListener("click",modifay)

    function modifay(){
        this.classList.toggle("modif")
    }
})