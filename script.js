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

    // Form submission con AJAX
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impedisce il refresh della pagina

        const formData = new FormData(form);

        fetch("https://formsubmit.co/ajax/storsrl27@gmail.com", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                messageBox.textContent = "Richiesta inviata con successo!";
                messageBox.style.color = "green";
                messageBox.style.display = "block";
                form.reset(); // Svuota i campi del form
            } else {
                messageBox.textContent = "Errore nell'invio del form. Riprova.";
                messageBox.style.color = "red";
                messageBox.style.display = "block";
            }
        })
        .catch(error => {
            messageBox.textContent = "Errore di connessione.";
            messageBox.style.color = "red";
            messageBox.style.display = "block";
        });
    });
});
