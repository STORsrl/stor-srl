document.addEventListener("DOMContentLoaded", () => {
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
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita il reindirizzamento

    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("form-message");

    // Controllo che almeno uno dei due campi sia compilato
    if (phone === "" && email === "") {
        message.style.display = "block";
        message.style.color = "red";
        message.textContent = "Devi inserire almeno un contatto (email o telefono).";
        return;
    }

    let formData = new FormData(this);
    fetch(this.action, {
        method: "POST",
        body: formData
    }).then(response => {
        if (response.ok) {
            message.style.display = "block";
            message.style.color = "green";
            message.textContent = "Messaggio inviato correttamente!";
            this.reset(); // Pulisce il form
        } else {
            message.style.display = "block";
            message.style.color = "red";
            message.textContent = "Errore nell'invio del messaggio. Riprova.";
        }
    }).catch(() => {
        message.style.display = "block";
        message.style.color = "red";
        message.textContent = "Errore di connessione. Controlla la tua rete.";
    });
});


