document.addEventListener("DOMContentLoaded", () => {
    // Carosello immagini
    let index = 0;
    const images = document.querySelectorAll(".carousel-images img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function showImage(i) {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }

    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
    setInterval(nextImage, 6000);

    // Form submission
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impedisce il refresh della pagina

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        }).then(response => {
            if (response.ok) {
                messageBox.textContent = "Richiesta inviata con successo!";
                messageBox.style.display = "block";
                form.reset(); // Svuota i campi del form
            } else {
                alert("Errore nell'invio del form, riprova.");
            }
        }).catch(error => console.error("Errore:", error));
    });
});
