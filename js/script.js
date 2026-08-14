document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // Current Year
    // ================================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ================================
    // Page Load Animation
    // ================================

    document.body.classList.add("loaded");


    // ================================
    // Mouse Parallax Effect
    // ================================

    const grid = document.querySelector(".grid");
    const glowOne = document.querySelector(".glow-one");
    const glowTwo = document.querySelector(".glow-two");

    if (window.innerWidth > 700) {

        document.addEventListener("mousemove", (event) => {

            const x = (event.clientX / window.innerWidth - 0.5);
            const y = (event.clientY / window.innerHeight - 0.5);

            if (grid) {
                grid.style.transform =
                    `perspective(500px)
                     rotateX(${55 + y * 3}deg)
                     rotateZ(${x * 1.5}deg)`;
            }

            if (glowOne) {
                glowOne.style.transform =
                    `translate(${x * 30}px, ${y * 30}px)`;
            }

            if (glowTwo) {
                glowTwo.style.transform =
                    `translate(${x * -25}px, ${y * -25}px)`;
            }

        });

    }


    // ================================
    // Go Back Button
    // ================================

    const backButton = document.querySelector(".secondary");

    if (backButton) {

        backButton.addEventListener("click", () => {

            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "/";
            }

        });

    }


    // ================================
    // Home Button
    // ================================

    const homeButton = document.querySelector(".primary");

    if (homeButton) {

        homeButton.addEventListener("click", (event) => {

            event.preventDefault();

            homeButton.style.transform = "scale(0.97)";

            setTimeout(() => {
                window.location.href = "/";
            }, 120);

        });

    }


    // ================================
    // Keyboard Shortcuts
    // ================================

    document.addEventListener("keydown", (event) => {

        // Press H to return home
        if (
            event.key.toLowerCase() === "h" &&
            !event.ctrlKey &&
            !event.altKey &&
            !event.metaKey
        ) {
            window.location.href = "/";
        }

        // Press Escape to go back
        if (event.key === "Escape") {

            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "/";
            }

        }

    });

});
