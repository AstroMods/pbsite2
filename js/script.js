document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       Current Year
    ================================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ================================
       Mobile Navigation
    ================================= */

    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu && navLinks) {

        mobileMenu.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

        });

    }


    /* ================================
       Smooth Navigation
    ================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ================================
       Navbar Scroll Effect
    ================================= */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 30) {

                navbar.style.background =
                    "rgba(6,10,17,.92)";

            } else {

                navbar.style.background =
                    "rgba(6,10,17,.75)";

            }

        });

    }


    /* ================================
       Hero Parallax
    ================================= */

    const grid = document.querySelector(".grid");

    if (grid && window.innerWidth > 900) {

        document.addEventListener("mousemove", event => {

            const x =
                event.clientX / window.innerWidth - 0.5;

            const y =
                event.clientY / window.innerHeight - 0.5;

            grid.style.transform =
                `perspective(600px)
                 rotateX(${55 + y * 2}deg)
                 translate(${x * 8}px, ${y * 8}px)`;

        });

    }


    /* ================================
       Reveal Animation
    ================================= */

    const revealElements = document.querySelectorAll(
        ".about-card, .feature-card, .department-card"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    });


    /* ================================
       Visible State
    ================================= */

    document.addEventListener("scroll", () => {

        document
            .querySelectorAll(".visible")
            .forEach(element => {

                element.style.opacity = "1";
                element.style.transform =
                    "translateY(0)";

            });

    });

});
