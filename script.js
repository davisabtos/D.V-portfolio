document.addEventListener("DOMContentLoaded", () => {
    const dot = document.querySelectorAll(".dot");
    const sections = document.querySelectorAll("section");

    // clicking on the dot, scroll to the corresponding section
    dot.forEach(dot => {
        dot.addEventListener("click", () => {
            const targetId = dot.getAttribute("data-target");
            // Add # before the id so that scrollIntoView works correctly
            document.getElementById(`${targetId}`).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Highlight the dot as the user scrolls
    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Check if the current section is the one visible on the screen
            if (pageYOffset >= sectionTop - sectionHeight / 3 &&
                pageYOffset < sectionTop + sectionHeight - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        dot.forEach(dot => {
            dot.classList.remove("active");
            if (dot.getAttribute("data-target") === currentSection) {
                dot.classList.add("active");
            }
        });
    });
});


// form

document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("WjXFudmLYPAeIo19q"); // Public Key EmailJS

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // Display loading message
        alert("Sending...");

        emailjs.sendForm("service_ra159lh", "template_do5de39", this)
            .then(function(response) {
                alert(" E-mail sent successfully!");
                console.log("SUCCESS:", response);
            }, function(error) {
                alert(" Error sending: " + JSON.stringify(error));
                console.error("ERROR:", error);
            });
    });
});

