const DISCORD_WEBHOOK =
    "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE";


document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("applicationForm");

    const success =
        document.getElementById("applicationSuccess");

    if (!form) return;


    form.addEventListener("submit", async (event) => {

        event.preventDefault();


        const submitButton =
            form.querySelector(".submit-button");


        submitButton.disabled = true;

        submitButton.textContent =
            "SUBMITTING...";


        const data =
            new FormData(form);


        const firstName =
            data.get("firstName");

        const lastName =
            data.get("lastName");

        const discord =
            data.get("discord");

        const age =
            data.get("age");

        const position =
            data.get("position");

        const experience =
            data.get("experience");

        const reason =
            data.get("reason");

        const qualities =
            data.get("qualities");

        const previous =
            data.get("previous");


        const applicationID =
            "PBSO-" +
            Math.random()
                .toString(36)
                .substring(2, 10)
                .toUpperCase();


        const embed = {

            title:
                "🚔 New PBSO Department Application",

            description:
                "A new application has been submitted through the Palm Beach Project recruitment portal.",

            color:
                0xC9A227,

            fields: [

                {
                    name: "👤 Applicant",
                    value:
                        `**Name:** ${firstName} ${lastName}\n` +
                        `**Age:** ${age}\n` +
                        `**Discord:** ${discord}`,
                    inline: false
                },

                {
                    name: "🎖️ Position",
                    value:
                        position,
                    inline: true
                },

                {
                    name: "📋 RP Experience",
                    value:
                        experience,
                    inline: true
                },

                {
                    name:
                        "❓ Why do you want to join?",

                    value:
                        reason.substring(0, 1024),

                    inline: false
                },

                {
                    name:
                        "⭐ What makes you a good candidate?",

                    value:
                        qualities.substring(0, 1024),

                    inline: false
                },

                {
                    name:
                        "🚔 Previous Department Experience",

                    value:
                        previous
                            ? previous.substring(0, 1024)
                            : "None provided.",

                    inline: false
                },

                {
                    name:
                        "🆔 Application ID",

                    value:
                        `\`${applicationID}\``,

                    inline: true
                },

                {
                    name:
                        "📌 Status",

                    value:
                        "🟡 **Pending Review**",

                    inline: true
                }

            ],

            footer: {

                text:
                    "Palm Beach Project RP • PBSO Recruitment"

            },

            timestamp:
                new Date().toISOString()

        };


        const payload = {

            username:
                "PBSO Recruitment",

            avatar_url:
                "./assets/pbso.png",

            embeds: [
                embed
            ]

        };


        try {

            const response =
                await fetch(
                    DISCORD_WEBHOOK,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify(payload)
                    }
                );


            if (!response.ok) {

                throw new Error(
                    `Discord returned ${response.status}`
                );

            }


            form.hidden = true;

            success.hidden = false;


            const idElement =
                document.createElement("p");

            idElement.innerHTML =
                `Application ID:
                <strong>${applicationID}</strong>`;


            success.insertBefore(
                idElement,
                success.querySelector(".btn")
            );


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        } catch (error) {

            console.error(
                "Application Error:",
                error
            );


            alert(
                "Your application could not be submitted. " +
                "Please try again."
            );


            submitButton.disabled = false;

            submitButton.textContent =
                "SUBMIT APPLICATION";

        }

    });

});
