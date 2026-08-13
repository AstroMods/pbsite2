document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const navbar = document.querySelector(".navbar");
    const nav = document.querySelector(".navbar nav");

    if (navbar && nav) {

        let menuButton = document.querySelector(".mobile-menu");

        if (!menuButton) {

            menuButton = document.createElement("button");

            menuButton.className = "mobile-menu";
            menuButton.type = "button";

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

            navbar.appendChild(menuButton);
        }

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("mobile-open");

            const open =
                nav.classList.contains("mobile-open");

            menuButton.innerHTML = open
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });


        /* Close menu when a link is clicked */

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("mobile-open");

                menuButton.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

    }


    /* =========================================
       JOIN OUR TEAM BUTTONS
    ========================================= */

    document
        .querySelectorAll(
            '[data-action="careers"], .join-team'
        )
        .forEach(button => {

            button.addEventListener("click", () => {

                window.location.href =
                    "careers.html";

            });

        });


    /* =========================================
       ABOUT BUTTON
    ========================================= */

    document
        .querySelectorAll(
            '[data-action="about"]'
        )
        .forEach(button => {

            button.addEventListener("click", () => {

                window.location.href =
                    "about.html";

            });

        });


    /* =========================================
       SMOOTH SCROLLING
    ========================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetID =
                    link.getAttribute("href");

                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetID);


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


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    document
        .querySelectorAll(".navbar nav a")
        .forEach(link => {

            const linkPage =
                link
                    .getAttribute("href")
                    ?.split("/")
                    .pop()
                    .split("#")[0]
                    .toLowerCase();


            if (
                linkPage === currentPage ||
                (
                    currentPage === "" &&
                    linkPage === "index.html"
                )
            ) {

                link.classList.add("active");

            }

        });


    /* =========================================
       SCROLL NAVBAR EFFECT
    ========================================= */

    if (navbar) {

        const updateNavbar =
            () => {

                if (window.scrollY > 30) {

                    navbar.classList.add(
                        "navbar-scrolled"
                    );

                } else {

                    navbar.classList.remove(
                        "navbar-scrolled"
                    );

                }

            };


        window.addEventListener(
            "scroll",
            updateNavbar
        );


        updateNavbar();

    }


    /* =========================================
       CURRENT YEAR
    ========================================= */

    document
        .querySelectorAll("[data-year]")
        .forEach(element => {

            element.textContent =
                new Date().getFullYear();

        });


    /* =========================================
       CONTACT FORM
       ========================================= */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                alert(
                    "Thank you for contacting Palm Beach Project RP."
                );

                contactForm.reset();

            }
        );

    }


    /* =========================================
       FADE-IN ANIMATIONS
    ========================================= */

    const animatedElements =
        document.querySelectorAll(
            ".fade-in, .card, .service-card, .division-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        animatedElements.forEach(element => {

            element.classList.add(
                "scroll-hidden"
            );

            observer.observe(element);

        });

    }


    /* =========================================
       HERO CTA
    ========================================= */

    const heroButton =
        document.querySelector(
            ".hero .btn-gold"
        );


    if (heroButton) {

        heroButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "careers.html";

            }
        );

    }

});
