const toggles = document.querySelectorAll(".faq-toggle")


toggless.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")
    })
})