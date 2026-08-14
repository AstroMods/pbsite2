document.addEventListener("DOMContentLoaded", () => {

    const redirectURL =
        "https://luna.veryinsanee.space/r/pbp";

    const countdown =
        document.getElementById("countdown");

    const seconds =
        document.getElementById("seconds");

    const progressBar =
        document.getElementById("progressBar");

    const year =
        document.getElementById("year");

    const continueButton =
        document.getElementById("continueButton");


    /* ================================
       Current Year
    ================================= */

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* ================================
       Continue Button
    ================================= */

    if (continueButton) {

        continueButton.href =
            redirectURL;

    }


    /* ================================
       Countdown
    ================================= */

    let timeLeft = 5;

    const totalTime = 5;

    const timer = setInterval(() => {

        timeLeft--;

        if (countdown) {
            countdown.textContent = timeLeft;
        }

        if (seconds) {
            seconds.textContent = timeLeft;
        }


        const progress =
            ((totalTime - timeLeft) / totalTime) * 100;

        if (progressBar) {
            progressBar.style.width =
                `${progress}%`;
        }


        if (timeLeft <= 0) {

            clearInterval(timer);

            window.location.href =
                redirectURL;

        }

    }, 1000);


    /* ================================
       Mouse Background Effect
    ================================= */

    const grid =
        document.querySelector(".grid");

    if (
        grid &&
        window.innerWidth > 700
    ) {

        document.addEventListener(
            "mousemove",
            event => {

                const x =
                    event.clientX /
                    window.innerWidth -
                    0.5;

                const y =
                    event.clientY /
                    window.innerHeight -
                    0.5;

                grid.style.transform =
                    `
                    perspective(600px)
                    rotateX(${55 + y * 2}deg)
                    translate(${x * 8}px, ${y * 8}px)
                    `;

            }
        );

    }

});
